var express = require("express");
var bodyParser = require("body-parser");
 
var app = express();
 

var urlencodedParser = bodyParser.urlencoded({extended: false});
 

app.use(express.static(__dirname));
 

app.post("/page", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
	var nameus = request.body.userName;
	var ageus = request.body.userAge;

  response.send("Name User : " + nameus + "<br > Age User : " + ageus);
});
 
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});

app.listen(3000);
console.log("server work on 3000");
