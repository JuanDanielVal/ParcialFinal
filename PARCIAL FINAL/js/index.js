const lista = []
const tbody = document.getElementById("tbody")

function calcular(){
    const producto = document.getElementById("producto").value;
    const precio = document.getElementById("precio").value;
    const iva = document.getElementById("iva").value;
    const iva_p = parseFloat(`1.${iva}`)
    const total = precio*iva_p;
    let element = ""

    lista.push({producto,precio,iva,total});
    lista.map(i => {
        element += `<tr>
        <td>${i.producto}</td>
        <td>${i.precio}</td>
        <td>${i.iva}</td>
        <td>${i.total}</td>
        </tr>`
    })
    tbody.innerHTML=element;

}