
function cpfValidator(cpf) {
  let Soma = 0;
  let Resto;
 
  if (cpf.length != 11 || 
  cpf == "00000000000" || 
  cpf == "11111111111" || 
  cpf == "22222222222" || 
  cpf == "33333333333" || 
  cpf == "44444444444" || 
  cpf == "55555555555" || 
  cpf == "66666666666" || 
  cpf == "77777777777" || 
  cpf == "88888888888" || 
  cpf == "99999999999")
    return false;	
   
for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;
 
  if ((Resto === 10) || (Resto === 11))  Resto = 0;
  if (Resto !== parseInt(cpf.substring(9, 10)) ) return false;
 
Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
 
  if ((Resto === 10) || (Resto === 11))  Resto = 0;
  if (Resto !== parseInt(cpf.substring(10, 11) ) ) return false;
  return true;
}

let cpf = "32197584871";

console.log(cpfValidator(cpf));