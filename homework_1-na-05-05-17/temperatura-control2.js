// домашнее задание: в двух файлах txt находятся показания температуры 
// за окном и в комнате. организовать сервер, который выводит таблицу 
// содержающую эти температуры и пояснения - на улице и в комнате.
var http = require("http");
var fs = require("fs");
var tempout = fs.readFileSync("tempoutside.txt","utf-8");
var tempins = fs.readFileSync("tempinside.txt", "utf-8")
var arr = tempout.split("\r\n");
var arr2 = tempins.split("\r\n");
var len = arr.length;
var len2 = arr2.length;

var content3 = "";


for (var i = 0; i < len; i++) {
	content3 += "<tr>" + "<td style='border: 1px inset #6a5acd;'>" + arr[i] + "</td>" +
				"<td style='border: 1px inset #add8e6;'>" + arr2[i] + "</td>" + "</tr>";
}

var tempins = fs.readFileSync("tempinside.txt", "utf-8");


http.createServer(
	function(req, resp){
		resp.writeHead(200,{'Content-type':'text/html; charset="utf-8"'});

		resp.write("<div style=' width: 600px; margin: 20px auto;'>" + 
					"<table style='width: 100%; text-align: center; border: 3px inset #87ceeb;'>" + 
					"<tr><td style='border: 2px inset #6a5acd;'>" +
					"Температура снаружи</td><td style='border: 2px inset #6a5acd;'>" + 
					"Температура внутри</td></tr>" + content3 + "</table></div>");
		resp.end("\nServer work.(localhost:10000)","utf-8");
	}
).listen(10000);
console.log("Server Ok.");