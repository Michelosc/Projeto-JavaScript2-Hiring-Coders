const livros = require('./database');
const readline = require('readline-sync');

const entradaInicial = readline.question("Deseja buscar um livro? S / N ");

function pegaCategorias() {
  let categorias = [];
  for (let i = 0; i < livros.length; i ++) {
    categorias.push(livros[i].categoria + " "); 
  }
  
  let categoriasFiltradas = [...new Set(categorias)];

  
  return categoriasFiltradas;
}

//implementar a visualização dos generos dinamicamente

if(entradaInicial.toLocaleUpperCase() == 'S') {
  console.log("Essas são as categorias disponiveis:");
  let categoriasDisponiveis = pegaCategorias();
  console.log(categoriasDisponiveis.toString());
  
  const entradaCategoria = readline.question("Qual categoria você escolhe: ");
  const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

  console.table(retorno);
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
  console.log("Esses são todos os livros diponiveis: ");
  console.table(livrosOrdenados);
}