//requirements
var bitcore = require('bitcore');
var bitcoreMessage = require('bitcore-message');
//var express = require('express');

//verification function

var address = prompt("what is your address?");
var signature = prompt("what is your signature?");
var voteText = prompt("what is your vote?");

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


