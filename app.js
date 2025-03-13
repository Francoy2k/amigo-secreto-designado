let amigos = [];
let conductoresDesignados = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let inputComida = document.getElementById("comida");
    let nombreAmigo = inputAmigo.value.trim();
    let comidaPreferida = inputComida.value.trim();

    if (!nombreAmigo || !comidaPreferida) {
        alert("Debes ingresar tanto un nombre como una comida preferida");
        return;
    }

    amigos.push({ nombre: nombreAmigo, comida: comidaPreferida });

    inputAmigo.value = "";
    inputComida.value = "";
    inputAmigo.focus();

    renderizarAmigos();
}

function agregarConductorPrevio() {
    let inputConductor = document.getElementById("conductorPrevio");
    let conductor = inputConductor.value.trim();

    if (!conductor) {
        alert("Debes ingresar el nombre del conductor anterior");
        return;
    }

    if (!amigos.some(amigo => amigo.nombre.toLowerCase() === conductor.toLowerCase())) {
        alert("El conductor debe ser uno de los amigos registrados");
        return;
    }

    if (!conductoresDesignados.includes(conductor)) {
        conductoresDesignados.push(conductor);
        alert(`Conductor previo "${conductor}" agregado correctamente`);
    } else {
        alert("Ese conductor ya está en la lista de designados previos");
    }

    inputConductor.value = "";
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = `${amigos[i].nombre} - ${amigos[i].comida}`;
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear");
        return;
    }

    // Sorteamos al pagador
    let indicePagador = Math.floor(Math.random() * amigos.length);
    let pagador = amigos[indicePagador];

    // Sorteamos al beneficiario (distinto al pagador)
    let indiceBeneficiario;
    do {
        indiceBeneficiario = Math.floor(Math.random() * amigos.length);
    } while (indiceBeneficiario === indicePagador);
    let beneficiario = amigos[indiceBeneficiario];

    // Filtramos amigos disponibles para conductor (excluyendo los ya designados)
    let disponiblesConductor = amigos.filter(amigo => 
        !conductoresDesignados.includes(amigo.nombre)
    );

    // Si no hay disponibles (todos fueron conductores), reiniciamos el ciclo
    if (disponiblesConductor.length === 0) {
        conductoresDesignados = [];
        disponiblesConductor = amigos.slice(); // Copia de todos los amigos
    }

    // Sorteamos al conductor designado
    let indiceConductor = Math.floor(Math.random() * disponiblesConductor.length);
    let conductor = disponiblesConductor[indiceConductor];

    // Agregamos el conductor al historial
    if (!conductoresDesignados.includes(conductor.nombre)) {
        conductoresDesignados.push(conductor.nombre);
    }

    // Mostramos el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `${pagador.nombre} pagará la cena de ${beneficiario.nombre}: ${beneficiario.comida}. Conductor designado: ${conductor.nombre}`;
}