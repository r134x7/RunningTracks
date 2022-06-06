const postId = [];
const distance = [];
const time = [];
const colour = [];
const xyCoordinates = [];

var totalDistance = 0;
var totalTime = 0;

for (let index = 1; index < 1000; index++) {
  // break isn't used due to deleted posts
  const getPostId = document.querySelector(`.box${index}`); // gets post id

  if (getPostId !== null) {
    postId.push(document.querySelector(`.box${index}`).getAttribute("data-id")); // pushes post id

    const getDistance = distance.push(
      document.querySelector(`#distance${index}`).getAttribute("data-id")
    ); // pushes distance

    const getTime = time.push(
      document.querySelector(`#time${index}`).getAttribute("data-id")
    ); // pushes time

    const getColour1 = Math.floor(Math.random() * 256);
    const getColour2 = Math.floor(Math.random() * 256);
    const getColour3 = Math.floor(Math.random() * 256);

    colour.push(`rgba(${getColour1}, ${getColour2}, ${getColour3}, 0.8)`); // graph data is associated with a colour

    // related post is associated with the same colour
    document.querySelector(
      `.box${index}`
    ).style.backgroundColor = `rgba(${getColour1}, ${getColour2}, ${getColour3}, 0.8)`;
  }
}

if (distance.length !== 0) {
  distance.forEach((element) => {
    // to accumulate all distances given
    totalDistance = totalDistance + Number(element);
  });

  document.querySelector(
    "#totaldistance"
  ).textContent = `Total distance: ${totalDistance.toFixed(2)} km`; // puts total distance to page
}

if (time.length !== 0) {
  time.forEach((element) => {
    // to accumulate all times given
    totalTime = totalTime + Number(element);
  });

  totalTimeInMinSec = (millis) => {
    // function to convert time from milliseconds to minutes:seconds
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  document.querySelector(
    "#totaltime"
  ).textContent = `Total time: ${totalTimeInMinSec(totalTime)} seconds`; // puts the total time to the page
}

if (postId.length !== 0) {
  // to retrieve the most recent post
  [last] = postId.slice(-1); // source: https://stackoverflow.com/questions/60409137/how-to-find-last-element-of-an-array-without-modifying-source-array-in-vanilla-j

  const lastRun = document.querySelector(`.box${last}`).getAttribute("date-id"); // to get it's id

  document.querySelector(
    "#lastrun"
  ).textContent = `Last run posted on: ${lastRun}`; // to let the user know when their last run was
}

for (let index = 0; index < postId.length; index++) {
  // data for the distance chart
  const test = {
    y: distance[index],
    x: time[index] / 1000, // to convert from milliseconds to seconds
  };

  xyCoordinates.push(test);
}

let distanceChart = document.querySelector("#personalChart").getContext("2d"); // selecting the html canvas and to render in 2D

let lineChart = new Chart(distanceChart, {
  // creating a scatterplot chart
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Your posted runs so far",
        data: xyCoordinates, // using array
        backgroundColor: colour, // using array
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
  // creating a level system
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

var exp = 0; // default setting
var userLevel = `${level[0]}`;

for (let index = 0; index < level.length; index++) {
  // to calculate the users level
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

document.querySelector("#currentlevel").textContent = `You are at ${userLevel}`; // puts user level to page

if (postId.length !== 0) {
  // retrieves the distance from the most recent post
  [lastDistance] = distance.slice(-1); // source: https://stackoverflow.com/questions/60409137/how-to-find-last-element-of-an-array-without-modifying-source-array-in-vanilla-j
}

let donutChart = document.querySelector("#expDonut").getContext("2d"); // selects the other canvas

let expChart = new Chart(donutChart, {
  // creates a donut chart
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
