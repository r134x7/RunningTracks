const postId = [];
const distance = [];
const time = [];
const colour = [];
const xyCoordinates = [];

var totalDistance = 0;
var totalTime = 0;

for (let index = 1; index < 1000; index++) {
  const getPostId = document.querySelector(`.box${index}`);

  if (getPostId !== null) {
    postId.push(document.querySelector(`.box${index}`).getAttribute("data-id"));

    const getDistance = distance.push(
      document.querySelector(`#distance${index}`).getAttribute("data-id")
    );

    const getTime = time.push(
      document.querySelector(`#time${index}`).getAttribute("data-id")
    );

    const getColour1 = Math.floor(Math.random() * 256);
    const getColour2 = Math.floor(Math.random() * 256);
    const getColour3 = Math.floor(Math.random() * 256);

    colour.push(`rgba(${getColour1}, ${getColour2}, ${getColour3}, 0.8)`);
  }
}

if (distance.length !== 0) {
  distance.forEach((element) => {
    totalDistance = totalDistance + Number(element);
  });

  document.querySelector(
    "#totaldistance"
  ).textContent = `Total distance: ${totalDistance} km`;
}

if (time.length !== 0) {
  time.forEach((element) => {
    totalTime = totalTime + Number(element);
  });

  totalTimeInMinSec = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  document.querySelector(
    "#totaltime"
  ).textContent = `Total time: ${totalTimeInMinSec(totalTime)} minutes`;
}

if (postId.length !== 0) {
  [last] = postId.slice(-1); // source: https://stackoverflow.com/questions/60409137/how-to-find-last-element-of-an-array-without-modifying-source-array-in-vanilla-j

  const lastRun = document.querySelector(`.box${last}`).getAttribute("date-id");

  document.querySelector(
    "#lastrun"
  ).textContent = `Last run posted on: ${lastRun}`;
}

for (let index = 0; index < postId.length; index++) {
  const test = {
    y: distance[index],
    x: time[index],
  };

  xyCoordinates.push(test);
}

let distanceChart = document.querySelector("#personalChart").getContext("2d");

let lineChart = new Chart(distanceChart, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Distance chart in km for x date",
        data: xyCoordinates,
        backgroundColor: colour,
        borderWidth: 1,
        borderColor: "black",
      },
    ],
  },
});
