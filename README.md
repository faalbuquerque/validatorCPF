# Validador de CPF

Esta biblioteca verifica se CPFs são validos ou inválidos, devendo retornar *true* para validos e *false* para invalidos.

A aplicação foi desenvolvida em javaScript utilizando regra matemática específica, para fazer a validação através dos dígitos verificadores. 
Para entender a logica <a href="https://www.geradorcpf.com/algoritmo_do_cpf.htm">clique aqui.</a>



### Instalação:
```
Para instalar a biblioteca é necessario digitar o comando:
$  npm install cpfvalidatorfabi
```

### Utilização:
```
Para utilizar a biblioteca é necessário chamar a função cpfValidator() utilizando os comandos abaixo:

//Criar const e requisitar a biblioteca para acessa-la:
> const enterCPF = require("cpfvalidatorfabi");

//Chamar a função cpfValidator() através da const:
> enterCPF.cpfValidator("72351176308")
> // Nesse exemplo o CPF é válido e deve retornar true.
```

### Roadmap oficial do projeto

#### versão 1.0.3 (released)

**Funcionalidade:** Verificar se CPFs são válidos ou inválidos através de uma função em JavaScript, esta função deve retornar *true* para CPFs validos e *false* para CPFs invalidos.