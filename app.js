import fs  from 'fs';
import ollama from "ollama";
let question;
let n =3;
async function ask_ques(question,i) {
    const response = await ollama.chat({
        model: "llama3.2:3b",
        messages: [{ role: "user", content: question}],
    });
    let answer = response.message.content;
    fs.writeFile(`./Answers/a${i}.txt`,answer,(err)=>{
        if(err){
            throw err;
        }
    });
}
for(let i=1;i<=n;i++){
    question=`./Questions/q${i}.txt`;
    ask_ques(fs.readFileSync(question, 'utf8',(err)=>{
        if(err){
            throw err;
        }
    }),i);
}