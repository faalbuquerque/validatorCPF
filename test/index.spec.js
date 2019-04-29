// executar mocha no terminal com o comando: node node_modules/.bin/mocha

const assert = require('chai').assert;
const cpfWritten = require('../lib/index');

describe('cpfWritten()', () => {

  it('CPF em branco deve retornar false', () => {
	
    assert.equal(cpfValidator(''), false);
		
  });
		
  it('CPF valido deve retornar true', () => {
	
    assert.equal(cpfValidator('35743443840'), true);
		
  });
		
  it('CPF invalido deve retornar false', () => {
	
    assert.equal(cpfValidator('35743443841'), false);
		
  });

  it('CPF com espacos em branco deve retornar true', () => {
	
    assert.equal(cpfValidator('357 434 438 40'), true);
		
  });
    
  it('CPF com ponto e traco deve retornar true', () => {
	
    assert.equal(cpfValidator('357.434.438-40'), true);
		
  });
    
  it('CPF com letras deve retornar false', () => {
	
    assert.equal(cpfValidator('35y43a438m40'), false);
		
  }); 
		
});
		
