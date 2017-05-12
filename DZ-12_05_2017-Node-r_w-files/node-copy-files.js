// Домашнее задание: копирование файлов. переделать таким образом, 
// чтобы пользователь осущетвлял ввод и целевого файла и исходного, 
// причем если исходного файла нет - должна отображаться ошибка. 
// Подсказка ключ к событию - 'error'

var http = require ('http');
var fs = require ("fs");
var evt = require ('events').EventEmitter;
var url = require('url');
var dat = "";

////////////////////////////////////////
function copyfiles(filename, fnamewrite){

	var rd = fs.createReadStream(filename).setEncoding('utf-8');
	var wd = fs.createWriteStream(fnamewrite);
	
	rd.on('data', function(data) {
		dat = data;		
		console.log(dat + " event data");
	} );
	
	rd.on('error', function(data2) {
		dat = undefined;
		console.log(dat + " event error");
	});
	
	rd.on('end', function(dat3) {
		console.log(dat + " event end");
		wd.write(dat);
	});
	rd.on('finish', function(d4) {		
		console.log(dat + " event finish");
	});
	
	return dat;
}
////////////////////////////////////////

var server = http.createServer (function(req, resp){
	
	var param = url.parse(req.url, true).query.val;
	var param2 = url.parse(req.url, true).query.valwr;
	
	if( typeof param == "undefined" ){
				
		resp.writeHead(400, {"Content-Type":"text/html;charset=utf-8"});
	
		resp.write("<div style='width: 300px; '>" + 
		"<form method='get' action='' name='num'><p>Введите имя копируемого файла</p><input type='text' name='val'>" +
		"<p>Введите имя файла для записи.</p><input type='text' name='valwr'><p><input type='submit' value='Отправить имена файлов' name=''></p></form> " +
		"<div style='border: 3px inset #6a5add; padding: 10px;'>" + "Ошибка : файл не найден." );
		
		resp.write("</div></div>");
		resp.end("End.");
	}
	else {
		
	resp.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
	var result = copyfiles(param, param2);
	resp.write("<div style='width: 300px; '>" + 
	"<form method='get' action='' name='num'><p>Введите имя копируемого файла</p><input type='text' name='val'>" +
	"<p>Введите имя файла для записи.</p><input type='text' name='valwr'><p><input type='submit' value='Отправить имена файлов' name=''></p></form> " +
	"<div style='width: 100%; border: 1px inset #6a5add; padding: 10px;'>" + result );
	
	resp.write("</div></div>");
	resp.end("Sucess.");
	
	
	}
	
});
server.listen(10001);
console.log("Server started on port 10001.");