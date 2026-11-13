# Calculadora JS

Calculadora para uso no dia a dia, feita para praticar JavaScript e lógica de programação. Projeto de estudo do meu curso de desenvolvimento full-stack.

🔗 **Demo:** (link do GitHub Pages, que colocamos depois)

## Funcionalidades

- As 4 operações básicas (soma, subtração, multiplicação e divisão)
- Ponto decimal, sem permitir dois pontos no mesmo número
- Botão `C` para limpar tudo
- Botão `⌫` para apagar um caractere
- Proteção contra entradas inválidas (operadores repetidos, conta incompleta, display vazio)

## Tecnologias

- HTML
- CSS
- JavaScript

## Aprendizados

Foi meu primeiro contato prático com vários conceitos:

- `data-*` e `dataset`, para separar o que o botão mostra do que a lógica usa
- `forEach` e `addEventListener`, para tratar muitos botões com um único bloco
- `includes()` e `slice()` para manipular textos e listas
- `if` com `return` para barrar entradas inválidas

## Limitações conhecidas

O cálculo usa `eval()` que executa texto como código JavaScript. em um site real isso é perigoso, pois permite injetar códigos. Aqui o risco é baixo, porque o display só recebe texto dos botões da própria calculadora.

## Melhorias futuras

- substituir o `eval()` por uma função própria de cálculo.
- Adicionar cálculo de porcentagem.
- melhorar estilização da página.