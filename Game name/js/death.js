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
			document.getElementById("score").innerHTML = "Вы памёрлі ад таго, што ў цемры вас з'елі невядомыя пачвары.";
			break;
		}
		case "%D0%A5%D0%B0%D0%B4%D1%83%D0%BD%D0%BE%D0%BA":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад Хадунка.";
			break;
		}
		case "%D0%92%D0%B0%D0%B4%D0%B7%D1%8F%D0%BD%D1%96%D0%BA":
		{
			document.getElementById("score").innerHTML = "Вы памёрлі ад Вадзяніка.";
			break;
		}
		case "%D0%9F%D1%80%D1%8B%D0%B2%D1%96%D0%B4":
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