// Leer carrito del localStorage
let productosEnCarrito = [];
const tbody = document.querySelector("#tabla-carrito tbody");
const carritoVacio = document.getElementById("carrito-vacio");
const tablaCarrito = document.getElementById("tabla-carrito");
const carritoTotal = document.getElementById("carrito-total");
const btnVaciar = document.getElementById("btn-vaciar");

function cargarCarrito() {
    const guardado = localStorage.getItem('carrito');
    if (guardado) {
        productosEnCarrito = JSON.parse(guardado);
    } else {
        productosEnCarrito = [];
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    tbody.innerHTML = "";
    if (productosEnCarrito.length === 0) {
        carritoVacio.style.display = "block";
        tablaCarrito.style.display = "none";
        carritoTotal.textContent = "Total: $0";
        btnVaciar.style.display = "none";
        return;
    }
    carritoVacio.style.display = "none";
    tablaCarrito.style.display = "table";
    btnVaciar.style.display = "inline-block";
    let total = 0;
    productosEnCarrito.forEach((producto, idx) => {
        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${producto.imagen || 'assets/img/default.jpg'}" alt="${producto.nombre}" width="60" height="60"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toLocaleString()}</td>
            <td>
                <button class="menos" data-idx="${idx}">-</button>
                <span>${producto.cantidad}</span>
                <button class="mas" data-idx="${idx}">+</button>
            </td>
            <td>$${subtotal.toLocaleString()}</td>
            <td><button class="eliminar" data-idx="${idx}">&times;</button></td>
        `;
        tbody.appendChild(tr);
    });
    carritoTotal.textContent = `Total: $${total.toLocaleString()}`;
}

// Botones de aumentar/disminuir/eliminar
tbody.addEventListener('click', function(e) {
    if (e.target.classList.contains('eliminar')) {
        const idx = e.target.dataset.idx;
        productosEnCarrito.splice(idx, 1);
        guardarCarrito();
        mostrarCarrito();
    }
    if (e.target.classList.contains('menos')) {
        const idx = e.target.dataset.idx;
        if (productosEnCarrito[idx].cantidad > 1) {
            productosEnCarrito[idx].cantidad--;
            guardarCarrito();
            mostrarCarrito();
        }
    }
    if (e.target.classList.contains('mas')) {
        const idx = e.target.dataset.idx;
        productosEnCarrito[idx].cantidad++;
        guardarCarrito();
        mostrarCarrito();
    }
});

// Vaciar carrito
btnVaciar.addEventListener('click', function() {
    if (confirm("¿Seguro que deseas vaciar tu carrito?")) {
        productosEnCarrito = [];
        guardarCarrito();
        mostrarCarrito();
    }
});

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    // Actualiza el contador del carrito en el icono (si está presente)
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) cartCount.textContent = productosEnCarrito.length;
}

// Opciones de pago y cuenta de ahorros
function mostrarOpcionesPago() {
    var div = document.getElementById('opcionesPago');
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function mostrarInfoCuenta() {
    var div = document.getElementById('infoCuenta');
    div.style.display = "block";
}

// Función para armar el mensaje de WhatsApp con el carrito
function armarMensajeWhatsApp() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    let mensaje = "¡Hola! Quiero comprar:\n";
    let total = 0;
    carrito.forEach(producto => {
        mensaje += `• ${producto.nombre} x${producto.cantidad}\n`;
        total += producto.precio * producto.cantidad;
    });
    mensaje += `\nTotal: $${total.toLocaleString()}\n`;
    mensaje += "\nAdjunto el comprobante de la transferencia:";

    let url = "https://wa.me/573332654542?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

// Asociar el botón "Quiero comprar" al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();
    var btnWhatsapp = document.getElementById('btn-whatsapp-compra');
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', armarMensajeWhatsApp);
    }
});
