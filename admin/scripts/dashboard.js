console.log("DASHBOARD.JS cargado");

// --- Slugify para campo id único y amigable ---
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

// --- IMPORTS FIREBASE ---
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Config y app compartidos con tu HTML
const firebaseConfig = {
  apiKey: "AIzaSyBEjldlAXo7-jJqSCHO4SH6mo3w4eoleNA",
  authDomain: "teddyfly-767e1.firebaseapp.com",
  projectId: "teddyfly-767e1",
  storageBucket: "teddyfly-767e1.appspot.com",
  messagingSenderId: "951813933755",
  appId: "1:951813933755:web:9948887bd7abea96b0779e",
  measurementId: "G-2K2ZHVVYMY"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// --- FIN IMPORTS FIREBASE ---

// Proteger el panel
if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "login.html";
}

// Hacer logout disponible globalmente
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      signOut(auth).then(() => {
        window.location.href = "login.html";
      }).catch((error) => {
        alert("Error al cerrar sesión");
        console.error(error);
      });
    });
  }
});

// Productos - Agregar
const addProductForm = document.getElementById("addProductForm");
const productList = document.getElementById("productList");
let productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];

// Productos fijos (debes definirlos en tu HTML como window.personajes, window.peluches, window.variedades)
const personajes = typeof window.personajes !== "undefined" ? window.personajes : [];
const peluches = typeof window.peluches !== "undefined" ? window.peluches : [];
const variedades = typeof window.variedades !== "undefined" ? window.variedades : [];

// Función para cargar productos desde Firestore
async function getProductosFirestore() {
    const productos = [];
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((docu) => {
        const p = docu.data();
        productos.push({
            ...p,
            id: docu.id,
            origen: "firestore"
        });
    });
    return productos;
}

// Agregar producto NUEVO a Firestore
addProductForm.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("productName").value.trim();
    const detail = document.getElementById("productDetail").value.trim();
    // === NUEVO: Descripción larga ===
    const descriptionRaw = document.getElementById("productDescription").value.trim();
    // Convierte saltos de línea en párrafos HTML
    const descripcion = descriptionRaw
        .split(/\n+/)
        .filter(parrafo => parrafo.trim() !== "")
        .map(parrafo => `<p>${parrafo.trim()}</p>`)
        .join("\n");
    const price = parseInt(document.getElementById("productPrice").value);
    const categoria = document.getElementById("productCategory").value;
    const imgInput = document.getElementById("productImage");

    // Validación de campos
    if (!name || !detail || isNaN(price) || !categoria) {
        alert("Por favor completa todos los campos.");
        return;
    }
    if (!imgInput.files[0]) {
        alert("Por favor selecciona una imagen para el producto.");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(event) {
        try {
            await addDoc(collection(db, "productos"), {
                id: slugify(name), // <-- ¡AQUÍ EL FIX!
                name,
                detail,
                descripcion,
                precio: price,
                categoria,
                image: event.target.result // base64
            });
            alert("Producto agregado correctamente y disponible para todos.");
            addProductForm.reset();
            renderProductsAdmin();
            llenarSelectProductos();
        } catch (error) {
            alert("Error al agregar producto a Firestore: " + error.message);
        }
    };
    reader.onerror = function() {
        alert("Error leyendo la imagen. Prueba con otro archivo.");
    }
    reader.readAsDataURL(imgInput.files[0]);
};

// Guarda los IDs de los productos ocultos SOLO del panel admin en sessionStorage
function getPanelHiddenIds() {
    return JSON.parse(sessionStorage.getItem("panelHiddenProducts") || "[]");
}
function setPanelHiddenIds(ids) {
    sessionStorage.setItem("panelHiddenProducts", JSON.stringify(ids));
}

