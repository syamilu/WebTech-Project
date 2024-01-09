let fetchedHTML = null;

fetch("/Form/forms.html")
  .then((response) => response.text())
  .then((data) => {
    fetchedHTML = data;
  });

function overlayForm() {
  if (fetchedHTML === null) {
    setTimeout(overlayForm, 100);
    return;
  } else {
    document.getElementById("form-container").innerHTML = fetchedHTML;
  }
  var overlay = document.getElementById("form-container");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
}
