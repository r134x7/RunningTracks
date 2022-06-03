// taken from 14-MVC/28-Stu_Mini-Project/public/js/profile.js

const editFormHandler = async (event) => {
  event.preventDefault();

  const postId = event.target.getAttribute("data-id");

  const runName = document.querySelector("#post-runName").value.trim();
  const body = document.querySelector("#post-body").value.trim();
  const distance = document.querySelector("#post-distance").value.trim();

  const timeMin = document.querySelector("#post-min").value.trim();
  const timeSec = document.querySelector("#post-sec").value.trim();

  function timeToMs(timeMin, timeSec) {
    const secToMs = timeSec * 1000;
    const minToMs = timeMin * 60000;
    console.log(secToMs, minToMs);
    return secToMs + minToMs;
  }

  const time = timeToMs(timeMin, timeSec);

  if (runName && body && time && distance) {
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
      alert("Failed to create post");
    }
  }
};

const delButtonHandler = async (event) => {
  const postId = event.target.getAttribute("data-id");

  const response = await fetch(`/api/posts/${postId}`, {
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