// Estado para mostrar/ocultar la sección de ocultos
function getMostrarOcultosPanel() {
    return sessionStorage.getItem("mostrarOcultosPanel") === "true";
}
function setMostrarOcultosPanel(value) {
    sessionStorage.setItem("mostrarOcultosPanel", value ? "true" : "false");
}

async function renderProductsAdmin() {
    // Trae productos
    const productosFirestore = await getProductosFirestore();
    const personajes = window.personajes || [];
    const peluches = window.peluches || [];
    const variedades = window.variedades || [];

    const productosFirestoreAdaptados = productosFirestore.map((p) => ({
        ...p,
        nombre: p.name || "",
        imagen: p.image || "",
        descripcion: p.detail || p.descripcion || "",
        precio: p.precio || 0,
        id: p.id,
        categoria: p.categoria || "peluches",
        origen: "firestore"
    }));

    // Unifica
    const productosTotales = [
        ...personajes.map(p => ({ ...p, categoria: "personajes", origen: "fijo" })),
        ...peluches.map(p => ({ ...p, categoria: "peluches", origen: "fijo" })),
        ...variedades.map(p => ({ ...p, categoria: "variedades", origen: "fijo" })),
        ...productosFirestoreAdaptados
    ];

    // Ocultos solo en el panel admin
    const ocultosPanel = getPanelHiddenIds();
    const productosVisibles = productosTotales.filter(p => !ocultosPanel.includes(p.id));
    const productosOcultos = productosTotales.filter(p => ocultosPanel.includes(p.id));
    const mostrarOcultos = getMostrarOcultosPanel();

    const productList = document.getElementById("productList");
    if (!productList) return;

    if (productosTotales.length === 0) {
        productList.innerHTML = "<p>No hay productos agregados.</p>";
        return;
    }

    let html = "";
    // Botón para ocultar todos los productos visibles
    if (productosVisibles.length > 0) {
        html += `<div style="margin-bottom:1em"><button id="btn-ocultar-todos-panel">Ocultar todos</button></div>`;
    }

    // Lista de productos visibles con botón para ocultar
    html += productosVisibles.map((p) => `
        <div class="admin-item">
            <img src="${p.imagen || 'https://via.placeholder.com/68'}" alt="Producto" width="100"><br>
            <div class="admin-item-details">
                <strong class="admin-item-title">${p.nombre}</strong><br>
                <span>Categoría: ${p.categoria}</span><br>
                <span>Precio: $${p.precio.toLocaleString('es-CO')}</span><br>
                <div class="admin-item-detail">${p.descripcion}</div>
                <button class="btn-panel-ocultar" data-id="${p.id}">Ocultar</button>
                ${p.origen === "firestore"
                    ? `<button onclick="deleteProduct('${p.id}', '${p.origen}')" style="background:var(--color-corazon);color:#f20202;padding:0.2em 1em;border-radius:10px;border:none;cursor:pointer;margin-top:8px;">Eliminar</button>`
                    : ""}
            </div>
        </div>
    `).join("");

    // Botón para desplegar/ocultar la lista de productos ocultos
    if (productosOcultos.length > 0) {
        html += `<button id="btn-toggle-ocultos">${mostrarOcultos ? "Ocultar" : "Mostrar"} productos ocultos (${productosOcultos.length})</button>`;
    }

    // Lista de productos ocultos con botón para desocultar - solo si mostrarOcultosPanel está true
    if (productosOcultos.length > 0 && mostrarOcultos) {
        html += `<h3 style="margin-top:2em;">Productos ocultos en el panel</h3>`;
        html += productosOcultos.map((p) => `
            <div class="admin-item oculto-panel">
                <img src="${p.imagen || 'https://via.placeholder.com/68'}" alt="Producto" width="100"><br>
                <div class="admin-item-details">
                    <strong class="admin-item-title">${p.nombre}</strong><br>
                    <span>Categoría: ${p.categoria}</span><br>
                    <span>Precio: $${p.precio.toLocaleString('es-CO')}</span><br>
                    <div class="admin-item-detail">${p.descripcion}</div>
                    <button class="btn-panel-desocultar" data-id="${p.id}">Quitar de ocultos</button>
                    ${p.origen === "firestore"
                        ? `<button onclick="deleteProduct('${p.id}', '${p.origen}')" style="background:var(--color-corazon);color:#f20202;padding:0.2em 1em;border-radius:10px;border:none;cursor:pointer;margin-top:8px;">Eliminar</button>`
                        : ""}
                </div>
            </div>
        `).join("");
        // Botón para mostrar todos los productos ocultos nuevamente
        html += `<div style="margin:1em 0"><button id="btn-mostrar-todos-panel">Mostrar todos los productos</button></div>`;
    }

    productList.innerHTML = html;
}

