function drawmain()
{
	var canvas = document.getElementById("pole");
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#474747';
	ctx.fillRect(0, 0, 7000, 7000);
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
						case 3:
						{
							ctx.drawImage(sunduk,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case 4:
						{
							ctx.drawImage(lvn,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
					}
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
						case 5:
						{
							ctx.drawImage(iot,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case 6:
						{
							ctx.drawImage(krestik,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
						case 7:
						{
							ctx.drawImage(mch,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							break;
						}
					}
					switch(mobs[i][j][0])
					{
						case 1:
						{
							if (mobs[i][j][3])
								ctx.drawImage(mob1r,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
							else
								ctx.drawImage(mob1l,(i-plposx+3)*1000, (j-plposy+3)*1000, 1000, 1000);
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