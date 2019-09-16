let myPromise = function () {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/gustavocarvalhoti');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    })
};

//Código assincrono - Utilizando Promise
//Executa antes de receber e deixa como pending - errado
let result = myPromise();
console.log(result);

//Correto
result = myPromise().then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});