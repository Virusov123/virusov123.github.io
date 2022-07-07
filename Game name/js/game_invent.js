function invchs()//использование предмета
{
	switch(inv[x_inv][y_inv][0])
	{
		case 0://noting
		{
			break;
		}
		case 1://bread
		{
			fd+=600;
			inv[x_inv][y_inv][0] = 0;
			if (fd > fdmax)
				fd = fdmax;
			break;
		}
		case 2://torch
		{
			light=lightmax;
			inv[x_inv][y_inv][0] = 0;
			tryap = 0;
			break;
		}
		case 3: //little_bottle
		{
			wat+=350;
			if (wat > watmax)
				wat = watmax;
			inv[x_inv][y_inv][0] = 0;
			break;
		}
		case 4: //tryapka
		{
			tryap = 1;
			inv[x_inv][y_inv][1]--;
			if (inv[x_inv][y_inv][1] == 0)
				inv[x_inv][y_inv][0] = 0;
			break;
		}
		case 5: //iot
		{
			superreg += 10;
			inv[x_inv][y_inv][0] = 0;
			break;
		}
		case 6: //krest
		{
			if (inv[x_inv][y_inv][2])
			{
				if (!krest)
					krest = 20;
				else
					krest = 0;
				inv[x_inv][y_inv][2] = 0;
			}
			break;
		}
		case 7: //mech
		{
			changeweap(7);
			break;
		}
		case 8: //arr
		{
			break;
		}
		case 9: //bow
		{
			if (activeweap != 9)
				changeweap(9);
			else
				changeweap(0);
			break;
		}
		case 10: //big_bootle
		{
			razn = watmax-wat;
			if (bgbtlst > razn)
			{
				wat = watmax;
				bgbtlst = bgbtlst - razn;
			}
			else
			{
				wat+=bgbtlst;
				bgbtlst = 0;
			}
			break;
		}
	}
	srtinv();
	srtinv();
}
function invinf()//вывод информации о предмете
{
	switch(inv[x_inv][y_inv][0])
	{
		case 0://noting
		{
			document.getElementById("inf").innerHTML = "Гэта пустая клетка";
			break;
		}
		case 1://bread
		{
			document.getElementById("inf").innerHTML = "Хлеб - асноўная ежа ў падзямеллі. Узнаўляе 75 адсоткаў ежы";
			break;
		}
		case 2://torch
		{
			document.getElementById("inf").innerHTML = "Факел - асноўнае асвятленне для вас ў падзямеллі. Свеціць " + lightmax+ " хадоў";
			break;
		}
		case 3://little_bottle
		{
			document.getElementById("inf").innerHTML = "Маленькая бутэлечка вады. Узнаўляе 70 адсоткаў вады";
			break;
		}
		case 4://tryapka
		{
			document.getElementById("inf").innerHTML = "Ануча, смазаная магніем. Павялічвае радыус святла ад факела да поўнага затухання альбо запальвання новага. Факел згарае хутчэй.";
			break;
		}
		case 5://iot
		{
			document.getElementById("inf").innerHTML = "Ёт - асаблівы лек, які паскарае рэгенерацыю да астранамічных вышынь. Працуе на працягу 10 хадоў";
			break;
		}
		case 6://krest
		{
			document.getElementById("inf").innerHTML = "Крэст экспедыцыі, якую вам трэба знайсці. Адпужвае слабых мабоў, калі ўзяць у рукі асвятлённым, але з-за злой аўры гэтага месца асвятлення хапае толькі на 20 хадоў. Каб асвяціць, варта выліць ваду з малой бутэлькі на крэст.";
			break;
		}
		case 7://mech
		{
			document.getElementById("inf").innerHTML = "Меч павялічвае пашкоджанні мобам. Наносіць 20 адзінак урону";
			break;
		}
		case 8://arrow
		{
			document.getElementById("inf").innerHTML = "Страла. Выкарыстоўваецца з дапамогай лука.";
			break;
		}
		case 9://bow
		{
			document.getElementById("inf").innerHTML = "Лук павялічвае пашкоджанні мобам. Наносіць 12 адзінак урону. Можа страляць туды, куды вы бачыце.";
			break;
		}
		case 10://big_bottle
		{
			document.getElementById("inf").innerHTML = "У вялікай бутэльцы можна захоўваць воду, набраную ў лужах і пасля яе піць. Зараз бутэлька запоўнена на " + Math.round(bgbtlst/bgbtlstmax*100) + " адсоткаў. Гэтага хопіць на " + Math.floor(bgbtlst/500) + " поўных узнаўленні вады.";
			break;
		}
		default:
		{
			inv[x_inv][y_inv][0] = 0;
			srtinv();
			break;
		}
	}
}
function srtinv()//сортировка инвентаря
{
	for (let j = 0; j < 7; j++)
		for (let i = 0; i < 7; i++)
		{
			if (i == 5 && j == 6)
				break;
			if (inv[i][j][0] == 0)
			{
				if (i < 6)
				{
					inv[i][j][0] = inv[i+1][j][0];
					inv[i][j][1] = inv[i+1][j][1];
					inv[i][j][2] = inv[i+1][j][2];
					inv[i+1][j][0] = 0;
					inv[i+1][j][1] = 0;
					inv[i+1][j][2] = 0;
				}
				else
				{
					inv[i][j][0] = inv[0][j+1][0];
					inv[i][j][1] = inv[0][j+1][1];
					inv[i][j][2] = inv[0][j+1][2];
					inv[0][j+1][0] = 0;
					inv[0][j+1][1] = 0;
					inv[0][j+1][2] = 0;
				}
			}
			
		}
}
function geteltoinv(item)//добавление предмета в инвентарь
{
	let add = 0;
	if (item != 4 && item != 8)
	{
		for (let j = 0; j < 7; j++)
		{
			if (add)
				break;
			for (let i = 0; i < 7; i++)
				if (inv[i][j][0] == 0)
				{
					inv[i][j][0] = item;
					add++;
					break;
				}
		}
	}
	else
	{
		for (let j = 0; j < 7; j++)
		{
			if (add)
				break;
			for (let i = 0; i < 7; i++)
				if (inv[i][j][0] == item)
				{
					inv[i][j][1]++;
					add++;
					break;
				}
		}
		if (!add)
		{
			for (let j = 0; j < 7; j++)
			{
				if (add)
					break;
				for (let i = 0; i < 7; i++)
					if (inv[i][j][0] == 0)
					{
						inv[i][j][0] = item;
						inv[i][j][1] = 1;
						add++;
						break;
					}
			}
		}
	}
}
function invent()//открытие/закрытие инвентаря
{
	if (opinv)
	{
		opinv = 0;
		var pers = document.getElementById("pole1");
		pers.style.display = "block";
		var cord = document.getElementById("inf");
		cord.style.display = 'none';
		draw();
		return 0;
	}
	srtinv();
	opinv = 1;
	var pers = document.getElementById("pole1");
	pers.style.display = "none";
	var cord = document.getElementById("inf");
	cord.style.display = 'block';
	draw();
	return 0;
}