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
	let pathtap = find_path(plposx, plposy, ttt[0], ttt[1]);
	if (pathtap.length == 1)
	{
		use();
		draw();
		return 0;
	}
	if (pathtap[1][0] != plposx || pathtap[1][1] != plposy)
	{
		for (let i = 1; i < pathtap.length; i++)
		{
			if (mobs[pathtap[i][0]][pathtap[i][1]][0] != 0)
			{
				mobs[pathtap[i][0]][pathtap[i][1]][2] -= dam;
				if (mobs[pathtap[i][0]][pathtap[i][1]][2] <=0)
				{
					if (mobs[pathtap[i][0]][pathtap[i][1]][0] == 3)
						pryvi = 0;
					mobs[pathtap[i][0]][pathtap[i][1]][0] = 0;
					kills++;
				}
				else
				{
					mobs[plposx][plposy][0] = mobs[pathtap[i][0]][pathtap[i][1]][0];
					mobs[plposx][plposy][1] = 1;
					mobs[plposx][plposy][2] = mobs[pathtap[i][0]][pathtap[i][1]][2];
					mobs[pathtap[i][0]][pathtap[i][1]][0] = 0;
					mobs[pathtap[i][0]][pathtap[i][1]][2] = 0;
					fd--;
					wat--;
				}
			}
			plposx = pathtap[i][0]; plposy = pathtap[i][1];
			next_hod();
			draw();
		}
	}
}