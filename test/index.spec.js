const assert = require('chai').assert;
const cpfSearch = require('../lib/index');
const cpfTest = cpfSearch.cpfValidator;

describe('Testes da funcao cpfValidator que valida CPFs', () => {

    it('Executar a funcao sem preencher o CPF deve retornar false', () => {
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

    it('CPF com caracteres especiais deve retornar false', () => {
        assert.equal(cpfTest('357˜`443840'), false);
    }); 

    it('CPF com espacos em branco deve retornar false', () => {
        assert.equal(cpfTest('357 43443840'), false);	
    }); 

    it('CPF com digitos a mais deve retornar false', () => {
        assert.equal(cpfTest('357434438400'), false);
    }); 

    it('CPF com digitos a menos deve retornar false', () => {
        assert.equal(cpfTest('5743443840'), false);
    }); 
  
    it('CPF com todos os digitos iguais deve retornar false', () => {
        assert.equal(cpfTest('00000000000'), false);
    }); 
		
});

		
