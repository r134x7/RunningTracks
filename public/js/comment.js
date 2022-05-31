const newFormHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector('#post-content').value.trim();
  const postId = event.target.getAttribute('data-id');
  //need to get user-id as well of the person who is making the comment

  if (commentBody && postId) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ commentBody, postId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', newFormHandler);