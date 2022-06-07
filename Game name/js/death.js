var reas;
function ttt()
{
	
	reas = window.location.href.split('&');
	console.log(reas);
	var reason = reas[1];
	switch (reason)
	{
		case "water":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад смагі.";
			break;
		}
		case "food":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад голаду.";
			break;
		}
		case "light":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад таго, што ў цемры вас з'улі невядомыя пачвары.";
			break;
		}
		case "Хадунок":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад Хадунка.";
			break;
		}
		case "Вадзянік":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад Вадзяніка.";
			break;
		}
		case "Прывід":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад Прывіда.";
			break;
		}
		default:
		{
			document.getElementById("score").innerHTML = "Ад каго ты памёр геній?!?!?!";
			break;
		}
	}
	document.getElementById("score").innerHTML += "<br> Вы памёрлі на -" + reas[2] + " паверсе і забілі " + reas[3] + " мабоў.";
}