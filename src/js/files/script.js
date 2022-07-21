// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js"
// Подключение списка активных модулей
import { flsModules } from "./modules.js"
import irregular from './../../irregular_list.json'

if (innerWidth < 767) {
	document.querySelectorAll(".grid__tense").forEach((e) => {
		e.classList.contains("additional-padding") ||
			e.classList.add("additional-padding")
	})
}

irregular.toString()
if (
	-1 !=
	[
		"/irregular-verbs.html",
		"/English_cheat-sheet/irregular-verbs.html",
		"kurkuza.github.io/English_cheat-sheet/irregular-verbs.html",
		"https://kurkuza.github.io/English_cheat-sheet/irregular-verbs.html",
	].indexOf(location.pathname)
) {
	let e = document.querySelector(".table")
	function t(t) {
		for (let s = 0; s < t.length; s++) {
			let i = `
			<tr>
			<td>${t[s].base}</td>
			<td>${t[s].pastSimple}</td>
			<td>${t[s].pastParticiple}</td>
			</tr>`
			e.innerHTML += i
		}
	}
	t(irregular.verbs)
	// Search Input
	document.querySelector("#search").oninput = function () {
		let val = this.value.toUpperCase().trim(),
			tr = document.querySelectorAll("tbody tr")

		if (val != '') {
			tr.forEach(function (elem) {
				if (elem.innerText.toUpperCase().search(val) == -1) {
					elem.classList.add('hide')
				}
				else {
					elem.classList.remove('hide')
				}
			})
		} else {
			tr.forEach(function (elem) {
				elem.classList.remove('hide')
			})
		}
	}

}