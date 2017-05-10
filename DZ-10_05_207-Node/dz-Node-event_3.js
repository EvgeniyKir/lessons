// домашнее задание: написать событие, которые будет 
// генерировать список натуральных чисел для последующего 
// вывода в таблицу в html. а вот максимальное число должно 
// определяться параметром, передаваемым в событие.

var http = require ('http');
var evt = require ('events').EventEmitter;
var url = require('url');

var myevt = new evt();
myevt.on("nutnum", funcnatural );
//////////////////////////////////////
function funcnatural(par){
	
	var str = "";
	var num = par;
	var n = 0;
		for (var i = 0; i <= Math.floor(num/4); i++) {
			str += "<tr>";
			if( i == Math.floor(num/4) ){
					for(var j=0; j<num%4; j++) {
					str += "<td style='border: 1px inset #6a5add'>" +
					(n += 1) + "</td>";
				}		
			}
			else {
				for(var j=0; j<4; j++) {
					str += "<td style='border: 1px inset #6a5add'>" +
					(n += 1) + "</td>";
				}
			}
			str += "</tr>";
		}
	return str;
 }

//////////////////////////////////////

var server = http.createServer (function(req, resp){
	
	var param = url.parse(req.url, true).query.val;
	if( typeof param == "undefined" ){
		param = 20;
		// console.log(param + " Value of parametr ");
		resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
	
		resp.write("<div style='width: 300px; '>" + 
		"<form method='get' action='' name='num'><p>Введите цифрами натуральное число</p><input type='text' name='val'></form> " +
		"<table style='border: 1px inset #6a5add'>" + funcnatural(param) );
		
		resp.write("</table></div>");
		resp.end("Table created");
	}
	else {
		// console.log(param + " Value of parametr");
		
	resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
	
	resp.write("<div style='width: 300px; '>" + 
	"<form method='get' action='' name='num'><p>Введите цифрами натуральное число</p><input type='text' name='val'></form> " +
	"<table style='border: 1px inset #6a5add'>" + funcnatural(param) );
	
	resp.write("</table></div>");
	resp.end("Table created");
	
	
	}
	
});
server.listen(10001);
console.log("Server started on port 10001.");