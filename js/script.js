const modeButton = document.querySelector('.lalalal');
const logo = document.querySelector('.header__logo');
let currentMode = true;

modeButton.addEventListener('click', (e) => changeMode(e));
logo.addEventListener('click', (e) => changeMode(e))


function changeMode(e) {
	const dayCat = logo.children[0];
	const nightCat = logo.children[1];
	const modable = Array.from(document.querySelectorAll('[data-mode]'));
	if (currentMode) {
		modable.forEach(i => i.dataset.mode = 'night');
		nightCat.style.opacity = 0;
		dayCat.style.opacity = 1;
		modeButton.textContent = 'DAY MODE'
		currentMode = false;
	} else {
		modable.forEach(i => i.dataset.mode = 'day');
		nightCat.style.opacity = 1;
		dayCat.style.opacity = 0;
		modeButton.textContent = 'NIGHT MODE'
		currentMode = true;
	}
}


//---------------------welcome--------------------------//

const welcome = document.querySelector('.title');
console.log(welcome);
window.onload = function prom() {
	setTimeout(() => {
		welcome.classList.add('hidden');
	}, 3000);
}


//--------------survey------------//
const surveysection = document.querySelector('.result');
const survey = document.querySelector('.survey__form');
const surveyTitle = document.querySelector('.survey__title');
const game_result = document.querySelector('.result__text');

survey.addEventListener('submit', (e) => {
	e.preventDefault();
	showAnswers(survey, game_result);

	surveysection.hidden = false;

	setTimeout(() => {
		surveysection.classList.remove('hidden');
		window.scrollBy(0, 300);
	}, 0);

})

function showAnswers(srvContainer, ansContainer) {

	let answers = {};
	//Находит все инпуты и записывает их в объект answers. ключ - id, значение - value;
	Array
		.from(srvContainer.querySelectorAll('.survey__input'))
		.forEach(i => answers[i.id] = i.value);
	const places = ansContainer.querySelectorAll('[data-for]');

	places.forEach(i => {
		i.textContent = (!i.textContent || i.textContent[0] === i.textContent[0].toLowerCase()) ?
			answers[`${i.dataset.for}`][0].toLowerCase() + answers[`${i.dataset.for}`].slice(1) :
			answers[`${i.dataset.for}`][0].toUpperCase() + answers[`${i.dataset.for}`].slice(1);

	});
}
