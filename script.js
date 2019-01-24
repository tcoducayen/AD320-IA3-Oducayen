var r = document.getElementById("redBox");
r.addEventListener("click", redFunction);

var u = document.getElementById("blueBox");
u.addEventListener("click", blueFunction);

var g = document.getElementById("greenBox"); 
g.addEventListener("mousedown", greenFunction);

var y = document.getElementById("yellowBox");
y.addEventListener("click", yellowFunction);

var b = document.getElementById("blackBox");
b.addEventListener("mouseover", blackFunction);
b.addEventListener("mouseout", blackFunction2);


function redFunction() {
  alert ("Hello World!");
}

function blueFunction() {
	document.getElementById("blueBox").style.background = "purple";
  setTimeout (
	function change1() {
		document.getElementById("blueBox").style.background = "white";
	}, 500
  );
  setTimeout (
	function change2() {
		document.getElementById("blueBox").style.background = "blue";
	}, 1000
  );
}

function greenFunction() {
  document.getElementById("greenBox").style.color = "red";
}

function yellowFunction() {
  document.getElementById("yellowBox").style.background = "white";
  setTimeout (
	function() {
		document.getElementById("yellowBox").style.background = "yellow";
	}, 1000
  );
}

function blackFunction() {
	document.getElementById("blackBox").style.color = "white";
}
function blackFunction2() {
	document.getElementById("blackBox").style.color = "black";
}




/*
div#red { /*click mouse onclick="redFunction()"
	background:red;
}

div#blue { /* load page onload="blueFunction()"
	background:blue;
}

div#green { /* key stroke onmousedown="greenFunction()" onmouseup="greenFunction2()" 
	background:green;
}

div#yellow { /* load page, leave page onunload="yellowFunction()"
	background:yellow;
}

div#black {  /* hover onmouseover="blackFunction()" onmouseout="blackFunction2()"
	background:black;
}
*/