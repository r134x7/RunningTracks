const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#name-signup").value.trim(); // gets username
  const email = document.querySelector("#email-signup").value.trim(); // gets email
  const password = document.querySelector("#password-signup").value.trim(); // gets password

  if (userName && email && password) {
    // POST request to create an account
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
