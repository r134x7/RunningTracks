const newFormHandler = async (event) => {
  event.preventDefault();

  const runName = document.querySelector("#post-runName").value.trim(); // gets title of post
  const body = document.querySelector("#post-body").value.trim(); // gets content of post

  const timeMin = document.querySelector("#post-min").value.trim(); // gets time in minutes
  const timeSec = document.querySelector("#post-sec").value.trim(); // gets time in seconds

  function timeToMs(timeMin, timeSec) {
    // function to convert time to milliseconds
    const secToMs = timeSec * 1000;
    const minToMs = timeMin * 60000;
    console.log(secToMs, minToMs);
    return secToMs + minToMs;
  }

  const time = timeToMs(timeMin, timeSec);

  const distance = document.querySelector("#post-distance").value.trim(); // gets distance given

  if (runName && body && time && distance) {
    // POST request to create a post
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ runName, body, time, distance }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector(".post-form").addEventListener("submit", newFormHandler);
