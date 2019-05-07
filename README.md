# Validador de CPF

Esta biblioteca verifica se CPFs são validos ou inválidos, devendo retornar *true* para validos e *false* para invalidos.
___
### Instalação:

Para instalar a biblioteca digite o comando:
```
$  npm i cpfvalidatorfabi
```
___
### Utilização:

Para utilizar a biblioteca chame a função *cpfValidator()* utilizando os comandos, como no exemplo abaixo:
```
Criei const e requisitei a biblioteca para acessa-la:

> const enterCPF = require("cpfvalidatorfabi");
```
```
Agora já com acesso a biblioteca, chamei a função cpfValidator() através da const:

> enterCPF.cpfValidator("72351176308")
> // Nesse exemplo o CPF é válido e deve retornar true.
```
___
### **Sobre o Projeto:**

A aplicação foi desenvolvida em javaScript utilizando regra matemática específica, para fazer a validação através dos dígitos verificadores do CPF. 
Caso queira entender a logica <a href="https://www.geradorcpf.com/algoritmo_do_cpf.htm">clique aqui.</a>
Para efetuar testes utilizei as ferramentas do NPM: Mocha, Chai e Nyc. Para padronizar o codigo e prevenir erros, utilizei  a ferramenta eslint.
___
### Roadmap oficial do projeto

### versão 1.0.3 (released) 
**Funcionalidade:** Verifica se CPFs são válidos ou inválidos através de uma função em JavaScript, esta função deve retornar *true* para CPFs validos e *false* para CPFs invalidos.