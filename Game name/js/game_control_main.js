pole.onkeydown = pole.onkeyup = pole.onkeypress = handle;
function handle(e)//ход
{
	if (!nazh)
	{
		switch(e.code)
		{
			case "KeyW":
			{
				up();
				break;
			}
			case "KeyS":
			{
				down();
				break;
			}
			case "KeyA":
			{
				left();
				break;
			}
			case "KeyD":
			{
				right();
				break;
			}
			case "KeyE":
			{
				use();
				break;
			}
			case "KeyI":
			{
				invent();
				break;
			}
			case "ArrowUp":
			{
				up();
				break;
			}
			case "ArrowDown":
			{
				down();
				break;
			}
			case "ArrowLeft":
			{
				left();
				break;
			}
			case "ArrowRight":
			{
				right();
				break;
			}
			case "Enter":
			{
				use();
				break;
			}
			case "ControlRight":
			{
				invent();
				break;
			}
			case "Escape":
			{
				esc();
				break;
			}
		}
	}
	nazh++;
	draw();
}
//Вверх
function up()
{
	if (opcontmenu)
		return 0;
	if (opinv)
	{
		if (y_inv > 0)
			y_inv--;
		return 0;	
	}
	if (mobs[plposx][plposy-1][0] != 0)
	{
		return 0;
	}
	if (pole[plposx][plposy-1] != 1 && pole[plposx][plposy-1] != -2 && pole[plposx][plposy-1] != -5)
	{
		plposy--;
		next_hod();
	}
	return 0;
}
//Вниз
function down()
{
	if (opcontmenu)
		return 0;
	if (opinv)
	{
		if (y_inv < 6)
			y_inv++;
		return 0;	
	}
	if (mobs[plposx][plposy+1][0] != 0)
	{
		return 0;
	}
	if (pole[plposx][plposy+1] != 1 && pole[plposx][plposy+1] > -1)
	{
		plposy++;
		next_hod();
	}
	return 0;
}
//Лево
function left()
{
	lev = 1;
	drawpers(coord);
	if (opcontmenu)
	{
		if (inv[x_inv][y_inv] != 3 && inv[x_inv][y_inv] != 6)
			if (cont == 1)
				cont = 0;
			else
				cont = 1;
		else
			if (cont > 0)
				cont--;
			else
				cont = 2;
		return 0;
	}
	if (opinv)
	{
		if (x_inv > 0)
			x_inv--;
		return 0;
	}
	if (mobs[plposx-1][plposy][0] != 0)
	{
		return 0;
	}
	if (pole[plposx-1][plposy] != 1 && pole[plposx-1][plposy] > -1)
	{
		plposx--;
		next_hod();
	}
	return 0;
}
//Право
function right()
{
	lev = 0;
	drawpers(coord);
	if (opcontmenu)
	{
		if (inv[x_inv][y_inv] != 3 && inv[x_inv][y_inv] != 6)
			if (cont == 0)
				cont = 1;
			else
				cont = 0;
		else
			if (cont < 2)
				cont++;
			else
				cont = 0;
		return 0;
	}
	if (opinv)
	{
		if (x_inv < 6)
			x_inv++;
		return 0;	
	}
	if (mobs[plposx+1][plposy][0] != 0)
	{
		return 0;
	}
	if (pole[plposx+1][plposy] != 1 && pole[plposx+1][plposy] > -1)
	{
		plposx++;
		next_hod();
	}
	return 0;
}