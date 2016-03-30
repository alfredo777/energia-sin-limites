/* global jQuery:false */
jQuery(document).ready(function() {
	
	"use strict";
	
	window.breadcrumb_align();
	window.theme_row();
	window.theme_menu();
	window.sticky_menu();
	window.random();
});


breadcrumb_align = function () {

	"use strict";
	
	title_type_2();
	title_type_3();
	title_type_1();
	
	function title_type_2() {
		
		var title = jQuery(".title-type-2");
		var titleHeight = title.height();
		var breadcrumb = jQuery(".title-type-2").find(".breadcrumb");
		var breadcrumInnerbHeight = breadcrumb.innerHeight();
		
		if ( title.length ) {
				
			if ( title.hasClass( "title-breadcrumb-vertical-centered" ) ) {
			
				var breadcrumbMargin = (titleHeight - breadcrumInnerbHeight) / 2;
				jQuery(breadcrumb).css("margin-top", breadcrumbMargin+"px").css("margin-bottom", breadcrumbMargin+"px");
				
			} else if ( title.hasClass( "title-breadcrumb-bottom" ) ) {
			
				var breadcrumbMarginTop = titleHeight - breadcrumInnerbHeight;
				jQuery(breadcrumb).css("margin-top", breadcrumbMarginTop+"px");
				
			}
		
		}
		
		
	}
	
	function title_type_3() {
		
		var title = jQuery(".title-type-3");
		var titleHeight = title.height();
		var breadcrumb = jQuery(".title-type-3").find(".breadcrumb");
		var breadcrumInnerbHeight = breadcrumb.innerHeight();
		
		if ( title.length ) {
				
			if ( title.hasClass( "title-breadcrumb-vertical-centered" ) ) {
			
				var breadcrumbMargin = (titleHeight - breadcrumInnerbHeight) / 2;
				jQuery(breadcrumb).css("margin-top", breadcrumbMargin+"px").css("margin-bottom", breadcrumbMargin+"px");
				
			} else if ( title.hasClass( "title-breadcrumb-bottom" ) ) {
			
				var breadcrumbMarginTop = titleHeight - breadcrumInnerbHeight;
				jQuery(breadcrumb).css("margin-top", breadcrumbMarginTop+"px");
				
			}
		
		}
		
		
	}
	
	function title_type_1() {
		
		var title = jQuery(".title-type-1");
		var titleHeight = title.height();
		var breadcrumb = jQuery(".title-type-1").find(".breadcrumb");
		var breadcrumInnerbHeight = breadcrumb.innerHeight();
		
		if ( title.length ) {
				
			if ( title.hasClass( "title-breadcrumb-vertical-centered" ) ) {
			
				var breadcrumbMargin = (titleHeight - breadcrumInnerbHeight) / 2;
				jQuery(breadcrumb).css("margin-top", breadcrumbMargin+"px").css("margin-bottom", breadcrumbMargin+"px");
				
			} else if ( title.hasClass( "title-breadcrumb-bottom" ) ) {
			
				var breadcrumbMarginTop = titleHeight - breadcrumInnerbHeight;
				jQuery(breadcrumb).css("margin-top", breadcrumbMarginTop+"px");
				
			}
		
		}
		
	}
	
};

theme_row = function () {

	"use strict";

	fullWidthRow();
	
	function fullWidthRow() {
		
		var rows = jQuery(".full-width-theme-row");
		
		jQuery.each( rows, function ( key, value ) {
			
			var the_row = jQuery( this );
			var container = jQuery('#main .container');
			var the_row_margin = the_row.css('margin-left');
			var offset = - container.offset().left - parseInt(the_row_margin, 10 ) - 15;
			var window_width = jQuery( window ).width();
			
			if (jQuery('.rtl-support').length) {
				
				the_row.css( {'right': offset, 'width': window_width} );
				
			}else{
				
				the_row.css( {'left': offset, 'width': window_width} );
				
			}
			
			if ( the_row.hasClass( "stretch-theme-row" ) ) {
				var the_row_padding_left = ( offset*-1 );
				var the_row_padding_right = window_width - the_row_padding_left - container.width() + parseInt(the_row_margin, 10 ) + parseInt(the_row.css('margin-right'), 10 );
				if ( 0 > the_row_padding_left ) {
					the_row_padding_left = 0;
				}
				if ( 0 > the_row_padding_right ) {
					the_row_padding_right = 0;
				}
				the_row.css( { 'padding-left': the_row_padding_left + 'px', 'padding-right': the_row_padding_right + 'px' } );
			}
	
		} );
		
	}
	
	jQuery( window ).unbind( 'resize', fullWidthRow ).on( 'resize', fullWidthRow );

};

