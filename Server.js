const express = require('express')
const app = express()

app.get('/', function (req, res) {
   res.sendFile('C:\\Users\\I327757\\Documents\\VAI\\Jingle\\StartPage.html');
})

app.listen(4000);
console.log("Listeniong on 4000");
