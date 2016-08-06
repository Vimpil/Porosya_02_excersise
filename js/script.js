$(document).ready(function() {
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
			$(".present_window").fancybox(fancybox_options_array)
		})
})