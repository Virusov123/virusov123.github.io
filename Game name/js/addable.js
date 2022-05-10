//INFO
function info()
{
	let io = document.getElementById("infodiv");
	if (io.style.display == "block")
		io.style.display = "none";
	else
		io.style.display = "block";
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
