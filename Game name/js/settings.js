function sett()//открытие настроек
{
	let io = document.getElementById("settdiv");
	if (io.style.display == "block")
		io.style.display = "none";
	else
	{
		io.style.display = "block";
	}
	razmoknchg();
}
function razmok()//размер окна (квадрат)
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
function razmtext()//размер текста
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
	textt = document.getElementById('bns');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('inf');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('coords');
	textt.style.fontSize = inp.value + "px";
}
function razmbary()//размер ячеек стат (высота)
{
	let inp = document.getElementById("razmbary");
	let bar = document.getElementById('hpbar');
	bar.style.height = inp.value + "px";
	bar = document.getElementById('fdbar');
	bar.style.height = inp.value + "px";
	bar = document.getElementById('wtbar');
	bar.style.height = inp.value + "px";
	bar = document.getElementById('ltbar');
	bar.style.height = inp.value + "px";
}
function razmbarx()//размер ячеек стат (ширина)
{
	let inp = document.getElementById("razmbarx");
	let bar = document.getElementById('hpbar');
	bar.style.width = inp.value + "px";
	bar = document.getElementById('fdbar');
	bar.style.width = inp.value + "px";
	bar = document.getElementById('wtbar');
	bar.style.width = inp.value + "px";
	bar = document.getElementById('ltbar');
	bar.style.width = inp.value + "px";
}
function razmoknchg()//галочка квадратного окна
{
	let chs = document.getElementById("kvadrchs");
	if (chs.checked)
	{
		let nekv = document.getElementById("kvadr1");
		nekv.style.display = "none";
		nekv = document.getElementById("kvadr2");
		nekv.style.display = "none";
		nekv = document.getElementById("kvadr");
		nekv.style.display = "block";
		razmok();
	}
	else
	{
		let nekv = document.getElementById("kvadr1");
		nekv.style.display = "block";
		nekv = document.getElementById("kvadr2");
		nekv.style.display = "block";
		nekv = document.getElementById("kvadr");
		nekv.style.display = "none";
		razmokx(); razmoky();
	}
}
function razmokx()//размер окна (ширина)
{
	let inp = document.getElementById("razmokx");
	let pole = document.getElementById("pole");
	pole.style.width = inp.value+"px";
	let pole1 = document.getElementById("pole1");
	pole1.style.width = inp.value+"px";
	let polya = document.getElementById("polya");
	polya.style.width = inp.value+"px";
}
function razmoky()//размер окна (высота)
{
	let inp = document.getElementById("razmoky");
	let pole = document.getElementById("pole");
	pole.style.height = inp.value+"px";
	let pole1 = document.getElementById("pole1");
	pole1.style.height = inp.value+"px";
	let polya = document.getElementById("polya");
	polya.style.height = inp.value+"px";
}
function stattextchg()//вкл/выкл текст стат
{
	let chs = document.getElementById("stattext");
	if (chs.checked)
	{
		let nekv = document.getElementById("stattextsize");
		nekv.style.display = "block";
		statout();
	}
	else
	{
		let nekv = document.getElementById("stattextsize");
		nekv.style.display = "none";
		statout();
	}
}
function chqual()//качество
{
	let chs = document.getElementById("qual");
	if (chs.checked)
	{
		quality = 1;
		coord = 297;
		document.getElementById("pole").width = 700;
		document.getElementById("pole").height = 700;
		document.getElementById("pole1").width = 700;
		document.getElementById("pole1").height = 700;
	}
	else
	{
		quality = 10;
		coord = 2970
		document.getElementById("pole").width = 7000;
		document.getElementById("pole").height = 7000;
		document.getElementById("pole1").width = 7000;
		document.getElementById("pole1").height = 7000;
	}
	draw();
}