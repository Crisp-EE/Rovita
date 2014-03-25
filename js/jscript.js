$(document).ready(function(){
	 /** READ MORE CLICK **/
	$('.readmore').click(function() {
		var currentId = $(this).attr('id');
		$('article.single-news#' + currentId).toggleClass("open", 200, "swing");
	});

	/****************************
	*****************************

	Logo slider

	*****************************
	****************************/

	$('.logoscontainer').carouFredSel({
		auto: true,
		responsive: true,
		width: '100%',
		swipe: {
			onMouse: true,
			onTouch: true
		},//swipe
		items: {
			width: 200,
			visible:{
				min:2,
				max: 6
			}
		},//items
		scroll:{
			items: 1,
			pauseOnHover: true
		}//scroll
	});//slider


	/****************************
	*****************************

	Special slider

	*****************************
	****************************/

	$('.specialcontainer').carouFredSel({
		auto: true,
		responsive: true,
		width: '100%',
		swipe: {
			onMouse: true,
			onTouch: true
		},//swipe
		items: {
			width: 200,
			visible:{
				min:1,
				max: 4
			}
		},//items
		scroll:{
			items: 1,
			pauseOnHover: false
		}//scroll
	});//slider

	/****************************
	*****************************

	Special slider

	*****************************
	****************************/

	$('.slidercontainer').carouFredSel({
		auto: true,
		responsive: true,
		width: '100%',
		swipe: {
			onMouse: true,
			onTouch: true
		},//swipe
		items: {
			width: 200,
			visible:{
				min:1,
				max: 1
			}
		},//items
		scroll:{
			items: 1,
			pauseOnHover: false
		}//scroll
	});//slider


	/*********************************/
	/**************lightbox***********/
	/*******************************/

	$('a.lightbox').nivoLightbox();

});