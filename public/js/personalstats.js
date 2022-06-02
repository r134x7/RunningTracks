const postId = [];
const distance = [];
const time = [];
const colour = [];

for (let index = 1; index < 1000; index++) {

  const getPostId = document.querySelector(`.box${index}`);

  if (getPostId !== null) {
    postId.push(document.querySelector(`.box${index}`).getAttribute("data-id"));

    const getDistance = distance.push(document.querySelector(`#distance${index}`).getAttribute("data-id"));

    const getTime = time.push(document.querySelector(`#time${index}`).getAttribute("data-id"));

    const getColour1 = Math.floor(Math.random() * 256);
    const getColour2 = Math.floor(Math.random() * 256);
    const getColour3 = Math.floor(Math.random() * 256);

    colour.push(`rgba(${getColour1}, ${getColour2}, ${getColour3}, 0.8)`)

  }

}

const xy = []

for (let index = 0; index < postId.length; index++) {

  const test = { 
    y: distance[index],
    x: time[index],
  }

  xy.push(test)
  
}

let distanceChart = document.querySelector("#personalChart").getContext("2d");

let lineChart = new Chart(distanceChart, {
  type:"scatter",
  data: {
    // labels: userName, // x-axis labels
    datasets: [{
      label: 'Distance chart in km for x date',
      data: xy, // y-axis labels
      backgroundColor: colour,
    borderWidth: 1,
    borderColor: 'black',
    }],
  },
})

