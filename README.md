# Persistência de dados com File System
Projeto em TypeScript para demonstrar a persistência de dados em arquivos JSON utilizando o módulo `fs` do Node.js, além de uma API básica com Express.

## Objetivo

Esse projeto foi desenvolvido para mostrar como:
- criar e manipular objetos em TypeScript;
- salvar dados em um arquivo JSON;
- ler dados do arquivo JSON para reutilizar no sistema;
- filtrar e buscar informações em uma lista de registros;

## Estrutura do projeto

```text
persistencia-dados-fs/
├── data/
│   └── livros.json
├── src/
│   ├── app.ts
│   └── manipula-json.ts
├── package.json
├── tsconfig.json
└── README.md
```

## O que foi implementado

### 1. Manipulação de lista de livros
No arquivo `src/manipula-json.ts`, foi criado um array de objetos do tipo `Livro` com informações como:
- título
- autor
- gênero
- ano
- status de leitura (`lido`)


### 2. Persistência em disco
A partir da biblioteca `fs`, o projeto verifica se a pasta `data` existe. Caso não exista, ela é criada automaticamente e o conteúdo dos livros é gravado em `data/livros.json`.


## Observação
Este projeto foi criado como exemplo didático de persistência de dados em arquivos locais