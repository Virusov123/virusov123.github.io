var pole = []; var pole1 = []; var inv = []; var items = [];
var opinv = 0; var opcont = 0;
var contmax = 2; var contcord = 0;
var x_inv = 0; var y_inv = 0;
var maxwidth = 31; var maxheight = 31;
var xblst; var yblst;
var minsz = 7; var maxsz = 3;
var lvl = 1; var lev = 0; var nazh = 0;
var plposx; var plposy;
var tryap = 0;
var debugonn = 0;
var perreg = 0;
var lightmax = 200; var light = lightmax;
var hpmax = 100; var hp = hpmax;
var fdmax = 800; var fd = fdmax;
var watmax = 500; var wat = watmax;
var bgbtlstmax = watmax*2; var bgbtlst = bgbtlstmax;
var xvyh;
var yvyh;
//wall_floor
	var stena = new Image();
	stena.src = "../img/pol_steny/stena1.jpg";
	var stenagr = new Image();
	stenagr.src = "../img/pol_steny/stena3.jpg";
	var pol = new Image();
	pol.src = "../img/pol_steny/pol3.jpg";
	var polgr = new Image();
	polgr.src = "../img/pol_steny/pol1.jpg";
	var stenat = new Image();
	stenat.src = "../img/pol_steny/stenat.jpg";
//
//pers
	var perspfg = new Image();
	perspfg.src = "../img/pers/persp.png";
	var perslfg = new Image();
	perslfg.src = "../img/pers/persl.png";
	var perspfn = new Image();
	perspfn.src = "../img/pers/perspfn.png";
	var perslfn = new Image();
	perslfn.src = "../img/pers/perslfn.png";
//
//add_floor
	var kvsh = new Image();
	kvsh.src = "../img/pol_steny/kuvshin.png";
	var lzh = new Image();
	lzh.src = "../img/pol_steny/luzha.png";
	var lvn = new Image();
	lvn.src = "../img/pol_steny/lestvn.png";
//
//items
	var bread = new Image;
	bread.src = "../img/predm/bread.png";
	var torch = new Image;
	torch.src = "../img/predm/torch.png";
	var btl = new Image;
	btl.src = "../img/predm/littlebottle.png";
	var trp = new Image;
	trp.src = "../img/predm/tryapka.png";
	var bgbtl = new Image;
	bgbtl.src = "../img/predm/big_bottle.png";
