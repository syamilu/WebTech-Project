import updateChat from "./client.js";

document
  .getElementById("message-form")
  .addEventListener("submit", function (event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the message from the input field
    var usermsg = document.querySelector('input[name="usermsg"]').value;

    // Send a POST request to the server
    fetch("/api/postChat", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getCookie("username"),
        usermsg: usermsg,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateChat();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    document.getElementById("usermsg").value = "";
  });
