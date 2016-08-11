$(document).ready(function() {

	// BEGIN FLEXSLIDER

	$('.flexslider').flexslider({
        animation: "fade", // slide or fade
        controlsContainer: ".flex-container" // the container that holds the flexslider
    });

    $("div.catal_arr_right").click(function() {
        $(".project-boxes " + " li.flex-nav-next a").click();
    });

    $("div.catal_arr_left").click(function() {
        $(".project-boxes " + " li.flex-nav-prev a").click();
    });

	// END FLEXSLIDER

	// GALLARY FLEXSLIDER
	var li_flexl_count
	$.each($(".srub_main_gal .flex-control-nav li"),function() {
		console.log($(this).index()+1);
		//$(this).text($(this).index()+1);
		$(this).append('<span>'+($(this).index()+1)+'</span>');
	});
	// END GALLARY FLEXSLIDER

	//Customer_submenu
	$("#to_customer").click(function(event) {
		event.stopPropagation();
		$("div.to_customer_submenu").toggleClass('none');
		$(".custom_arr").toggleClass('cust_arr_pressed');

	});

	$(document).click(function(event) {
		if (!($(event.target).closest("div.to_customer_submenu").length)) {
			if (!($("div.to_customer_submenu.none").hasClass('none'))) {
				$('div.to_customer_submenu').addClass("none");
				$(".custom_arr").toggleClass('cust_arr_pressed');
			}
		}
	});

	//END Customer submenu

	var fancybox_options_array ={
				"wrapCSS": "call",
				"padding": 0,
				helpers: {
					overlay: {
						locked: false,
						opacity: 0.1,
						css: {
							'background': 'rgba(90, 92, 94, 0.8)'
						}
					}
				}
			}

	$("a.present_window").click(function(event) {
			$("a.present_window").fancybox(fancybox_options_array)
		})
})