const editFormHandler = async (event) => {
  event.preventDefault();

  const postId = event.target.getAttribute("data-id"); // gets post id

  const runName = document.querySelector("#post-runName").value.trim(); // gets title of post
  const body = document.querySelector("#post-body").value.trim(); // gets content of post
  const distance = document.querySelector("#post-distance").value.trim(); // gets distance

  const timeMin = document.querySelector("#post-min").value.trim(); // gets time in minutes
  const timeSec = document.querySelector("#post-sec").value.trim(); // gets time in seconds

  function timeToMs(timeMin, timeSec) {
    // converts the time given into milliseconds
    const secToMs = timeSec * 1000;
    const minToMs = timeMin * 60000;
    console.log(secToMs, minToMs);
    return secToMs + minToMs;
  }

  const time = timeToMs(timeMin, timeSec);

  if (runName && body && time && distance) {
    // makes the post request
    const response = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ runName, body, time, distance }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to edit post");
    }
  }
};

const delButtonHandler = async (event) => {
  const postId = event.target.getAttribute("data-id"); // gets post id

  const response = await fetch(`/api/posts/${postId}`, {
    // request to delete post
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete post");
  }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", editFormHandler);

document
  .querySelector(".delete-list")
  .addEventListener("click", delButtonHandler);
