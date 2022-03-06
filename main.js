//ZAKLADNI promenne: 
let vzdalenost = 50;
let pan = document.querySelector('#panacek');
let mince = document.querySelector('#mince');
let skore = document.querySelector('#score');
window.innerHeight = 1080; // jinak? kam? cisla dobre? panacek stale vyjizdi.
window.innerWidth = 1920;

/*let hudba = document.getElementById('hudba');
hudba.play();
*/

// PANACEK - ovladani :
window.addEventListener('load', () => {
	pan.style.position = 'absolute';
	pan.style.left = 0;
	pan.style.top = 0;
})

window.addEventListener('keydown', (e) => {
	let pan = document.querySelector('#panacek');
	switch(e.key){
		case 'ArrowLeft' : pan.style.left = parseInt(pan.style.left) - vzdalenost + 'px' ; console.log('Panak sel doleva'); break;
		case 'ArrowRight' : pan.style.left = parseInt(pan.style.left) + vzdalenost + 'px' ; console.log('Panak sel doprava'); break;
		case 'ArrowUp' : pan.style.top = parseInt(pan.style.top) - vzdalenost + 'px' ; console.log('Panak sel nahoru'); break;
		case 'ArrowDown' : pan.style.top = parseInt(pan.style.top) + vzdalenost + 'px'; console.log('Panak sel dolu'); break;
	}
});

//test reakce - potom vymazu - stejne jako jednorozec
function PohybJedna() {
    let pohni = document.querySelector('#panacek');

    pohni.style.left = '120px';
    pohni.style.top = '660px';
	console.log('test panak');
}
function PohybDva() {
    let move = document.querySelector('#mince');

    move.style.left = '120px';
    move.style.top = '660px';
	console.log('test mince'); //tady kdyz klikneme po panackovi, tak maji stejne souradnice, ale nevypise to console.log.shoda viz nize lekce SKORE
	
}

// MINCE - nahodna lokace 

window.addEventListener('load', () => {
	mince.style.position = 'absolute';
	mince.style.left = Math.floor(Math.random() * 1920) + 'px';
	mince.style.top = Math.floor(Math.random() * 1040) + 'px';  // tak toto rozhodne neni idealni, bude tam urcite pouzite slovo random, ale uplne presne nevim jak 
})


//SKORE - navysovani pri shode

function Shoda()
{

if ((pan.style.top = mince.style.top) && (pan.style.left = mince.style.left)) 
	{
		console.log('shoda');
		skore = parseInt('#score') + 1;   //toto nedela co by melo - proc? protoze v textu mam napsano 0. Ale neumim to prepsat na to, aby to aktvine bralo aktivni hodnotu
		let shoda = document.getElementById('mince');
		shoda.play();
	}
}


// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
	
}
*/

function Vitezstvi()
{
	if (skore = 5)
	{	
	let vitez = document.getElementById('fanfara');
	vitez.play();
	}
}
