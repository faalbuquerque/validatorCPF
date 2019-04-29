exports.cpfValidator = cpf => {

  let sum = 0;
  let rest;
  
  cpf = cpf.replace(/[^\d]+/g, '');
  
  if (cpf.length !== 11 || 
    cpf === '00000000000' || 
    cpf === '11111111111' || 
    cpf === '22222222222' || 
    cpf === '33333333333' || 
    cpf === '44444444444' || 
    cpf === '55555555555' || 
    cpf === '66666666666' || 
    cpf === '77777777777' || 
    cpf === '88888888888' || 
    cpf === '99999999999')
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

// let cpf = '32197584871';
// console.log(cpfValidator(cpf));

