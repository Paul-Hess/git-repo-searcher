

exports.GetUser = function(response) {
	this.avatar = response[0].owner.avatar_url;
	this.owner = response[0].owner.login;
	this.gitLink = response[0].owner.html_url;
	this.gistUrl = response[0].gist_url;
};
