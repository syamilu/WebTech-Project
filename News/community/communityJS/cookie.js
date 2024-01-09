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
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    Cookies.set(username, value, { expires: date, path: "/" });
  } else {
    Cookies.set(username, value, { path: "/" });
  }
}

function getCookie(username) {
  return Cookies.get(username);
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
