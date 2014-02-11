// App Javascript
var App = {
	Data : {
	    
    },
	Func : {
		
	}
};

$.smartbanner({
  title: 'Spincard',
  author: 'NetworkU, LLC'
});

// Kickoff the Application
$(function() {
	//generate cards
	var cardArea = $('#segment3 .cardArea');
	var imgOrder = []
	var maxCards = 18;
	if(navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry)/)) {
		maxCards = 4;
	}
	for (var i = 1; i <= maxCards; i++) { imgOrder.push(i); }
	imgOrder = shuffle(imgOrder);
	for(i=0; i<imgOrder.length; i++) {
		var newCard = '<div class="space"><div class="card"><figure class="front"><img src="/assets/images/img/profiles/' + imgOrder[i] + '.png" /></figure>';
		newCard += '<figure class="back"><div class="cardHeader"><div class="spinLogo2"><!-- --></div></div><span>Spincard User</span><span>555-1212</span><span>hello@wearenetworku.com</span><span>spincardapp.com</span><span><i class="iconFacebook iconSet"></i><i class="iconTwitter iconSet"></i><i class="iconLinkedin iconSet"></i></span><div class="cardSpin">ABC-123</div></figure></div></div>';
		cardArea.prepend(newCard);
	}
	
	// randomly flip a card over
	setInterval(function() {
		$('.card', cardArea).removeClass('flipped').eq(Math.floor(Math.random() * maxCards)).addClass('flipped');
	}, 3000);
});


function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};