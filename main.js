//ZAKLADNI promenne: 
let skore = 0;

let vzdalenost = 50;
let pan = document.querySelector('#panacek');
let panacekX = 0;
let panacekY = 0;
let panacekSirka = 50;
let panacekVyska = 50;

let mince = document.querySelector('#mince');
let minceX = 0;
let minceY = 0;
let minceSirka = 20;
let minceVyska = 20;

let limitY = window.innerHeight; 
let limitX = window.innerWidth;

NacteniStranky();

function NacteniStranky()
{
	//Hudba(); //Neslo mi dat, aby to hralo od zacatku po loadu. Psalo to, ze je potreba interact first, musela jsem to dat do tlacitka, aby se hudba spustila :( 
	zobrazSkore();
	PanacekVychozi();
	PolohaMince();
}

function Hudba()
{
	document.getElementById('hudba').play();
}

function zobrazSkore()
{
  document.querySelector("#score").innerHTML = skore;
}

// 2 VYCHOZI FUNKCE PRO PANACKA A MINCI:
function PanacekVychozi()
{

	window.addEventListener('load', () => {
		pan.style.position = 'absolute';
		pan.style.left = 0;
		pan.style.top = 0;
	})
}

function PolohaMince()
{
	window.addEventListener('load', () => {
		mince.style.position = 'absolute';
		mince.style.left = Math.floor(Math.random() * 500) + 'px';
		mince.style.top = Math.floor(Math.random() * 500) + 'px';  
		
	}
	)
}

// A TADY UZ CHYTANI MINCE A VSE, CO S TIM SOUVISI:

function PanacekPohyb(event) 
{
	
	panacekX = parseInt(pan.style.left);
	panacekY = parseInt(pan.style.top);

	if (event.key === "ArrowLeft" && panacekX-vzdalenost>=0)
	{
	//	console.log('vlevo');
		pan.style.left = panacekX -vzdalenost +"px";
		pan.src='obrazky/panacek-vlevo.png';
	
	}else if (event.key === "ArrowRight" && panacekX+vzdalenost<limitX)
	{
	//	console.log('vpravo');
		pan.style.left = panacekX +vzdalenost +"px";
		pan.src='obrazky/panacek-vpravo.png';
		
	}else if (event.key === "ArrowUp" && panacekY-vzdalenost>=0)
	{
	//	console.log('nahoru');
		pan.style.top = panacekY -vzdalenost +"px";
		pan.src='obrazky/panacek-nahoru.png';
	
	}else if (event.key === "ArrowDown" && panacekY+vzdalenost<=limitY)
	{
		//console.log('dolu');
		pan.style.top = panacekY +vzdalenost +"px";
		pan.src='obrazky/panacek.png';
	
	}
	Kolize();
}

function Kolize()
{
	minceX = parseInt(mince.style.left);
	minceY = parseInt(mince.style.top);
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		document.getElementById('zvukmince').play();
		console.log('prekryvani');  // dukaz, ze mame shodu :)
		skore++;
		document.querySelector("#score").innerHTML = skore;

		//PolohaMince(); toto jsem zkousela tam dat, ALE nic to nedelalo. Asi neco s tim absolute part v puvodni funkci? Tak jsem vzala jen tu regeneraci polohy mince
		mince.style.left = Math.floor(Math.random() * 500) + 'px';
		mince.style.top = Math.floor(Math.random() * 500) + 'px'; 
	}
}



// Bonus Vitezstvi nakonec nemam, protoze mi podminka if (skore=5) zacala ZVYSOVAT skore o 5 po sebrani 1 mince. Tak nechavam byt, nemohla jsem na to prijit.

//Holt muzeme hrat donekonecna :D 