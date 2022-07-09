function next_hod()
{
	light--;
	wat--;
	fd--;
	if (light <= -5)
	{
		window.location.href = 'death.html?&light&'+lvl+'&'+kills;
	}
	if (wat <= 0)
	{
		wat = 0;
		hp-=8;
		if (hp <= 0)
			dth = 'water';
	}
	if (fd <= 0)
	{
		fd = 0;
		hp-=5;
		if (hp <= 0)
			dth = 'food';
	}
	if (krest)
		krest--;
	if (superreg > 0)
	{
		superreg--;
		if (hp + 8 <= hpmax)
			hp+=8;
		else
			hp = hpmax;
	}
	if (tryap > 0)
	{
		light--;
	}
	if (Math.round(fd/fdmax*100) > 70 && Math.round(wat/watmax*100) > 70 && hp < hpmax && perreg > 2)
	{
		hp++;
		perreg = 0;
		fd--;
		wat--;
	}
	else
		if ((Math.round(fd/fdmax*100) > 70 && Math.round(wat/watmax*100) > 70))
		{
			perreg++;
			fd--;
			wat--;
		}
	mobhod();
	if (hp <= 0)
		hp = 0;
	if (hp == 0)
	{
		window.location.href = 'death.html?&'+dth+'&'+lvl+'&'+kills;
	}
}