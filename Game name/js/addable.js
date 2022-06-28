//INFO
function info()
{
	let io1 = document.getElementById("infodiv");
	if (io1.style.display == "block")
		io1.style.display = "none";
	else
		io1.style.display = "block";

}
//
//AUTHOR
function author()
{
	let io = document.getElementById("auth");
	if (io.style.display == "block")
		io.style.display = "none";
	else
		io.style.display = "block";
}
function GRI(max)//Функция рандома 
{
  return Math.floor(Math.random() * max);
}
function unh()
{
	nazh = 0;
}
function h1()
{
	let io = document.getElementById("settdiv");
	io.style.opacity = "0.3";
}
function unh1()
{
	let io = document.getElementById("settdiv");
	io.style.opacity = "1";
}
function sett()
{
	let io = document.getElementById("settdiv");
	if (io.style.display == "block")
		io.style.display = "none";
	else
		io.style.display = "block";
}
function razmok()
{
	let inp = document.getElementById("razmok");
	let pole = document.getElementById("pole");
	pole.style.width = inp.value+"px";
	pole.style.height = inp.value+"px";
	let pole1 = document.getElementById("pole1");
	pole1.style.width = inp.value+"px";
	pole1.style.height = inp.value+"px";
	let polya = document.getElementById("polya");
	polya.style.width = inp.value+"px";
	polya.style.height = inp.value+"px";
}
//document.getElementsByClassName('mystyle')[0].style.margin = "50px";
function razmtext()
{
	let inp = document.getElementById("razmtext");
	let textt = document.getElementById('hp');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('fd');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('wat');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('lt');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('lv');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('kl');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('bonus');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('inf');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('coords');
	textt.style.fontSize = inp.value + "px";
}
//https://html5css.ru/howto/howto_js_draggable.php
//перетаскивание окошка