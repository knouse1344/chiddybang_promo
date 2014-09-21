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
//= require_tree .


//TIMER

function infinite_timer(item, time) {
	setTimeout(function () {
		infinite(item);
	}, time);
}

//TIME CONTROL
function infinite(item) {
	flicker(item, 2, function () {
		$(item).fadeIn("fast");
	})

	var numeral = Math.floor((Math.random()*20000)+1);
	
	infinite_timer(item, numeral);	
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

function boom_flicker() {
    $('.boom-text').css("opacity", ".25")
    $('.boom-inner').css("opacity", ".25")
    $('.boom-outer').css("opacity", ".25")

    setTimeout(function () {
        $('.boom-text').css("opacity", "1")
    }, 1000);

    setTimeout(function() {
        $('.boom-inner').css("opacity", "1")
    }, 2000);

    setTimeout(function() {
        $('.boom-outer').css("opacity", "1")
    }, 3000);   

    setTimeout(function() {
        boom_flicker();
    }, 4000);
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

    infinite_timer("#spark-corner");
}, 1000)

setTimeout(function () {
    flicker_slow(".subheading", 3, function () {
        $(".subheading").fadeIn("fast");
    })

    infinite_timer(".subheading");
}, 1300)

setTimeout(function () {
    flicker_spark("#spark", 3, function () {
        $("#spark").fadeIn("fast");
    })
}, 1000)

setTimeout(function () {
    flicker_slow(".bang", 4, function () {
        $(".bang").fadeIn("fast");
    })

    infinite_timer(".bang");
}, 950)

setTimeout(function () {
    flicker_slow(".chiddy", 4, function () {
        $(".chiddy").fadeIn("fast");
    })

    infinite_timer(".chiddy");
}, 1150)

setTimeout(function () {
    flicker_slow("#act-one", 4, function () {

    })
}, 1550)

setTimeout(function () {
    flicker_quick("#act-two", 4, function () {

    })
}, 2000)

setTimeout(function () {
    flicker_slow("#act-three", 4, function () {

    })
}, 2250)

setTimeout(function () {
    boom_flicker()
}, 5000)



// JQUERY EVENTS

$(document).ready(function() {
	$('.eng').on("click", function() {
		$('.ent').toggleClass('eng_clicked_ent');
        $('.ent').removeClass('des_clicked_ent clicked');

		$('.des').toggleClass('eng_clicked_des');
        $('.des').removeClass('ent_clicked_des clicked');

        if ( $(this).hasClass('clicked') ) {
            $('.eng-desc').removeClass('opacity');
        } else {
            $('.eng-desc').addClass('opacity');
        }
        
        $('.ent-desc').removeClass('opacity');
        $('.des-desc').removeClass('opacity');

        $(this).removeClass('ent_clicked_eng des_clicked_eng');
		$(this).toggleClass('clicked');
	});
	$('.ent').on("click", function() {
		$('.eng').toggleClass('ent_clicked_eng');
        $('.eng').removeClass('des_clicked_eng clicked');

		$('.des').toggleClass('ent_clicked_des');        
        $('.des').removeClass('eng_clicked_des clicked');

        if ( $(this).hasClass('clicked') ) {
            $('.ent-desc').removeClass('opacity');
        } else {
            $('.ent-desc').addClass('opacity');
        }

        $('.eng-desc').removeClass('opacity');
        $('.des-desc').removeClass('opacity');

        $(this).removeClass('eng_clicked_ent des_clicked_ent');
		$(this).toggleClass('clicked');
	});
	$('.des').on("click", function() {
		$('.eng').toggleClass('des_clicked_eng');
        $('.eng').removeClass('ent_clicked_eng clicked');

		$('.ent').toggleClass('des_clicked_ent');
        $('.ent').removeClass('eng_clicked_ent clicked');

        if ( $(this).hasClass('clicked') ) {
            $('.des-desc').removeClass('opacity');
        } else {
            $('.des-desc').addClass('opacity');
        }

        $('.eng-desc').removeClass('opacity');
        $('.ent-desc').removeClass('opacity');

        $(this).removeClass('ent_clicked_des eng_clicked_des');
		$(this).toggleClass('clicked');
	});
});
