$(window).load(function(){
   $('#preloading').append('<img src="img/cognito-1-800.png"><img src="img/iop-1-800.jpg"><img src="img/dew-1-800.png">'); 
});

$(window).scroll(function(){
    var rotation = $(window).scrollTop() * -.25;
    $('#wheel').css('transform', 'rotate('+ rotation +'deg)');
    if( rotation < -60 ){
       $('#preloading').append('<img src="img/reachsmart-1-800.jpg"><img src="img/subtle-circus-1-800.png"><img src="img/upulsit-1-800.png">');  
    }
    if( rotation < -120 ){
       $('#preloading').append('<img src="img/biltmore-forest-1-800.png"><img src="img/peg-the-price-1-800.png"><img src="img/valdosta-1-800.jpg">');  
    }
});

$(document).on('click', '#wheel a[href]', function(e){
    e.preventDefault();
    if( !$('body').hasClass('detail-active') ){
        showDetail($(this).attr('href'));
    }
}).on('click', 'button.close, #overlay', function(){
    hideDetail();
})
// For keyboard accessibility
$(document).on('keyup', function(e){
    if( $('body').hasClass('detail-active') ){
        return;
    }
    if( e.which === 9 && $('#quad-1').find('a').is(":focus") ){
        rotateTo(0);
    }else if( e.which === 9 && $('#quad-2').find('a').is(":focus") ){
        rotateTo(90);
    }else if( e.which === 9 && $('#quad-3').find('a').is(":focus") ){
        rotateTo(180);
    }else if( e.which === 9 ){
        rotateTo(270);
    }
});

function sizeWheel(){
    var win = { width: $(window).width(), height: $(window).height() }
    var mainAxis = { direction: win.width > win.height ? 'width' : 'height', length: Math.max(win.width, win.height) }
    var wheelWidth = Math.min(mainAxis.length * 1.6, 2500);
    var $wheel = $('#wheel');
    
    $wheel.width(wheelWidth).height(wheelWidth).css({'top': wheelWidth*-.5, 'left': wheelWidth*-.5});
    
    //  Determine body height
    /*  The wheel should go around 270 degrees. It is rotating 1 degree every 4 pixels scrolled. 
        So there should be 1080 pixels below the height of the window. */
    $('body').height(win.height + 1080);
    
    // Size Header
    var emSize = win.width*.002;
    $('h1').css('font-size', emSize + 'em');
    if(emSize < .8){
        $('h1').find('.small').css('font-size', '.9em');
    }else if(emSize < 1.2){
        $('h1').find('.small').css('font-size', '.8em');
    }else{
        $('h1').find('.small').attr('style', '');
    }
    
    // Size Footer
    if( win.width < 400 ){
        $('#quad-4 footer').width(win.width+10);
    }else{
        $('#quad-4 footer').css('style', '');
    }
}

function showDetail(href){
    var $detailContainer = $('#piece-detail');
    $detailContainer.html('<div class="loading">Loading</div>');
    $('body').addClass('detail-active');
    $detailContainer.load(href + " #container", function(){
        $detailContainer.find('.wrapper').prepend('<button class="close"><span class="visually-hidden">Close</span></button>');
        $detailContainer.find('button, a').eq(0).focus();
    } );
    
}
function hideDetail(){
    $('body').removeClass('detail-active');
    $('#piece-detail').find('iframe').each(function(){
        $(this).attr('src', $(this).attr('src'));
    })
}
function rotateTo(deg){
    $('html, body').animate({ scrollTop: deg*4 });
}
$(document).ready(function(){ sizeWheel(); });
$(window).resize(function(){ sizeWheel(); });
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};