theme_menu = function () {
	
	"use strict";

	themeMenu();
	
	function themeMenu() {
		var items = jQuery('.overlapblackbg, .slideLeft');
		var wsmenucontent = jQuery('.wsmenucontent');
		
		var menuopen = function() {
			jQuery(items).removeClass('menuclose').addClass('menuopen');
		};
		var menuclose = function() { 
			jQuery(items).removeClass('menuopen').addClass('menuclose');
		};
	
		jQuery('#navToggle').on( "click",function(){
			if (wsmenucontent.hasClass('menuopen')) {
				jQuery(menuclose);
			} else {
				jQuery(menuopen);
			}
		});
		wsmenucontent.on( "click",function(){
			if (wsmenucontent.hasClass('menuopen')) {
				jQuery(menuclose);
			}
		});
		
		jQuery('#navToggle,.overlapblackbg').on('click', function(){
			jQuery('.wsmenucontainer').toggleClass( "mrginleft" );
		});
	
		jQuery('.wsmenu-list li').has('.wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow icon icon-triangle-big-1-01"></i></span>');
		
		jQuery('.wsmenu-list li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow icon icon-triangle-big-1-01"></i></span>');
			
		jQuery('.wsmenu-mobile').on( "click",function(){
			jQuery('.wsmenu-list').slideToggle('slow');
		});
		jQuery('.wsmenu-click').on( "click",function(){
		jQuery(this).siblings('.wsmenu-submenu').slideToggle('slow');
		jQuery(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
		jQuery(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');
		jQuery(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');
		jQuery(this).siblings('.megamenu').slideToggle('slow');
		});
			
		window.onresize = function(event) {
			console.log('window resize');
			if(jQuery(window).width() > 781){
				jQuery('.wsmenu-submenu').removeAttr("style");
	 			jQuery('.wsmenu-list').removeAttr("style");
	 		}
	    };
	}

};

sticky_menu = function () {

	"use strict";

	stickyMenu();
	stickyHover();
	stickyWindowResize();
	
	function stickyMenu() {
	
		var myWindow = jQuery(window);
		var myHeader = jQuery('.nav-sticky');
		
		myWindow.scroll( function (){
			if (myWindow.scrollTop() === 0){
				myHeader.removeClass("nav-is-sticky");
			}else{
				myHeader.addClass("nav-is-sticky");
			}
		});
		
		if (jQuery('.nav-sticky').length) {
			var sticky = new Waypoint.Sticky({
			  	element: jQuery('.nav-sticky')[0],
				offset: function() {
					return -this.element.clientHeight;
				}
			});
	
		}
		
	}
	
	function stickyHover() {
		
		if (jQuery('.nav-sticky').length) {
		
			var body = document.body;
			var timer;
			
			window.addEventListener('scroll', function() {
			  clearTimeout(timer);
			  if(!body.classList.contains('disbale-sticky-transition')) {
				body.classList.add('disbale-sticky-transition');
			  }
			  
			  timer = setTimeout(function(){
			    body.classList.remove('disbale-sticky-transition');
			  },500);
			}, false);
		}
		
	}
	
	function stickyWindowResize() {
		
		var delay = (function(){
		  var timer = 0;
		  return function(callback, ms){
		    clearTimeout (timer);
		    timer = setTimeout(callback, ms);
		  };
		})();
		
		var body = document.body;
		
		jQuery( window ).resize(function() {
		
			if(!body.classList.contains('disbale-sticky-transition')) {
				body.classList.add('disbale-sticky-transition');
			}
		
		    delay(function(){
		      body.classList.remove('disbale-sticky-transition');
		    }, 500);
			
			
		} );
		
	}
	
	
};

random = function () {
	
	"use strict";
	
	smoothScrolling();
	refreshWaypoint();
	percentElement();
	scrollAnimation();
	videoBg();
	parallaxRow();
	back_to_top();
	headerSearch();
	tabElement();
	messageBox();
	progressBar();
	accordionElement();
	counterElement();
	

	function smoothScrolling() {
	
	  jQuery('.bigmegamenu a[href*="#"]:not([href="#"])').on( "click",function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      
	      var target = jQuery(this.hash);
	      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	      
	      var sticky_nav = jQuery('.nav-sticky');
	      
	      if (sticky_nav.length) {
	      
			  var sticky_offset = sticky_nav.outerHeight(true);
		      
	      }else{
	      
		      vsticky_offset = 0;
		      
	      }
	      
	      if (target.length) {
	        jQuery('html, body').animate({
	          scrollTop: target.offset().top-sticky_offset
	        }, 1000);
	        return false;
	      }
	    }
	  });
		
	}
	
	function refreshWaypoint() {
	
		if (jQuery('.megafolio-container').length) {
		
			setTimeout(function(){
				Waypoint.refreshAll();
			}, 1000);
			
		}
	
	}
	
	function percentElement() {
		
		jQuery(".percentage-counter-element").each(function () {
		
			var barColorValue = jQuery(this).find('.chart').data( 'barcolor' ) || "#363636";
			var trackColorValue = jQuery(this).find('.chart').data( 'trackcolor' ) || "#ebebeb";
			var lineWidthValue = jQuery(this).find('.chart').data( 'linewidth' ) || "5";
			var sizeValue = jQuery(this).find('.chart').data( 'size' ) || 160;
			var animateValue = jQuery(this).find('.chart').data( 'animate' ) || 2000;
			
			if ( jQuery(this).data( 'chart-offset' ) ) {
				var chart_offset = jQuery(this).data('chart-offset') * 100 + '%';
			}else{
				chart_offset = "90%";
			}
		
			jQuery(this).waypoint(function () {
				
				jQuery(this.element).find('.chart').easyPieChart({ barColor: barColorValue ,trackColor: trackColorValue,scaleColor: false,lineCap: 'butt',lineWidth: lineWidthValue,size: sizeValue,animate: animateValue });
				
				
			}, {
				offset: chart_offset
			});
			
		});
		
	}
	
	function scrollAnimation() {
	
		jQuery( '.animated' ).each( function () {
			if ( jQuery(this).data( 'animation-type' ) ) {
			
				jQuery(this).css('opacity', 0);
				var animation_type = jQuery(this).data( 'animation-type' );
				var animation_delay = jQuery(this).data( 'animation-delay' ) * 100;
				var animation_offset = jQuery(this).data('animation-offset') * 100 + '%';
				
				if ( jQuery(this).data( 'animation-delay' ) ) {
					
					animation_delay = jQuery(this).data( 'animation-delay' ) * 1000;
					
				}else{
					
					animation_delay = 0;
				}
				
				jQuery(this).waypoint(function() {
					var animatedElm = jQuery(this.element);
					setTimeout(function(){
						animatedElm.css('opacity', 1);
					    animatedElm.addClass(animation_type);
					}, animation_delay);
				}, {
				    offset: animation_offset
				});
								
			}
		});
		
	}
	
	function videoBg() {
		jQuery( '.row-video-bg' ).each( function () {
	
			if ( jQuery(this).data( 'row-video-bg' ) ) {
			
				var video_url = jQuery(this).data( 'row-video-bg' );
				var video_id = getVideoId( video_url );
	
				if ( video_id ) {
					createVideoBg( jQuery(this), video_id );
				}
		
			}
			
		} );
	}

	function getVideoId( video_url ) {
	
		var video_id = video_url.match( /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/ );
	
		if(video_id !== null) {
			return video_id[ 1 ];
		}
	}

	function resizeVideoBg( videoBg ) {
	
		var videoInnerHeight = videoBg.innerHeight();	
		var videoInnerWidth = videoBg.innerWidth();
	
		if ( ( videoInnerHeight / videoInnerWidth ) < ( 9 / 16 ) ) {
			
			var iframeHeight = videoInnerWidth * ( 9 / 16 );
			var iframeWidth = videoInnerWidth;
			var marginTop = ( iframeHeight - videoInnerHeight ) / 2 * -1;
			var marginLeft = ( iframeWidth - videoInnerWidth ) / 2 * -1;
	
		} else {
		
			iframeWidth = videoInnerHeight * ( 16 / 9 );
			iframeHeight = videoInnerHeight;
			marginLeft = ( iframeWidth - videoInnerWidth ) / 2 * -1;
			marginTop = ( iframeHeight - videoInnerHeight ) / 2 * -1;
	
		}
	
		videoBg.find( '.video-bg iframe' ).css( { marginLeft: marginLeft + 'px', marginTop: marginTop + 'px', width: iframeWidth + 'px', height: iframeHeight + 'px' } );
	}
	
	
	function createVideoBg( videoBg, videoId) {
	
		if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
		
			$.getScript('//www.youtube.com/iframe_api');
			
			setTimeout( function () {
				createVideoBg( videoBg, videoId);
			}, 100 );
	
			return;
		}
	
		var iframe = videoBg
		.prepend( '<div class="video-bg"><div class="iframe"></div></div>' )
		.find( '.iframe' );
	
		new YT.Player( iframe[ 0 ], {
			width: '100%',
			height: '100%',
			videoId: videoId,
			playerVars: {autoplay: 1,controls: 0,enablejsapi: 1,iv_load_policy: 3,rel: 0,showinfo: 0,playlist: videoId},
			events: { onReady: function ( event ) { event.target.setLoop( true ).mute();}
			}
		} );
	
		resizeVideoBg( videoBg );
	
		jQuery( window ).on( 'resize', function () { resizeVideoBg( videoBg ); } );
		
	}

	function parallaxRow() {

		jQuery( '.parallax-bg' ).each( function () {
		
			if(!jQuery( this ).data( 'parallax-value' )){
				var parallaxValue = 1.5 * 100;
			}else{
				parallaxValue = jQuery( this ).data( 'parallax-value' ) * 100;
			}
			
			var parallaxImage = jQuery( this ).data( 'parallax-image-bg' );
			var videoId = getVideoId( parallaxImage );
			
			var parallaxBg = jQuery( '<div class="parallax-img">' ).prependTo( jQuery( this ) );
			parallaxBg.height( parallaxValue + '%' );

			if ( videoId ) {
				createVideoBg( parallaxBg, videoId );
			} else {
				parallaxBg.css( 'background-image', 'url(' + parallaxImage + ')' );
			}

			var parallaxSpeed = (parallaxValue - 100)* -1;

			parallaxBg.attr( 'data-bottom-top', 'top: ' + parallaxSpeed + '%;' ).attr( 'data-top-bottom','top: 0%;' );
			
		} );

		if ( window.skrollr ) {
			skrollr.init({
				forceHeight: false,
				smoothScrolling: true,
				mobileCheck: function () {
					return false;
				}
			});
			return;
		}
		
	}
	
	function back_to_top() {
		if (jQuery('#back-to-top').length) {
		    var scrollTrigger = 100,
		        backToTop = function () {
		            var scrollTop = jQuery(window).scrollTop();
		            if (scrollTop > scrollTrigger) {
		                jQuery('#back-to-top').addClass('show');
		            } else {
		                jQuery('#back-to-top').removeClass('show');
		            }
		        };
		    backToTop();
		    jQuery(window).on('scroll', function () {
		        backToTop();
		    });
		    jQuery('#back-to-top').on('click', function (e) {
		        e.preventDefault();
		        jQuery('html,body').animate({
		            scrollTop: 0
		        }, 500);
		    });
		}
	}
	
	function headerSearch() {
		
		jQuery( ".search-form-type-2 .icon" ).on( "click",function() {
		  jQuery( ".search-form-type-2 .search" ).focus();
		});
		
	}
	
	function tabElement() {
	
		jQuery( '.tabsWrap' )
		.on( 'init', function() {
			//jQuery( '.tab-item' ).hide();
			
			var tabs = jQuery( this ).find( 'ul.tabs' ).first();
			tabs.find( 'li:first a' ).trigger( "click" );

		})
		.on( 'click', 'ul.tabs li a', function() {
			var tab          = jQuery( this );
			var tabs_wrapper = tab.closest( '.tabsWrap' );
			var tabs         = tabs_wrapper.find( 'ul.tabs' );

			tabs.find( 'li' ).removeClass( 'active' );
			tabs_wrapper.find( '.tab-item' ).hide();

			tab.closest( 'li' ).addClass( 'active' );
			tabs_wrapper.find( tab.attr( 'href' ) ).show();

			return false;
		})
		.trigger( 'init' );
	
	}
	
	function messageBox() {

		jQuery('.message-box .cancel-btn').each(function() {
			jQuery(this).on('click', function() { jQuery(this).parent( ".message-box" ).hide(); });
		});
	
	}
	
	function progressBar(){
	
		jQuery(".progress-bar-animation .progress-barWrap").each(function() {
			jQuery(this)
			.data("origWidth", jQuery(this).width())
			.width(0)
			.animate({
				width: jQuery(this).data("origWidth")
			}, 1200);
			if ( jQuery(this).children().length > 0 ) {
				jQuery(this).children('.progress-bar-counter').delay( 600 ).fadeIn( 600 );
			}
		});
		
	}
	
	function accordionElement(){
		jQuery('.panel-toggle-false .panel-collapse').collapse({toggle: false});
		jQuery('.accordion-element .panel').each(function() {
			if(!jQuery(this).children(".panel-collapse").hasClass('in')){
				jQuery(this).find('a').addClass('collapsed');
			}
		});
	}
	
	
	function counterElement(){
		jQuery('.counter-element .counter').counterUp({ delay: 10, time: 1000 });
	}

};