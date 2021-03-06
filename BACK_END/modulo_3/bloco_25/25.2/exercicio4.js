//Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
//Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
//Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
//Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
//parte 3 Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
//Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .


const fs = require('fs').promises;

// //parte 1

function readNames() {
  return fs.readFile('simpsons.json', 'utf8')
    .then(JSON.parse)
    .then(data => data.forEach(element => {
      console.log(`${element.id} - ${element.name}`);
    }));
}

// //parte 2

function readPerson(id) {
  return fs.readFile('simpsons.json', 'utf8')
    .then(JSON.parse)
    .then(data => data.find(element => console.log(element.id === id || "id nao encontrado")))
}

//parte 3

async function filterIds(a, b) {
  try {
    const file = await fs.readFile('simpsons.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = jsonFile.filter((value) => value.id !== a && value.id !== b);
    const removed = jsonFile.length - newFile.length;
    const stringiFyFile = JSON.stringify(newFile);
    fs.writeFile('simpsons.json', stringiFyFile);
    console.log(`${removed} simpsons removidos`);
  } catch (e) {
    console.log(e);
  }
}

//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// parte 4

async function addFamily() {
  try {
    const file = await fs.readFile('simpsons.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = jsonFile.filter((value) => value.id >= 1 && value.id <= 4);
    const stringiFyFile = JSON.stringify(newFile);
    fs.writeFile('simpsonsFamily.json', stringiFyFile);
  } catch (e) {
    console.log(e);
  }
}

//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

// parte 5

async function addToFamily() {
  try {
    const file = await fs.readFile('simpsons.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = jsonFile.concat({ "id": "5", "name": "Nelson Muntz" });
    const stringiFyFile = JSON.stringify(newFile);
    fs.writeFile('simpsonsFamily.json', stringiFyFile);
  } catch (e) {
    console.log(e);
  }
}

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

// //parte 6

async function replaceFamily() {
  try {
    const file = await fs.readFile('simpsons.json', 'utf-8');
    const jsonFile = JSON.parse(file);
    const newFile = jsonFile.map((value) => value.id === "5" ? { "id": "5", "name": "Maggie Simpson" } : value);
    const stringiFyFile = JSON.stringify(newFile);
    fs.writeFile('simpsonsFamily.json', stringiFyFile);
  } catch (e) {
    console.log(e);
  }
}
