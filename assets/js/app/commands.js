Simplr.Controller.mAddCommands({
	
	ExampleForm : {
		route : ["example", "form", "view"],
		callback : function(data) {
			Simplr.View.mRender({
				name : "ExampleForm",
				data : {},
				selector : "div#demoContent"
			});
		}
	},
	ExampleSession : {
		route : ["example", "session", "view"],
		callback : function(data) {
			App.Session.Load("User");
			Simplr.View.mRender({
				name : "ExampleSession",
				data : {
					name : App.Session.Data.User.Name
				},
				selector : "div#demoContent"
			});
		}
	}
	
});