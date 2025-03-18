let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    console.log("Nombre limpiar antes:",nombre);

    if (nombre !== '') {
        amigos.push(nombre);
        mostrarAmigos();
        input.value = ''; 
        console.log("campo limpio",input.value);
    } else {
        alert('Por faaaa, ingresa un nombre.');
    }
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    console. log ("¡Se ha hecho clic en el botón de sorteo");
    if (amigos.length < 4) {
        alert('Escribe minimo cuatro amigos.');
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];

    limpiarResultado();
    mostrarResultado(ganador);

    amigos = [];

    mostrarAmigos ();

    document. getElementById("amigo").value ="";
}

function limpiarResultado(){
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "en fin ";
    console.log("resultado anterior limpiado");
}

function mostrarResultado(ganador) {
    const resultadoUl = document.getElementById('resultado');
    const li = document.createElement('li');
    li.textContent = `El ganador del sorteo es: ${ganador}`; 
    resultadoUl.appendChild(li);
}




