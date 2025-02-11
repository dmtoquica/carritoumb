let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("cart-items");
    let totalCarrito = document.getElementById("total");
    let contadorCarrito = document.getElementById("cart-count");

    listaCarrito.innerHTML = "";
    
    carrito.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `<span>${item.nombre}</span><strong>$${item.precio}</strong>`;
        listaCarrito.appendChild(div);
    });

    totalCarrito.textContent = total;
    contadorCarrito.textContent = carrito.length;
}
