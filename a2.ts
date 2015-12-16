// import the little Scene Graph library
import sg = require('./SG');

// find the div's we want to use as our 3D Scene containers
var row1 = new sg.Scene(<HTMLDivElement>document.getElementById("row1"));
var row1child1 = new sg.Scene(<HTMLDivElement>document.getElementById("row1child1"));
var row1child2 = new sg.Scene(<HTMLDivElement>document.getElementById("row1child2"));
var row1child3 = new sg.Scene(<HTMLDivElement>document.getElementById("row1child3"));
var row2 = new sg.Scene(<HTMLDivElement>document.getElementById("row2"));
var row3 = new sg.Scene(<HTMLDivElement>document.getElementById("row3"));
var row4 = new sg.Scene(<HTMLDivElement>document.getElementById("row4"));
var row5 = new sg.Scene(<HTMLDivElement>document.getElementById("row5"));
var row6 = new sg.Scene(<HTMLDivElement>document.getElementById("row6"));
var row7 = new sg.Scene(<HTMLDivElement>document.getElementById("row7"));
var row8 = new sg.Scene(<HTMLDivElement>document.getElementById("row8"));
var row9 = new sg.Scene(<HTMLDivElement>document.getElementById("row9"));
var row10 = new sg.Scene(<HTMLDivElement>document.getElementById("row10"));


var cam1 = new sg.Camera(25);
cam1.position = new sg.Vector(0,10,200); 
row1.world.add(cam1);

var light1 = new sg.Light(new sg.Color(.2,0.11,.10));
light1.position = new sg.Vector(100,400,1000); 
row1.world.add(light1);

var col1 = document.createElement("div");
col1.className = "column1";
var n1 = new sg.HTMLDivThing(col1);
n1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,35)); 
row1.world.add(n1);


var yRotation1 = 0;
var camYRotation1 = 20;
var camYInc1 = 1;

var s1renderFunc = function() {
	yRotation1 += 3;
	if (yRotation1 > 360) {
		yRotation1 -= 360;
	}
	n1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation1 += camYInc1;
	if (camYRotation1 > 20 || camYRotation1 < -20) {
		camYInc1 *= -1;
	}
	cam1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,camYRotation1,0));
	
	col1.onmousedown = function() {
		n1child3.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row1.render();
	requestAnimationFrame(s1renderFunc);
};
s1renderFunc();
///////////////////////////////
//////////////////////////////

var cam1child1 = new sg.Camera(25);
cam1child1.position = new sg.Vector(10,10,100); 
row1child1.world.add(cam1child1);

var light1child1 = new sg.Light(new sg.Color(.2,0.11,.10));
light1child1.position = new sg.Vector(100,400,1000); 
row1child1.world.add(light1child1);

var col1child1 = document.createElement("div");
col1child1.className = "column1";
var n1child1 = new sg.HTMLDivThing(col1child1);
n1child1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,35)); 
row1child1.world.add(n1child1);

n1child1.add(n1);

var yRotation1child1 = 0;
var camYRotation1child1 = 20;
var camYInc1child1 = 1;

var s1renderFuncchild1 = function() {
	yRotation1child1 += 3;
	if (yRotation1child1 > 360) {
		yRotation1child1 -= 360;
	}
	n1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation1child1 += camYInc1child1;
	if (camYRotation1child1 > 20 || camYRotation1child1 < -20) {
		camYInc1child1 *= -1;
	}
	cam1child1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,camYRotation1child1,0));
	
	col1child1.onmousedown = function() {
		n1child3.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row1child1.render();
	requestAnimationFrame(s1renderFuncchild1);
};
s1renderFuncchild1();
///////////////////////////////
//////////////////////////////

var cam1child2 = new sg.Camera(25);
cam1child2.position = new sg.Vector(0,10,200); 
row1child2.world.add(cam1child2);

var light1child2 = new sg.Light(new sg.Color(.2,0.11,.10));
light1child2.position = new sg.Vector(100,400,1000); 
row1child2.world.add(light1child2);

