exports.cpfValidator = cpf => {

    cpf = cpf.split('');

    if (cpf.length > 11) return false;

    if (cpf.every((elem) => elem === cpf[0])) return false;
  
    let firstDigitCount = parseInt(cpf[9]) === (calc(cpf.slice(0, 9), 10));
    
    let secondDigitCount = parseInt(cpf[10]) === (calc(cpf.slice(0, 10), 11));
  
    if (firstDigitCount  &&  secondDigitCount ) return true;
    else return false;         
};
  
let calc = (cpf, qtdDigits) => {

    let cpfMult = cpf.map((num) => parseInt(num) * qtdDigits--);
    let cpfSum = cpfMult.reduce((accum, num) => accum += num);
    const cpfMod = cpfSum % 11;
    
    return cpfMod < 2 ? 0 : 11 - cpfMod; 
};