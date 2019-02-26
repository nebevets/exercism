export const convert = (array, fromBase, toBase) => {
    if (fromBase <= 1 || toBase <= 1)
        throw new Error(`Wrong ${fromBase <= 1 ? 'input' : 'output'} base`);
    if (parseInt(fromBase) !== fromBase || parseInt(toBase) !== toBase)
        throw new Error(`Wrong ${parseInt(fromBase) !== fromBase ? 'input' : 'output'} base`);    if (!fromBase || !toBase) throw new Error(`Wrong ${!fromBase ? 'input' : 'output'} base`);
    if (fromBase === toBase)
        return array;
    if (array.length === 0)
        throw new Error('Input has wrong format');
    if (array.length > 1 && array[0] === 0)
        throw new Error('Input has wrong format');
    
    let arrayLength = array.length - 1;
    let number = null;
    const result = [];

    for (let index = 0; index < array.length; index++, arrayLength--) {
        if (array[index] < 0 || array[index] >= fromBase)
            throw new Error('Input has wrong format');
        number += array[index] * (fromBase**arrayLength);
    }

    let power = 0;
    let calc = null;
    
    do{
        calc = Math.floor(number/(toBase**power++));
    } while (calc >= toBase);
    
    while (power > 0) {
        --power;
        let quotient = Math.floor(number/(toBase**power));
        let remainder = number % (toBase**power);
        result.push(quotient);
        number = remainder;
    }
    return result;
}