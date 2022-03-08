//ZAKLADNI promenne: 
let skore = 0
let vzdalenost = 50;
let pan = document.querySelector('#panacek');
let panacekX;
let panacekY;
let panacekSirka;
let panacekVyska;

let mince = document.querySelector('#mince');
let minceX;
let minceY;
let minceSirka;
let minceVyska;

//let skore = document.querySelector('#score');

let limitY = window.innerHeight; // jinak? kam? cisla dobre? panacek stale vyjizdi.
let limitX = window.innerWidth;

// toto budeš potřebovat později 
/*
function Kolize()
{
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		// panacek a mince se prekryvaji
		
	}
}
*/    // .... tento vas priklad neumim apolikovat na to svoje, sla jsem jednodussi cestou, a proto mi to nevychazi


//BASIC FUNKCE - volani
NacteniStranky();


//POHYBOVE FUNKCE - volani



//VSECHNY FUNKCE - deklarace

function NacteniStranky()
{
	//Hudba();
	zobrazSkore();
	PanacekVychozi();
	PolohaMince()
}

function Hudba()
{
	let hudba = document.querySelector('#hudba');
	hudba.play();
	hudba.volume = 0.5;
}

function zobrazSkore()
{
  document.querySelector("#score").innerHTML = skore;
  console.log(skore);
}

// PANACEK - ovladani :
function PanacekVychozi()
{
	window.addEventListener('load', () => {
		pan.style.position = 'absolute';
		pan.style.left = 0;
		pan.style.top = 0;
	})
}

function PanacekPohyb(event) // tady to nesedi na PanacekMove, zblaznilo se to. 
{
	panacekX = parseInt(pan.style.left);
	panacekY = parseInt(pan.style.top);
	console.log(panacekX +panacekSirka); //delete

	if (event.key === "ArrowLeft" && panacekX-vzdalenost>=0)
	{
		console.log('vlevo');
				pan.style.left = panacekX -vzdalenost +"px";
	
	}else if (event.key === "ArrowRight" && panacekX+vzdalenost<limitX)
	{
		console.log('vpravo');
		pan.style.left = panacekX +vzdalenost +"px";
		
	}else if (event.key === "ArrowUp" && panacekY-vzdalenost>=0)
	{
		console.log('nahoru');
		pan.style.top = panacekY -vzdalenost +"px";
	
	}else if (event.key === "ArrowDown" && panacekY+vzdalenost<=limitY)
	{
		console.log('dolu');
		pan.style.top = panacekY +vzdalenost +"px";
	
	}

	//if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) 
	//{mince.style.display='none'};
}


//test reakce - potom vymazu - stejne jako jednorozec
function PohybJedna() {
   // let pan = document.querySelector('#panacek');

    pan.style.left = '120px';
    pan.style.top = '660px';
	console.log('test panak');
}

function PohybDva() {
  //  let mince = document.querySelector('#mince');

    mince.style.left = '120px';
    mince.style.top = '660px';
	console.log('test mince'); //tady kdyz klikneme po panackovi, tak maji stejne souradnice, ale nevypise to console.log.shoda viz nize lekce SKORE
	
}

// MINCE - nahodna lokace 
function PolohaMince()
{
	window.addEventListener('load', () => {
		mince.style.position = 'absolute';
		mince.style.left = Math.floor(Math.random() * 1920) + 'px';
		mince.style.top = Math.floor(Math.random() * 1040) + 'px';  //kdzy jen 500, tak nedoskoci doprava v obrayovce
		
	}
)
}
//SKORE - navysovani pri shode

function Shoda()
{

if ((pan.style.top = mince.style.top) && (pan.style.left = mince.style.left)) 
	{
		console.log('shoda');
		skore = parseInt('#score') + 1; //toto nedela co by melo - proc? protoze v textu mam napsano 0. Ale neumim to prepsat na to, aby to aktvine bralo aktivni hodnotu
		console.log('#score');  
		let shoda = document.getElementById('mince');
		shoda.play();
		//tady je nutno i nastavit, aby se mince pregenrovala, ale jak jednoduse?
		PolohaMince();
	}
}


// toto budeš potřebovat později 
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
	
}
*/    // .... tento vas priklad neumim apolikovat na to svoje, sla jsem jednodussi cestou, a proto mi to nevychazi

function Vitezstvi() 
{
	if (skore = 5)
	{	
	let vitez = document.getElementById('fanfara');
	vitez.play();
	}
}

//funkce Shoda i Vitezstvi jsou prozatim ciste teoreticke. Tak nejak bych si je predstavovala, ale zatim mi nefunguji.
