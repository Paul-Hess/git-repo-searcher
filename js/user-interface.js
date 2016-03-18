var gitApiToken = require('./../.env').gitApiToken;
var GetUser = require('./../js/scripts.js').GetUser;

$(document).ready(function() {

	// $('#form').submit(function(event) {
	// 	event.preventDefault();
	// 	var userQuery = $('#input').val();
		var newGitCall = new GetUser("paul-hess");

		$.get(newGitCall.request).then(function(response) {
			var name = response[0].name;
			$('.landing').text(name);
			('.landingd2').text()
		}).fail(function(error) {
			response = error.responseJSON.messsage;
		}); //end get.
	// }); //end submit.

}); //end doc ready


