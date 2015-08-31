//requirements
var bitcore = require('bitcore');
var bitcoreMessage = require('bitcore-message');
var express = require('express');

//verification function using bitcore, bitcore-message, and node
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var voteText = "hello, world";

var verify = function (voteText, address, signature) {
	var verifycheck = bitcoreMessage(voteText).verify(address, signature);
	if(verifycheck===true) {
		console.log("verified");
		confirm("verified")
	}
	else {
		console.log("not verified");
		confirm("invalid sig")
	}
}

verify(voteText,address, signature);

// express front end stuff
express.set('views', __dirname + '/views');
express.set('view engine', 'ejs');

express.get('/', function(request, response) {
	response.render('pages/index');
});
