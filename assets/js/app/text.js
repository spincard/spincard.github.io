// App Shared Text
App.Text = { 
	Data : {
	    ExampleText : function(data) {
            return "this is" + data.test + " an example."
        }
	},
	Get : function(key, data) {
		return App.Text.Data[key](data);
	}
};