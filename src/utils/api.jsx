var Fetch= require('whatwg-fetch');
var rootUrl='https://api.imgur.com/3/';
var apiKey='b8edfffa5d653f8';


module.exports= window.api ={
    get: function(url){
        return fetch(rootUrl + url, {
            headers: {
                'Authorization' : 'Client-ID ' + apiKey
            }
        })
            .then(function(response){
                return response.json()
            })
    }

};