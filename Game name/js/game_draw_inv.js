function drawinv()
{
	var canvas = document.getElementById("pole");
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#474747';
	ctx.fillRect(0, 0, 7000, 7000);
	ctx.lineWidth = 40;
	ctx.strokeStyle = "slategray";
	let xkr, ykr, xmch, ymch;
	for (let i = 0; i < 7; i++)
	{
		for (let j = 0; j < 7; j++)
		{
			ctx.strokeStyle = "slategray";
			switch(inv[i][j])
			{
				case 0:
				{
					ctx.strokeRect(i*1000, j*1000, 1000, 1000);
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
				case 5:
				{
					ctx.strokeRect(i*1000, j*1000, 1000, 1000);
					ctx.drawImage(iot,i*1000+40, j*1000+40, 920, 920);
					break;
				}
				case 6:
				{
					xkr = i; ykr = j;
					ctx.strokeRect(i*1000, j*1000, 1000, 1000);
					if (hola)
						ctx.drawImage(hol,i*1000+40, j*1000+40, 920, 920);
					ctx.drawImage(krestik,i*1000+40, j*1000+40, 920, 920);
					break;
				}
				case 7:
				{
					xmch = i; ymch = j;
					ctx.strokeRect(i*1000, j*1000, 1000, 1000);
					ctx.drawImage(mch,i*1000+40, j*1000+40, 920, 920);
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
	if (krest)
	{
		ctx.strokeStyle = "yellow";
		ctx.strokeRect(xkr*1000, ykr*1000, 1000, 1000);
	}
	if (mech)
	{
		ctx.strokeStyle = "green";
		ctx.strokeRect(xmch*1000, ymch*1000, 1000, 1000);
	}
	ctx.strokeStyle = "white";
	ctx.strokeRect(x_inv*1000, y_inv*1000, 1000, 1000);
	if (opcontmenu)//Контекстное меню
	{
		let x_inv1 = x_inv - 3;
		let x_inv11 = Math.abs(x_inv - 3);
		if (!x_inv11)
			x_inv11 = 1;
		let xncont = 1500 + (x_inv1/x_inv11)*1000;
		let yvcont;
		if (y_inv < 4)
		{
			yvcont = y_inv*1000+1000;
			ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
			ctx.fillRect(xncont, yvcont, 4000, 1500);
		}
		else
		{
			yvcont = y_inv*1000-1500;
			ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
			ctx.fillRect(xncont, yvcont, 4000, 1500);
		}
		ctx.fillStyle = "rgba(127, 127, 127, 0.7)";
		switch (inv[x_inv][y_inv])
		{
			case 1://breadcont
			{
				ctx.fillRect(xncont+500, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+2100, yvcont+500, 1500, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "300px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("З'есці", xncont+1250, yvcont+850);
				ctx.fillText("Выкінуць", xncont+2850, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				but1 = [xncont+500, yvcont+500, xncont+2000, yvcont+1000]; 
				ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				but2 = [xncont+2100, yvcont+500, xncont+3600, yvcont+1000];
				but3 = [10000, 10000, 10000, 10000];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				else
					ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				break;
			}
			case 2://torchcont
			{
				ctx.fillRect(xncont+500, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+2100, yvcont+500, 1500, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "300px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Запаліць", xncont+1250, yvcont+850);
				ctx.fillText("Выкінуць", xncont+2850, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				but1 = [xncont+500, yvcont+500, xncont+2000, yvcont+1000]; 
				ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				but2 = [xncont+2100, yvcont+500, xncont+3600, yvcont+1000];
				but3 = [10000, 10000, 10000, 10000];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				else
					ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				break;
			}
			case 3://littlebottlecont
			{
				ctx.fillRect(xncont+100, yvcont+500, 1000, 500);
				ctx.fillRect(xncont+1200, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+2800, yvcont+500, 1000, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "220px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выпіць", xncont+600, yvcont+850);
				ctx.fillText("Пераліць", xncont+1950, yvcont+850);
				ctx.fillText("Выкінуць", xncont+3300, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+100, yvcont+500, 1000, 500);
				but1 = [xncont+100, yvcont+500, xncont+1100, yvcont+1000];
				ctx.strokeRect(xncont+1200, yvcont+500, 1500, 500);
				but2 = [xncont+1200, yvcont+500, xncont+2700, yvcont+1000];
				ctx.strokeRect(xncont+2800, yvcont+500, 1000, 500);
				but3 = [xncont+2800, yvcont+500, xncont+3800, yvcont+1000];
				ctx.strokeStyle = "white";
				if (cont == 0)
					ctx.strokeRect(xncont+100, yvcont+500, 1000, 500);
				else
					if (cont == 1)
						ctx.strokeRect(xncont+1200, yvcont+500, 1500, 500);
					else
						ctx.strokeRect(xncont+2800, yvcont+500, 1000, 500);
				break;
			}
			case 4://tryapcont
			{
				ctx.fillRect(xncont+500, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+2100, yvcont+500, 1500, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "220px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выкарыстаць", xncont+1250, yvcont+850);
				ctx.font = "300px 'Didact Gothic', sans-serif";
				ctx.fillText("Выкінуць", xncont+2850, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				but1 = [xncont+500, yvcont+500, xncont+2000, yvcont+1000]; 
				ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				but2 = [xncont+2100, yvcont+500, xncont+3600, yvcont+1000];
				but3 = [10000, 10000, 10000, 10000];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				else
					ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				break;
			}
			case 5://iotcont
			{
				ctx.fillRect(xncont+500, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+2100, yvcont+500, 1500, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "220px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выкарыстаць", xncont+1250, yvcont+850);
				ctx.font = "300px 'Didact Gothic', sans-serif";
				ctx.fillText("Выкінуць", xncont+2850, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				but1 = [xncont+500, yvcont+500, xncont+2000, yvcont+1000]; 
				ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				but2 = [xncont+2100, yvcont+500, xncont+3600, yvcont+1000];
				but3 = [10000, 10000, 10000, 10000];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				else
					ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				break;
			}
			case 6://krestcont
			{
				ctx.fillRect(xncont+100, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+1700, yvcont+500, 1000, 500);
				ctx.fillRect(xncont+2800, yvcont+500, 1000, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "220px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Узяць у рукі", xncont+850, yvcont+850);
				ctx.fillText("Асвяціць", xncont+2200, yvcont+850);
				ctx.fillText("Выкінуць", xncont+3300, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+100, yvcont+500, 1000, 500);
				but1 = [xncont+100, yvcont+500, xncont+1100, yvcont+1000];
				ctx.strokeRect(xncont+1200, yvcont+500, 1500, 500);
				but2 = [xncont+1200, yvcont+500, xncont+2700, yvcont+1000];
				ctx.strokeRect(xncont+2800, yvcont+500, 1000, 500);
				but3 = [xncont+2800, yvcont+500, xncont+3800, yvcont+1000];
				ctx.strokeStyle = "white";
				if (cont == 0)
					ctx.strokeRect(xncont+100, yvcont+500, 1500, 500);
				else
					if (cont == 1)
						ctx.strokeRect(xncont+1700, yvcont+500, 1000, 500);
					else
						ctx.strokeRect(xncont+2800, yvcont+500, 1000, 500);
				break;
			}
			case 7://mechcont
			{
				ctx.fillRect(xncont+500, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+2100, yvcont+500, 1500, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "220px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Экіпіраваць", xncont+1250, yvcont+850);
				ctx.font = "300px 'Didact Gothic', sans-serif";
				ctx.fillText("Выкінуць", xncont+2850, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				but1 = [xncont+500, yvcont+500, xncont+2000, yvcont+1000]; 
				ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				but2 = [xncont+2100, yvcont+500, xncont+3600, yvcont+1000];
				but3 = [10000, 10000, 10000, 10000];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				else
					ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				break;
			}
			case 10://bigbottlecont
			{
				ctx.fillRect(xncont+500, yvcont+500, 1500, 500);
				ctx.fillRect(xncont+2100, yvcont+500, 1500, 500);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = "300px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выпіць", xncont+1250, yvcont+850);
				ctx.fillText("Адмена", xncont+2850, yvcont+850);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				but1 = [xncont+500, yvcont+500, xncont+2000, yvcont+1000]; 
				ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				but2 = [xncont+2100, yvcont+500, xncont+3600, yvcont+1000];
				but3 = [10000, 10000, 10000, 10000];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+500, yvcont+500, 1500, 500);
				else
					ctx.strokeRect(xncont+2100, yvcont+500, 1500, 500);
				break;
			}
				
		}
	}
}