//
for (invst = 0; invst < 7; invst++)
{
	inv[invst] = [0, 0, 0, 0, 0, 0, 0];
}
inv[6][6] = 10;
var kolkl = 0;
function GRI(max)//Функция рандома 
{
  return Math.floor(Math.random() * max);
}
function debugoff()//Выключение debug
{
	var canvas = document.getElementById("poleprov");
	canvas.style.display = "none";
	debugonn = 0;
}
function debug()//debug режим (миникарта и координаты)
{
	debugonn = 1;
	var canvas = document.getElementById("poleprov");
	canvas.style.display = "block";
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 3100, 3100);
	for (i = 0; i < maxwidth; i++)
	{

		for (j = 0; j < maxheight; j++)
		{
			switch(pole[i][j])
			{
				case -1:
				{
					ctx.drawImage(stenat,i*100, j*100);
					break;
				}
				case -2:
				{
					ctx.drawImage(stena,i*100, j*100);
					break;
				}
				case 1:
				{
					ctx.drawImage(stena,i*100, j*100);
					break;
				}
				case 0:
				{
					ctx.drawImage(pol,i*100, j*100);
					break;
				}
				case 2:
				{
					ctx.drawImage(polgr,i*100, j*100);
					break;
				}
				case -5:
				{
					ctx.drawImage(stenagr,i*100, j*100);
					break;
				}
			}
		}
	}
	for (let i = 0; i < maxwidth; i++)
	{
		for (let j = 0; j < maxheight; j++)
		{
			switch(pole1[i][j])
			{
				case 1:
				{
					ctx.drawImage(kvsh,i*100, j*100, 100, 100);
					break;
				}
				case 2:
				{
					ctx.drawImage(lzh,i*100, j*100, 100, 100);
					break;
				}
				case 4:
				{
					ctx.drawImage(lvn,i*100, j*100, 100, 100);
					break;
				}
			}	
		}
	}
}
function next_level()//Переход на следующий уровень
{
	lvl++;
	maxwidth+=6;
	maxheight+=6;
	pole = [];
	pole1 = [];
	items = [];
	start();
}
function genlest()//генерация лестниц
{
	let klvrest = 0;
	let nn = 0;
	while(!nn)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		let rstx = Math.abs(grx - plposx);
		let rsty = Math.abs(gry - plposy);
		if ((pole[grx][gry] == 0 || pole[grx][gry] == 2) && pole1[grx][gry] != 1 && rstx > maxwidth/5 && rsty > maxheight/5)
		{
			pole1[grx][gry] = 4;
			xvyh = grx;
			yvyh = gry;
			nn++;
		}
		klvrest++;
		if (klvrest > 1000)
		{
			generate();
			break;
		}
	}
}
function gengr()//генерация заросшего окружения
{
	for (let i = 0; i < Math.round(maxwidth * maxheight / 4); i++)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		if (pole[grx][gry] == 0)
		{
			pole[grx][gry] = 2;
						//alert(grx + " " + gry);
		}
	}
	for (let i = 0; i < Math.round(maxwidth * maxheight / 4); i++)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		if (pole[grx][gry] == 1 || pole[grx][gry] == -2)
		{
			pole[grx][gry] = -5;
						//alert(grx + " " + gry);
		}
	}
}
function genkuvsh()//генерация кувшинов
{
	let klvkvsh = 0;
	kuvshin = Math.round(kolkl / (100 * Math.sqrt(lvl)));
	let mxkk = GRI(kuvshin) + Math.round(5/Math.sqrt(lvl));
	klvrest = 0;
	while(klvkvsh < mxkk)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		if (pole[grx][gry] == 0 || pole[grx][gry] == 2)
		{
			pole1[grx][gry] = 1;
			//alert(grx + " " + gry);
			klvkvsh++;
		}
		if (klvrest > 10000)
		{
			break;
		}
		klvrest++;
	}
}
function genluzh()//генерация луж
{
	let klvlzh = 0;
	let lz = GRI(3);
	klvrest = 0;
	while(klvlzh < lz)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		if (pole[grx][gry] == 0 || pole[grx][gry] == 2)
		{
			pole1[grx][gry] = 2;
			//alert(grx + " " + gry);
			klvlzh++;
		}
		if (klvrest > 10000)
		{
			break;
		}
		klvrest++;
	}
}
function genrand(x, y)//генерация полости
{
	pole[x][y] = 0;
	kolkl++;
	let t1 = GRI(2);
	let t2 = GRI(2);
	let t3 = GRI(2);
	let t4 = GRI(2);
	if (!t1 && pole[x+1][y] != 0 && pole[x+1][y] != 2 && pole[x+1][y] != -2)
		genrand(x+1, y);
	if (!t2 && pole[x-1][y] != 0 && pole[x+1][y] != 2 && pole[x-1][y] != -2)
		genrand(x-1, y);
	if (!t3 && pole[x][y+1] != 0 && pole[x+1][y] != 2 && pole[x][y+1] != -2)
		genrand(x, y+1);
	if (!t4 && pole[x][y-1] != 0 && pole[x+1][y] != 2 && pole[x][y-1] != -2)
		genrand(x, y-1);
}

function start()//стартовая функция
{
	for (startlaunch = 0; startlaunch < maxwidth; startlaunch++)
	{
		pole[startlaunch] = [];
		pole1[startlaunch] = [];
		items[startlaunch] = [];
	}
	let minip = document.getElementById('poleprov');
	minip.width = maxwidth*100;
	minip.height = maxheight*100;
	plposx = Math.round(maxwidth/2);
	plposy = Math.round(maxheight/2);
	let klvrest = 0;
	kolkl = 0;
	while (kolkl < (Math.round(maxwidth * maxheight / minsz)) || kolkl > (Math.round(maxwidth * maxheight / maxsz)))
	{
		generate();
		klvrest++;
		if (klvrest > 500)
		{
			generate();
			break;
		}
	}
	if (lvl == 1)
	{
		for (i = 0; i < 5; i++)
		{
			it = GRI(2)+1;
			geteltoinv(it);
		}
	}
	draw();
	let ldf = document.getElementById('loadf');
	let ld = document.getElementById('load');
	ldf.style.display = 'none';
	ld.style.display = 'none';
}

