# Portuscript - A Programming Language in Portuguese

Welcome to Portuscript! This is a programming language that transpiles JavaScript into Portuguese, making programming easier for Portuguese-speaking beginners. In Portuscript, you can write code in Portuguese and see how it is converted to JavaScript. The goal is to make programming more accessible and intuitive.

## Playground

You can access the Portuscript playground at [portuscript.vercel.app](https://portuscript.vercel.app/). The playground contains a code editor and a console to run the editor's file and serve as a REPL.

## Installation

To start using Portuscript, simply access the playground and start writing your code. There's no need to install anything on your computer.

## Syntax

The syntax of Portuscript is very similar to JavaScript, but with keywords in Portuguese. Here are some basic examples to get you started.

### Writing to the Console

To write to the console, you can use the `escreva` function.

```javascript
escreva("Hello, world!");
```

### Creating Variables

You can create variables using `var`.

```javascript
var nome = "João";
escreva(nome);
```

### Functions

Functions are defined using the keyword `funcao`.

```javascript
funcao saudacao(nome) {
  escreva("Hello, " + nome + "!");
}

saudacao("Maria");
```

### Conditionals

You can use `se`, `senao se`, and `senao` to create conditional structures.

```javascript
var idade = 18;

se (idade >= 18) {
  escreva("You are an adult.");
} senao {
  escreva("You are a minor.");
}
```

### Loops

For loops, use `para`, `enquanto`, and `faca`.

```javascript
// Using para
para (var i = 0; i < 5; i++) {
  escreva(i);
}

// Using enquanto
var contador = 0;

enquanto (contador < 5) {
  escreva(contador);
  contador++;
}

// Using faca enquanto
var num = 0;

faca {
  escreva(num);
  num++;
} enquanto (num < 5);
```

### User Interaction

To interact with the user, you can use `alerta`, `leia`, and `confirma`.

```javascript
alerta("This is an alert!");

var nome = leia("What is your name?");
escreva("Hello, " + nome + "!");

var resposta = confirma("Do you like programming?");
se (resposta) {
  escreva("That's great! Keep programming.");
} senao {
  escreva("Don't give up! Programming is very useful.");
}
```

## Simple Algorithm Examples

Here are some examples of simple algorithms that you can test in the playground.

### Sum of Two Numbers

```javascript
var num1 = leia("Enter the first number:");
var num2 = leia("Enter the second number:");
var soma = Number(num1) + Number(num2);
escreva("The sum is: " + soma);
```

### Check if a Number is Even or Odd

```javascript
var numero = leia("Enter a number:");
se (numero % 2 === 0) {
  escreva("The number is even.");
} senao {
  escreva("The number is odd.");
}
```

### Multiplication Table

```javascript
var numero = leia("Enter a number to see the multiplication table:");
para (var i = 1; i <= 10; i++) {
  escreva(numero + " x " + i + " = " + (numero * i));
}
```

We hope you enjoy Portuscript and that it helps make your programming learning more fun and accessible. Happy coding!