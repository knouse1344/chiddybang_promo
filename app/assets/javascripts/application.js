// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


//TIMERS

function infinite_timer_short(item) {
	setTimeout(function () {
		infinite(item);
	}, 6000);
}
function infinite_timer_long(item) {
	setTimeout(function () {
		infinite(item);
	}, 10000);
}

//TIME CONTROL
function infinite(item) {
	flicker(item, 2, function () {
		$(item).fadeIn("fast");
	})

	infinite_timer_long(item);	
}


// FLICKER FUNCTIONS

function flicker(item, count, callback, current) {
    current = current || 0;
    
    $(item)[current % 2 == 0 ? 'visible' : 'invisible']();
    
    setTimeout(function(){
        if (count * 2 <= current) {
            callback();
            return;
        }
        flicker(item, count, callback, current + 1)
    }, 40);
}

function flicker_spark(item, count, callback, current) {
    current = current || 0;
    
    $(item)[current % 2 == 0 ? 'visible' : 'invisible']();
    
    setTimeout(function(){
        if (count * 2 <= current) {
            callback();
            return;
        }
        flicker_spark(item, count, callback, current + 1)
    }, 60);
}

function flicker_quick(item, count, callback, current) {
    current = current || 0;
    
    $(item)[current % 2 == 0 ? 'visible' : 'invisible']();
    
    setTimeout(function(){
        if (count * 2 <= current) {
            callback();
            return;
        }
        flicker_quick(item, count, callback, current + 1)
    }, 40);
}

function flicker_slow(item, count, callback, current) {
    current = current || 0;
    
    $(item)[current % 2 == 0 ? "visible" : "invisible"]();
    
    setTimeout(function(){
        if (count * 2 <= current) {
            callback();
            return;
        }
        flicker_slow(item, count, callback, current + 1)
    }, 80);
}



// CUSTOM JQUERY VISIBILITY FUNCTIONS

jQuery.fn.visible = function() {
	return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
	return this.css('visibility', 'hidden');
};




// START FLICKERING

setTimeout(function () {
    flicker_quick("#spark-corner", 2, function () {
        $("#spark-corner").fadeIn("fast");
    })
}, 1000)

setTimeout(function () {
    flicker_spark("#spark", 3, function () {
        $("#spark").fadeIn("fast");
    })
}, 1000)

setTimeout(function () {
    flicker_slow(".bang", 4, function () {
        $(".bang").fadeIn("fast");
    })

    infinite_timer_short(".bang");
}, 950)

setTimeout(function () {
    flicker_slow(".chiddy", 4, function () {
        $(".chiddy").css("opacity", "1");
    })

    infinite_timer_long(".chiddy");
}, 1150)

