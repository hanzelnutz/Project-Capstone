import React, { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";


const token = "0TKPwshB-nmiCjab0Rd3GfnrrjGxxlMSfZQR7hw-DTiLQxNVLYFNMybeqZ3eyYvi2--8QUGNRK5tlZnyxItNrQ==";
const org =  "faishalhanif10@gmail.com";
const url = "https://us-east-1-1.aws.cloud2.influxdata.com";

let query = `from(bucket: "random")
  |> range(start: -1h)
  |> filter(fn: (r) => r["_measurement"] == "airSensors")
  |> filter(fn: (r) => r["_field"] == "humidity" or r["_field"] == "temperature" or r["_field"] == "co" )
  |> filter(fn: (r) => r["sensor_id"] == "TLM0102")
  |> aggregateWindow(every: 1m, fn: mean, createEmpty: false)
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
  |> yield(name: "mean")`
;
const queryApi = new InfluxDB({ url, token }).getQueryApi(org);


export default function Querydb () {
  const [data, setData] = useState();
  const [refreshToken, setRefreshToken] = useState(Math.random())

useEffect(() => {
  let res = [];
  const influxQuery = async () => {
    //make query
    await queryApi.queryRows(query, {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row);
        //push rows from query into an array object
        res.push(o);
      },
      complete() {
        let finalData = []
        let humidity = []
        let temperature = []
        let co = []
        let time = []

        for (let i = 0; i < res.length; i++) {
          humidity.push(res[i]["humidity"].toFixed(2));
          temperature.push(res[i]["temperature"].toFixed(2));
          co.push(res[i]["co"].toFixed(3));
          let date=new Date(res[i]["_time"]).toLocaleTimeString('en-IT',{ hour: '2-digit', minute:'2-digit',hour12: false })
          time.push(date);
        }
        time.shift()
        humidity.shift()
        temperature.shift()
        co.shift()
        finalData.push(time);
        finalData.push(humidity);
        finalData.push(temperature);
        finalData.push(co);
        setData(finalData);
      },
      error(error) {
        console.log("query failed- ", error);
      }
    });
  };

  influxQuery().finally(() => {
    setTimeout(() => setRefreshToken(Math.random()), 15000);
  });
}, [refreshToken]);
return(data)
}
