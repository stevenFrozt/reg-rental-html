// FOR MOBILE NAV MODAL
const body = document.getElementsByTagName("body")[0]
const navBurger = document.querySelector(".nav--burger")
const navModal = document.querySelector(".nav--modal")
const navClose = document.querySelector("#nav-close")

navBurger.addEventListener("click", () => {
	navModal.classList.remove("nav--modal-hide")
	navModal.classList.add("nav--modal-show")
	body.classList.add("modal-open") // disable body to scroll
})

document.addEventListener("click", e => {
	if (e.target.matches("#nav-close")) {
		navModal.classList.remove("nav--modal-show")
		navModal.classList.add("nav--modal-hide")
		body.classList.remove("modal-open")
	}
})

// navClose.addEventListener("click", () => {
// 	navModal.classList.remove("nav--modal-show")
// 	navModal.classList.add("nav--modal-hide")
// 	body.classList.remove("modal-open")
// })
