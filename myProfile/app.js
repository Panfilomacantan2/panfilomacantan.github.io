//Typing function

// let msg = [
// 	'A Second Year College Student',
// 	'A Web Developer',
// 	'A Self-taught Developer',
// 	'Aspiring Full Stack-Developer'
// ];
// let count = 0;
// let letter = '';
// let currentMsg;
// let index = 0;
// let deleteInterval;

// (function type() {
// 	if (count === msg.length) {
// 		count = 0;
// 	}

// 	currentMsg = msg[count];
// 	letter = currentMsg.slice(0, ++index);

// 	document.querySelector('.typing').textContent = letter;

// 	if (letter.length === currentMsg.length) {
// 		index = 0;
// 		count++;
// 	}

// 	setTimeout(type, 300);
// })();

const typing = document.querySelector('.typing')
let msg = [
	'A Second Year College Student',
	'A Web Developer',
	'A Self-taught Developer',
	'Aspiring Full Stack-Developer'
];

const typed = new Typed(".typing", {
	typeSpeed: 50,
	backSpeed: 50,
	strings: msg,
	loop: true
})


let navLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].onclick = function () {
		let j = 0;
		while (j < navLinks.length) {
			navLinks[j++].className = 'nav-link';
		}
		navLinks[i].className = 'nav-link active';
	};
}

const toggler = document.querySelector('.toggler');
const navigation = document.querySelector('#header .navigation');

toggler.addEventListener('click', function () {
	toggler.classList.toggle('active');
	navigation.classList.toggle('active');
});

document.querySelector('.copyright .year').innerText = new Date().getFullYear();

const arrowUp = document.querySelector('#arrowUp .arrow-up');

window.addEventListener('scroll', function () {
	let scrolled = window.scrollY;
let end = (document.documentElement.scrollHeight - window.innerHeight) / 2;
	if (scrolled > end) {
		arrowUp.classList.add('end');
		console.log('End');
	} else {
		arrowUp.classList.remove('end');
		console.log('keep scrolling');

		console.log(scrolled);
	}

	//console.log('scrollY', window.scrollY);
	//console.log('End', document.documentElement.scrollHeight - window.innerHeight);
});
