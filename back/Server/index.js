const mongoose = require("mongoose");

const app = require("./app");

const port =3000;

const URI = "mongodb://localhost:27017/mean";


mongoose.connect(URI, (err, res)=>{
    if(err){
        console.log('el error es:'+ err);
    }else{
        console.log("conexion exitosa!!");
        app.listen(port, () =>{
            console.log('puerto:'+ port);
        })
    }
})
