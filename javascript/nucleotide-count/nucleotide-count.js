class Count{
  constructor() {
    this.A, this.C, this.G, this.T
  }
  set() {
    this.A = 0;
    this.C = 0;
    this.G = 0;
    this.T = 0;
  }
  parse(dnaStrand) {
    if (typeof dnaStrand !== 'string') throw new Error('Invalid Strand');
    this.set();
    const dnaStrandCopy = dnaStrand.toUpperCase();
    for (let nucleotide = 0; nucleotide < dnaStrandCopy.length; nucleotide += 1) {
      if (this.hasOwnProperty(dnaStrandCopy[nucleotide])) {
        this[dnaStrandCopy[nucleotide]] += 1;
      } else {
        throw new Error('Invalid nucleotide in strand')
      }
    }
    return `${this.A} ${this.C} ${this.G} ${this.T}`
  }
}

export const NucleotideCounts = new Count();
