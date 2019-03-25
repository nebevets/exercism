export const compute = (firstStrand, secondStrand) => {
  if ((typeof firstStrand !== 'string' && typeof secondStrand !== 'string')
  || firstStrand.length !== secondStrand.length) throw new Error('left and right strands must be of equal length');
  const results = firstStrand.split('')
    .filter((thisNucleotide, nucleotide) => thisNucleotide !== secondStrand[nucleotide]);
  return results.length;
};
