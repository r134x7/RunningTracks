const newFormHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector("#post-content").value.trim(); // gets comment
  const postId = event.target.getAttribute("data-id"); // gets id of the post being commented on

  if (commentBody && postId) {
    // creates post request make a comment
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ commentBody, postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // refreshes the page which will load up the new comment added
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

document.querySelector(".post-form").addEventListener("submit", newFormHandler);
