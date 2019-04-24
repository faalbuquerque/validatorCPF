function validaCPF(cpf) {

  var numeros, digitos, soma, contador, resultado, digitosIguais;

  digitosIguais = 1;

  if (cpf.length < 11)
    return false;

  for (contador = 0; contador < cpf.length - 1; contador++)
    if (cpf.charAt(contador) !== cpf.charAt(contador + 1)) {
      
      digitosIguais = 0;
      break;

    }

  if (!digitosIguais) {

    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;

    for (contador = 10; contador > 1; contador--)
    
      soma += numeros.charAt(10 - contador) * contador;

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado !== digitos.charAt(0))
      return false;
        
    numeros = cpf.substring(0, 10);
    soma = 0;

    for (contador = 11; contador > 1; contador--)

      soma += numeros.charAt(11 - contador) * contador;
      
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado !== digitos.charAt(1))
      return false;
    return true;

  } else
    return false;

}

/*
function testaCPF (strCPF) {
	let Soma;
	let resto;
	Soma = 0;
  if (strCPF === "00000000000") return false;

  for (i = 1; i <= 9; i ++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  resto = (Soma * 10) % 11;

	if ((resto === 10) || (resto === 11)) resto = 0;
	if (resto !== parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
	for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
	resto = (Soma * 10) % 11;

	if ((resto === 10) || (resto === 11)) resto = 0;
	if (resto !== parseInt(strCPF.substring(10, 11))) return false;
	return true;
}

let strCPF = "12345678909";
alert (testaCPF(strCPF));
*/