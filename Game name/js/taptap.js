function getcoord(event)
{
	let canvas = document.getElementById("pole");
	let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
	let width1 = 600;
	let height1 = 600;
	if (canvas.style.width != "" || canvas.style.height != "")
	{
		width1 = canvas.style.width.substr(0, canvas.style.width.length-2);
		height1 = canvas.style.height.substr(0, canvas.style.height.length-2);
	}
	if (!opcontmenu)
	{
		let x1 = Math.round(x / (width1/ 7000)/1000-0.5);
		let y1 = Math.round(y / (height1/7000)/1000-0.5);
		if (!opinv)
			return [plposx+x1-3, plposy+y1-3];
		else
			return [x1, y1];
	}
	else
	{
		let x1 = Math.round(x / (width1/ 7000));
		let y1 = Math.round(y / (height1/7000));
		return[x1, y1];
	}
}
function tap(e)
{
	let ttt = getcoord(e);
	if (opcontmenu)
	{
		let xt = ttt[0];
		let yt = ttt[1];
		cont1 = 3;
		if (xt < but1[2] && xt > but1[0] && yt < but1[3] && yt > but1[1])
			cont1 = 0;
		else
			if (xt < but2[2] && xt > but2[0] && yt < but2[3] && yt > but2[1])
				cont1 = 1;
			else
				if (xt < but3[2] && xt > but3[0] && yt < but3[3] && yt > but3[1])
					cont1 = 2;
		if (cont1 == 3)
		{
			esc();
		}
		if (cont1 == cont)
		{
			use();
		}
		else
			cont = cont1;
		draw();
		return 0;
	}
	if (opinv)
	{
		if (x_inv != ttt[0] || y_inv != ttt[1])
		{
			x_inv = ttt[0];
			y_inv = ttt[1];
		}
		else
			use();
		draw();
		return 0;
	}
	if (mobs[ttt[0]][ttt[1]][0] != 0)
	{
		if (activeweap != 9 && near(ttt[0], ttt[1], 1))
		{
			if (activeweap == 0)
				mobs[ttt[0]][ttt[1]][2] -= 7;
			else
				mobs[ttt[0]][ttt[1]][2] -= 20;
			if (mobs[ttt[0]][ttt[1]][2] <= 0)
			{
				if (mobs[ttt[0]][ttt[1]][0] == 3)
					pryvi = 0;
				mobs[ttt[0]][ttt[1]][0] = 0;
				kills++;
			}
			next_hod();
			draw();
		}
		else
		{
			if (activeweap == 9 && klvarr() > 0)
			{
				mobs[ttt[0]][ttt[1]][2] -= 12;
				inv[xarr][yarr][1]--;
				changeweap(9);
				if (inv[xarr][yarr][1] == 0)
				{
					inv[xarr][yarr][0] = 0;
					srtinv();
					srtinv();
				}
				if (mobs[ttt[0]][ttt[1]][2] <= 0)
				{
					if (mobs[ttt[0]][ttt[1]][0] == 3)
						pryvi = 0;
					mobs[ttt[0]][ttt[1]][0] = 0;
					kills++;
				}
				next_hod();
				draw();
			}
		}
	}
}