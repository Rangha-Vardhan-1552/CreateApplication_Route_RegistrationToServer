const http=require("http")
const fs=require("fs")
const mini=require("minimist")

let args=mini(process.argv.slice(2))
let port1=args.port
let project_details="";
let home_details="";
let register_details="";


const home=fs.readFile("home.html",(err,home)=>{
    if (err){
        throw err;
    }
    home_details=home;
});
const project=fs.readFile("project.html",(err,project)=>{
    if (err){
        throw err;
    }
    project_details=project;
});

const register=fs.readFile("registration.html",(err,register)=>{
    if (err){
        throw err;
    }
    register_details=register;
})

http.createServer((request,response)=>{
    let url=request.url
    response.writeHeader(200,{"content-type":"text/html"})
    switch (url){
        case "/project":
            response.write(project_details);
            response.end();
            break;
        case "/registration":
            response.write(register_details);
            response.end();
            break;
        default:
            response.write(home_details);
            response.end();
            break;
    }
})
.listen(port1)
