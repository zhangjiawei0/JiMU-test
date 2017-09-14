var Nightmare = require("nightmare")
var nightmare = Nightmare({show:true})
nightmare
    .goto("https://box.jimu.com/Venus/List")
    .evaluate(() => {
        var projects = document.querySelectorAll(".project")
        var lists = [], obj = {}
        for(let i = 0; i < projects.length; i++){
            obj.name = projects[i].getElementsByClassName("title")[0].innerText
            obj.rate = projects[i].getElementsByClassName("num")[0].innerText
            obj.month = projects[i].getElementsByClassName("num")[1].innerText
            obj.status = projects[i].getElementsByClassName("num")[2].innerText
            lists.push(obj)
            obj = {}
        } 
        return lists
    })
    .end()
    .then(res => {
        res.forEach(val => {
            console.log(`
            {
                name : ${val.name}
                rate : ${val.rate}
                month : ${val.month}
                status : ${val.status}
            }`)
        })
    })
    .catch(err => {
        console.log('Search failed:', err)
    })