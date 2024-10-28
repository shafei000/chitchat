function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");

  // Create user message element
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");
  userMessage.textContent = userInput.value;

  // Add user message to chat window
  chatWindow.appendChild(userMessage);

  // Clear input
  userInput.value = "";

  // Scroll chat window to the bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Create bot response (simple static response for now)
  const botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot-message");
  botMessage.textContent = "I'm here to help! (Bot response)";

  // Add bot message to chat window with a short delay
  setTimeout(() => {
    chatWindow.appendChild(botMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 500);
}
