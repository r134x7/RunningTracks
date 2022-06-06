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
  ).textContent = `Total distance: ${totalDistance.toFixed(2)} km`;
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
  ).textContent = `Total time: ${totalTimeInMinSec(totalTime)} seconds`;
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
    // x: time[index],
    x: time[index] / 1000,
  };

  xyCoordinates.push(test);
}

let distanceChart = document.querySelector("#personalChart").getContext("2d");

let lineChart = new Chart(distanceChart, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Your posted runs so far",
        data: xyCoordinates,
        backgroundColor: colour,
        borderWidth: 1,
        borderColor: "black",
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: "Distance in km",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time in seconds",
        },
      },
    },
  },
});

const expBar = [];
const level = [];

for (let index = 1; index < 100; index++) {
  if (index < 10) {
    expBar.push(1 * index);
  } else if (index < 25) {
    expBar.push(2 * index);
  } else if (index < 50) {
    expBar.push(5 * index);
  } else if (index < 75) {
    expBar.push(10 * index);
  } else if (index < 100) {
    expBar.push(20 * index);
  }

  level.push(`Level ${index}`);
}

var exp = 0;
var userLevel = `${level[0]}`;

for (let index = 0; index < level.length; index++) {
  exp = exp + expBar[index];

  if (totalDistance >= exp) {
    userLevel = `${level[index]}`;
  } else {
    break;
  }
}

// Level 99 is equal to 64180km
// Earth's radius is 6378km
// Earth's circumference is 40,075km

document.querySelector("#currentlevel").textContent = `You are at ${userLevel}`;

if (postId.length !== 0) {
  [lastDistance] = distance.slice(-1); // source: https://stackoverflow.com/questions/60409137/how-to-find-last-element-of-an-array-without-modifying-source-array-in-vanilla-j
}

let donutChart = document.querySelector("#expDonut").getContext("2d");

let expChart = new Chart(donutChart, {
  type: "doughnut",
  data: {
    labels: [
      `EXP cumulative before last run: ${(totalDistance - lastDistance).toFixed(
        2
      )}km`,
      `EXP gained last run: ${lastDistance}km`,
      `EXP remaining: ${(exp - totalDistance).toFixed(2)}km`,
    ],
    datasets: [
      {
        label: "Exp Donut",
        data: [totalDistance - lastDistance, lastDistance, exp - totalDistance],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 1,
        borderColor: "black",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
