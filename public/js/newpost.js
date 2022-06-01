// taken from 14-MVC/28-Stu_Mini-Project/public/js/profile.js

const newFormHandler = async (event) => {
  event.preventDefault();

  const runName = document.querySelector("#post-runName").value.trim();
  const body = document.querySelector("#post-body").value.trim();
  const time = document.querySelector("#post-time").value.trim();
  const distance = document.querySelector("#post-distance").value.trim();

  if (runName && body && time && distance) {
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
