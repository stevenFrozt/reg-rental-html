import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"

new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: false,
	autoplay: {
		delay: 8000
	},
	slidesPerView: 1,
	loopAddBlankSlides: true,

	initialSlide: 1,
	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
			initialSlide: 0
		}
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar"
	}
})
