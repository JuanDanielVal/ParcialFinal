let tbody = document.querySelector("#bodyData")
let status = "alive"

cons= `https://rickandmortyapi.com/api/character?status=${status}`
console.log()

fetch(cons)
.then(res => res.json())
.then(data => {
let rowData = data.results.map(item => {

return `<tr>
            <td>${item.name}</td>
            <td><img src="${item.image}"></td>
            <td>${item.status}</td>
        </tr>`
}).join('')

tbody.innerHTML = rowData


})
