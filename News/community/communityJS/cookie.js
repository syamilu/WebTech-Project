function generateRandomUsername(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function setCookie(username, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = username + "=" + (value || "") + expires + "; path=/";
}

function getCookie(username) {
  const nameEQ = username + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0)
      return c.substring(nameEQ.length, c.length).trim();
  }
  return null;
}

window.onload = function () {
  var username = getCookie("username");
  if (username == null) {
    username = generateRandomUsername(10);
    setCookie("username", username, 7);
    console.log("Welcome, " + username + "!");
  } else {
    console.log("Welcome back, " + username + "!");
  }
};
