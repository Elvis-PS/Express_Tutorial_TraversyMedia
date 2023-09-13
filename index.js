const express = require('express');
const path = require('path');
const fsPromisses = require('fs').promises;
const fs = require('fs');

const users = [
    {
        id: 1,
        name: "john Doe",
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive',
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@yahoo.com',
        status: 'active'
    }
]

const getUsers = async ()=>{
    const data = await fsPromisses.readFile(path.join(__dirname, 'public', 'json', 'users.json'));
    const newData = await data.toString();
    console.log(newData);
}
//creates a server in express
const app = express();



app.use(express.static(path.join(__dirname, 'public')));

// creates a rout for directing get requests\
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'boleto estácio de abriu.pdf'))
// })

//sets a port for the server to listen
const PORT =  process.env.PORT || 5000;

app.listen(PORT, function(){console.log(`Server started on port n# ${PORT}`)});

