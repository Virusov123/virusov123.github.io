var pole = []; var pole1 = []; var inv = []; var items = []; var mobs = [];
var opinv = 0; var debugonn = 0; var x_inv = 0; var y_inv = 0;
var opcontmenu = 0; var cont = 0;
var maxwidth = 31; var maxheight = 31; var minsz = 7; var maxsz = 3; var lvl = 1;
var plposx; var plposy; var lev = 0;
var nazh = 0;
var tryap = 0;
var perreg = 0; var superreg = 0;
var kills = 0;
var lightmax = 200; var light = lightmax;
var hpmax = 100; var hp = hpmax;
var fdmax = 800; var fd = fdmax;
var watmax = 500; var wat = watmax;
var bgbtlstmax = watmax*2; var bgbtlst = bgbtlstmax;
for (invst = 0; invst < 7; invst++)
{
	inv[invst] = [0, 0, 0, 0, 0, 0, 0];
}
inv[6][6] = 10;
var kolkl = 0;