exports.cpfValidator = cpf =>{

  let sum = 0;
  let rest;
  
  if (cpf.split('').every((elem) => elem === cpf[0]))
    return false;
     
  for (let count = 1; count <= 9; count++) {
    sum = sum + parseInt(cpf.substring(count - 1, count)) * (11 - count);
    rest = (sum * 10) % 11;
  } 
  
  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
   
  sum = 0;
  
  for (let count = 1; count <= 10; count++) {
    sum = sum + parseInt(cpf.substring(count - 1, count)) * (12 - count);
    rest = (sum * 10) % 11;
  }

  if ((rest === 10) || (rest === 11)) rest = 0;

  if (rest !== parseInt(cpf.substring(10, 11))) return false;

return true;

};
