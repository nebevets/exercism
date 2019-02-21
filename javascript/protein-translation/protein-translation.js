export const translate = (rna) => {
    const proteins = [];
    if(typeof rna !== 'string') return proteins;
    const condonLength = 3;
    const condonProteins = {
        AUG:'Methionine',
        UUU:'Phenylalanine', UUC:'Phenylalanine',
        UUA:'Leucine', UUG:'Leucine',
        UCU:'Serine', UCC:'Serine', UCA:'Serine', UCG:'Serine',
        UAU:'Tyrosine', UAC:'Tyrosine',
        UGU:'Cysteine', UGC:'Cysteine',
        UGG:'Tryptophan',
        UAA:'STOP', UAG:'STOP', UGA:'STOP'
    };
    let rnaIndex = 0;
    do{
        let condon = rna.substr(rnaIndex, condonLength);
        if(condonProteins[condon] === 'STOP') break;
        if(!condonProteins[condon]) throw new Error('Invalid codon');
        proteins.push(condonProteins[condon]);
        rnaIndex += condonLength;
    }while(rnaIndex < rna.length)
    return proteins;
}