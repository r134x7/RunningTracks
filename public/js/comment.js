const newFormHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector("#post-content").value.trim();
  const postId = event.target.getAttribute("data-id");

  if (commentBody && postId) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ commentBody, postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

document.querySelector(".post-form").addEventListener("submit", newFormHandler);
