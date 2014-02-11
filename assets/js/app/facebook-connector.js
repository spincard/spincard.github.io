// Add a Session Key for this.
App.Session.Data.User.FacebookConnected = false;

// Facebook Functionality
App.Facebook = {
	Data : {
		AppId : "443490669002483", // Localhost
		//AppId : "448019251883263", // DEV
		ChannelUrl : "" // '//WWW.YOUR_DOMAIN.COM/channel.html', Channel File
	},
	// Initialize Facebook
	Initialize : function(callback) {
		$("body").append('<div id="fb-root"><!-- --></div>');
		window.fbAsyncInit = function() {
			FB.init({
		      appId      : App.Facebook.Data.AppId,
		      //channelUrl : App.Facebook.Data.ChannelUrl,
		      status     : false, // check login status
		      cookie     : true, // enable cookies to allow the server to access the session
		      xfbml      : true  // parse XFBML
		    });
		
			// Get Users Current Status
		    FB.getLoginStatus(function(response) {
		    	if(response.status == "connected") {
					App.Session.Update("User", {
						FacebookConnected : true
					});
				} else {
					App.Session.Update("User", {
						FacebookConnected : false
					});
				}
				callback();
			}, true);
		};
		// Get the Facebook Javascript SDK
		App.Func.Request({
			options : {
				url : "//connect.facebook.net/en_US/all.js",
				dataType : "script"
			}
		});
	},
	// Login to Facebook
	Login : function(callback) {
		FB.login(function(response) {
			if(response.status == "connected") {
				App.Session.Update("User", {
					FacebookConnected : true
				});
			} else {
				App.Session.Update("User", {
					FacebookConnected : false
				});
			}
			callback();
		});
	},
	// Get User's Friends
	Friends : function(callback) {
		FB.api('/me/friends', { limit : 5000 }, function(response) {
		 	// sort the response first in alphebetical order
		 	response.data.sort(function(a, b) {
		 		var x = a.name.toLowerCase();
			    var y = b.name.toLowerCase();
			    return ((x < y) ? -1 : ((x > y) ? 1 : 0));	
		 	});
		 	callback(response);
		});
	},
	// Check if Connected to Facebook
	IsConnected : function() {
		return App.Session.Data.User.FacebookConnected;
	}
};