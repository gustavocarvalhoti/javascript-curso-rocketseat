//Dá acesso ao AJAX
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/gustavocarvalhoti');
xhr.send(null);

xhr.onreadystatechange = function () {
    //4 significa que recebeu
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
};