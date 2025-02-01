import{ Client} from 'pg';
const express =require ('express');
const app =express();

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(corsOptions);
const client = new Client({// this is so the script knows the information for the database (yes its hard-coaded I'll fix it later)
    host:"localhost",
    user:"user",
    port:5432,
    database:app
});
// app.use(cors)
client.connect();
const query ={
    text:'SELECT * FROM users',
};
document.querySelector('form').addEventListener('submit', async function(evt) {

    evt.preventDefault();
    let newemail = document.getElementById('email').value;
    let newpassword = document.getElementById('password').value;
    let newusername = document.getElementById('username').value;
    let other_users = await client.query(query);
    let validuser = true;
    for (let i =0;i<other_users.length;i++){
        if(newusername == other_users[i].username || newemail == other_users[i].email){
            validuser = false;
        }
    }

    if(validuser){
    let insertquery = 'INSERT INTO USERS' + newemail + ' , ' + newusername +' , ' + newpassword;
    clinet.query(insertquery);
    }
});
