

exports.GetUser = function(query, token) {
	this.requestUrl = "https://api.github.com/users/";
	this.basicRequest = this.requestUrl + query + "/repos";
	this.request = this.basicRequest + token;
};

var gitApiToken = require('./../.env').gitApiToken;
var GetUser = require('./../js/scripts.js').GetUser;

$(document).ready(function() {

	$('#get-user').submit(function(event) {
		event.preventDefault();
		var userQuery = $('#user-query').val();
		var token = "\?access_token=" + gitApiToken;
		var newGitCall = new GetUser(userQuery, token);
		console.log('foo');

		$.get(newGitCall.request).then(function(response) {
			$('#avatar').empty();
			$('#owner-info').empty();
			var avatar = response[0].owner.avatar_url;
			var owner = response[0].owner.login;
			var gitLink = response[0].owner.html_url;
			var gistUrl = response[0].gist_url;
			console.log(response);
			console.log(name);
			console.log(response[0].clone_url);
			console.log(response.length);
			var repos = response.splice(0, 12);
			console.log(repos.length + "foobar");
			if ( avatar !== " " && avatar !== "" && avatar !== undefined) {
				$('#avatar').prepend('<img class="profile-img" src=' + avatar + '>');
			} else {
					$('#avatar').prepend('<img src="./../assets/img/git-default.png"' );
			}

			$('#owner-info').append('<h2>' + owner + "</h2>")
			.append('<a href=' + gitLink + "> git page for " + owner + "</a>");

			if (gistUrl !== " " && gistUrl !== "" && gistUrl !== undefined) {		
				$('#owner-info').append('<a href=' + gistUrl  + "> gist page for " + owner + "</a>");
			}


			var index = 0;
			repos.forEach(function() {
				$('.repositories').append('<div class="repos"><div>');
					var desc = response[index].description;
					var name = response[index].name;
					$('.repos').last().append("<p class='desc'></p>")
					.append("<h3 class='repo-name'></h3>");
					// $('.repo-name').
					if (desc !== " " && desc !== "" && desc !== undefined) {	
						$('.desc').last().text(desc);
					} else {
						$('.desc').last().text("no description provided");
					}
					index++;
			});

		
			

			

		}).fail(function(error) {
			response = error.responseJSON.messsage;
		}); //end get.
	}); //end submit.	

}); //end doc ready


