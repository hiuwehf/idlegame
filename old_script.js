var displaymoney;
var money = 0;
var gps = 0;
var autoclickupgprice = 10;
var autoclickinterval = 500;
var autoclickvar = 0;
var autoclickerprice = 10;
var gpc = 1;
var clickpricedisplay;
var clickupgprice = 10;
var miners = 0;
var minergps = 1;
var minerpricedisplay;
var minerprice = 10;
var tools = 0;
var toolgps = 10;
var toolpricedisplay;
var toolprice = 100;

function buttonclick() {
	money += gpc;
}

// IF YOU DONT HAVE ENOUGH MONEY FOR UPGRADE, THIS MESSAGE WILL RUN AND DISPLAY THE P1
function moneyError() {
	var moneyError = document.getElementById('p1');
	moneyError.style.display = 'block';
	setTimeout(errorRemove, 500);
}

// THIS WILL REMOVE THE P1 MESSAGE AFTER 500MS
function errorRemove() {
	var moneyError = document.getElementById('p1');
	moneyError.style.display = 'none';
}

// WILL GIVE THE USER THEIR GOLD PER CLICK AUTOMATICALLY
function autoclickbuy() {
	if (money >= autoclickerprice) {
		money -= autoclickerprice;
		autoclickvar = 1;
		document.getElementById('autoclickerprice').innerHTML =
			autoclickerprice;
		document.getElementById('autoclickerprice').innerText =
			parseFloat(autoclickerprice).toFixed(0);
		autoclicker();
	} else {
		moneyError();
	}
}

// function autoclickupg(){
//   if(money >= autoclickupgprice){
//     money -= autoclickupgprice;
//     autoclickinterval -= 100;
//     document.getElementById("autoclickinterval").innerHTML = autoclickinterval;
//     document.getElementById("autoclickupgprice").innerHTML = autoclickupgprice;
//     document.getElementById("autoclickupgprice").innerText = parseFloat(autoclickupgprice).toFixed(0);
//   }
// }

function autoclicker() {
	if (autoclickvar == 1) {
		setInterval(buttonclick, autoclickinterval);
	}
}

function clickupg() {
	if (money >= clickupgprice) {
		gpc += 100000;
		money -= clickupgprice;
		clickupgprice = 0.2 * clickupgprice + clickupgprice;
		document.getElementById('gpc').innerHTML = gpc;
		document.getElementById('gpcupgprice').innerHTML = gpcupgprice;
		document.getElementById('gpcupgprice').innerText =
			parseFloat(gpcupgprice).toFixed(0);
	} else {
		moneyError();
	}
}

function minerbuy() {
	if (money >= minerprice) {
		money -= minerprice;
		miners += 1;
		gps += minergps;
		minerprice = 0.2 * minerprice + minerprice;
		document.getElementById('miners').innerHTML = miners;
		document.getElementById('gps').innerHTML = gps;
		document.getElementById('minerprice').innerHTML = minerprice;
		document.getElementById('minerprice').innerText =
			parseFloat(minerprice).toFixed(0);
	} else {
		moneyError();
	}
}

function toolsbuy() {
	if (money >= toolprice) {
		tools += 1;
		money -= toolprice;
		gps += 10;
		toolprice = 0.2 * toolprice + toolprice;
		document.getElementById('tools').innerHTML = tools;
		document.getElementById('gps').innerHTML = gps;
		document.getElementById('toolprice').innerHTML = toolprice;
		document.getElementById('toolprice').innerText =
			parseFloat(toolprice).toFixed(0);
	} else {
		moneyError();
	}
}
setInterval(income, 100);
function income() {
	money += gps;
}

// WILL FORMAT NUMBERS AND MAKE THEM EASIER TO READ AND UNDERSTAND
setInterval(shortnumbers, 0);
function shortnumbers() {
	// MONEY NUMBER FORMATTING
	if (money >= 1 && money <= 1000) {
		displaymoney = money;
		document.getElementById('displaymoney').innerText =
			parseFloat(displaymoney).toFixed(0);
	} else if (money >= 1000 && money <= 1000000) {
		displaymoney = money / 1000;
		document.getElementById('displaymoney').innerText =
			parseFloat(displaymoney).toFixed(2) + 'k';
	} else if (money >= 1000000 && money <= 1000000000) {
		displaymoney = money / 1000000;
		document.getElementById('displaymoney').innerText =
			parseFloat(displaymoney).toFixed(1) + 'm';
	} else if (money >= 1000000000 && money <= 1000000000000) {
		displaymoney = money / 1000000000;
		document.getElementById('displaymoney').innerText =
			parseFloat(displaymoney).toFixed(1) + 'b';
	}

	// MONEY PER CLICK UPGRADE NUMBER FORMATTING
	if (clickupgprice >= 1 && clickupgprice < 10000) {
		clickpricedisplay = clickupgprice;
		document.getElementById('clickpricedisplay').innerText =
			parseFloat(clickpricedisplay).toFixed(0);
	} else if (clickupgprice >= 10000 && clickupgprice < 1000000) {
		clickpricedisplay = clickupgprice / 1000;
		document.getElementById('clickpricedisplay').innerText =
			parseFloat(clickpricedisplay).toFixed(1) + 'k';
	} else if (clickupgprice >= 1000000 && clickupgprice < 1000000000) {
		clickpricedisplay = clickupgprice / 1000000;
		document.getElementById('clickpricedisplay').innerText =
			parseFloat(clickpricedisplay).toFixed(1) + 'm';
	}

	// MINER NUMBER FORMATTING
	if (minerprice >= 1 && minerprice < 10000) {
		minerpricedisplay = minerprice;
		document.getElementById('minerpricedisplay').innerText =
			parseFloat(minerpricedisplay).toFixed(0);
	} else if (minerprice >= 10000 && minerprice < 1000000) {
		minerpricedisplay = minerprice / 1000;
		document.getElementById('minerpricedisplay').innerText =
			parseFloat(minerpricedisplay).toFixed(1) + 'k';
	} else if (minerprice >= 1000000 && minerprice < 1000000000) {
		minerpricedisplay = minerprice / 1000000;
		document.getElementById('minerpricedisplay').innerText =
			parseFloat(minerpricedisplay).toFixed(1) + 'm';
	}

	// TOOL NUMBER FORMATTING
	if (toolprice >= 1 && toolprice < 10000) {
		toolpricedisplay = toolprice;
		document.getElementById('toolpricedisplay').innerText =
			parseFloat(toolpricedisplay).toFixed(0);
	} else if (toolprice >= 10000 && toolprice < 1000000) {
		toolpricedisplay = toolprice / 1000;
		document.getElementById('toolpricedisplay').innerText =
			parseFloat(toolpricedisplay).toFixed(1) + 'k';
	} else if (toolprice >= 1000000 && toolprice < 1000000000) {
		toolpricedisplay = toolprice / 1000000;
		document.getElementById('toolpricedisplay').innerText =
			parseFloat(toolpricedisplay).toFixed(1) + 'm';
	}
}
setInterval(myFunction, 100);
function myFunction() {
	if (miners === 20) {
		document.getElementById('miners').innerHTML = miners;
		let minerUpgButton = document.getElementById('minerupg');
		minerUpgButton.style.display = 'block';
	}
}

function minerBoost() {
	if (money >= 100) {
		money -= 100;
		minergps += 10;
		let minerUpgButton2 = document.getElementById('minerupg');
		minerUpgButton2.remove();
	}
}

// function buttonRemove(){
//   var minerUpgButton2 = document.getElementById("minerupg");
//   minerUpgButton2.remove();
// }