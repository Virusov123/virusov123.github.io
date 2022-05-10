function use()
{
	if (opcontmenu)
	{
		if (!cont)
		{
			invchs();
		}
		else
			if (inv[x_inv][y_inv] != 10)
			{
				if (inv[x_inv][y_inv] != 3 || cont == 2)
				{
					items[plposx][plposy] = inv[x_inv][y_inv];
					inv[x_inv][y_inv] = 0;
					srtinv();
					srtinv();
				}
				else
				{
					bgbtlst += 350;
					if (bgbtlst > bgbtlstmax)
						bgbtlst = bgbtlstmax;
					inv[x_inv][y_inv] = 0;
					srtinv();
					srtinv();
				}
			}
		cont = 0;
		opcontmenu = 0;
		return 0;
	}
	if (opinv)
	{
		opcontmenu = 1;
		return 0;
	}
	if (pole1[plposx][plposy] == 4)
	{
		next_level();
		light--;
		next_hod();
		return 0;
	}
	if (pole1[plposx][plposy] == 1)
	{
		vyp = GRI(5)+1;
		items[plposx][plposy] = vyp;
		pole1[plposx][plposy] = 0;
		next_hod();
		return 0;
	}
	if (pole1[plposx][plposy] == 2)
	{
		bgbtlst = bgbtlstmax;
		next_hod();
		return 0;
	}
	if (items[plposx][plposy] != 0)
	{
		geteltoinv(items[plposx][plposy]);
		items[plposx][plposy] = 0;
		next_hod();
		return 0;
	}
	return 0;
}