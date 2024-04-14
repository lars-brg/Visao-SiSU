document.addEventListener('DOMContentLoaded', () => {
    const data = fetch('http://localhost:3333/').then(
        (response) => response.json()).then(data => {
            const tbody = document.querySelector('tbody')
            data.forEach(item => {
                const row = document.createElement('tr')
                row.innerHTML = `<td>${item.universidade}</td>
                <td>${item.campus}</td>
                <td>${item.nome_Curso}</td>
                <td>${item.nota_Corte}</td>`
                tbody.appendChild(row)
            });
        }).catch(error => console.error("deu erro", error))

})




// `
// <td>${item.universidade}</td>
// <td>${item.campus}</td>
// <td>${item.nome_Curso}</td>
// <td>${item.nota_Corte}</td>
// `;