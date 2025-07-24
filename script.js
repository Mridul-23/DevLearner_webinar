const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage(userMessage, "user");
  input.value = "";

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "deepseek-r1:1.5b",
      prompt: userMessage,
      stream: false,
    }),
  });

  const data = await response.json();
  const cleanedResponse = data.response
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .trim();
  appendMessage(cleanedResponse, "bot");
});

function appendMessage(message, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
