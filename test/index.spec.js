// executar mocha no terminal com o comando: node node_modules/.bin/mocha

const assert = require('chai').assert;
const cpfSearch = require('../lib/index');
const cpfTest = cpfSearch.cpfValidator;


describe('Testes da funcao cpfValidator que valida CPFs', () => {

  it('CPF em branco deve retornar false', () => {
	
    assert.equal(cpfTest(''), false);
		
  });
		
  it('CPF valido deve retornar true', () => {
	
    assert.equal(cpfTest('35743443840'), true);
		
  });
		
  it('CPF invalido deve retornar false', () => {
	
    assert.equal(cpfTest('35743443841'), false);
		
  });

  it('CPF com espacos em branco deve retornar true', () => {
	
    assert.equal(cpfTest('357 434 438 40'), true);
		
  });
    
  it('CPF com ponto e traco deve retornar true', () => {
	
    assert.equal(cpfTest('357.434.438-40'), true);
		
  });
    
  it('CPF com letras deve retornar false', () => {
	
    assert.equal(cpfTest('35y43a438m40'), false);
		
  }); 
		
});
		
