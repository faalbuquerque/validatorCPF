const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const cpfWritten = require('../lib/index');

describe('Validacao de numeros de CPF', () => {

  describe('cpfValidator', () => {

    it('CPF em branco deve retornar false', () => {
	
      expect(cpfWritten.cpfValidator('').to.equal('false'));
		
    });
		
    it('CPF valido deve retornar true', () => {
	
      expect(cpfWritten.cpfValidator('35743443840').to.equal('true'));
		
    });
		
    it('CPF invalidos devem retornar false', () => {
	
      expect(cpfWritten.cpfValidator('35743443841').to.equal('false'));
		
    });
		

    it('CPF com espacos em branco devem retornar true', () => {
	
      expect(cpfWritten.cpfValidator('357 434 438 40').to.equal('false'));
		
    });
		
    it('CPF com ponto e traco devem retornar true', () => {
	
      expect(cpfWritten.cpfValidator('357.434.438-40').to.equal('false'));
		
    });
		
    it('CPF com letras deve retornar false', () => {
	
      expect(cpfWritten.cpfValidator('35y43a438m40').to.equal('false'));
		
    });
		
  });
		
});
