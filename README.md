
# Guia de Introdução ao JavaScript

Curso basico nodeJS 1-8
- https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=1


Como fazer fech no nodeJS
- https://www.youtube.com/watch?v=1O5GyaGcpos


Curso basico express
- https://www.youtube.com/watch?v=pPY8x4tlsXQ
- https://www.youtube.com/watch?v=ZrxNuqCC0Bw
- https://www.youtube.com/watch?v=L9t-pJMwX-8
- https://www.youtube.com/watch?v=q1MjPUZUPFs
- https://www.youtube.com/watch?v=eTf_amgQGjk&t


Este guia apresenta os primeiros passos para entender  
1. variáveis  
2. condicionais  
3. uso do `console.log`  
4. arrays  
5. funções  
6. laço `for`  
7. tarefas práticas em JavaScript  

---

## 🔹 1) O que são variáveis no JavaScript
Uma **variável** é como uma “caixa” na memória do computador que guarda um valor.  
Você dá um **nome** para ela e usa esse nome para acessar ou alterar o valor.

```js
let nome = "Marco"; // guarda texto
let idade = 25;     // guarda número
```

---

## 🔹 2) Como declarar e inicializar variáveis
Existem três palavras-chave principais:

- **`let`** → variável que pode mudar.  
- **`const`** → constante (não pode ser reatribuída).  
- **`var`** → antiga, evite (tem comportamentos confusos).  

```js
let contador = 0;             // pode mudar depois
const apiUrl = "https://..."; // não pode mudar
```

➡️ **Declarar** = criar a variável  
➡️ **Inicializar** = dar um valor a ela  

Exemplo:
```js
let cidade;       // declaração
cidade = "Belém"; // inicialização
```

---

## 🔹 3) Estruturas condicionais: `if`, `else if`, `else`
O `if` serve para executar algo **se a condição for verdadeira**.

```js
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

Você pode encadear:
```js
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

---

## 🔹 4) O que faz o `console.log`
`console.log()` serve para **mostrar valores no console** (terminal ou navegador).  
É usado para depuração (debug) e testes.

```js
let nome = "Ana";
console.log("Olá,", nome); // Olá, Ana
```

Outros úteis:
```js
console.error("Erro!");   // mensagem de erro
console.warn("Aviso!");   // aviso
console.table([1, 2, 3]); // mostra como tabela
```

---

## 🔹 5) O que são Arrays
Um **array** é uma lista que pode guardar **múltiplos valores em uma única variável**.  
Cada valor dentro de um array ocupa uma **posição (índice)**, começando pelo `0`.

### Criando um array
```js
let frutas = ["maçã", "banana", "laranja"];
```

### Acessando valores
```js
console.log(frutas[0]); // "maçã"
console.log(frutas[2]); // "laranja"
```

### Alterando valores
```js
frutas[1] = "uva";
console.log(frutas); // ["maçã", "uva", "laranja"]
```

### Principais métodos de arrays
```js
let numeros = [1, 2, 3, 4];

// adiciona no fim
numeros.push(5); // [1, 2, 3, 4, 5]

// remove o último
numeros.pop();   // [1, 2, 3, 4]

// adiciona no início
numeros.unshift(0); // [0, 1, 2, 3, 4]

// remove o primeiro
numeros.shift();    // [1, 2, 3, 4]

// tamanho do array
console.log(numeros.length); // 4
```

### Iterando sobre arrays
```js
let cores = ["vermelho", "verde", "azul"];

for (let i = 0; i < cores.length; i++) {
  console.log("Cor:", cores[i]);
}
```

Ou de forma mais moderna:
```js
cores.forEach(cor => console.log("Cor:", cor));
```

---

## 🔹 6) O que são Funções no JavaScript

Uma **função** é um **bloco de código reutilizável** que executa uma tarefa específica.  
Você escreve uma vez e pode chamar quantas vezes precisar.

### Estrutura básica
```js
function nomeDaFuncao(parametros) {
  // instruções
  return resultado; // opcional
}
```

- **Parâmetros**: valores de entrada (opcionais).  
- **`return`**: valor de saída da função (opcional).  

