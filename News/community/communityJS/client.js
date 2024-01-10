document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/api/getChat");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
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
  } catch (err) {
    console.error(err);
  }
});
