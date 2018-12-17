let cf;
let cf2;
function setup() {
  createCanvas(1600,800);
  // Sawtooth fourier series n starts a 1 and increments by 1
  cf = new CircleForier(30, null,function(n) { return n+1;}, function(n) { return 200 * (2 / ((n%2===0?n:-n) * PI));});
  // squar wave fourier series n starts at 1 and increments by 2 making all values odd
  cf2 = new CircleForier(30, null, function(n) {return n * 2 + 1;}, function(n) { return 200 * (4 / (n * PI));});
}

function draw() {
  background(0);
  cf.Render(400,400);
  cf2.Render(400,400);
}
