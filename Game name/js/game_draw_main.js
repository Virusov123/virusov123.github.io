function drawmain()//рисовка игрового поля
{
	var canvas = document.getElementById("pole");
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#474747';
	ctx.fillRect(0, 0, 700*quality, 700*quality);
	for (let i = plposx-3; i < plposx+4; i++)
			{
				for (let j = plposy-3; j < plposy+4; j++)
				{
					switch(pole[i][j])
					{
						case -1:
						{
							ctx.drawImage(stenat,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case -2:
						{
							ctx.drawImage(stena,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 1:
						{
							ctx.drawImage(stena,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 0:
						{
							ctx.drawImage(pol,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 2:
						{
							ctx.drawImage(polgr,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case -5:
						{
							ctx.drawImage(stenagr,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
					}
					switch (pole1[i][j])
					{
						case 1:
						{
							ctx.drawImage(kvsh,(i-plposx+3)*100*quality+30*quality, (j-plposy+3)*100*quality+30*quality, 50*quality, 50*quality);
							break;
						}
						case 2:
						{
							ctx.drawImage(lzh,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 3:
						{
							ctx.drawImage(sunduk,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 4:
						{
							ctx.drawImage(lvn,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
					}
					switch (items[i][j])
					{
						case 1:
						{
							ctx.drawImage(bread,(i-plposx+3)*100*quality+30*quality, (j-plposy+3)*100*quality+30*quality, 50*quality, 50*quality);
							break;
						}
						case 2:
						{
							ctx.drawImage(torch,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 3:
						{
							ctx.drawImage(btl,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 4:
						{
							ctx.drawImage(trp,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 5:
						{
							ctx.drawImage(iot,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 6:
						{
							ctx.drawImage(krestik,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 7:
						{
							ctx.drawImage(mch,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
					}
					switch(mobs[i][j][0])
					{
						case 1:
						{
							if (mobs[i][j][3])
								ctx.drawImage(mob1r,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							else
								ctx.drawImage(mob1l,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 2:
						{
							ctx.drawImage(vadzan,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
						case 3:
						{
							ctx.drawImage(pryv,(i-plposx+3)*100*quality, (j-plposy+3)*100*quality, 100*quality, 100*quality);
							break;
						}
					}
				}
			}
		//
		//Прорисовка игрока и света
		if (light > 0)
		{
			ctx.fillStyle = "rgba(255, 221, 39, 0.33)";
			ctx.fillRect(0,0,700*quality,700*quality);
			if (tryap == 0)
			{
				var gr = ctx.createRadialGradient(350*quality, 350*quality, 80*quality, 350*quality, 350*quality, 310*quality);
			}
			else
			{
				var gr = ctx.createRadialGradient(350*quality, 350*quality, 130*quality, 350*quality, 350*quality, 410*quality);
			}	
			gr.addColorStop(0,"transparent");
			gr.addColorStop(1,"black");
			ctx.fillStyle=gr;
			ctx.fillRect(0,0,700*quality,700*quality);
		}
		else
		{
			
			ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
			ctx.fillRect(0,0,700*quality,700*quality);
			var gr = ctx.createRadialGradient(350*quality, 350*quality, 10*quality, 350*quality, 350*quality, 150*quality);
			gr.addColorStop(0,"transparent");
			gr.addColorStop(1,"black");
			ctx.fillStyle=gr;
			ctx.fillRect(0,0,700*quality,700*quality);
			drawpers(300*quality);
		}
}
function drawpers(coord)//рисовка персонажа
{
	if (light > 0)
	{
		var canvas1 = document.getElementById("pole1");
		var ctx1 = canvas1.getContext('2d');
		ctx1.clearRect(0,0,700*quality,700*quality);
		if (!lev)
		{
			ctx1.drawImage(perspfg, 300*quality, coord, 100*quality, 100*quality);
		}
		else
		{
			ctx1.drawImage(perslfg, 300*quality, coord, 100*quality, 100*quality);
		}
	}
	else
	{
		var canvas1 = document.getElementById("pole1");
		var ctx1 = canvas1.getContext('2d');
		ctx1.clearRect(0,0,700*quality,700*quality);
		if (!lev)
			{
				ctx1.drawImage(perspfn, 300*quality, 300*quality, 100*quality, 100*quality);
			}
			else
			{
				ctx1.drawImage(perslfn, 300*quality, 300*quality, 100*quality, 100*quality);
			}
	}
}