function generate()//Основрая генерация
{
	kolkl = 0;
	for (launch_generate_x = 0; launch_generate_x < maxwidth; launch_generate_x++)
	{
		for (launch_generate_y = 0; launch_generate_y < maxheight; launch_generate_y++)
		{
			if (launch_generate_y <=1 || launch_generate_x <= 1 || launch_generate_y >= maxwidth-2 || launch_generate_x >= maxheight-2)
				pole[launch_generate_x][launch_generate_y] = -1;
			else
				if (launch_generate_y ==2 || launch_generate_x == 2 || launch_generate_y == maxwidth-3 || launch_generate_x == maxheight-3)
					pole[launch_generate_x][launch_generate_y] = -2;
				else
					pole[launch_generate_x][launch_generate_y] = 1;
		}
	}
	for (startlaunch = 0; startlaunch < maxwidth; startlaunch++)
	{
		for (stl = 0; stl < maxheight; stl++)
			pole1[startlaunch][stl] = 0;
	}
	let klvrest;
	while (kolkl < (Math.round(maxwidth * maxheight / 6)))
	{
		if (klvrest > 100)
		{
			break;
		}
		if (pole[plposx-1][plposy] != 0 || pole[plposx+1][plposy] != 0 || pole[plposx][plposy-1] != 0 || pole[plposx][plposy+1] != 0)
			genrand(plposx, plposy);
		else
		{
			break;
			//genrand(xblst, yblst);
		}
		klvrest++;
	}
				/*if (kolkl < (Math.round(maxwidth * maxheight / 8)))
					genrand(3, 3);
				if (kolkl < (Math.round(maxwidth * maxheight / 8)))
					genrand(maxwidth-4, maxheight-4);
				if (kolkl < (Math.round(maxwidth * maxheight / 8)))
					genrand(3, maxheight-4);
				if (kolkl < (Math.round(maxwidth * maxheight / 8)))
					genrand(maxwidth-4, 3);*/
	//вызов генераторов доп вещей
	gengr();
	genkuvsh();
	genluzh();
	genlest();
	//вызов debug режима
	if (debugonn)
		debug();
}
function draw()//прорисовка хода
{
	var canvas = document.getElementById("pole");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 7000, 7000);
	if (!opinv)//Основное поле
	{
		for (let i = plposx-3; i < plposx+4; i++)
			{
				for (let j = plposy-3; j < plposy+4; j++)
				{
					switch(pole[i][j])
					{
						case -1:
						{
							ctx.drawImage(stenat,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case -2:
						{
							ctx.drawImage(stena,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case 1:
						{
							ctx.drawImage(stena,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case 0:
						{
							ctx.drawImage(pol,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case 2:
						{
							ctx.drawImage(polgr,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case -5:
						{
							ctx.drawImage(stenagr,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
					}
				}
			}
		for (let i = plposx-3; i < plposx+4; i++)
		{
			for (let j = plposy-3; j < plposy+4; j++)
			{
				switch (pole1[i][j])
				{
					case 1:
					{
						ctx.drawImage(kvsh,(i-plposx+3)*1000+300, (j-plposy+3)*1000+300, 500, 500);
						break;
					}
					case 2:
					{
						ctx.drawImage(lzh,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
						break;
					}
					case 4:
					{
						ctx.drawImage(lvn,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
						break;
					}
				}
			}
		}
		for (let i = plposx-3; i < plposx+4; i++)
		{
			for (let j = plposy-3; j < plposy+4; j++)
			{
				switch (items[i][j])
				{
					case 1:
					{
						ctx.drawImage(bread,(i-plposx+3)*1000+300, (j-plposy+3)*1000+300, 500, 500);
						break;
					}
					case 2:
					{
						ctx.drawImage(torch,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
						break;
					}
					case 3:
					{
						ctx.drawImage(btl,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
						break;
					}
					case 4:
					{
						ctx.drawImage(trp,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
						break;
					}
				}
			}
		}
		if (light > 0)
		{
			ctx.fillStyle = "rgba(255, 221, 39, 0.33)";
			ctx.fillRect(0,0,7000,7000);
			if (tryap == 0)
			{
				var gr = ctx.createRadialGradient(3500, 3500, 800, 3500, 3500, 3100);
			}
			else
			{
				var gr = ctx.createRadialGradient(3500, 3500, 1300, 3500, 3500, 4100);
			}	
			gr.addColorStop(0,"transparent");
			gr.addColorStop(1,"black");
			ctx.fillStyle=gr;
			ctx.fillRect(0,0,7000,7000);
			if (!lev)
			{
				ctx.drawImage(perspfg, 3000, 3000, 1000, 1000);
			}
			else
			{
				ctx.drawImage(perslfg, 3000, 3000, 1000, 1000);
			}
		}
		else
		{
			
			ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
			ctx.fillRect(0,0,7000,7000);
			var gr = ctx.createRadialGradient(3500, 3500, 100, 3500, 3500, 1500);
			gr.addColorStop(0,"transparent");
			gr.addColorStop(1,"black");
			ctx.fillStyle=gr;
			ctx.fillRect(0,0,7000,7000);
			if (!lev)
			{
				ctx.drawImage(perspfn, 3000, 3000, 1000, 1000);
			}
			else
			{
				ctx.drawImage(perslfn, 3000, 3000, 1000, 1000);
			}
		}
	}
	else//Открытый инвентарь
	{
		ctx.lineWidth = 40;
		ctx.strokeStyle = "slategray";
		for (let i = 0; i < 7; i++)
		{
			for (let j = 0; j < 7; j++)
			{
				switch(inv[i][j])
				{
					case 0:
					{
						ctx.strokeRect(i*1000, j*1000, 1000, 1000);
						//ctx.drawImage(pol,i*1000+40, j*1000+40, 920, 920);
						break;
					}
					case 1:
					{
						ctx.strokeRect(i*1000, j*1000, 1000, 1000);
						ctx.drawImage(bread,i*1000+40, j*1000+40, 920, 920);
						break;
					}
					case 2:
					{
						ctx.strokeRect(i*1000, j*1000, 1000, 1000);
						ctx.drawImage(torch,i*1000+40, j*1000+40, 920, 920);
						break;
					}
					case 3:
					{
						ctx.strokeRect(i*1000, j*1000, 1000, 1000);
						ctx.drawImage(btl,i*1000+40, j*1000+40, 920, 920);
						break;
					}
					case 4:
					{
						ctx.strokeRect(i*1000, j*1000, 1000, 1000);
						ctx.drawImage(trp,i*1000+40, j*1000+40, 920, 920);
						break;
					}
					case 10:
					{
						bigbottle(i, j);
						ctx.strokeRect(i*1000, j*1000, 1000, 1000);
						break;
					}
				}
			}
		}
		ctx.strokeStyle = "white";
		ctx.strokeRect(x_inv*1000, y_inv*1000, 1000, 1000);
		invinf();
	}
	//контекстное меню
	if (opcont)
	{
		//ctx.beginPath();
		ctx.rect(1000, 1000, 5000, 1500);
		ctx.fillStyle = '#afafaf';
		ctx.fill();
		ctx.strokeStyle = '#000000';
		ctx.lineJoin = 'round';
		ctx.lineWidth = 100;
		ctx.fill();
		switch(inv[x_inv][y_inv])
		{
			case 1:
			{
				ctx.rect(1500, 1500, 1500, 500);
				ctx.rect(4000, 1500, 1500, 500);
				ctx.fillStyle = '#afafaf';
				ctx.fill();
				ctx.strokeStyle = '#000000';
				ctx.lineJoin = 'round';
				ctx.lineWidth = 20;
				ctx.fill();
				ctx.fillStyle = '#000000';
				ctx.fillStyle = '#000000';
				ctx.font = "480px 'Didact Gothic'";
				ctx.fillText("З'есці", 1600, 1900, 1350);
				ctx.font = "450px 'Didact Gothic'";
				ctx.fillText("Адмена", 4100, 1900, 1350);
				ctx.stroke();
				break;
			}
			case 2:
			{
				ctx.rect(1500, 1500, 1500, 500);
				ctx.rect(4000, 1500, 1500, 500);
				ctx.fillStyle = '#afafaf';
				ctx.fill();
				ctx.strokeStyle = '#000000';
				ctx.lineJoin = 'round';
				ctx.lineWidth = 20;
				ctx.fill();
				ctx.fillStyle = '#000000';
				ctx.fillStyle = '#000000';
				ctx.font = "440px 'Didact Gothic'";
				ctx.fillText("Запаліць", 1520, 1900, 1350);
				ctx.font = "450px 'Didact Gothic'";
				ctx.fillText("Адмена", 4020, 1900, 1350);
				ctx.stroke();
				break;
			}
			case 3:
			{
				ctx.rect(1300, 1500, 1000, 500);
				ctx.rect(2900, 1500, 1300, 500);
				ctx.rect(4800, 1500, 1000, 500);
				ctx.fillStyle = '#afafaf';
				ctx.fill();
				ctx.strokeStyle = '#000000';
				ctx.lineJoin = 'round';
				ctx.lineWidth = 20;
				ctx.fill();
				ctx.fillStyle = '#000000';
				ctx.fillStyle = '#000000';
				ctx.font = "360px 'Didact Gothic'";
				ctx.fillText("Выпіць", 1320, 1900, 950);
				ctx.fillText("Пераліць", 2920, 1900, 1250);
				ctx.font = "350px 'Didact Gothic'";
				ctx.fillText("Адмена", 4820, 1900, 950);
				ctx.stroke();
				break;
			}
			case 4:
			{
				ctx.rect(1500, 1500, 1500, 500);
				ctx.rect(4000, 1500, 1500, 500);
				ctx.fillStyle = '#afafaf';
				ctx.fill();
				ctx.strokeStyle = '#000000';
				ctx.lineJoin = 'round';
				ctx.lineWidth = 20;
				ctx.fill();
				ctx.fillStyle = '#000000';
				ctx.fillStyle = '#000000';
				ctx.font = "440px 'Didact Gothic'";
				ctx.fillText("Смазаць", 1520, 1900, 1350);
				ctx.font = "450px 'Didact Gothic'";
				ctx.fillText("Адмена", 4020, 1900, 1350);
				ctx.stroke();
				break;
			}
			case 10:
			{
				ctx.rect(1300, 1500, 1000, 500);
				ctx.rect(2900, 1500, 1300, 500);
				ctx.rect(4800, 1500, 1000, 500);
				ctx.fillStyle = '#afafaf';
				ctx.fill();
				ctx.strokeStyle = '#000000';
				ctx.lineJoin = 'round';
				ctx.lineWidth = 20;
				ctx.fill();
				ctx.fillStyle = '#000000';
				ctx.fillStyle = '#000000';
				ctx.font = "360px 'Didact Gothic'";
				ctx.fillText("Выпіць", 1320, 1900, 950);
				ctx.fillText("Напоўніць", 2920, 1900, 1250);
				ctx.font = "350px 'Didact Gothic'";
				ctx.fillText("Адмена", 4820, 1900, 950);
				ctx.stroke();
				break;
			}
		}
		ctx.strokeStyle = '#FFFFFF';
		if (contcord == 0)
			ctx.strokeRect(1500, 1500, 1500, 500);
		else
			ctx.strokeRect(4000, 1500, 1500, 500);
		ctx.lineJoin = 'round';
		ctx.lineWidth = 20;
	}
	//Проработка кратчайшего расстояния
	/*var pth = [];
	while (pth.length == 0)
	{
		var start = [plposx, plposy];
		var end = [xvyh, yvyh];
		pth = findPath(pole,start,end);
	}
	document.getElementById("put").innerHTML = pth[0][0][0] + " " + pth[0][0][1];
	*/
	//Статы
	if (tryap)
	{
		document.getElementById("bns").style.display = "block";
		document.getElementById("bns").innerHTML = "Факел свеціць ярчэй.";
	}
	else
	{
		document.getElementById("bns").style.display = "none";
	}
	document.getElementById("coords").innerHTML = "x: " + plposx + "y: " + plposy;
	document.getElementById("lv").innerHTML = "Паверх: -" + lvl;
	if (hp > 0)
	{
		document.getElementById("hp").innerHTML = "<canvas class = 'hp' id = 'hpbar' width = '1000' height = '500'></canvas>HP :"+ hp + "/" + hpmax + ";";
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
//Вверх
function up()
{
	if (opcont)
	{
		return 0;	
	}
	if (opinv)
	{
		if (y_inv > 0)
			y_inv--;
		return 0;	
	}
	if (pole[plposx][plposy-1] != 1 && pole[plposx][plposy-1] != -2 && pole[plposx][plposy-1] != -5)
	{
		plposy--;
		next_hod();
	}
	return 0;
}
//Вниз
function down()
{
	if (opcont)
	{
		return 0;	
	}
	if (opinv)
	{
		if (y_inv < 6)
			y_inv++;
		return 0;	
	}
	if (pole[plposx][plposy+1] != 1 && pole[plposx][plposy+1] > -1)
	{
		plposy++;
		next_hod();
	}
	return 0;
}
//Лево
function left()
{
	if (opcont)
	{
		if (contcord > 0)
			contcord--;
		return 0;	
	}
	if (opinv)
	{
		if (x_inv > 0)
			x_inv--;
		return 0;
	}
	
	if (pole[plposx-1][plposy] != 1 && pole[plposx-1][plposy] > -1)
	{
		plposx--;
		next_hod();
	}
	lev = 1;
	return 0;
}
//Право
function right()
{
	if (opcont)
	{
		if (contcord < contmax)
			contcord++;
		return 0;	
	}
	if (opinv)
	{
		if (x_inv < 6)
			x_inv++;
		return 0;	
	}
	if (pole[plposx+1][plposy] != 1 && pole[plposx+1][plposy] > -1)
	{
		plposx++;
		next_hod();
	}
	lev = 0;
	return 0;
}
//Использование
function use()
{
	/*if (opcont)
	{
		opcont = 0;
		if (contcord == 0)
			invchs();
		else
		{
			if (contcord == contmax)
			{
				contcord = 0;
				return 0;
			}
			else
			{
				if (inv[x_inv][y_inv] == 10)
				{
					bgbtlst = bgbtlstmax;
					return 0;
				}
				else
				{
					inv[x_inv][y_inv] = 0;
					bgbtlst += 80;
					srtinv();
				}
			}
		}
		return 0;
	}*/
	if (opinv)
	{
		/*if (inv[x_inv][y_inv] == 0)
			return 0;
		if (inv[x_inv][y_inv] == 10 || inv[x_inv][y_inv] == 3)
			contmax = 3;
		else
			contmax = 2;
		opcont = 1;*/
		invchs();
		return 0;
	}
	if (pole1[plposx][plposy] == 4)
	{
		next_level();
		light--;
		next_hod();
		return 0;
	}
	if (pole1[plposx][plposy] == 1)
	{
		vyp = GRI(4)+1;
		/*if (vyp == 4)
			vyp = GRI(4)+1;*/
		items[plposx][plposy] = vyp;
		pole1[plposx][plposy] = 0;
		return 0;
	}
	if (pole1[plposx][plposy] == 2)
	{
		bgbtlst = bgbtlstmax;
		return 0;
	}
	if (items[plposx][plposy] != 0)
	{
		geteltoinv(items[plposx][plposy]);
		items[plposx][plposy] = 0;
		return 0;
	}
	return 0;
}
//открытие инвентаря
function invent()
{
	if (opinv)
	{
		opinv = 0;
		var cord = document.getElementById("inf");
		cord.style.display = 'none';
		return 0;
	}
	srtinv();
	opinv = 1;
	var cord = document.getElementById("inf");
	cord.style.display = 'block';
	return 0;
}
//Функция, что активируется каждый ход
function next_hod()
{
	light--;
	if (tryap > 0)
	{
		light--;
	}
	if (wat > 0)
		wat--;
	else
	{
		wat--;
		hp-=8;
	}
	if (fd > 0)
		fd--;
	else
	{
		fd--;
		hp-=5;
	}
	if (Math.round(fd/fdmax*100) > 70 && Math.round(wat/watmax*100) > 70 && hp < hpmax && perreg > 2)
	{
		hp++;
		perreg = 0;
		fd--;
		wat--;
	}
	else
		if ((Math.round(fd/fdmax*100) > 70 && Math.round(wat/watmax*100) > 70))
		{
			perreg++;
			fd--;
			wat--;
		}
}
//Инвентарь добавление предмета
function geteltoinv(item)
{
	add = 0;
	for (let j = 0; j < 7; j++)
	{
		if (add)
			break;
		for (let i = 0; i < 7; i++)
			if (inv[i][j] == 0)
			{
				inv[i][j] = item;
				add++;
				break;
			}
	}
}
//Инвентарь сдвиг
function srtinv()
{
	for (let j = 0; j < 7; j++)
		for (let i = 0; i < 7; i++)
		{
			if (i == 5 && j == 6)
				break;
			if (inv[i][j] == 0)
			{
				if (i < 6)
				{
					inv[i][j] = inv[i+1][j];
					inv[i+1][j] = 0;
				}
				else
				{
					inv[i][j] = inv[0][j+1];
					inv[0][j+1] = 0;
				}
			}
			
		}
}
//Инвентарь информация
function invinf()
{
	switch(inv[x_inv][y_inv])
	{
		case 0://noting
		{
			document.getElementById("inf").innerHTML = "Гэта пустая клетка";
			break;
		}
		case 1://bread
		{
			document.getElementById("inf").innerHTML = "Хлеб - асноўная ежа ў падзямеллі. Узнаўляе 75 адсоткаў ежы";
			break;
		}
		case 2://torch
		{
			document.getElementById("inf").innerHTML = "Факел - асноўнае асвятленне для вас ў падзямеллі. Свеціць " + lightmax+ " хадоў";
			break;
		}
		case 3://little_bottle
		{
			document.getElementById("inf").innerHTML = "Маленькая бутэлечка вады. Узнаўляе 70 адсоткаў вады";
			break;
		}
		case 4://tryapka
		{
			document.getElementById("inf").innerHTML = "Ануча, смазаная магніем. Павялічвае радыус святла ад факела да поўнага затухання альбо запальвання новага. Факел згарае хутчэй.";
			break;
		}
		case 10://big_bottle
		{
			document.getElementById("inf").innerHTML = "У вялікай бутэльцы можна захоўваць воду, набраную ў лужах і пасля яе піць. Зараз бутэлька запоўнена на " + Math.round(bgbtlst/bgbtlstmax*100) + " адсоткаў. Гэтага хопіць на " + Math.floor(bgbtlst/500) + " поўных узнаўленні вады.";
			break;
		}
		default:
		{
			inv[x_inv][y_inv] = 0;
			srtinv();
			break;
		}
	}
}
//Управление основа
pole.onkeydown = pole.onkeyup = pole.onkeypress = handle;
function handle(e)//ход
{
	if (!nazh)
	{
		nazh = 1;
		switch(e.code)
		{
			case "KeyW":
			{
				up();
				break;
			}
			case "KeyS":
			{
				down();
				break;
			}
			case "KeyA":
			{
				left();
				break;
			}
			case "KeyD":
			{
				right();
				break;
			}
			case "KeyE":
			{
				use();
				break;
			}
			case "KeyI":
			{
				invent();
				break;
			}
			case "ArrowUp":
			{
				up();
				break;
			}
			case "ArrowDown":
			{
				down();
				break;
			}
			case "ArrowLeft":
			{
				left();
				break;
			}
			case "ArrowRight":
			{
				right();
				break;
			}
			case "Enter":
			{
				use();
				break;
			}
			case "ControlRight":
			{
				invent();
				break;
			}
		}
	}
	draw();
}
function unh()
{
	nazh = 0;
}
//Инвентарь использование предмета
function invchs()
{
	opcont = 0;
	switch(inv[x_inv][y_inv])
	{
		case 0://noting
		{
			break;
		}
		case 1://bread
		{
			fd+=600;
			inv[x_inv][y_inv] = 0;
			if (fd > fdmax)
				fd = fdmax;
			break;
		}
		case 2://torch
		{
			light=80;
			if (light > lightmax)
				light = lightmax;
			inv[x_inv][y_inv] = 0;
			tryap = 0;
			break;
		}
		case 3: //little_bottle
		{
			wat+=350;
			if (wat > watmax)
				wat = watmax;
			inv[x_inv][y_inv] = 0;
			break;
		}
		case 4: //tryapka
		{
			tryap = 1;
			inv[x_inv][y_inv] = 0;
			break;
		}
		case 10: //big_bootle
		{
			razn = watmax-wat;
			if (bgbtlst > razn)
			{
				wat = watmax;
				bgbtlst = bgbtlst - razn;
			}
			else
			{
				wat+=bgbtlst;
				bgbtlst = 0;
			}
			break;
		}
	}
	srtinv();
	srtinv();
}

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
			ctx.fillStyle = "black";
			ctx.rect(0, 0, -light*160, 500);
			ctx.fill();
		}
	}
}
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
/*







*/