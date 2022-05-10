function hpload()
{
	var canvas = document.getElementById("hpbar");
	var ctx = canvas.getContext('2d');
	var grd=ctx.createLinearGradient(-100,250,900,250);
	grd.addColorStop(0,"#ff0000");
	grd.addColorStop(0.5,"#ffff00");
	grd.addColorStop(1,"#00ff00");
	ctx.beginPath();
	ctx.fillStyle = grd;
	ctx.rect(0, 0, hp*10, 500);
	ctx.fill();
}
function fdload()
{
	var canvas = document.getElementById("fdbar");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 1000, 500);
	ctx.beginPath();
	if (fd>0)
	{
		ctx.fillStyle = "#EC9D31";
		ctx.rect(0, 0, Math.round(fd/fdmax*1000), 500);
		ctx.fill();
	}
}
function wtload()
{
	var canvas = document.getElementById("wtbar");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 1000, 500);
	ctx.beginPath();
	if (fd>0)
	{
		ctx.fillStyle = "#229EEA";
		ctx.rect(0, 0, Math.round(wat/watmax*1000), 500);
		ctx.fill();
	}
}
function ltload()
{
	var canvas = document.getElementById("ltbar");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 1000, 500);
	ctx.beginPath();
	if (!tryap)
	{
		if (light>0)
		{
			ctx.fillStyle = "#D1D61B";
			ctx.rect(0, 0, Math.round(light/lightmax*800), 500);
			ctx.fill();
		}
		else
		{
			ctx.fillStyle = "black";
			ctx.rect(0, 0, -light*160, 500);
			ctx.fill();
		}
	}
	else
	{
		if (light>0)
		{
			ctx.fillStyle = "#E3A800";
			ctx.rect(0, 0, Math.round(light/lightmax*800), 500);
			ctx.fill();
		}
		else
		{
			light = 0;
			tryap = 0;
		}
	}
}
//
//Большая бутылка
function bigbottle(i, j)
{
	var canvas = document.getElementById("pole");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(i*1000, j*1000, 1000, 1000);
	ctx.fillStyle = "#229EEA";
	//(1000-Math.round(bgbtlst/bgbtlstmax*1000))
	ctx.beginPath();
	ctx.moveTo(i*1000+1000, j*1000+850);
	ctx.lineTo(i*1000, j*1000+850);
	ctx.lineTo(i*1000, j *1000 + 200 +(650-Math.round(bgbtlst/bgbtlstmax*650)));
	ctx.lineTo(i*1000+1000, j *1000 + 200 + (650-Math.round(bgbtlst/bgbtlstmax*650)));
	//ctx.rect(i*1000, j*1000+200 + (650-Math.round(bgbtlst/bgbtlstmax*650)), 1000, 1000-350);
	ctx.fill();
	ctx.drawImage(bgbtl,i*1000, j*1000, 1000, 1000);
}
function statout()
{
	document.getElementById("bns").innerHTML = "";
	if (superreg)
	{
		document.getElementById("bns").style.display = "block";
		document.getElementById("bns").innerHTML = "Эфект ёта доўжыцца яшчэ " + superreg + " хадоў. <br>";
	}
	if (tryap)
	{
		document.getElementById("bns").style.display = "block";
		document.getElementById("bns").innerHTML += "Факел свеціць ярчэй.";
	}
	if (!superreg && !tryap)
	{
		document.getElementById("bns").style.display = "none";
	}
	document.getElementById("coords").innerHTML = "x: " + plposx + "y: " + plposy;
	document.getElementById("lv").innerHTML = "Паверх: -" + lvl;
	document.getElementById("kl").innerHTML = "Забіта монстраў: " + kills;
	if (hp > 0)
	{
		document.getElementById("hp").innerHTML = "<canvas class = 'hp' id = 'hpbar' width = '1000' height = '500'></canvas>Здароўе :"+ hp + "/" + hpmax + ";";
		hpload();
	}
	else
	{
		window.location.href = '../html/deathhp.html';
	}
	if (fd > 0)
	{
		document.getElementById("fd").innerHTML = "<canvas class = 'fd' id = 'fdbar' width = '1000' height = '500'></canvas>Ежа : " + Math.round(fd/fdmax*100) + "%;";
		fdload();
	}
	else
	{
		document.getElementById("fd").innerHTML = "<canvas class = 'fd' id = 'fdbar' width = '1000' height = '500'></canvas>Ежа : 0%;";
		fdload();
	}
	if (wat > 0)
	{
		document.getElementById("wat").innerHTML = "<canvas class = 'wt' id = 'wtbar' width = '1000' height = '500'></canvas>Вада : " + Math.round(wat/watmax*100) + "%;";
		wtload();
	}
	else
	{
		document.getElementById("wat").innerHTML = "<canvas class = 'wt' id = 'wtbar' width = '1000' height = '500'></canvas>Вада : 0%;";
		wtload();
	}
	if (light > 0)
	{
		document.getElementById("lt").innerHTML = "<canvas class = 'lt' id = 'ltbar' width = '800' height = '500'></canvas>Святло : " + Math.round(light/lightmax*100) + "%;";
		ltload();
	}
	else
	{
		if (light > -5)
		{
			document.getElementById("lt").innerHTML = "<canvas class = 'lt' id = 'ltbar' width = '800' height = '500'></canvas>light : 0;";
			ltload();
		}
		else
		{
			window.location.href = '../html/deathlight.html';
		}
	}
}