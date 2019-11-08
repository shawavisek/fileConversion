var express = require("express");
app = express();

upload = require("express-fileupload");

app.use(upload());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/html/upload.html");
});

app.post("/",(req,res)=>{
    if(req.files){
        console.log(req.files)
        var file = req.files.files,
        

            filename = "content.pdf";
        
        file.mv("./files/pdf/"+filename,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Done......");
            }
        });
    }
});

//using spawn method from child_process
//to run python file in nodejs
app.get('/name',name);
function name(req,res){
    var spawn = require("child_process").spawn;
    var process = spawn('python',["./PdfConverterToText.py"]);
};

app.listen(3001,()=>{
    console.log("Server is listening to 127.0.0.1 : 3001");
});