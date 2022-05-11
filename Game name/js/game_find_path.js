//Кратчайший путь
			function Queue()
			{
				let collection = [];
				this.put = function(element)
				{
					collection.push(element);
				}
				this.del = function()
				{
					return collection.shift();
				}

				this.get = function()
				{
					return collection[0];
				}

				this.empty = function()
				{
					return collection.length === 0;
				}

				this.size = function()
				{
					return collection.length;
				}
			}
			function find_path(xst, yst, xfin, yfin)
			{
				var frontier = new Queue();
				var tt = [];
				tt[0] = xst; tt[1] = yst;
				frontier.put(tt);
				var came_from = [];
				var map = [];
				for (let i = 0; i < maxwidth; i++)
				{
					came_from[i] = [];
					map[i] = [];
					for (let j = 0; j < maxheight; j++)
					{
						if (pole[i][j] < 0 || pole[i][j] == 1)
							map[i][j] = 0;
						if (pole[i][j] == 2 || pole[i][j] == 0)
							map[i][j] = 1;
						came_from[i][j] = [];
						came_from[i][j][0] = 0;
						came_from[i][j][1] = 0;
					}
				}
				var npath = 1;
				while (!frontier.empty())
				{
					var current = frontier.get();
					if (current[0] == xfin && current[1] == yfin)
						npath = 0;
					frontier.del();
					if (map[current[0]+1][current[1]] && items[current[0]+1][current[1]] != 6)
					{
						frontier.put([current[0]+1, current[1]]);
						came_from[current[0]+1][current[1]] = [current[0], current[1]];
						map[current[0]+1][current[1]] = 0;
					}
					if (map[current[0]-1][current[1]] && items[current[0]-1][current[1]] != 6)
					{
						frontier.put([current[0]-1, current[1]]);
						came_from[current[0]-1][current[1]] = [current[0], current[1]];
						map[current[0]-1][current[1]] = 0;
					}
					if (map[current[0]][current[1]+1] && items[current[0]][current[1]+1] != 6)
					{
						frontier.put([current[0], current[1]+1]);
						came_from[current[0]][current[1]+1] = [current[0], current[1]];
						map[current[0]][current[1]+1] = 0;
					}
					if (map[current[0]][current[1]-1] && items[current[0]+1][current[1]-1] != 6)
					{
						frontier.put([current[0], current[1]-1]);
						came_from[current[0]][current[1]-1] = [current[0], current[1]];
						map[current[0]][current[1]-1] = 0;
					}
				}
				if (npath)
				{
					current2 = [xst, yst];
					path = [current2, current2];
				}
				else
				{
					var current2 = [xfin, yfin];
					var path = [current2];
					var current21 = [];
					while (!(current2[0] == xst && current2[1] == yst))
					{
						current21 = came_from[current2[0]][current2[1]];
						path.push(current21);
						current2[0] = current21[0]; current2[1] = current21[1];
					}
					path.reverse();
				}
				return path;
			}
//