// Delegación de eventos
document.addEventListener("click", function(e) {
    // Botón ocultar individual
    const btnOcultar = e.target.closest(".btn-panel-ocultar");
    if (btnOcultar) {
        const id = btnOcultar.getAttribute("data-id");
        let ocultosPanel = getPanelHiddenIds();
        if (!ocultosPanel.includes(id)) {
            ocultosPanel.push(id);
            setPanelHiddenIds(ocultosPanel);
            renderProductsAdmin();
        }
        return;
    }
    // Botón desocultar individual
    const btnDesocultar = e.target.closest(".btn-panel-desocultar");
    if (btnDesocultar) {
        const id = btnDesocultar.getAttribute("data-id");
        let ocultosPanel = getPanelHiddenIds();
        ocultosPanel = ocultosPanel.filter(pid => pid !== id);
        setPanelHiddenIds(ocultosPanel);
        renderProductsAdmin();
        return;
    }
    // Botón ocultar todos
    if (e.target.id === "btn-ocultar-todos-panel") {
        const productosFirestore = window.__cachedProductosFirestore || [];
        const personajes = window.personajes || [];
        const peluches = window.peluches || [];
        const variedades = window.variedades || [];
        const productosFirestoreAdaptados = productosFirestore.map((p) => ({
            ...p,
            nombre: p.name || "",
            imagen: p.image || "",
            descripcion: p.detail || p.descripcion || "",
            precio: p.precio || 0,
            id: p.id,
            categoria: p.categoria || "peluches",
            origen: "firestore"
        }));
        const productosTotales = [
            ...personajes.map(p => ({ ...p, categoria: "personajes", origen: "fijo" })),
            ...peluches.map(p => ({ ...p, categoria: "peluches", origen: "fijo" })),
            ...variedades.map(p => ({ ...p, categoria: "variedades", origen: "fijo" })),
            ...productosFirestoreAdaptados
        ];
        const todosIds = productosTotales.map(p => p.id);
        setPanelHiddenIds(todosIds);
        renderProductsAdmin();
        return;
    }
    // Botón mostrar todos
    if (e.target.id === "btn-mostrar-todos-panel") {
        setPanelHiddenIds([]); // Resetea ocultos
        renderProductsAdmin();
        return;
    }
    // Botón para desplegar/ocultar la lista de productos ocultos
    if (e.target.id === "btn-toggle-ocultos") {
        const mostrar = !getMostrarOcultosPanel();
        setMostrarOcultosPanel(mostrar);
        renderProductsAdmin();
        return;
    }
});

// Renderiza al cargar y cachea productosFirestore (para ocultar todos)
document.addEventListener("DOMContentLoaded", async function() {
    window.__cachedProductosFirestore = await getProductosFirestore();
    // Estado inicial: no mostrar ocultos
    if (sessionStorage.getItem("mostrarOcultosPanel") === null) setMostrarOcultosPanel(false);
    renderProductsAdmin();
});

