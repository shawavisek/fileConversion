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
        

            filename = file.name;
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

app.listen(3001,()=>{
    console.log("Server is listening to 127.0.0.1 : 3001");
});