let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
let todos = getToStorage();

load();

buttonElement.onclick = addTodo;

function load() {
    // Remove o conteudo da lista antes de adicionar
    listElement.innerHTML = '';

    todos.forEach(todo => {
        let todoText = document.createTextNode(todo);
        let todoElement = document.createElement('li');
        todoElement.appendChild(todoText);

        addLink(todoElement, todo);

        listElement.appendChild(todoElement);
    });

    saveToStorage();
}

function addTodo() {
    let todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    load();
}

function addLink(pai, todo) {
    //Descobre a posição no array
    let position = todos.indexOf(todo);

    let linkText = document.createTextNode('deletar');
    let linkElement = document.createElement('a');
    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', `removeTodo(${position})`);

    pai.appendChild(linkElement);
}

function removeTodo(position) {
    //Remove a posição
    todos.splice(position, 1);
    load();
}

//Salvando na storage
function saveToStorage() {
    //Transforma o vetor em uma String com o JSON
    localStorage.setItem('list_todos', todos ? JSON.stringify(todos) : []);
}

// Pegando os valores da Storage
function getToStorage() {
    // Retorna a lista ou um array vazio
    return JSON.parse(localStorage.getItem('list_todos')) || [];
}