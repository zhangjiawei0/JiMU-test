var Nightmare = require("nightmare");
var nightmare = Nightmare({show:false})
nightmare
    .goto("https://box.jimu.com/Venus/List")
    .evaluate(function(){
        var projects = document.querySelectorAll(".project");
        var lists = [], obj = {};
        for(let i = 0; i < projects.length; i++){
            obj.name = projects[i].getElementsByClassName("title")[0].innerText;
            obj.rate = projects[i].getElementsByClassName("num")[0].innerText;
            obj.month = projects[i].getElementsByClassName("num")[1].innerText;
            obj.status = projects[i].getElementsByClassName("num")[2].innerText;
            lists.push(obj);
            obj = {};
        } 
        return lists;
    })
    .end()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log('Search failed:', error);
    })