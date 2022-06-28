function sett()
{
	let io = document.getElementById("settdiv");
	if (io.style.display == "block")
		io.style.display = "none";
	else
	{
		io.style.display = "block";
		let nekv = document.getElementById("kvadr1");
		nekv.style.display = "none";
		nekv = document.getElementById("kvadr2");
		nekv.style.display = "none";
		nekv = document.getElementById("kvadr");
		nekv.style.display = "block";
		nekv = document.getElementById("kvadrchs");
		nekv.checked = "true";
	}
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
	textt = document.getElementById('bns');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('inf');
	textt.style.fontSize = inp.value + "px";
	textt = document.getElementById('coords');
	textt.style.fontSize = inp.value + "px";
}
function razmbary()
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
function razmbarx()
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
function razmoknchg()
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
	}
	else
	{
		let nekv = document.getElementById("kvadr1");
		nekv.style.display = "block";
		nekv = document.getElementById("kvadr2");
		nekv.style.display = "block";
		nekv = document.getElementById("kvadr");
		nekv.style.display = "none";
	}
}
function razmokx()
{
	let inp = document.getElementById("razmokx");
	let pole = document.getElementById("pole");
	pole.style.width = inp.value+"px";
	let pole1 = document.getElementById("pole1");
	pole1.style.width = inp.value+"px";
	let polya = document.getElementById("polya");
	polya.style.width = inp.value+"px";
}
function razmoky()
{
	let inp = document.getElementById("razmoky");
	let pole = document.getElementById("pole");
	pole.style.height = inp.value+"px";
	let pole1 = document.getElementById("pole1");
	pole1.style.height = inp.value+"px";
	let polya = document.getElementById("polya");
	polya.style.height = inp.value+"px";
}
function stattextchg()
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