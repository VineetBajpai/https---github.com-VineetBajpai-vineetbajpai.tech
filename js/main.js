jQuery(function($) {
	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();
	
	// Progress Bar
	$('#about-us').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
			});
			$(this).unbind('inview');
		}
	});

	//Countdown
	$('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
	
});
// Dynamic hero typing effect
jQuery(function($){
    var el = document.getElementById('heroTypingText');
    if(!el) return;
    var phrases = ['enterprise software','scalable .NET solutions','cloud-ready platforms','AI & automation solutions','data-driven applications'];
    var index=0, char=0, deleting=false;
    function type(){
        var phrase=phrases[index];
        el.textContent=deleting ? phrase.substring(0,char--) : phrase.substring(0,char++);
        var delay=deleting ? 42 : 76;
        if(!deleting && char>phrase.length){deleting=true;delay=1500;}
        else if(deleting && char<0){deleting=false;index=(index+1)%phrases.length;char=0;delay=350;}
        setTimeout(type,delay);
    }
    type();
});
