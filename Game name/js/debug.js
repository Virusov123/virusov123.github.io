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
	var crd = document.getElementById("coords");
	crd.style.display = "block";
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
				case 3:
				{
					ctx.drawImage(sunduk,i*100, j*100, 100, 100);
					break;
				}
				case 4:
				{
					ctx.drawImage(lvn,i*100, j*100, 100, 100);
					break;
				}
			}
			switch(mobs[i][j][0])
			{
				case 1:
				{
					ctx.drawImage(mob1l,i*100, j*100, 100, 100);
					break;
				}
				case 2:
				{
					ctx.drawImage(vadzan,i*100, j*100, 100, 100);
					break;
				}
				case 3:
				{
					ctx.drawImage(pryv,i*100, j*100, 100, 100);
					break;
				}
			}
		}
	}
}