var col1child2 = document.createElement("div");
col1child2.className = "column1";
var n1child2 = new sg.HTMLDivThing(col1child2);
n1child2.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,35)); 
row1child2.world.add(n1child2);

n1child2.add(n1child1);

var yRotation1child2 = 0;
var camYRotation1child2 = 20;
var camYInc1child2 = 1;

var s1renderFuncchild2 = function() {
	yRotation1child2 += 3;
	if (yRotation1child2 > 360) {
		yRotation1child2 -= 360;
	}
	n1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation1child2 += camYInc1child2;
	if (camYRotation1child2 > 20 || camYRotation1child2 < -20) {
		camYInc1child2 *= -1;
	}
	cam1child2.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,camYRotation1child2,0));
	
	col1child2.onmousedown = function() {
		n1child3.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row1child2.render();
	requestAnimationFrame(s1renderFuncchild2);
};
s1renderFuncchild2();
///////////////////////////////
//////////////////////////////

var cam1child3 = new sg.Camera(25);
cam1child3.position = new sg.Vector(0,10,200); 
row1child3.world.add(cam1child3);

var light1child3 = new sg.Light(new sg.Color(.2,0.11,.10));
light1child3.position = new sg.Vector(100,400,1000); 
row1child3.world.add(light1child3);

var col1child3 = document.createElement("div");
col1child3.className = "column1";
var n1child3 = new sg.HTMLDivThing(col1child3);
n1child3.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,35)); 
row1child3.world.add(n1child3);

n1child3.add(n1child2);

var yRotation1child3 = 0;
var camYRotation1child3 = 20;
var camYInc1child3 = 1;

var s1renderFuncchild3 = function() {
	yRotation1child3 += 3;
	if (yRotation1child3 > 360) {
		yRotation1child3 -= 360;
	}
	n1.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation1child3 += camYInc1child3;
	if (camYRotation1child3 > 20 || camYRotation1child3 < -20) {
		camYInc1child3 *= -1;
	}
	cam1child3.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,camYRotation1child3,0));
	
	col1child3.onmousedown = function() {
		n1child3.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row1child3.render();
	requestAnimationFrame(s1renderFuncchild3);
};
s1renderFuncchild3();
///////////////////////////////
//////////////////////////////

var cam2 = new sg.Camera(25);
cam2.position = new sg.Vector(0,0,200); 
row2.world.add(cam2);

var light2 = new sg.Light(new sg.Color(.22,0.21,.1));
light2.position = new sg.Vector(100,400,1000); 
row2.world.add(light2);


var col2 = document.createElement("div");
col2.className = "column2";
var n2 = new sg.HTMLDivThing(col2);
n2.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,35)); 
row2.world.add(n2);

var yRotation2 = 0;
var camYRotation2 = 20;
var camYInc2 = 1;

var s2renderFunc = function() {
	yRotation2 += 3;
	if (yRotation2 > 360) {
		yRotation2 -= 360;
	}
	n2.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation2 += camYInc2;
	if (camYRotation2 > 20 || camYRotation2 < -20) {
		camYInc2 *= -1;
	}
	cam2.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(camYRotation2,10,0));
	
	col2.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row2.render();
	requestAnimationFrame(s2renderFunc);
};
s2renderFunc();


///////////////////////////////
//////////////////////////////

var cam3 = new sg.Camera(25);
cam3.position = new sg.Vector(130,101,200); 
row3.world.add(cam3);

var light3 = new sg.Light(new sg.Color(.3,0.1,1.0));
light3.position = new sg.Vector(10,400,1000); 
row3.world.add(light3);

var col3 = document.createElement("div");
col3.className = "column3";
var n3 = new sg.HTMLDivThing(col3);
n3.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,10,35)); 
row3.world.add(n3);

var yRotation3 = 0;
var camYRotation3 = 30;
var camYInc3 = 1;

var s3renderFunc = function() {
	yRotation3 += 3;
	if (yRotation3 > 360) {
		yRotation3 -= 360;
	}
	n3.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation3 += camYInc3;
	if (camYRotation3 > 30 || camYRotation3 < -30) {
		camYInc3 *= -1;
	}
	cam3.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,10,camYRotation3));
	
	col3.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row3.render();
	requestAnimationFrame(s3renderFunc);
};
s3renderFunc();


