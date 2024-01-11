// document.addEventListener("DOMContentLoaded", async function () {
//   try {
//     const response = await fetch("/api/getChat");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     data.forEach((chat) => {
//       let chatbox = document.getElementById("chatbox");
//       let chatDiv = document.createElement("div");
//       chatDiv.innerHTML = `
//             <div class="${
//               chat.username === getCookie("username")
//                 ? "chatbox-send-container"
//                 : "chatbox-receive-container"
//             }">
//               <div class="${
//                 chat.username === getCookie("username")
//                   ? "chatbox-send"
//                   : "chatbox-receive"
//               }">
//                 <div class="${
//                   chat.username === getCookie("username")
//                     ? "chatbox-send-chat"
//                     : "chatbox-receive-chat"
//                 }">
//                   ${chat.message}
//                 </div>
//               </div>
//             </div>
//           `;
//       chatbox.appendChild(chatDiv);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// });

async function updateChat() {
  try {
    const response = await fetch("/api/getChat");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML = ""; // Clear the chatbox before adding new messages
    data.forEach((chat) => {
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
    // Scroll to the bottom of the chatbox after updating
    chatbox.scrollTop = chatbox.scrollHeight;
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Update the chat when the page loads
  updateChat();

  // Update the chat every 5 seconds
  setInterval(updateChat, 3000);
});
