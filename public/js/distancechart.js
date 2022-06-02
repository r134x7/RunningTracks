/*
only have time and distance

can make charts for....

users vs total distance

users vs m/s

users vs ...
*/

// const { options } = require("../../controllers"); this was not supposed to appear but appeared because of typing in options for the chart settings

// const Chart = require("chart.js");
// ../../node_modules/chart.js/types/index.esm
const postId = [];
const userName = [];
const distance = [];
const colour = [];

for (let index = 1; index < 1000; index++) {

  const getPostId = document.querySelector(`.box${index}`);

  if (getPostId !== null) {
    postId.push(document.querySelector(`.box${index}`).getAttribute("data-id"));

    const getUserName = userName.push(document.querySelector(`.user${index}`).getAttribute("data-id"));

    const getdistance = distance.push(document.querySelector(`.content${index}`).getAttribute("data-id"));

    // const getColour = Math.floor(Math.random()
    const getColour1 = Math.floor(Math.random() * 256);
    const getColour2 = Math.floor(Math.random() * 256);
    const getColour3 = Math.floor(Math.random() * 256);

    colour.push(`rgba(${getColour1}, ${getColour2}, ${getColour3}, 0.8)`)

  }

}


// const postId2 = box.push(document.querySelector(".box").getAttribute("{{post.runName}}"));

// console.log(box);


let distanceChart = document.querySelector("#distanceChart").getContext("2d");

let barChart = new Chart(distanceChart, {
  type:"bar",
  data: {
    labels: userName, // x-axis labels
    datasets: [{
      axis: 'y',
      label: 'Distance chart in km for x date',
      data: distance, // y-axis labels
      backgroundColor: colour,
    borderWidth: 1,
    borderColor: 'black',
    }],
  },
  options: {
    indexAxis: 'y',
  }
})

// let barChart2 = new Chart(distanceChart, {
//   type:"bar",
//   data: {
//     labels: userName, // x-axis labels
//     datasets: [{
//       label: 'Distance chart in km for x date',
//       data: distance, // y-axis labels
//       backgroundColor: colour,
//     borderWidth: 1,
//     borderColor: 'black',
//     }],
//   },
// })

