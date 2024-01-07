document
  .getElementById("darkmode-toggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
  });
