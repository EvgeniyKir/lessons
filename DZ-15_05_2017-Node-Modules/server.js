// домашнее задание: написать модуль, который хранит две любые переменные и 
// выводит их на экран, но только тогда, когда в адресной строке один из 
// параметров принимает значение 112
var http = require("http");
var url = require("url");

var otpusk = require('./modules1.js');


var server = http.createServer (function(req, resp){
	
	var param = req.url.indexOf('112');
	if(param != -1) {
			resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
	
			resp.write("<div style='width: 300px; '>" + 
			"<form method='get' action='' name='num'><p>Отправте 112 на сервер.</p><p>" + 
			"<input type='text' name='datainp'></p><p><input type='submit' value='Отправить' name=''></p></form> " +
			"</div>" );
			resp.write("<div><p>Первая переменная равна : " + otpusk.param1 +
			"</p><p> Вторая переменная равна : " + otpusk.param2 + "</p></div>" );
			
			
			resp.end("Sucess Output variables.");
	}

	else {	
			resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
			
			resp.write("<div style='width: 300px; '>" + 
			"<form method='get' action='' name='num'><p>Отправте 112 на сервер.</p><p>" + 
			"<input type='text' name='datainp'></p><p><input type='submit' value='Отправить' name=''></p></form> " +
			"</div>" );
			
			resp.write("<div></div>");
			resp.end("Sucess.");
	}
	
	
	
});
server.listen(10001);
console.log("Server started on port 10001.");