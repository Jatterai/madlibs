const modeButton = document.querySelector('.lalalal');
console.log(modeButton)
let currentMode = true;

modeButton.addEventListener('click', (e) => changeMode(e))

function changeMode(e) {
	const logo = document.querySelector('.header__logo');
	const dayCat = logo.children[0];
	const nightCat = logo.children[1];
	const modable = Array.from(document.querySelectorAll('[data-mode]'));
	if (currentMode) {
		modable.forEach(i => i.dataset.mode = 'night');
		nightCat.style.opacity = 0;
		dayCat.style.opacity = 1;
		e.currentTarget.textContent = 'DAY MODE'
		currentMode = false;
	} else {
		modable.forEach(i => i.dataset.mode = 'day');
		nightCat.style.opacity = 1;
		dayCat.style.opacity = 0;
		e.currentTarget.textContent = 'NIGHT MODE'
		currentMode = true;
	}
}


//---------------------welcome--------------------------//

/*const welcome = document.querySelector('.title');
window.onload = function prom() {
	setTimeout(() => {
		welcome.classList.add('hidden');
	}, 3000);
}*/