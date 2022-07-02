function drawinv()//рисовка инвентаря
{
	var canvas = document.getElementById("pole");
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = '#474747';
	ctx.fillRect(0, 0, 700*quality, 700*quality);
	ctx.lineWidth = 4*quality;
	ctx.strokeStyle = "slategray";
	let xkr, ykr, xmch, ymch;
	for (let i = 0; i < 7; i++)
	{
		for (let j = 0; j < 7; j++)
		{
			ctx.strokeStyle = "slategray";
			switch(inv[i][j][0])
			{
				case 0:
				{
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					break;
				}
				case 1:
				{
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					ctx.drawImage(bread,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					break;
				}
				case 2:
				{
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					ctx.drawImage(torch,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					break;
				}
				case 3:
				{
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					ctx.drawImage(btl,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					break;
				}
				case 4:
				{
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					ctx.drawImage(trp,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					break;
				}
				case 5:
				{
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					ctx.drawImage(iot,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					break;
				}
				case 6:
				{
					xkr = i; ykr = j;
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					if (hola)
						ctx.drawImage(hol,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					ctx.drawImage(krestik,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					break;
				}
				case 7:
				{
					xmch = i; ymch = j;
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					ctx.drawImage(mch,i*100*quality+4*quality, j*100*quality+4*quality, 92*quality, 92*quality);
					break;
				}
				case 10:
				{
					bigbottle(i, j);
					ctx.strokeRect(i*100*quality, j*100*quality, 100*quality, 100*quality);
					break;
				}
			}
		}
	}
	if (krest)
	{
		ctx.strokeStyle = "yellow";
		ctx.strokeRect(xkr*100*quality, ykr*100*quality, 100*quality, 100*quality);
	}
	if (mech)
	{
		ctx.strokeStyle = "green";
		ctx.strokeRect(xmch*100*quality, ymch*100*quality, 100*quality, 100*quality);
	}
	ctx.strokeStyle = "white";
	ctx.strokeRect(x_inv*100*quality, y_inv*100*quality, 100*quality, 100*quality);
	if (opcontmenu)//Контекстное меню
	{
		let x_inv1 = x_inv - 3;
		let x_inv11 = Math.abs(x_inv - 3);
		if (!x_inv11)
			x_inv11 = 1;
		let xncont = 150*quality + (x_inv1/x_inv11)*100*quality;
		let yvcont;
		if (y_inv < 4)
		{
			yvcont = y_inv*100*quality+100*quality;
			ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
			ctx.fillRect(xncont, yvcont, 400*quality, 150*quality);
		}
		else
		{
			yvcont = y_inv*100*quality-150*quality;
			ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
			ctx.fillRect(xncont, yvcont, 400*quality, 150*quality);
		}
		ctx.fillStyle = "rgba(127, 127, 127, 0.7)";
		switch (inv[x_inv][y_inv][0])
		{
			case 1://breadcont
			{
				ctx.fillRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 30*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("З'есці", xncont+125*quality, yvcont+85*quality);
				ctx.fillText("Выкінуць", xncont+285*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				but1 = [xncont+50*quality, yvcont+50*quality, xncont+200*quality, yvcont+100*quality]; 
				ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				but2 = [xncont+210*quality, yvcont+50*quality, xncont+360*quality, yvcont+100*quality];
				but3 = [100*quality, 100*quality, 100*quality, 100*quality];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				else
					ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				break;
			}
			case 2://torchcont
			{
				ctx.fillRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 30*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Запаліць", xncont+125*quality, yvcont+85*quality);
				ctx.fillText("Выкінуць", xncont+285*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				but1 = [xncont+50*quality, yvcont+50*quality, xncont+200*quality, yvcont+100*quality]; 
				ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				but2 = [xncont+210*quality, yvcont+50*quality, xncont+360*quality, yvcont+100*quality];
				but3 = [100*quality, 100*quality, 100*quality, 100*quality];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				else
					ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				break;
			}
			case 3://littlebottlecont
			{
				ctx.fillRect(xncont+10*quality, yvcont+50*quality, 100*quality, 50*quality);
				ctx.fillRect(xncont+120*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+280*quality, yvcont+50*quality, 100*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 22*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выпіць", xncont+60*quality, yvcont+85*quality);
				ctx.fillText("Пераліць", xncont+195*quality, yvcont+85*quality);
				ctx.fillText("Выкінуць", xncont+330*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+10*quality, yvcont+50*quality, 100*quality, 50*quality);
				but1 = [xncont+10*quality, yvcont+50*quality, xncont+110*quality, yvcont+100*quality];
				ctx.strokeRect(xncont+120*quality, yvcont+50*quality, 150*quality, 50*quality);
				but2 = [xncont+120*quality, yvcont+50*quality, xncont+270*quality, yvcont+100*quality];
				ctx.strokeRect(xncont+280*quality, yvcont+50*quality, 100*quality, 50*quality);
				but3 = [xncont+280*quality, yvcont+50*quality, xncont+380*quality, yvcont+100*quality];
				ctx.strokeStyle = "white";
				if (cont == 0)
					ctx.strokeRect(xncont+10*quality, yvcont+50*quality, 100*quality, 50*quality);
				else
					if (cont == 1)
						ctx.strokeRect(xncont+120*quality, yvcont+50*quality, 150*quality, 50*quality);
					else
						ctx.strokeRect(xncont+280*quality, yvcont+50*quality, 100*quality, 50*quality);
				break;
			}
			case 4://tryapcont
			{
				ctx.fillRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 22*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выкарыстаць", xncont+125*quality, yvcont+85*quality);
				ctx.font = 30*quality + "px 'Didact Gothic', sans-serif";
				ctx.fillText("Выкінуць", xncont+285*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				but1 = [xncont+50*quality, yvcont+50*quality, xncont+200*quality, yvcont+100*quality]; 
				ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				but2 = [xncont+210*quality, yvcont+50*quality, xncont+360*quality, yvcont+100*quality];
				but3 = [100*quality, 100*quality, 100*quality, 100*quality];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				else
					ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				break;
			}
			case 5://iotcont
			{
				ctx.fillRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 22*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выкарыстаць", xncont+125*quality, yvcont+85*quality);
				ctx.font = 30*quality + "px 'Didact Gothic', sans-serif";
				ctx.fillText("Выкінуць", xncont+285*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				but1 = [xncont+50*quality, yvcont+50*quality, xncont+200*quality, yvcont+100*quality]; 
				ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				but2 = [xncont+210*quality, yvcont+50*quality, xncont+360*quality, yvcont+100*quality];
				but3 = [100*quality, 100*quality, 100*quality, 100*quality];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				else
					ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				break;
			}
			case 6://krestcont
			{
				ctx.fillRect(xncont+10*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+170*quality, yvcont+50*quality, 100*quality, 50*quality);
				ctx.fillRect(xncont+280*quality, yvcont+50*quality, 100*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 22*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Узяць у рукі", xncont+85*quality, yvcont+85*quality);
				ctx.fillText("Асвяціць", xncont+220*quality, yvcont+85*quality);
				ctx.fillText("Выкінуць", xncont+330*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+10*quality, yvcont+50*quality, 150*quality, 50*quality);
				but1 = [xncont+10*quality, yvcont+50*quality, xncont+160*quality, yvcont+100*quality];
				ctx.strokeRect(xncont+170*quality, yvcont+50*quality, 100*quality, 50*quality);
				but2 = [xncont+170*quality, yvcont+50*quality, xncont+270*quality, yvcont+100*quality];
				ctx.strokeRect(xncont+280*quality, yvcont+50*quality, 100*quality, 50*quality);
				but3 = [xncont+280*quality, yvcont+50*quality, xncont+380*quality, yvcont+100*quality];
				ctx.strokeStyle = "white";
				if (cont == 0)
					ctx.strokeRect(xncont+10*quality, yvcont+50*quality, 150*quality, 50*quality);
				else
					if (cont == 1)
						ctx.strokeRect(xncont+170*quality, yvcont+50*quality, 100*quality, 50*quality);
					else
						ctx.strokeRect(xncont+280*quality, yvcont+50*quality, 100*quality, 50*quality);
				break;
			}
			case 7://mechcont
			{
				ctx.fillRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 22*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Экіпіраваць", xncont+125*quality, yvcont+85*quality);
				ctx.font = 30*quality + "px 'Didact Gothic', sans-serif";
				ctx.fillText("Выкінуць", xncont+285*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				but1 = [xncont+50*quality, yvcont+50*quality, xncont+200*quality, yvcont+100*quality]; 
				ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				but2 = [xncont+210*quality, yvcont+50*quality, xncont+360*quality, yvcont+100*quality];
				but3 = [100*quality, 100*quality, 100*quality, 100*quality];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				else
					ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				break;
			}
			case 10://bigbottlecont
			{
				ctx.fillRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
				ctx.font = 30*quality + "px 'Didact Gothic', sans-serif";
				ctx.textAlign = "center";
				ctx.fillText("Выпіць", xncont+125*quality, yvcont+85*quality);
				ctx.fillText("Адмена", xncont+285*quality, yvcont+85*quality);
				ctx.strokeStyle = "slategray";
				ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				but1 = [xncont+50*quality, yvcont+50*quality, xncont+200*quality, yvcont+100*quality]; 
				ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				but2 = [xncont+210*quality, yvcont+50*quality, xncont+360*quality, yvcont+100*quality];
				but3 = [100*quality, 100*quality, 100*quality, 100*quality];
				ctx.strokeStyle = "white";
				if (!cont)
					ctx.strokeRect(xncont+50*quality, yvcont+50*quality, 150*quality, 50*quality);
				else
					ctx.strokeRect(xncont+210*quality, yvcont+50*quality, 150*quality, 50*quality);
				break;
			}
				
		}
	}
}