///////////////////////////////
//////////////////////////////

var cam4 = new sg.Camera(25);
cam4.position = new sg.Vector(10,101,200); 
row4.world.add(cam4);

var light4 = new sg.Light(new sg.Color(.4,0.1,1.0));
light4.position = new sg.Vector(10,400,1000); 
row4.world.add(light4);

var col4 = document.createElement("div");
col4.className = "column4";
var n4 = new sg.HTMLDivThing(col4);
n4.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,10,45)); 
row4.world.add(n4);

var yRotation4 = 0;
var camYRotation4 = 40;
var camYInc4 = 1;

var s4renderFunc = function() {
	yRotation4 += 4;
	if (yRotation4 > 460) {
		yRotation4 -= 460;
	}
	n4.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation4 += camYInc4;
	if (camYRotation4 > 40 || camYRotation4 < -40) {
		camYInc4 *= -1;
	}
	cam4.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,10,camYRotation4));
	
	col4.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row4.render();
	requestAnimationFrame(s4renderFunc);
};
s4renderFunc();

///////////////////////////////
//////////////////////////////

var cam5 = new sg.Camera(25);
cam5.position = new sg.Vector(10,101,200); 
row5.world.add(cam5);

var light5 = new sg.Light(new sg.Color(.50,1.0,1.0));
light5.position = new sg.Vector(10,9,1000); 
row5.world.add(light5);

var col5 = document.createElement("div");
col5.className = "column5";
var n5 = new sg.HTMLDivThing(col5);
n5.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(102,40,19)); 
row5.world.add(n5);

var yRotation5 = 0;
var camYRotation5 = 5;
var camYInc5 = 1;

var s5renderFunc = function() {
	yRotation5 += 5;
	if (yRotation5 > 1060) {
		yRotation5 -= 1060;
	}
	n5.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,1,1)); 
	 
	camYRotation5 += camYInc5;
	if (camYRotation5 > 100 || camYRotation5 < -100) {
		camYInc5 *= -1;
	}
	cam5.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,9,camYRotation5));
	
	col5.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row5.render();
	requestAnimationFrame(s5renderFunc);
};
s5renderFunc();

///////////////////////////////
//////////////////////////////

var cam6 = new sg.Camera(25);
cam6.position = new sg.Vector(10,100,200); 
row6.world.add(cam6);

var light6 = new sg.Light(new sg.Color(.1,0.41,0.12));
light6.position = new sg.Vector(10,900,1000); 
row6.world.add(light6);

var col6 = document.createElement("div");
col6.className = "column6";
var n6 = new sg.HTMLDivThing(col6);
n6.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,10,75)); 
row6.world.add(n6);

var yRotation6 = 0;
var camYRotation6 = 70;
var camYInc6 = 1;

var s6renderFunc = function() {
	yRotation6 += 6;
	if (yRotation6 > 660) {
		yRotation6 -= 660;
	}
	n6.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation6 += camYInc6;
	if (camYRotation6 > 60 || camYRotation6 < -60) {
		camYInc6 *= -1;
	}
	cam6.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,10,camYRotation7));
	
	col6.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row6.render();
	requestAnimationFrame(s6renderFunc);
};
s6renderFunc();

///////////////////////////////
//////////////////////////////

var cam7 = new sg.Camera(25);
cam7.position = new sg.Vector(10,100,200); 
row7.world.add(cam7);

var light7 = new sg.Light(new sg.Color(.7,0.1,1.0));
light7.position = new sg.Vector(10,900,1000); 
row7.world.add(light7);

var col7 = document.createElement("div");
col7.className = "column7";
var n7 = new sg.HTMLDivThing(col7);
n7.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,10,75)); 
row7.world.add(n7);

var yRotation7 = 0;
var camYRotation7 = 70;
var camYInc7 = 1;

