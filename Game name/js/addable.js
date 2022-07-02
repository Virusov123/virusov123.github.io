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
function unh()//нажатие кнопок управления
{
	nazh = 0;
}
function h1()//прозрачность настроек
{
	let io = document.getElementById("settdiv");
	io.style.opacity = "0.3";
}
function unh1()//прозрачность настроек
{
	let io = document.getElementById("settdiv");
	io.style.opacity = "1";
}
//https://html5css.ru/howto/howto_js_draggable.php
//перетаскивание окошка