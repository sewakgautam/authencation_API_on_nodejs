import {db} from '../.config/database.js';
export const authmiddleware = ((req,res,next)=>{
    let {username,password} = req.body;
    db.get(`select * from users where username=?`,username,(err,row)=>{
        if(row){
            if(row.password === password){
                next();
            }
            else row.send({"error":"Credential not matched"})
        }else{
            res.send({"error":"user not found on database"})
        }
    })
    
});
