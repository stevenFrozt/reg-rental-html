const html = document.getElementsByTagName("html")[0]
const trigger = document.getElementsByClassName("nav--avatar")

const menu = document.getElementsByClassName("dropdownMenu")
trigger[0].addEventListener("click", () => {
	menu[0].classList.toggle("hidden")
})

onClickOutside(trigger[0], () => menu[0].classList.add("hidden"))

function onClickOutside(element, callback) {
	document.addEventListener("click", e => {
		if (!element.contains(e.target)) callback()
		console.log("test")
	})
}
