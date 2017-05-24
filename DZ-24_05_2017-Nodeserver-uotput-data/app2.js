// домашнее задание: написать сервер, который выводит на экран 
// поле и кнопку со значением "отправить данные на сервер" 
// после нажатия клавиши веденные данные отправляются на сервер 
// и выводятся в консоли.

var http = require('http');

var server = http.createServer( function(req, res) {
	res.writeHeader(200, {'Content-Type':'text/html; charset="utf-8"'});
	res.write("<div><form action='' method='post' name='formname'>" +
	"<p>Введите имя <input type='text' name='first_name' /></p>" +
	"<p>Введите возраст <input type='text' name='age' /></p>" +
	"<p><input type='submit' value='Отправить' /></p></form></div>");
	
	var data = '';
	req.on('data', function(chuck) {
		data += chuck.toString();
	});
	req.on('end', function(){
		console.log(data);
	
		res.write('В браузер отправлены полученные сервером следующие данные ' + data);
		res.end("\nEnd.");
	} );
	
	
	
} );

server.listen(3001);
console.log('Server work on port 3001');