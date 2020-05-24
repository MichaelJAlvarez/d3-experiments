// Import stylesheet
import * as d3 from "d3";
document.getElementById('app').innerText = 'Works';

loadData().then((dataset) => {
  console.table(dataset[0]);
});

async function loadData() {
  return d3.json("./weather.json");
}


