import express from 'express';
import { config } from 'dotenv';
const app = express();
import { system as authRoute} from './routes/auth.route.js';
import { CreateTable } from './.config/createtable.js';
config();
CreateTable();


app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})
app.use(express.json());
app.use(express.urlencoded({

    extended:true
}));
app.use('/',authRoute);




app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})