### Exemplo simples
```js
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // 5
```

### Funções sem retorno
```js
function dizerOla(nome) {
  console.log("Olá, " + nome + "!");
}

dizerOla("Marco"); // Olá, Marco!
```

### Arrow Functions
```js
const multiplicar = (x, y) => x * y;
console.log(multiplicar(4, 5)); // 20

const dobro = n => n * 2;
console.log(dobro(7)); // 14
```

### Funções anônimas
```js
let numeros = [1, 2, 3];
numeros.forEach(function(n) {
  console.log("Número:", n);
});

// ou
numeros.forEach(n => console.log("Número:", n));
```

### Escopo e funções
```js
function exemplo() {
  let interna = "Estou dentro!";
  console.log(interna);
}

exemplo();
// console.log(interna); // ERRO: não existe fora
```

### Funções como valores
```js
function criarSaudacao(saudacao) {
  return function(nome) {
    return saudacao + ", " + nome;
  };
}

const ola = criarSaudacao("Olá");
console.log(ola("Ana")); // Olá, Ana
```

---

## 🔹 7) O Laço `for` em JavaScript

O **`for`** é usado para repetir um bloco de código **um número definido de vezes**.  
Sua estrutura é composta por **3 partes**:

```js
for (inicialização; condição; incremento) {
  // bloco a ser repetido
}
```

- **Inicialização** → executa uma vez no começo (normalmente cria um contador).  
- **Condição** → enquanto for verdadeira, o laço continua.  
- **Incremento** → muda o contador a cada repetição.  

### Exemplo básico
```js
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}
```

### Usando `for` em arrays
```js
let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}
```

### `for` decrescente
```js
for (let i = 5; i > 0; i--) {
  console.log("Contagem:", i);
}
```

### Pulando iterações
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // pula o 2
  if (i === 4) break;    // para no 4
  console.log("i =", i);
}
```

---

## 🔹 8) Tarefas Práticas em JavaScript

### ✅ 1. Função que retorna valor pelo índice
```js
let frutas = ["maçã", "banana", "laranja", "uva"];

function pegarPorIndice(indice) {
  return frutas[indice];
}

console.log(pegarPorIndice(2)); // "laranja"
```

### ✅ 2. Função que soma dois números
```js
function somar(a, b) {
  let resultado = a + b;
  console.log("Soma:", resultado);
  return resultado;
}

somar(5, 7); // Soma: 12
```

### ✅ 3. Função que remove um item pelo índice
```js
let numeros = [10, 20, 30, 40, 50];

function removerPorIndice(indice) {
  numeros.splice(indice, 1); // remove 1 item a partir do índice
  console.log("Array atualizado:", numeros);
}

removerPorIndice(2);
// Array atualizado: [10, 20, 40, 50]
```

--- 
## Questão para ser desemvolvidas
```js
const pokemons = [
  { nome: "Bulbasaur", tipo: ["Grass", "Poison"] },
  { nome: "Charmander", tipo: ["Fire"] },
  { nome: "Squirtle", tipo: ["Water"] },
  { nome: "Pikachu", tipo: ["Electric"] },
  { nome: "Jigglypuff", tipo: ["Normal", "Fairy"] },
  { nome: "Meowth", tipo: ["Normal"] },
  { nome: "Psyduck", tipo: ["Water"] },
  { nome: "Machop", tipo: ["Fighting"] },
  { nome: "Geodude", tipo: ["Rock", "Ground"] },
  { nome: "Eevee", tipo: ["Normal"] }
];
```
### 1) Rota de listagem de Pokémons
- Crie uma função que retorne uma lista de Pokémons.
- Essa função deve ser chamada dentro da rota GET /pokemons para que a resposta seja a lista completa.

### 2) Rota com Query Params (filtrar por índice/id)
- Modifique a rota GET /pokemons para aceitar um parâmetro de query chamado id.
- Quando nenhum id for passado → retorne a lista completa.
- Quando um id válido for passado → retorne somente o Pokémon daquela posição.
- Se o id estiver fora do range → retorne 404 com uma mensagem de erro.
- Se o id estiver dentro do range → retorne 200 com o Pokémon selecionado.

---