var s7renderFunc = function() {
	yRotation7 += 7;
	if (yRotation7 > 760) {
		yRotation7 -= 760;
	}
	n7.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,1)); 
	 
	camYRotation7 += camYInc7;
	if (camYRotation7 > 70 || camYRotation7 < -70) {
		camYInc7 *= -1;
	}
	cam7.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,10,camYRotation7));
	
	col7.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row7.render();
	requestAnimationFrame(s7renderFunc);
};
s7renderFunc();

///////////////////////////////
//////////////////////////////

var cam8 = new sg.Camera(25);
cam8.position = new sg.Vector(10,101,200); 
row8.world.add(cam8);

var light8 = new sg.Light(new sg.Color(.18,0.30,1.0));
light8.position = new sg.Vector(110,900,90); 
row8.world.add(light8);

var col8 = document.createElement("div");
col8.className = "column8";
var n8 = new sg.HTMLDivThing(col8);
n8.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(100,90,85)); 
row8.world.add(n8);

var yRotation8 = 0;
var camYRotation8 = 80;
var camYInc8 = 1;

var s8renderFunc = function() {
	yRotation8 += 8;
	if (yRotation8 > 860) {
		yRotation8 -= 860;
	}
	n8.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(1,10,19)); 
	n8.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(-1,-10,19)); 
	camYRotation8 += camYInc8;
	if (camYRotation8 > 80 || camYRotation8 < -80) {
		camYInc8 *= -1;
	}
	cam8.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,10,camYRotation8));
	
	col8.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row8.render();
	requestAnimationFrame(s8renderFunc);
};
s8renderFunc();

///////////////////////////////
//////////////////////////////

var cam9 = new sg.Camera(25);
cam9.position = new sg.Vector(10,101,200); 
row9.world.add(cam9);

var light9 = new sg.Light(new sg.Color(19,0.4,1.0));
light9.position = new sg.Vector(10,900,1000); 
row9.world.add(light9);

var col9 = document.createElement("div");
col9.className = "column9";
var n9 = new sg.HTMLDivThing(col9);
n9.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,10,95)); 
row9.world.add(n9);

var yRotation9 = 0;
var camYRotation9 = 90;
var camYInc9 = 1;

var s9renderFunc = function() {
	yRotation9 += 9;
	if (yRotation9 > 960) {
		yRotation9 -= 960;
	}
	n9.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(10,9,13)); 
	 
	camYRotation9 += camYInc9;
	if (camYRotation9 > 90 || camYRotation9 < -90) {
		camYInc9 *= -1;
	}
	cam9.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,0,camYRotation9));
	
	col9.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
	} 
	
	row9.render();
	requestAnimationFrame(s9renderFunc);
};
s9renderFunc();

///////////////////////////////
//////////////////////////////

var cam10 = new sg.Camera(25);
cam10.position = new sg.Vector(10,101,200); 
row10.world.add(cam10);

var light10 = new sg.Light(new sg.Color(.50,1.0,1.0));
light10.position = new sg.Vector(10,9,1000); 
row10.world.add(light10);

var col10 = document.createElement("div");
col10.className = "column10";
var n10 = new sg.HTMLDivThing(col10);
n10.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(102,40,19)); 
row10.world.add(n10);

var yRotation10 = 0;
var camYRotation10 = 10;
var camYInc10 = 1;

var s10renderFunc = function() {
	yRotation10 += 10;
	if (yRotation10 > 1060) {
		yRotation10 -= 1060;
	}
	n10.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,1,1)); 
	 
	camYRotation10 += camYInc10;
	if (camYRotation10 > 100 || camYRotation10 < -100) {
		camYInc10 *= -1;
	}
	cam10.rotation = sg.Matrix.makeRotationFromEuler(new sg.Vector(0,9,camYRotation10));
	
	col10.onmousedown = function() {
		n1child3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n2.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n3.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n4.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n5.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n6.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n7.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n8.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n9.scale = sg.Vector.times(1, new sg.Vector(1,1,1));
		n10.scale = sg.Vector.times(3, new sg.Vector(1,1,1));
	} 
	
	row10.render();
	requestAnimationFrame(s10renderFunc);
};
s10renderFunc();