//requriements 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./configs/dbConfig');
const cors = require('cors');

//initilization
const app = express();
const port = 3000;

//bodyparser middleware
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//cors middleware
app.use(cors());

//mongoose connection
mongoose.connect(dbConfig.url)
.then(() => {
    console.log('Server successfully connected to db' + dbConfig.url);
}).catch(err => {
    console.log("Failed to connect to db " + err);
    process.exit();
});

//server home route
app.get('/',(req,res) => {
    res.send({messgae:"welcome"})
});

app.use(express.static(path.join(__dirname,"public")));


const App = require('./app/routes/note.routes')(app);


//start listening 
app.listen(port, () => {
    console.log('server listening on port '+ port );
})


