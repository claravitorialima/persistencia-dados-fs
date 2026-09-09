import {existsSync, mkdirSync, writeFileSync, readFileSync} from 'fs';

// Models:
type Livro = {
    titulo: string;
    autor: string;
    genero?: string; //? indica que o campo é opcional/nulo
    ano: number;
    lido: boolean; //espera uma resposta de sim ou não
};

type Hobby = string;

type FamosoFavorito = {
    nome: string;
};

type Amigo = {
    nome: string;
    ondeConheci: string;
    hobbies: Hobby[];
    famososFavoritos: FamosoFavorito[];
};


//Manipulação de arquivos JSON

// 1. Função para adicionar um livro a um arquivo JSON
const livros: Livro[] = [];
livros.push({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien", 
    genero: "Fantasia", 
    ano: 1954, 
    lido: true
});

livros.push({
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficção Científica",
    ano: 1948,
    lido: false
});

livros.push({
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    lido: true
});

// 2. Percorrer o array (lista) de livros e imprimir os títulos
livros.forEach((livro) => {
    //Para colocar mais de uma variável adicionar sempre a crase
    console.log(`Título: ${livro.titulo} (${livro.ano}) - Autor: ${livro.autor} - ${livro.lido ? "Lido" : "Não lido"}`);
});

// 3. Filtrar a lista (ex: Apenas os livros lidos)
const livrosLidos = livros.filter((livro) => livro.lido === true);

// 4. Encontrar um livro específico (ex: por um campo específico, como o título)
const livroEncontrado = livros.find((livro) => livro.titulo === "1984");


// Salvar no disco (em um arquivo JSON)
const diretorio = 'data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}

writeFileSync(`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), 'utf-8'); 
// Os parâmetros null, 2 servem para indentar e deixar visualmente legível 

// 6. Ler do disco (de um arquivo JSON) 
const livrosLidosDoArquivo:
    Livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, 'utf-8'));
console.log("Livros lidos do arquivo JSON:", livrosLidosDoArquivo);