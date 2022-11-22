import React, { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";
import { getCOISPU } from "./ispu"

const token = "kt8hKxCvMq1C4xQ_IP4bT5lDzu6fYw1XyuQXyUYwOXRH643AB0JM6UrastDZqJQo0EUfz9zUYKgiAHbGhGD-xw==";
const org =  "myOrg";
const url = "https://ap-southeast-2-1.aws.cloud2.influxdata.com/";


// let query = `from(bucket: "random")
//   |> range(start: -1h)
//   |> filter(fn: (r) => r["_measurement"] == "airSensors")
//   |> filter(fn: (r) => r["_field"] == "humidity" or r["_field"] == "temperature" or r["_field"] == "co" )
//   |> filter(fn: (r) => r["sensor_id"] == "TLM0102")
//   |> aggregateWindow(every: 1m, fn: mean, createEmpty: false)
//   |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
//   |> yield(name: "mean")`
// ;

let query = `from(bucket: "19")
  |> range(start: -1h)
  |> filter(fn: (r) => r["_field"] == "CHGas" or r["_field"] == "Humidity" or r["_field"] == "COGas" or r["_field"] == "NO2Gas" or r["_field"] == "O3Gas" or r["_field"] == "PM10" or r["_field"] == "PM25" or r["_field"] == "Temperature")
  |> aggregateWindow(every: 3s, fn: mean, createEmpty: false)
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
  |> yield(name: "mean")`
;


let queryma = `from(bucket: "19")
  |> range(start: -1h)
  |> filter(fn: (r) => r["_field"] == "CHGas" or r["_field"] == "Humidity" or r["_field"] == "COGas" or r["_field"] == "NO2Gas" or r["_field"] == "O3Gas" or r["_field"] == "PM10" or r["_field"] == "PM25" or r["_field"] == "Temperature")
  |> timedMovingAverage(every: 1m, period: 1m)
  |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
  |> yield(name: "mean")`
;
const queryApi = new InfluxDB({ url, token }).getQueryApi(org);


export function Querydb () {
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
        let Humidity = []
        let Temperature = []
        let COGas = []
        let CHGas = []
        let NO2Gas = []
        let PM25 = []
        let PM10 = []
        let O3Gas = []
        let time = []



        for (let i = 0; i < res.length; i++) {
          Humidity.push(res[i]["Humidity"]);
          Temperature.push(res[i]["Temperature"]);
          COGas.push(res[i]["COGas"].toFixed(2));
          CHGas.push(res[i]["CHGas"].toFixed(2));
          NO2Gas.push(res[i]["NO2Gas"].toFixed(2));
          PM25.push(res[i]["PM25"]);
          PM10.push(res[i]["PM10"]);
          O3Gas.push(res[i]["O3Gas"]);
          let date=new Date(res[i]["_time"]).toLocaleTimeString('en-IT',{ hour: '2-digit', minute:'2-digit',hour12: false })
          time.push(date);
        }
        // const fpm25 = PM25.filter(item => item);
        // const fpm10 = PM10.filter(item => item);
        time.shift()
        Humidity.shift()
        Temperature.shift()
        COGas.shift()
        CHGas.shift()
        NO2Gas.shift()
        PM25.shift()
        PM10.shift()
        O3Gas.shift()

        finalData.push(time);
        finalData.push(Humidity);
        finalData.push(Temperature);
        finalData.push(COGas);
        finalData.push(CHGas);
        finalData.push(NO2Gas);
        finalData.push(PM25);
        finalData.push(PM10);
        finalData.push(O3Gas);
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


export function QuerydbMA () {
  const [data, setData] = useState();
  const [refreshToken, setRefreshToken] = useState(Math.random())

useEffect(() => {
  let res = [];
  const influxQuery = async () => {
    //make query
    await queryApi.queryRows(queryma, {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row);
        //push rows from query into an array object
        res.push(o);
      },
      complete() {
        let finalData = []
        let COGas = []
        let CHGas = []
        let NO2Gas = []
        let PM25 = []
        let PM10 = []
        let O3Gas = []

        for (let i = 0; i < res.length; i++) {
          COGas.push(parseFloat(res[i]["COGas"].toFixed(2)));
          CHGas.push(parseFloat(res[i]["CHGas"].toFixed(2)));
          NO2Gas.push(parseFloat(res[i]["NO2Gas"].toFixed(2)));
          PM25.push(parseFloat(res[i]["PM25"]));
          PM10.push(parseFloat(res[i]["PM10"]));
          O3Gas.push(res[i]["O3Gas"]);
        }


        // const fpm25 = PM25.filter(item => item);
        // const fpm10 = PM10.filter(item => item);
        const avgCO = COGas.slice(-10).reduce((a, b) => a + b, 0) / 10;
        const avgCH = CHGas.slice(-10).reduce((a, b) => a + b, 0) / 10;
        const avgNO2 = NO2Gas.slice(-10).reduce((a, b) => a + b, 0) / 10;
        const avgPM25 = PM25.slice(-10).reduce((a, b) => a + b,0) / 10;
        const avgPM10 = PM10.slice(-10).reduce((a, b) => a + b, 0) / 10;
        const avgO3 = O3Gas.slice(-10).reduce((a, b) => a + b, 0) / 10;
        
        console.log("assdfu: ",CHGas)

        finalData.push(avgCO);
        finalData.push(avgCH);
        finalData.push(avgNO2);
        finalData.push(avgPM25);
        finalData.push(avgPM10);
        finalData.push(avgO3);

        setData(finalData);
     
        // console.log("db ispu: ", finalData)

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




