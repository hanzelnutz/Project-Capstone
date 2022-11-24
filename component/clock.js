import React from "react";

export default function Clock() {
  const date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
  console.log(date.getHours());
  return (
    <>
      <h1>Jam </h1>
    </>
  );
}