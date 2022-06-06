const postId = [];
const userName = [];
const distance = [];
const colour = [];
const xyCoordinates = [];

for (let index = 1; index < 1000; index++) {
  // gets postId and pushes the container's data to the arrays used
  const getPostId = document.querySelector(`.box${index}`);

  if (getPostId !== null) {
    postId.push(document.querySelector(`.box${index}`).getAttribute("data-id"));

    const getUserName = userName.push(
      document.querySelector(`.user${index}`).getAttribute("data-id")
    );

    const getdistance = distance.push(
      document.querySelector(`.content${index}`).getAttribute("data-id")
    );
    // generating random rgba colours
    const getColour1 = Math.floor(Math.random() * 256);
    const getColour2 = Math.floor(Math.random() * 256);
    const getColour3 = Math.floor(Math.random() * 256);

    colour.push(`rgba(${getColour1}, ${getColour2}, ${getColour3}, 0.8)`);
    
    document.querySelector(`.box${index}`).style.backgroundColor = `rgba(${getColour1}, ${getColour2}, ${getColour3}, 0.8)`;
  }
}

for (let index = 0; index < distance.length; index++) {
  // taking the xy co-ordinates and making objects to push into an array
  const test = {
    y: userName[index],
    x: distance[index],
  };

  xyCoordinates.push(test);
}

xyCoordinates.sort((a, b) => b.x - a.x); // sorting the objects in the array in descending order. Source: https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values

let distanceChart = document.querySelector("#distanceChart").getContext("2d"); // selecting the html canvas and to render in 2D
let barChart = new Chart(distanceChart, {
  // creating a stacked bar chart
  type: "bar",
  data: {
    datasets: [
      {
        axis: "y",
        label: "Distance in km by posted run",
        data: xyCoordinates,
        backgroundColor: colour,
        borderWidth: 1,
        borderColor: "black",
      },
    ],
  },
  options: {
    indexAxis: "y", // to create horizontal bar graph
    scales: {
      // axis labels
      y: {
        title: {
          display: true,
          text: "User names of posted runs",
        },
      },
      x: {
        title: {
          display: true,
          text: "Distance in km",
        },
      },
    },
  },
});
