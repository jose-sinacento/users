

const listaUsuarios = document.getElementById('listaUsuarios');

console.log(listaUsuarios);

let edadAleatoria = Math.floor(Math.random()*48)+18;
console.log(edadAleatoria);

fetch('https://jsonplaceholder.typicode.com/users/')
    .then ((response) => {
        if (!response.ok) {
            throw new Error ('La solicitud no se ha podido procesar');
        }
        return response.json();
    })
    .then ((data) => {
        // console.log(data);
        const newArrayUsers = data.map(user => {
            return {
                ...user,
                edad: edadAleatoria, //FIXME:
            }
            
        })
        console.log(newArrayUsers);

        listaUsuarios.innerHTML = `
        <li>
            <div>
                <p>${newArrayUsers}
                </p>
            </div>
        </li>
        `

        // const {name, edadAleatoria, username, phone, email, company, address} = data[0];
        // console.log(name, edadAleatoria, username, phone, email, company.name, address.street, address.suite, address.city);
        // let usuario = [];
    });