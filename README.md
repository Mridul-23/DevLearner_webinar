# ChatGPT-Style Local Chatbot

A beginner-friendly, 100% local ChatGPT-like chatbot interface built with HTML, CSS, JavaScript, and Ollama. No API keys, no cloud—run everything on your machine!

---

## 🚀 Project Overview

This mini-project demonstrates how to build your very own AI-powered chatbot that you can run locally using:

* **Ollama**: A local inference server for large language models.
* **DeepSeek Model (deepseek-r1:1.5b)**: A lightweight 1.5B-parameter LLM for code and chat.
* **HTML/CSS/JavaScript**: A sleek, dark-themed UI with glassmorphic design and neon accents.

Students and new learners will see end-to-end how AI inference, frontend, and simple text processing (e.g., stripping `<think>` tags) come together in a real, interactive demo.

---

## 🎯 Key Features

* **Local-Only**: No OpenAI API key required. Everything runs on your laptop.
* **Dark Neon Glass UI**: An elegant, professional interface with smooth scroll and accent highlights.
* **Model Integration**: Sends user prompts to Ollama's REST API and displays streamed or non-streamed responses.
* **Response Cleanup**: Automatically removes `<think>` tags or any unwanted tokens.
* **Easy Deploy**: Serve with VS Code Live Server or Python’s built-in HTTP server.

---

## 📦 Tech Stack

| Component | Technology                   |
| --------- | ---------------------------- |
| AI Server | Ollama local inference       |
| Model     | deepseek-r1:1.5b          |
| Frontend  | HTML5, CSS3 (Glassmorphism)  |
| Scripting | Vanilla JavaScript (Fetch)   |
| Hosting   | VS Code Live Server / Python |

---

## 🛠️ Prerequisites

1. **Windows / macOS / Linux**
2. **Node.js** (optional, for Live Server extension)
3. **Ollama CLI** installed and in your PATH

---

## 🔧 Setup & Usage

### 1. Install and Run Ollama

```bash
# Install Ollama (Windows example)
winget install Ollama

# Pull the DeepSeek model
ollama pull deepseek-coder:1.5b

# Start the server
ollama run deepseek-coder:1.5b
```

By default, the API listens on `http://localhost:11434`.

### 2. Clone This Repo

```bash
git clone https://github.com/Mridul-23/DevLearner_webinar.git
cd DevLearner_webinar
```

### 3. Serve the Frontend

#### Using Python Built-in

```bash
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

#### Using VS Code Live Server

* Install Live Server extension
* Right-click `index.html` → **Open with Live Server**

### 4. Interact with the Bot

1. Type your message in the input box.
2. Press **Send** (or hit Enter).
3. Watch the bot respond, all powered locally!

---

## 🧠 Code Snippets

### Fetching from Ollama API

```js
const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'deepseek-r1:1.5b',
    prompt: userMessage,
    stream: false
  })
});
const data = await response.json();
// Strip <think> tags
const clean = data.response.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
appendMessage(clean, 'bot');
```

---

## 📐 UI Files

* **index.html**: Structure and layout
* **style.css**: Glassmorphic, dark-neon theme
* **script.js**: Fetch logic, DOM updates, cleanup

---

## 🎓 Learning Outcomes

* Hands-on with local LLM inference
* Building interactive UIs with modern CSS
* JavaScript Fetch and regex processing
* End-to-end AI + Web Dev integration

---

## 📚 Further Extensions

* Add streaming responses for live typing effect
* Integrate voice-to-text and text-to-speech
* Package as an Electron desktop app
* Experiment with other local models (LLaMA, Phi-3)

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
