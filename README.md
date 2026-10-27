# Cadastro de alunos

Este projeto é um exercício de JavaScript em que pratico o cadastro de alunos pelo terminal. A pessoa informa quantos alunos deseja cadastrar e, para cada um, digita o nome e a nota. No final, o programa mostra os alunos com nota maior ou igual a 6.

## O que estou praticando

- Criar objetos a partir de uma classe;
- Guardar os alunos em um array;
- Ler e validar dados digitados no terminal;
- Usar `async`/`await` com o módulo `readline/promises`;
- Filtrar os alunos usando `Array.prototype.filter()`.

## Como executar

É necessário ter o Node.js instalado. Na pasta do projeto, execute:

```powershell
node .\src\scripts\alunos.js
```

O programa vai pedir a quantidade de alunos e, em seguida, o nome e a nota de cada um. Para notas decimais, aceita ponto ou vírgula.

## Estrutura

```text
src/
└── scripts/
    └── alunos.js
```