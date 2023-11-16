const h2 = document.querySelector('h2');
const pre = document.querySelector('.container');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const percent = document.querySelector('.precent');
let i = 0;

let interval = setInterval(() => {
	number.innerHTML = i + '<span>%</span>';
	percent.style.width = i + '%';
	i++;
	if (i == 101) {
		clearInterval(interval);
		setTimeout(() => {
			pre.style.opacity = '0';
			pre.style.visibility = 'hidden';
			body.style.background = '#96a9f4';
			h2.style.opacity = '1';
			h2.style.visibility = 'visible';
		});
	}
}, 100);
