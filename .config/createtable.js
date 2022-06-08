import {db} from './database.js';
export const CreateTable=()=>{
    const query=`Create table if not exists users(
        username varchar(255) unique not null,
        email varchar(255) unique not null,
        password varchar(16) not null,
        name varchar(255) default newuser);
    `;
    db.run(query,()=>{
        console.log('database created')
    })
}