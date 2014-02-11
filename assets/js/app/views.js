Simplr.View.mAddViews({
	
	ExampleForm : {
		html : function(data) {
			return Simplr.Layout.mAssembleLayout({
				component : "ExampleForm",
				tokens : {}
			});
		},
		callback : function(selector, data) {
			$(selector).find("div#exampleForm").on("submit", "form", {}, function(evt) {
				evt.preventDefault();
				var formValues = Simplr.Form.mGetValues(this);
				if(Simplr.Form.mValidateValuesAndRender(this, formValues)) {
					$(selector).html('<p class="informationText">Success</p>');
				}
			});
		}
	},
	ExampleSession : {
		html : function(data) {
			return Simplr.Layout.mAssembleLayout({
				component : "ExampleSession",
				tokens : {
					name : data.name
				}
			});
		},
		callback : function(selector, data) {
			$(selector).find("div#exampleSession").on("click", "a.set", {}, function(evt) {
				evt.preventDefault();
				App.Session.Update("User", {
					Name : "Brian"
				});
				Simplr.Controller.mRouteAndExecute("/example/session/");
			}).on("click", "a.delete", {}, function(evt) {
				evt.preventDefault();
				App.Session.Data.User.Name = "";
				App.Session.Delete("User");
				Simplr.Controller.mRouteAndExecute("/example/session/");
			});
		}
	}
});