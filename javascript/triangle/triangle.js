export class Triangle {
  constructor(one, two, three) {
    this.sides = [one, two, three].sort((a, b) => a - b);
    this.type = null;
  }

  kind() {
    if (this.sides[0] <= 0) {
      this.type = 'has illegal side(s)';
      if (this.sides[0] === 0) {
        throw new Error('test triangles with no size are illegal');
      }
      throw new Error('triangles with negative sides are illegal');
    }

    if (this.sides[0] + this.sides[1] < this.sides[2]) {
      this.type = 'legs are too small';
      throw new Error('triangles violating triangle inequality are illegal');
    }

    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      this.type = 'equilateral';
    } else if (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2]) {
      this.type = 'isosceles';
    } else {
      this.type = 'scalene';
    }
    return this.type;
  }
}
