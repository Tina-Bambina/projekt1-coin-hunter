// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// panacek - ovladani :
let vzdalenost = 50;
let pan = document.querySelector('#panacek');

window.addEventListener('nacteni', () => {
	pan.style.position = 'absolute';
	pan.style.left = 0;
	pan.style.top = 0;
})

window.addEventListener('key', (e) => {
	switch(e.key){
		case 'ArrowLeft' : pan.style.left = parseInt(pan.style.left) - vzdalenost + 'px' ; break;
		case 'ArrowRight' : pan.style.left = parseInt(pan.style.left) + vzdalenost + 'px' ; break;
		case 'ArrowUp' : pan.style.top = parseInt(pan.style.top) - vzdalenost + 'px' ; break;
		case 'ArrowDown' : pan.style.top = parseInt(pan.style.top) + vzdalenost + 'px'; break;
		console.log('text2');
	}
});


function PohybJedna() {
    let pohni = document.querySelector('#panacek');

    pohni.style.left = '420px';
    pohni.style.top = '260px';
	console.log('text');
}


// mince - nahodna lokace - pouzito ze stack overflow
function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
window.onload = function() {
	var img = document.createElement('img');
	img.setAttribute("style", "position:absolute;");
	img.setAttribute("src", "obrazky/mince.png");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
}