
const langs = [
"IZAJILI DNILTAF", 
"DNILTAF",

];
 
let charSize = 20;
let fallRate = charSize / 1;
let streams;
 
// -------------------------------
class Char {
constructor(value, x, y, speed) {
this.value = value;
this.x = x;
this.y = y;
this.speed = speed;
}
 
draw() {
const flick = random(500);
// 10 percent chance of flickering a number instead
if (flick < 10) {
fill(120, 30, 100);
text(round(random(9)), this.x, this.y);
} else {
text(this.value, this.x, this.y);
}
 
// fall down
this.y = this.y > height ? 0 : this.y + this.speed;
}
}
 
// -------------------------------------
class Stream {
constructor(text, x) {
const y = random(text.length);
const speed = random(2, 5);
this.chars = [];
 
for (let i = text.length; i >= 0; i--) {
this.chars.push(
new Char(text[i], x, (y + text.length - i) * charSize, speed)
);
}
}
 draw() {
fill(120, 100, 100);
this.chars.forEach((c, i) => {
// 30 percent chance of lit tail
const lit = random(100);
if (lit < 30) {
if (i === this.chars.length - 1) {
fill(120, 30, 100);
} else {
fill(120, 100, 90);
}
}
 
c.draw();
});
}
}
 function createStreams() {
// create random streams from langs that span the width
for (let i = 0; i < width; i += charSize) {
streams.push(new Stream(random(langs), i));
}
}
 
function reset() {
streams = [];
createStreams();
}
 
function setup() {
createCanvas(innerWidth, innerHeight);
reset(1);
frameRate(10);
colorMode(HSB);
noStroke();
textSize(charSize);
textFont("monospace");
background(0);
}
 
function draw() {
background(2, 0.4);
streams.forEach((s) => s.draw());
}
 
function windowResized() {
resizeCanvas(innerWidth, innerHeight);
background(1);
reset(1);
}