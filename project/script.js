import { HfInference } from "@huggingface/inference";

const client = new HfInference("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");

async function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatWindow = document.getElementById("chat-window");

  // Display user message in chat
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");
  userMessage.textContent = userInput.value;
  chatWindow.appendChild(userMessage);

  // Prepare request with Hugging Face model
  let out = "";
  const stream = client.chatCompletionStream({
    model: "meta-llama/Llama-3.2-3B-Instruct",
    messages: [
      { role: "user", content: userInput.value }
    ],
    max_tokens: 500
  });

  // Clear input field
  userInput.value = "";

  // Show bot's response
  for await (const chunk of stream) {
    if (chunk.choices && chunk.choices.length > 0) {
      const newContent = chunk.choices[0].delta.content;
      out += newContent;
      
      // Update the bot's message dynamically as response comes in
      const botMessage = document.createElement("div");
      botMessage.classList.add("message", "bot-message");
      botMessage.textContent = newContent;
      chatWindow.appendChild(botMessage);
      
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }
}
