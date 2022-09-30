/*---------------------------------HEAD----------------------------------------------*/
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const items_search = document.querySelector('.search-header')
            items_search.classList.toggle('show')
            const items_cartlog = document.querySelector('.cart-login')
            items_cartlog.classList.toggle('show')
        })
    }
})

/*--------------------------------PRODUCTS SECTION----------------------------------------------*/
const baseDeDatos = [
    {
        id: 1,
        product: "Floors SPC",
        price: 82.99,
        poster: "https://i.im.ge/2022/09/09/OHCv34.Home2.jpg",
    },
    {
        id: 2,
        product: "Blinds PVC",
        price: 92.55,
        poster: "https://i.im.ge/2022/09/09/OHEAaC.Home3.jpg",
    },
    {
        id: 3,
        product: "Carpet Tile",
        price: 50.23,
        poster: "https://i.im.ge/2022/09/09/OHEYw1.Home4.jpg",
    },
    {
        id: 4,
        product: "Laminated Wood",
        price: 63.26,
        poster: "https://i.im.ge/2022/09/14/1TGlQW.Home6.jpg",
    },
    {
        id: 5,
        product: "Decks",
        price: 32.74,
        score: 4.5,
        poster: "https://i.im.ge/2022/09/14/1TGFnc.Home7.jpg",
    },
    {
        id: 6,
        product: "Vinyl Roll",
        price: 57.87,
        poster: "https://i.im.ge/2022/09/14/1TGu3T.Home8.jpg",
    },
    {
        id: 7,
        product: "Curtains",
        price: 36.36,
        poster: "https://i.im.ge/2022/09/14/1TGoRr.Home9.jpg",
    },
    {
        id: 8,
        product: "Carpets",
        price: 54.99,
        poster: "https://i.im.ge/2022/09/14/1TGrL0.Home10.jpg",
    },
    {
        id: 9,
        product: "Wood Floors",
        price: 42.88,
        poster: "https://i.im.ge/2022/09/14/1TG1qL.Home11.jpg",
    },
];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-8');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.product;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.poster);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.price}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+'
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].product} - ${miItem[0].price}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'Remove';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].price;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();

