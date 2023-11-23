
// const listaUsuarios = document.getElementById('listaUsuarios');

// console.log(listaUsuarios);

// let edadAleatoria = Math.floor(Math.random()*48)+18;
// console.log(edadAleatoria);

// fetch('https://jsonplaceholder.typicode.com/users/')
//     .then ((response) => {
//         if (!response.ok) {
//             throw new Error ('La solicitud no se ha podido procesar');
//         }
//         return response.json();
//     })
//     .then ((data) => {
//         // console.log(data);
//         const newArrayUsers = data.map(user => {
//             return {
//                 ...user,
//                 edad: edadAleatoria, //FIXME:
//             }
            
//         })
//         console.log(newArrayUsers);

//         listaUsuarios.innerHTML = `
//         <li>
//             <div>
//                 <p>${newArrayUsers}
//                 </p>
//             </div>
//         </li>
//         `

//         // const {name, edadAleatoria, username, phone, email, company, address} = data[0];
//         // console.log(name, edadAleatoria, username, phone, email, company.name, address.street, address.suite, address.city);
//         // let usuario = [];
//     });

//  CORREGIDO EN CLASE:


const listUsers = document.getElementById('listaUsuarios');
console.log(listUsers);

fetch("https://jsonplaceholder.typicode.com/users") 
.then(res => {
    if(!res.ok) {
        throw new Error('Error cargando los usuarios');
    }
    
    // res.ok = true
    return res.json();
}) 
.then (data => {
    console.log(data)
    const usersModified = [];

    data.forEach(user => {
        console.log(user);
        const newUser = {
            ...user,
            age: randomAge(),
            // ./assets/img/1.jpeg
            img: `./assets/img/${user.id}.jpeg`
        }
        usersModified.push(newUser)
        console.log(usersModified);
    });
    
    showUsers(usersModified);
})

function randomAge() {
    return Math.floor(Math.random() * (65 - 18)) + 18;
}

function showUsers(users) {
    users.forEach(user => {
        console.log(user);
        const {name, age, username, img, phone, email, company, address} = user;
        const {name:companyName} = company;
        const {street, suite, city} = address;
        listUsers.innerHTML = listUsers.innerHTML + `
        <li>
            <p><strong>Nombre: </strong> ${name}</p>
            <p><strong>Edad: </strong> ${age}</p>
            <p><strong>Username: </strong> ${username}</p>
            <p><strong> Telefono: </strong> ${phone}</p>
            <p><strong> Email: </strong> ${email}</p>
            <p><strong> Compañía: </strong> ${companyName}</p>
            <p><strong> Dirección: </strong> ${street}, ${suite}, ${city}</p>
            <img src="${img}" alt="${name}">
        </li>`
    });
}