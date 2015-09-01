//requirements
var bitcore = require('bitcore');
var bitcoreMessage = require('bitcore-message');
var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//app.use(bodyParser()); 


//verification function using bitcore, bitcore-message, and node

var voteText = "hello, world";
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';


var verify = function (voteText, address, signature) {
	var verifyCheck = bitcoreMessage(voteText).verify(address, signature);
	if(verifyCheck===true) {
		console.log("verified");
	}
	else {
		console.log("not verified");
	}
	return (verifyCheck);
}

//verify(voteText,address, signature);

// express front end stuff
app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('pages/index');
});

app.post('/verify',function(req,res){
	var result = verify(voteText, address, signature);

	console.log(res);
	res.send(res);
});


app.get('/verify', function (req, res) {
  res.json({result: verify(voteText, address, signature)});
});

/*
app.post('/verify',function(req,res){
	var voteText=req.body.voteText;
	var address=req.body.address;
	var signature=req.body.signature;
	var result = verify(voteText, address, signature);

	console.log(result);
	res.send(result);
});*/

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});




