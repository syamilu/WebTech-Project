document
  .querySelector('form[name="message"]')
  .addEventListener("submit", function (event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the message from the input field
    var usermsg = document.querySelector('input[name="usermsg"]').value;

    // Send a POST request to the server
    fetch("http://localhost:3000/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usermsg: usermsg,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  });
