module.exports = {
  millisToMinutesAndSeconds: (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  },
  minPerKm: (time, distance) => {
    console.log(time, distance);
    time = time / 60000;
    let disTime = distance / time;

    return disTime.toFixed(2);
    /* Math.floor(distance / time) */
  },
};

/*  */
