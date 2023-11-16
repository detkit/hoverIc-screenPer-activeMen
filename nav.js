const market = document.getElementById('marker');
const item = document.querySelectorAll('nav a');

function indicator(e) {
	market.style.left = e.offsetLeft + 'px';
	market.style.width = e.offsetWidth + 'px';
}

item.forEach((link) => {
	link.addEventListener('click', (e) => {
		indicator(e.target);
	});
});
