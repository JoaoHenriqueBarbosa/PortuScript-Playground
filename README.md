# Portuscript - Uma Linguagem de Programação em Português

Bem-vindo ao Portuscript! Esta é uma linguagem de programação que transpila JavaScript para português, facilitando o estudo de programação para iniciantes em programação falantes de português. No Portuscript, você pode escrever código em português e ver como ele é convertido para JavaScript. O objetivo é tornar a programação mais acessível e intuitiva.

## Playground

Você pode acessar o playground do Portuscript em [portuscript.vercel.app](https://portuscript.vercel.app/). O playground contém um editor de código e um console para rodar o arquivo do editor e servir de REPL.

## Instalação

Para começar a usar o Portuscript, basta acessar o playground e começar a escrever seu código. Não é necessário instalar nada no seu computador.

## Sintaxe

A sintaxe do Portuscript é muito similar ao JavaScript, mas com palavras-chave em português. Aqui estão alguns exemplos básicos para você começar.

### Escrevendo no Console

Para escrever no console, você pode usar a função `escreva`.

```javascript
escreva("Olá, mundo!");
```

### Criando Variáveis

Você pode criar variáveis usando `var`.

```javascript
var nome = "João";
escreva(nome);
```

### Funções

As funções são definidas usando a palavra-chave `funcao`.

```javascript
funcao saudacao(nome) {
  escreva("Olá, " + nome + "!");
}

saudacao("Maria");
```

### Condicionais

Você pode usar `se`, `senao se`, e `senao` para criar estruturas condicionais.

```javascript
var idade = 18;

se (idade >= 18) {
  escreva("Você é maior de idade.");
} senao {
  escreva("Você é menor de idade.");
}
```

### Laços de Repetição

Para laços de repetição, use `para`, `enquanto`, e `faca`.

```javascript
// Usando para
para (var i = 0; i < 5; i++) {
  escreva(i);
}

// Usando enquanto
var contador = 0;

enquanto (contador < 5) {
  escreva(contador);
  contador++;
}

// Usando faca enquanto
var num = 0;

faca {
  escreva(num);
  num++;
} enquanto (num < 5);
```

### Interação com o Usuário

Para interagir com o usuário, você pode usar `alerta`, `leia`, e `confirma`.

```javascript
alerta("Isso é um alerta!");

var nome = leia("Qual é o seu nome?");
escreva("Olá, " + nome + "!");

var resposta = confirma("Você gosta de programar?");
se (resposta) {
  escreva("Que bom! Continue programando.");
} senao {
  escreva("Não desista! Programar é muito útil.");
}
```

## Exemplos de Algoritmos Simples

Aqui estão alguns exemplos de algoritmos simples que você pode testar no playground.

### Soma de Dois Números

```javascript
var num1 = leia("Digite o primeiro número:");
var num2 = leia("Digite o segundo número:");
var soma = Number(num1) + Number(num2);
escreva("A soma é: " + soma);
```

### Verificar se um Número é Par ou Ímpar

```javascript
var numero = leia("Digite um número:");
se (numero % 2 === 0) {
  escreva("O número é par.");
} senao {
  escreva("O número é ímpar.");
}
```

### Tabuada

```javascript
var numero = leia("Digite um número para ver a tabuada:");
para (var i = 1; i <= 10; i++) {
  escreva(numero + " x " + i + " = " + (numero * i));
}
```

Esperamos que você aproveite o Portuscript e que ele ajude a tornar seu aprendizado de programação mais divertido e acessível. Feliz codificação!