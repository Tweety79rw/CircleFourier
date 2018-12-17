class CircleForier {
  /**
   * The constructor
   * @param {Number} iteration    The index of the recursion
   * @param {Number} maxIteration The number of recursion, if null it uses iteration.
   * @param {Function} N            This function calculates the n in the fourier series ie. 4 * sin(n * theta)/(n * PI)
   * @param {Function} fourier      This function calculates the the r for this recursion using this object's n variable
   */
  constructor(iteration, maxIteration, N, fourier) {
    this.angle = 0;
    this.iteration = iteration || 1;
    this.maxIteration = maxIteration || this.iteration;
    this.n = N(this.N());
    this.r = fourier(this.n);
    if(this.iteration > 1) {
      this.child = new CircleForier(this.iteration - 1, this.maxIteration, N, fourier);
    } else if(this.iteration === 1) {
      this.wave = [];
    }
  }
  /**
   * Calculates the index for this recursion 0 for the first and maxIteration for the last
   */
  N() {
    return this.maxIteration - this.iteration;
  }
  /**
   * Renders the visual on a canvas
   * @param {Number} cx The center x position for this circle to be drawn
   * @param {Number} cy The center y position for this circle to be drawn
   */
  Render(cx, cy) {
    let x = cx + this.r * cos(this.n * this.angle);
    let y = cy + this.r * sin(this.n * this.angle);
    stroke(255);
    noFill();
    ellipse(cx, cy, this.r * 2);
    line(cx,cy,x,y);
    fill(255);
    ellipse(x, y, 8);
    this.angle += 0.01;
    if(this.child)
      this.child.Render(x, y);
      if(this.wave) {
        this.wave.unshift(y);
        push();
        translate(800, 0);
        line(x - 800, y, 0, this.wave[0]);
        beginShape();
        noFill();
        for(let i = 0; i < this.wave.length; i++) {
          vertex(i, this.wave[i]);
        }
        endShape();
        pop();
        if(this.wave.length > 1000)
          this.wave.pop();
      }

  }
}
