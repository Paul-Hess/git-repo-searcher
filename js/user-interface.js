var gitApiToken = require('./../.env').gitApiToken;
var GetUser = require('./../js/scripts.js').GetUser;

$(document).ready(function() {

	// $('#form').submit(function(event) {
	// 	event.preventDefault();
	// 	var userQuery = $('#input').val();
		var token = "?access_token=" + gitApiToken;
		var newGitCall = new GetUser("paul-hess", token);
		

		$.get(newGitCall.request).then(function(response) {
			console.log(response);
			var name = response[0].name;
			console.log(name);
			console.log(response[0].description);
			console.log(response[0].clone_url);
			console.log(response.length);
			// $('.landing').text(name);
			// ('.landingd2').text();
		}).fail(function(error) {
			response = error.responseJSON.messsage;
		}); //end get.
	// }); //end submit.

}); //end doc ready


