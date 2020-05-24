import * as d3 from "d3";

export async function load() {
  console.log('d');
  const x =  await d3.json("./weather.json")

  return x;
}

async function drawLineChart() { // write your code here
}
drawLineChart();
