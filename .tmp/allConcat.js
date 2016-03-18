

exports.GetUser = function(response) {
	this.avatar = response[0].owner.avatar_url;
	this.owner = response[0].owner.login;
	this.gitLink = response[0].owner.html_url;
	this.gistUrl = response[0].gist_url;
};

var gitApiToken = require('./../.env').gitApiToken;
var GetUser = require('./../js/scripts.js').GetUser;

$(document).ready(function() {
	$('#get-user').submit(function(event) {
		event.preventDefault();
		var userQuery = $('#user-query').val();

		$.get("https://api.github.com/users/" + userQuery + "/repos?access_token=" + gitApiToken).then(function(response) {
			$('#avatar, #owner-info, .repositories, .repo').empty();
			
			var newGet = new GetUser(response);
			var avatar = newGet.avatar;
			var owner = newGet.owner;
			var gitLink = newGet.gitLink;
			var gistUrl = newGet.gistUrl;
			var repos = response.splice(0, 12);

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

			if (response.length === 0) {
				$('.repositories').append("<h3> This user does not have any recent repos or they are private, please try another user name"); 
			} else {
				var index = 0;
				repos.forEach(function() {
					$('.repositories').append('<div class="repo"><div>');
						var desc = response[index].description;
						var name = response[index].name;
						var clone = response[index].clone_url;
						$('.repo').last().append("<h3 class='repo-name'></h3>");
						.append("<p class='desc'></p>");
						.append("<p class='clone'></p>");
						$('.repo-name').last().text(name);
						if (desc !== " " && desc !== "" && desc !== undefined) {	
							$('.desc').last().text(desc);
						} else {
							$('.desc').last().text("no description provided");
						}
						$('.clone').last().text("clone this repo: " + clone);
						index++;
				});
			}
		}).fail(function(error) {
			response = error.responseJSON.messsage;
		}); //end get.
	}); //end submit.	
}); //end doc ready


