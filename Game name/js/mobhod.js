function mobhod()
{
	let inf = document.getElementById("inf");
	inf.innerHTML = "";
	for (let mbx = 0; mbx < maxwidth; mbx++)
		for (let mby = 0; mby < maxwidth; mby++)
		{
			if (mobs[mbx][mby][0] != 0 && mobs[mbx][mby][1] == 0)
			{
				var pth = find_path(mbx, mby, plposx, plposy);
				if (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 3)
				{
					inf.style.display = "block";
					if (mobs[mbx][mby][0] == 3)
					{
						light--;
						inf.innerHTML += mbname(mobs[mbx][mby][0]) + ". Сіла = " + mbdam(mobs[mbx][mby][0]) + ". HP: " + mobs[mbx][mby][2] + ". Факел тухне хутчэй;<br>";
						pryvi = 1;
					}
					else
						inf.innerHTML += mbname(mobs[mbx][mby][0]) + ". Сіла = " + mbdam(mobs[mbx][mby][0]) + ". HP: " + mobs[mbx][mby][2] + ";<br>";
				}
				if (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 2.2)
				{
					if (krest > 0)
					{
						if (mbrangehod(mbx, mby, plposx, plposy) && Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) <= Math.sqrt((mbx+1 - plposx)*(mbx+1 - plposx)+(mby - plposy)*(mby - plposy)) && hodvozm(mbx+1, mby))
						{
							mobhodd(mbx, mby, mbx+1, mby);
						}
						else
							if (mbrangehod(mbx, mby, plposx, plposy) && Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) <= Math.sqrt((mbx-1 - plposx)*(mbx-1 - plposx)+(mby - plposy)*(mby - plposy)) && hodvozm(mbx-1, mby))
							{
								mobhodd(mbx, mby, mbx-1, mby);
							}
							else
								if (mbrangehod(mbx, mby, plposx, plposy) && Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) <= Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby+1 - plposy)*(mby+1 - plposy)) && hodvozm(mbx, mby+1))
								{
									mobhodd(mbx, mby, mbx, mby+1);
								}
								else
									if (mbrangehod(mbx, mby, plposx, plposy) && Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) <= Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby-1 - plposy)*(mby-1 - plposy)) && hodvozm(mbx, mby-1))
									{
										mobhodd(mbx, mby, mbx, mby-1);
									}
					}
				}
				if (mbrangedam(mbx, mby, plposx, plposy) && !krest && hp > mbdam(mobs[mbx][mby][0]))
				{
					hp-=mbdam(mobs[mbx][mby][0]);
				}
				else
				{
					if (mbrangedam(mbx, mby, plposx, plposy) && !krest && hp <= mbdam(mobs[mbx][mby][0]))
					{
						window.location.href = 'death.html?&'+mbname(mobs[mbx][mby][0])+'&'+lvl+'&'+kills;
					}
					if (mbrangehod(mbx, mby, plposx, plposy)  && mobs[pth[1][0]][pth[1][1]][0] == 0)
					{
						mobhodd(mbx, mby, pth[1][0], pth[1][1]);
					}
					else
					{
						if (mbrangehod(mbx, mby, plposx, plposy))
						{
							let v1 = GRI(2);
							let v2 = GRI(2);
							let v3 = GRI(2);
							let v4 = GRI(2);
							if (v1)
							{
								if (hodvozm(mbx+1, mby))
								{
									mobhodd(mbx, mby, mbx+1, mby);
								}
							}
							else
								if (v1)
								{
									if (hodvozm(mbx-1, mby))
									{
										mobhodd(mbx, mby, mbx-1, mby);
									}
								}
								else
									if (v1)
									{
										if (hodvozm(mbx, mby+1))
										{
											mobhodd(mbx, mby, mbx, mby+1);
										}
									}
									else
										if (v1)
										{
											if (hodvozm(mbx, mby-1))
											{
												mobhodd(mbx, mby, mbx, mby-1);
											}
										}
						}
					}
				}
			}
		}
	for (let mbx = 0; mbx < maxwidth; mbx++)
		for (let mby = 0; mby < maxwidth; mby++)
			mobs[mbx][mby][1] = 0;
		if (inf.innerHTML == "")
			inf.style.display = "none";
}
function mbrangedam(mbx, mby, plposx, plposy)
{
	switch (mobs[mbx][mby][0])
	{
		case 1:
		{
			return (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 1.8);
		}
		case 2:
		{
			return (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 1.1);
		}
		case 3:
		{
			return (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 1.8);
		}
		default:
		{
			return 0;
		}
	}
}
function mbdam(mobb)
{
	switch (mobb)
	{
		case 1:
		{
			return 7;
		}
		case 2:
		{
			return 20;
		}
		case 3:
		{
			return 15;
		}
		default:
		{
			return 0;
		}
	}
}
function mbname(mobb)
{
	switch (mobb)
	{
		case 1:
		{
			return "Хадунок";
		}
		case 2:
		{
			return "Вадзянік";
		}
		case 3:
		{
			return "Прывід";
		}
		default:
		{
			return "Невядомая пачвара";
		}
	}
}
function mbrangehod(mbx, mby, plposx, plposy)
{
	switch (mobs[mbx][mby][0])
	{
		case 1:
		{
			return (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 10);
		}
		case 2:
		{
			return 0;
		}
		case 3:
		{
			return (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 5 && !GRI(2)) ;
		}
		default:
		{
			return 0;
		}
	}
}
function mobhodd(xs, ys, xf, yf)
{
	mobs[xf][yf][0] = mobs[xs][ys][0];
	mobs[xf][yf][2] = mobs[xs][ys][2];
	mobs[xs][ys][0] = 0;
	mobs[xs][ys][2] = 0;
	mobs[xf][yf][1] = 1;
	if (xf - xs > 0)
		mobs[xf][yf][3] = 1;
	else
		mobs[xf][yf][3] = 0;
}
function hodvozm(x, y)
{
	return (pole[x][y] >= 0 && pole[x][y] != 1 && mobs[x][y][0] == 0);
}