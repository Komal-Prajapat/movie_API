import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import MovieRouter from './Routes/movie.js';

// import Movie from './Routes/movie.js'
const app = express()

app.use(bodyParser.json());

// connect db 
mongoose.connect("mongodb+srv://komalprajapat267:1SqXaaRyOH1STqSt@komal.fjcbbzw.mongodb.net",{
    dbName : "Movie"    
}).then(()=>console.log("connected..."))




//router 


app.get('/', (req, res) => {
    console.log("This is home Route");
    res.send("<h1><center>********WELCOME*********</h1></center>"); 
}); 

app.use("/api",MovieRouter)


const port =  9090 
app.listen( port , (req,res)=>{
    console.log(`Server is running ${port}`);
})