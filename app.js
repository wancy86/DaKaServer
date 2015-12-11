var express = require("express")
var app = express()
app.listen(3100)

console.log('app listen on 3100...')

//npm install express
//npm install jade
//npm isntall msnodesql
//npm install 


app.get('/max/daka', function(rep,res) {
	console.log('check in');
	res.send('<h3>打卡成功：</h3><br/>'+new Date().toString());
});



