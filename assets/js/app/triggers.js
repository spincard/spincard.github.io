// Set the Trigger Environment
Simplr.Trigger.mSetEnvironment("localhost");

// Trigger Services
Simplr.Trigger.mAddServices({
	// Google Analytics
	GoogleAnalytics : {
		data : {
			environmentIDs : {
				localhost: "[todo]", // analtics id
				dev : "[todo]",
				www : "[todo]"
			}
		},
		onLoad : function(opts) { 
			var gaAccount = Simplr.Trigger.mData().Services.GoogleAnalytics.data.environmentIDs[opts.envID];
			var _gaq = window._gaq = _gaq || [];
			_gaq.push(['_setAccount', gaAccount]);
			_gaq.push(['_trackPageview']);
			
			var scriptURL = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			document.write('<script type="text/javascript" src="' + scriptURL + '"></script>');
		},
		onPage : function(opts) { 
			var options = $.extend({
				url : ""
			}, opts);
			_gaq.push(['_trackPageview', options.url]);
		},
		onEvent : function(opts) {
			var options = $.extend({
				breadcrumb : []
			}, opts);
			if(options.breadcrumb.length > 2) {
				_gaq.push(['_trackEvent', options.breadcrumb[0], options.breadcrumb[1], options.breadcrumb.slice(2).join(":")])
			}
		},
		onTransaction : function(opts) { 
			
		}
	}
});

// Trigger the OnLoads
Simplr.Trigger.mOnLoad();

// Trigger Functionality
App.Trigger = 	{
	Page : function(data, active) {
		var isActive = Simplr.Util.mEmpty(active) ? true : active;
		if(isActive) {
			Simplr.Trigger.mOnPage({ 
				data : $.extend({
					url : ""
				}, data)
			});
		}
	},
	Event : function(data, active) {
		var isActive = Simplr.Util.mEmpty(active) ? true : active;
		if(isActive) {
			Simplr.Trigger.mOnEvent({
				data : $.extend({
					breadcrumb : []
				}, data)
			});
		}
	},
	Transaction : function(data, active) {
		var isActive = Simplr.Util.mEmpty(active) ? true : active;
		if(isActive) {
			Simplr.Trigger.mOnTransaction({
				data : $.extend({
					
				}, data)
			});
		}
	}
};
		

