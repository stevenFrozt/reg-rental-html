const accordion = document.getElementsByClassName("accordion")

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active")
		removeActive(i)
		let panel = this.children[1]
		let plus = this.children[0].children[1].children[0]
		let minus = this.children[0].children[1].children[1]

		if (this.classList.contains("active")) {
			plus.classList.toggle("hidden")
			minus.classList.remove("hidden")
		} else {
			plus.classList.remove("hidden")
			minus.classList.toggle("hidden")
		}
		panel.classList.toggle("accordion-panel--show")
	})
}

function removeActive(index) {
	const accordion = document.getElementsByClassName("accordion")
	for (let i = 0; i < accordion.length; i++) {
		if (index !== i) {
			accordion[i].classList.remove("active")
			accordion[i].children[1].classList.remove(
				"accordion-panel--show"
			)
			let plus = accordion[i].children[0].children[1].children[0]
			let minus = accordion[i].children[0].children[1].children[1]

			plus.classList.remove("hidden")
			minus.classList.add("hidden")
		}
	}
}
