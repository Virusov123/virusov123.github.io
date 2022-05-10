function  mobhod()
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
					inf.innerHTML += "Жывёла ХХХ. Сіла 10. HP: " + mobs[mbx][mby][2] + ";<br>";
				}
				if (mbrangedam(mbx, mby, plposx, plposy))
				{
					hp-=mbdam(mobs[mbx][mby][0]);
				}
				else
				{
					if (Math.sqrt((mbx - plposx)*(mbx - plposx)+(mby - plposy)*(mby - plposy)) < 10 && mobs[pth[1][0]][pth[1][1]][0] == 0)
					{
						mobs[pth[1][0]][pth[1][1]][0] = 1;
						mobs[pth[1][0]][pth[1][1]][2] = mobs[mbx][mby][2];
						mobs[mbx][mby][0] = 0;
						mobs[mbx][mby][2] = 0;
						mobs[pth[1][0]][pth[1][1]][1] = 1;
						if (pth[1][0] - mbx > 0)
							mobs[pth[1][0]][pth[1][1]][3] = 1;
						else
							mobs[pth[1][0]][pth[1][1]][3] = 0;
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
			return 10;
		}
		default:
		{
			return 0;
		}
	}
}