function changeweap(weapp)
{
	let canvas = document.getElementById('weap');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 500, 500);
	ctx.lineWidth = 40;
	ctx.strokeStyle = "slategray";
	ctx.strokeRect(0, 0, 500, 500);
	activeweap = weapp;
	switch (weapp)
	{
		case 0:
		{
			break;
		}
		case 7:
		{
			ctx.drawImage(mch, 40, 40, 420, 420);
			break;
		}
		case 9:
		{
			ctx.drawImage(bow, 40, 40, 420, 420);
			let arrk = klvarr();
			ctx.fillStyle = "#FFFFFF";
			ctx.font = 200 + "px 'Didact Gothic', sans-serif";
			if (arrk)
				ctx.fillText(arrk, 10, 440);
			else
				ctx.fillText('0', 10, 440);
			break;
		}
		default:
		{
			break;
		}
	}
}
function near(x, y, range)
{
	if (Number.isInteger(range))
		return (Math.abs(plposx - x) <= range && Math.abs(plposy - y) <= range);
	else
		return (Math.abs(plposx - x) <= Math.round(range) && Math.abs(plposy - y) <= Math.round(range) && Math.abs(plposy - y) != Math.abs(plposx - x));
}
var xarr; var yarr;
function klvarr()
{
	for (let i = 0; i < 7; i++)
	{
		for (let j = 0; j < 7; j++)
		{
			if (inv[i][j][0] == 8)
			{
				xarr = i; yarr = j;
				return inv[i][j][1];
			}
		}
	}
	return 0;
}