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
		}
	}
	for (let i = 0; i < Math.round(maxwidth * maxheight / 4); i++)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		if (pole[grx][gry] == 1 || pole[grx][gry] == -2)
		{
			pole[grx][gry] = -5;
		}
	}
}
var klvkvsh = 0;
function genkuvsh()//генерация кувшинов
{
	klvkvsh = 0;
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
			klvkvsh++;
		}
		if (klvrest > 10000)
		{
			break;
		}
		klvrest++;
	}
}
function gensndk()//генерация сундуков
{
	let sndk = GRI(5);
	klvrest = 0;
	while(!sndk)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		if ((pole[grx][gry] == 0 || pole[grx][gry] == 2) && (pole1[grx][gry] == 0))
		{
			pole1[grx][gry] = 3;
			sndk++;
		}
		if (klvrest > 10000)
		{
			break;
		}
		klvrest++;
	}
}
var klvmb = 0;
function genmob()//генерация мобов
{
	klvmb = 0;
	mob = Math.round((kolkl / 100) * Math.sqrt(lvl));
	let mxkk = GRI(mob+1) + Math.round(Math.sqrt(lvl));
	klvrest = 0;
	while(klvmb < mxkk)
	{
		let grx = GRI(maxwidth-1);
		let gry = GRI(maxheight-1);
		if ((pole[grx][gry] == 0 || pole[grx][gry] == 2) && pole1[grx][gry] == 0 && mobs[grx][gry][0] == 0)
		{
			mobs[grx][gry][0] = 1;
			mobs[grx][gry][2] = 20;
			mobs[grx][gry][3] = 0;
			klvmb++;
		}
		if (klvrest > 10000)
		{
			break;
			console.log("errorgenmob");
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
function generate()//Основная генерация
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
		{
			pole1[startlaunch][stl] = 0;
			items[startlaunch][stl] = 0;
			mobs[startlaunch][stl][0] = 0;
		}
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
		}
		klvrest++;
	}
	//вызов генераторов доп вещей
	gengr();
	genkuvsh();
	gensndk();
	genluzh();
	genlest();
	genmob();
	//вызов debug режима
	if (debugonn)
		debug();
}