const express = require('express');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{

    var headers = req.headers;
    

    res.render('index.html' , {headers: headers});

})


app.listen(9999, ()=>{
    console.log('Server is running.');
})
