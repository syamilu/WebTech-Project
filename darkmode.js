if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  document.getElementById("darkmode-toggle").checked = true;
  document
    .querySelectorAll(
      ".topnav, .topnav a.active, #report-form, #chatbox-container, #chatbox-title, .chatbox-receive, .chatbox-send, #usermsg, .card__footer a, .card__footer a:hover"
    )
    .forEach(function (el) {
      el.classList.add("dark-mode");
    });
}

document
  .getElementById("darkmode-toggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
    document
      .querySelectorAll(
        ".topnav, .topnav a.active, #report-form, #chatbox-container, #chatbox-title, .chatbox-receive, .chatbox-send, #usermsg, .card__footer a, .card__footer a:hover"
      )
      .forEach(
        function (el) {
          el.classList.toggle("dark-mode", this.checked);
        }.bind(this)
      );

    if (this.checked) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.removeItem("darkMode");
    }
  });
