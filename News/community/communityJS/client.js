document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/message/getChat")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((chat) => {
        let chatbox = document.getElementById("chatbox");
        let chatDiv = document.createElement("div");
        chatDiv.innerHTML = `
            <div class="${
              chat.username === getCookie("username")
                ? "chatbox-send-container"
                : "chatbox-receive-container"
            }">
              <div class="${
                chat.username === getCookie("username")
                  ? "chatbox-send"
                  : "chatbox-receive"
              }">
                <div class="${
                  chat.username === getCookie("username")
                    ? "chatbox-send-chat"
                    : "chatbox-receive-chat"
                }">
                  ${chat.message}
                </div>
              </div>
            </div>
          `;
        chatbox.appendChild(chatDiv);
      });
    });
});