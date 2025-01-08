import fs from 'fs';
import  ollama  from 'ollama';
let category = process.argv[2];
let num = Math.floor(Math.random()*3+1);
let q; 
console.log(category)


async function ask_llm(q) {
    const response = await ollama.chat({
        model: "llama3.2:3b",
        messages: [{ role: "user", content: q }],
    });
    let a = response.message.content;
    fs.writeFile(`Answers.txt`,a,(err)=>{
        if(err){
            throw err;
        }
    });
    console.log(`THE QUESTION IS: ${q}`)
}

switch(category){
    case "ProfessionalWriting":
        if(num == 1){
            q = `./category/c1/q1.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }));
        }
        else if(num == 2){
            q = `./category/c1/q2.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 3){
            q = `./category/c1/q3.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        break;
    case "CreativeWriting":
        if(num == 1){
            q = `./category/c2/q1.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 2){
            q = `./category/c2/q2.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 3){
            q = `./category/c2/q3.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        break;
    case "TechnicalContent":
        if(num == 1){
            q = `./category/c3/q1.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 2){
            q = `./category/c3/q2.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 3){
            q = `./category/c3/q3.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        break;
    case "AcademicWriting":
        if(num == 1){
            q = `./category/c4/q1.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 2){
            q = `./category/c4/q2.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 3){
            q = `./category/c4/q3.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        break;
    case "MarketingContent":
        if(num == 1){
            q = `./category/c5/q1.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 2){
            q = `./category/c5/q2.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        else if(num == 3){
            q = `./category/c5/q3.txt`;
            ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
                if(err){
                    throw err;
                }
            }))
        }
        break;
    default:
        console.log("Invalid category");
}