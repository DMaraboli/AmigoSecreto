


let nombresAmigos = [];
let botonReiniciar = document.getElementById("sorteo");

function asignarTextoElemento(elemento, texto) {    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {

    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value.trim(); // Eliminar espacios al principio y al final
        // Validar que el input no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    // Validar que el nombre solo contenga letras 
    let regex = /^[A-Za-z\s]+$/; // Solo letras y espacios
    if (!regex.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios.');
        return;
    }
    nombresAmigos.push(nombre);
    inputNombre.value = '';
    actualizarListaHTML();
}

// Función para mostrar la lista en el HTML
function actualizarListaHTML() {
    let listaHTML = document.getElementById("listaAmigos");
    
    listaHTML.innerHTML = "";
    // Recorrer la lista de nombres y crear elementos <li>
    nombresAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    // Verificar si hay al menos un amigo en la lista
    if (nombresAmigos.length === 0) {
        alert("La lista está vacía. Agrega algunos amigos primero.");
        return;
    }    
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSecreto = nombresAmigos[indiceAleatorio];

    asignarTextoElemento("#resultado",`Tu amigo secreto es: ${amigoSecreto}`);
    asignarTextoElemento(".button-draw","Reiniciar");
    return (botonReiniciar.onclick = reiniciar);
}

function reiniciar() {
    nombresAmigos = [];
    asignarTextoElemento("#listaAmigos","");
    asignarTextoElemento("#resultado","");
    asignarTextoElemento(".button-draw",`<img src="assets/play_circle_outline.png" alt="Ícono para sortear">
                        Sortear amigo`);
    console.log("funcion reiniciar");
    return (botonReiniciar.onclick = sortearAmigo);
}
    
