function next_hod()
{
	light--;
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
	if (wat > 0)
		wat--;
	else
	{
		wat--;
		hp-=8;
	}
	if (fd > 0)
		fd--;
	else
	{
		fd--;
		hp-=5;
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
}