import {db} from '../.config/database.js';

export const checkuser = (req,res,next)=>{
    let {email} = req.body
    db.get(`select * from users where email=?`,email,(err,row)=>{
        if(row){
            if(row.email === email || row.username === username){
                res.send({"message":"user already exist"})
                res.redirect('/login')
            }else(
                next()
            )
        }else{
            next()
        }

    })

}