const express = require('express')

const app = express();

// middleware ejs
app.set('view engine', "ejs");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// Home route
app.get('/', (req, res)=>{
    res.send('Home express')
})

// My get route
app.get('/myget', (req, res)=>{
    console.log(req.body);
    res.send(req.query);
})

// My post route
app.get('/mypost', (req, res)=>{
    console.log(req.body);
    console.log(req.files);
})

// Rendering the get page
app.get('/getform', (req, res)=>{
    res.render('getform')
})

// Rendering the post page
app.get('/postform', (req, res)=>{
    res.render('postform');
})

app.listen(3000, ()=>{
    console.log('server is running');
})