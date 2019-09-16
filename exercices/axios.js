//https://github.com/axios/axios

axios
    .get('https://api.github.com/users/gustavocarvalhoti')
    .then(function (response) {
        console.log(response);
        console.log(response.data.avatar_url);
    })
    .catch(function (error) {
        console.log(error);
    });