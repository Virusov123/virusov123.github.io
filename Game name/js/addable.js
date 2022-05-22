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
	io.style.background = "rgba(0, 0, 0, 0.1)";
}
function unh1()
{
	let io = document.getElementById("settdiv");
	io.style.background = "rgba(0, 0, 0, 0.9)";
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
}
//document.getElementsByClassName('mystyle')[0].style.margin = "50px";
function razmtext()
{
	let inp = document.getElementById("razmtext");
	let textt = document.getElementsByClassName('hp');
	textt.style = "width:" + inp.value + "px";
}
//https://html5css.ru/howto/howto_js_draggable.php
//перетаскивание окошка