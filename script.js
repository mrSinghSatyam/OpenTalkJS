import ollama from "ollama";
const response = await ollama.chat({
    model: "llama3.2:3b",
    messages: [{ role: "user", content: "Generate marketing emails" }],
});
console.log(response.message.content);