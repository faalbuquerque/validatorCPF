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
    
  it('CPF com letras deve retornar false', () => {
	
    assert.equal(cpfTest('35y43a438m40'), false);
		
  }); 
		
});

// executar mocha: node node_modules/.bin/mocha
// executar nyc: sudo nyc mocha
		
