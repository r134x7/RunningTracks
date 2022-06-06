module.exports = {
  millisToMinutesAndSeconds: (millis) => {
    // function to convert from milliseconds to minutes:seconds
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  },
  minPerKm: (time, distance) => {
    // function to measure minutes/km
    let minutes = time / 60000;
    let minPerKm = minutes / distance;
    let wholeMinPerKm = Math.floor(minPerKm);
    let leftOverMin = minPerKm - wholeMinPerKm;
    let seconds = Math.floor(leftOverMin * 60);

    return wholeMinPerKm + ":" + seconds;
  },
};
