function next_level()//Переход на следующий уровень
{
	lvl++;
	maxwidth+=6;
	maxheight+=6;
	pole = [];
	pole1 = [];
	items = [];
	mobs = [];
	start();
}
function start()//стартовая функция
{
	
	for (startlaunch = 0; startlaunch < maxwidth; startlaunch++)
	{
		pole[startlaunch] = [];
		pole1[startlaunch] = [];
		items[startlaunch] = [];
		mobs[startlaunch] = [];
		for (startlaunch1 = 0; startlaunch1 < maxheight; startlaunch1++)
			mobs[startlaunch][startlaunch1] = [0,0];
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
function draw()//прорисовка хода
{
	if (!opinv)//Основное поле
	{
		drawmain();
	}
	//
	else//Открытый инвентарь
	{
		drawinv();
		invinf();
	}
	statout();
}
let coord = 297*quality;
setInterval(//Анимация перса
  () => {
    if (coord == 297 || coord == 2970)
	{
		drawpers(coord);
		coord += 6*quality;
	}
	else
	{
		drawpers(coord);
		coord -= 6*quality;
	}
  },
  700
);