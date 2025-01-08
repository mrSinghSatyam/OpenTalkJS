import fs from 'fs';

import ollama from "ollama";

let question;
async function ask_ques(question) {
    const response = await ollama.chat({
        model: "llama3.2:3b",
        messages: [{ role: "user", content: question }],
    });
    let ans = response.message.content;
    fs.writeFile(`a.txt`,ans,(err)=>{
        if(err){
            throw err;
        }
    });
}

ask_ques(fs.readFileSync("q.txt", 'utf8',(err)=>{
        if(err){
            throw err;
        }
    }));