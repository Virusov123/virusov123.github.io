function invchs()
{
	switch(inv[x_inv][y_inv])
	{
		case 0://noting
		{
			break;
		}
		case 1://bread
		{
			fd+=600;
			inv[x_inv][y_inv] = 0;
			if (fd > fdmax)
				fd = fdmax;
			break;
		}
		case 2://torch
		{
			light=lightmax;
			inv[x_inv][y_inv] = 0;
			tryap = 0;
			break;
		}
		case 3: //little_bottle
		{
			wat+=350;
			if (wat > watmax)
				wat = watmax;
			inv[x_inv][y_inv] = 0;
			break;
		}
		case 4: //tryapka
		{
			tryap = 1;
			inv[x_inv][y_inv] = 0;
			break;
		}
		case 5: //iot
		{
			superreg += 10;
			inv[x_inv][y_inv] = 0;
			break;
		}
		case 6: //krest
		{
			if (hola)
			{
				if (!krest)
					krest = 20;
				else
					krest = 0;
				hola = 0;
			}
			break;
		}
		case 7: //mech
		{
			if (!mech)
			{
				mech = 1;
				dam = 20;
			}
			else
			{
				mech = 0;
				dam = 10;
			}
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
function invinf()
{
	switch(inv[x_inv][y_inv])
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
			document.getElementById("inf").innerHTML = "Меч павялічвае пашкоджанні мобам.";
			break;
		}
		case 10://big_bottle
		{
			document.getElementById("inf").innerHTML = "У вялікай бутэльцы можна захоўваць воду, набраную ў лужах і пасля яе піць. Зараз бутэлька запоўнена на " + Math.round(bgbtlst/bgbtlstmax*100) + " адсоткаў. Гэтага хопіць на " + Math.floor(bgbtlst/500) + " поўных узнаўленні вады.";
			break;
		}
		default:
		{
			inv[x_inv][y_inv] = 0;
			srtinv();
			break;
		}
	}
}
function srtinv()
{
	for (let j = 0; j < 7; j++)
		for (let i = 0; i < 7; i++)
		{
			if (i == 5 && j == 6)
				break;
			if (inv[i][j] == 0)
			{
				if (i < 6)
				{
					inv[i][j] = inv[i+1][j];
					inv[i+1][j] = 0;
				}
				else
				{
					inv[i][j] = inv[0][j+1];
					inv[0][j+1] = 0;
				}
			}
			
		}
}
function geteltoinv(item)
{
	add = 0;
	for (let j = 0; j < 7; j++)
	{
		if (add)
			break;
		for (let i = 0; i < 7; i++)
			if (inv[i][j] == 0)
			{
				inv[i][j] = item;
				add++;
				break;
			}
	}
}
function invent()
{
	if (opinv)
	{
		opinv = 0;
		var cord = document.getElementById("inf");
		cord.style.display = 'none';
		return 0;
	}
	srtinv();
	opinv = 1;
	var cord = document.getElementById("inf");
	cord.style.display = 'block';
	return 0;
}