// Eliminar producto (solo de Firestore)
window.deleteProduct = async function(id, origen) {
    productosOcultos = JSON.parse(localStorage.getItem("productosOcultos")) || [];
     if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
    if (origen === "firestore") {
        try {
            await deleteDoc(doc(db, "productos", id));
            // alert("Producto eliminado de Firestore");
        } catch (e) {
            alert("Error borrando producto: " + e.message);
        }
        renderProductsAdmin();
        llenarSelectProductos();
    } else if (origen === "fijo") {
        if (!productosOcultos.includes(id)) productosOcultos.push(id);
        localStorage.setItem("productosOcultos", JSON.stringify(productosOcultos));
        renderProductsAdmin();
    }
};

// -------- NOVEDADES con producto relacionado (FIRESTORE) --------
const addNewsForm = document.getElementById("addNewsForm");
const newsList = document.getElementById("newsList");
const newsProductSelect = document.getElementById("newsProduct");

// Llenar el select de productos desde Firestore
async function llenarSelectProductos() {
    const productosFirestore = await getProductosFirestore();
    newsProductSelect.innerHTML = '<option value="">Elige un producto</option>';
    productosFirestore.forEach(p => {
        newsProductSelect.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });
}
llenarSelectProductos();

// Agregar novedad a Firestore
addNewsForm.onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById("newsTitle").value.trim();
    const description = document.getElementById("newsDescription").value.trim();
    const imgInput = document.getElementById("newsImage");
    const productId = document.getElementById("newsProduct").value;
    if (!title || !description || !productId) {
        alert("Completa todos los campos.");
        return;
    }
    if (!imgInput.files[0]) {
        alert("Por favor selecciona una imagen.");
        return;
    }
    const reader = new FileReader();
    reader.onload = async function(event) {
        try {
            await addDoc(collection(db, "novedades"), {
                title,
                description,
                image: event.target.result,
                productId
            });
            alert("Novedad agregada correctamente y visible en todos los dispositivos.");
            addNewsForm.reset();
            newsProductSelect.selectedIndex = 0;
            renderNews();
        } catch (error) {
            alert("Error al agregar novedad a Firestore: " + error.message);
        }
    };
    reader.onerror = function() {
        alert("Error leyendo la imagen. Prueba con otro archivo.");
    }
    reader.readAsDataURL(imgInput.files[0]);
};

// Renderizar novedades desde Firestore
async function renderNews() {
    newsList.innerHTML = "Cargando novedades...";
    // Primero, carga los productos para mostrar el nombre relacionado
    const productos = await getProductosFirestore();
    const productosMap = {};
    productos.forEach(p => productosMap[p.id] = p.name);

    const novedadesSnap = await getDocs(collection(db, "novedades"));
    const novedades = [];
    novedadesSnap.forEach(docu => {
        const n = docu.data();
        novedades.push({
            ...n,
            id: docu.id
        });
    });

    if(novedades.length === 0) {
        newsList.innerHTML = "<p>No hay novedades aún.</p>";
        return;
    }

    newsList.innerHTML = novedades.map((n) => {
        const prodName = productosMap[n.productId] || "Producto no encontrado";
        return `
        <div class="news-card" style="border-bottom:1px solid #eee;padding:8px 0;">
            <img src="${n.image}" alt="${n.title}" style="height:80px;object-fit:cover;border-radius:8px;">
            <strong>${n.title}</strong><br>
            ${n.description}<br>
            <span style="font-size:12px;color:#888;">Relacionado: ${prodName}</span><br>
            <button onclick="deleteNews('${n.id}')" style="background:#e74c3c;color:white;padding:2px 10px;border-radius:6px;border:none;cursor:pointer;margin-top:4px;">Eliminar</button>
        </div>`;
    }).join("");
}
window.deleteNews = async function(id) {
    if (!confirm("¿Seguro que quieres eliminar esta novedad?")) return;
    try {
        await deleteDoc(doc(db, "novedades", id));
        renderNews();
    } catch (e) {
        alert("Error eliminando novedad: " + e.message);
    }
};

renderNews();




