const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var $ = require('jquery');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('public'));
app.post('/driver', (req,res) => {
    
    console.log("CREAT");
    console.log(req.body.data);
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    
    function importPilot(){
            if(this.readyState == 4 && this.status == 200)
           {
                //var jsonn = JSON.parse(this.responseText);
                res.send(myRequest.responseText);
                console.log(200, myRequest);
            }
    }
    
    var myRequest = new XMLHttpRequest();
    var link = `http://ergast.com/api/f1/drivers/${req.body.data}.json`;
    console.log(link);
    myRequest.onreadystatechange = importPilot;
    myRequest.open("GET", link, true);
    console.log(myRequest);
    myRequest.send(null);

});

app.post('/circuit', (req,res) => {
    console.log("CREAT");
    console.log(req.body.data);
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    
    function importPilot(){
            if(this.readyState == 4 && this.status == 200)
           {
                //var jsonn = JSON.parse(this.responseText);
                res.send(myRequest.responseText);
                console.log(200, myRequest);
            }
    }
    
    var myRequest = new XMLHttpRequest();
    var link = `http://ergast.com/api/f1/circuits/${req.body.data}.json`;
    console.log(link);
    myRequest.onreadystatechange = importPilot;
    myRequest.open("GET", link, true);
    console.log(myRequest);
    myRequest.send(null);

});
app.listen(8080, () => console.log('Aplicatia functioneaza pe portul 8080'));