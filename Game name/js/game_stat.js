var red; var green; var blue = 0; var col;
//bars
function hpload()
{
	var canvas = document.getElementById("hpbar");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 1000, 500);
	let hpp1 = 0;
	red = 255; green = 0;
	while (hpp1 != hp)
	{
		if (hpp1 < 50)
			green+=5.1;
		else
			red -= 5.1;
		hpp1++;
	}
	red = Math.round(red); green = Math.round(green);
	if (red < 16)
		col = "#0"+(red).toString(16)+(green).toString(16)+"00";
	else
		if (green < 16)
			col = "#"+(red).toString(16)+"0"+(green).toString(16)+"00";
		else
			col = "#"+(red).toString(16)+(green).toString(16)+"00";
	//col = "#"+(red).toString(16)+(green).toString(16)+"00";
	ctx.beginPath();
	ctx.fillStyle = col;
	ctx.rect(0, 0, hp*10, 500);
	ctx.fill();
}
function fdload()
{
	var canvas = document.getElementById("fdbar");
	var ctx = canvas.getContext('2d');
	ctx.clearRect (0, 0, 1000, 500);
	ctx.beginPath();
	if (fd >0)
	{
		ctx.fillStyle = "#EC9D31";
		ctx.rect (0, 0, Math.round(fd/fdmax*1000), 500);
		ctx.fill();
	}
}
function wtload()
{
	var canvas = document.getElementById("wtbar");
	var ctx = canvas.getContext('2d');
	ctx.clearRect (0, 0, 1000, 500);
	ctx.beginPath();
	if (wat >0)
	{
		ctx.fillStyle = "#229EEA";
		ctx.rect (0, 0, Math.round(wat/watmax*1000), 500);
		ctx.fill();
	}
}
function ltload()
{
	var canvas = document.getElementById("ltbar");
	var ctx = canvas.getContext('2d');
	ctx.clearRect (0, 0, 1000, 500);
	ctx.beginPath();
	if (!tryap)
	{
		if (light > 0)
		{
			if (!pryvi)
				ctx.fillStyle = "#D1D61B";
			else
				ctx.fillStyle = "#E3A800";
			ctx.rect (0, 0, Math.round(light/lightmax*800), 500);
			ctx.fill();
		}
		else
		{
			ctx.fillStyle = "black";
			ctx.rect (0, 0, -light*160, 500);
			ctx.fill();
		}
	}
	else
	{
		if (light > 0)
		{
			ctx.fillStyle = "#E3A800";
			ctx.rect (0, 0, Math.round(light/lightmax*800), 500);
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
	ctx.clearRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
	ctx.fillStyle = "#229EEA";
	//(1000-Math.round(bgbtlst/bgbtlstmax*1000))
	ctx.beginPath();
	ctx.moveTo(i*100*quality+100*quality, j*100*quality+85*quality);
	ctx.lineTo(i*100*quality, j*100*quality+85*quality);
	ctx.lineTo(i*100*quality, j *100*quality + 20*quality +(65*quality-Math.round(bgbtlst/bgbtlstmax*65*quality)));
	ctx.lineTo(i*100*quality+100*quality, j *100*quality + 20*quality + (65*quality-Math.round(bgbtlst/bgbtlstmax*65*quality)));
	//ctx.rect(i*1000, j*1000+200 + (650-Math.round(bgbtlst/bgbtlstmax*650)), 1000, 1000-350);
	ctx.fill();
	ctx.drawImage(bgbtl,i*100*quality, j*100*quality, 100*quality, 100*quality);
}
function statout()//вывод стат
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
	if (krest)
	{
		document.getElementById("bns").style.display = "block";
		document.getElementById("bns").innerHTML += "Крыж працуе яшчэ " + krest + "хадоў.";
	}
	if (!superreg && !tryap && !krest)
	{
		document.getElementById("bns").style.display = "none";
	}
	document.getElementById("coords").innerHTML = "x: " + plposx + "y: " + plposy;
	document.getElementById("lv").innerHTML = "Паверх: -" + lvl;
	document.getElementById("kl").innerHTML = "Забіта монстраў: " + kills;
	let check = document.getElementById("stattext").checked;
	if (check)
	{
		document.getElementById("hp").innerHTML = "Здароўе:"+ hp + "/" + hpmax + ";<br>";
		hpload();
		if (fd > 0)
		{
			document.getElementById("fd").innerHTML = "Ежа:" + Math.round(fd/fdmax*100) + "%;<br>";
			fdload();
		}
		else
		{
			document.getElementById("fd").innerHTML = "Еж0а:0%;<br>";
			fdload();
		}
		if (wat > 0)
		{
			document.getElementById("wat").innerHTML = "Вада:" + Math.round(wat/watmax*100) + "%;<br>";
			wtload();
		}
		else
		{
			document.getElementById("wat").innerHTML = "Вада:0%;<br>";
			wtload();
		}
		if (light > 0)
		{
			document.getElementById("lt").innerHTML = "Святло:" + Math.round(light/lightmax*100) + "%;<br>";
			ltload();
		}
		else
		{
			document.getElementById("lt").innerHTML = "Святло:0%;<br>";
			ltload();
		}
	}
	else
	{
		document.getElementById("hp").innerHTML = "<br>";
		hpload();
		if (fd > 0)
		{
			document.getElementById("fd").innerHTML = "<br>";
			fdload();
		}
		else
		{
			document.getElementById("fd").innerHTML = "<br>";
			fdload();
		}
		if (wat > 0)
		{
			document.getElementById("wat").innerHTML = "<br>";
			wtload();
		}
		else
		{
			document.getElementById("wat").innerHTML = "<br>";
			wtload();
		}
		if (light > 0)
		{
			document.getElementById("lt").innerHTML = "<br>";
			ltload();
		}
		else
		{
			document.getElementById("lt").innerHTML = "<br>";
			ltload();
		}
	}
}