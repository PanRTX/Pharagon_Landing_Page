// Variables
const baseDeDatos = [
    {
        id: 1,
        marca: 'Nvidia',
        serie: 'GeForce',
        nombre: 'RTX 4090',
        precio: 33769,
        imagen: '/Public/Images/products/Nvidia/rtx4090.jpg',
        context: `Brinda un gran salto en rendimiento, eficiencia y gráficos impulsados ​​​​por IA. 
                 Experimenta juegos de rendimiento ultra alto, mundos virtuales increíblemente detallados, 
                 productividad sin precedentes y nuevas formas de crear. Está impulsada por la arquitectura 
                 NVIDIA Ada Lovelace y viene con 24 GB de memoria G6X para brindar la mejor experiencia para jugadores y creadores.`
    },
    {
        id: 2,
        marca: 'AMD',
        serie: 'Radeon',
        nombre: 'RX 6600 XT',
        precio: 4500,
        imagen: '/Public/Images/products/Radeon/RX6600xt-msi.jpg',
        context: `La tarjeta gráfica AMD Radeon™ RX 6600 XT es una de las opciones más populares para los jugadores que buscan 
        un rendimiento óptimo en 1080p. Según mis resultados de búsqueda, estas son algunas de sus 
        características y ventajas:
        Tiene una arquitectura AMD RDNA™ 2, que ofrece un rendimiento superior, una mayor eficiencia energética y un soporte 
        avanzado para el trazado de rayos1.
        Tiene 32 unidades de cómputo, 32 aceleradores de rayos, 8 GB de memoria GDDR6 y una frecuencia de juego de 2359 MHz1`
    },
    {
        id: 3,
        marca: 'Nvidia',
        serie: 'GeForce',
        nombre: 'RTX 4070 Ti',
        precio: 16999,
        imagen: '/Public/Images/products/Nvidia/Nvidia-GeForce-RTX4070Ti.webp',
        context: `Esta es la mejor tarjeta gráfica para juegos, 
                  con una arquitectura Ada Lovelace, 
                  un rendimiento de 81.07 y un precio de unos 837 USD1. 
                  Tiene 16 GB de memoria GDDR6X, un ancho de banda de 512 GB/s y un TDP de 285 W2.`
    },
    {
        id: 4,
        marca: 'Intel',
        serie: 'Arc',
        nombre: 'Intel Arc A350',
        precio: 2519,
        imagen: '/Public/Images/products/Intel/Arc-A380.jpg',
        context: `Es una tarjeta de gama media que se lanzó en 2022. Tiene una velocidad de memoria GPU de 1750MHz y una velocidad de 
                  memoria efectiva de 14000MHz 1. Además, tiene un índice de textura de 105.6 GTexels/s, lo que significa que puede 
                  procesar un gran número de píxeles texturados en la pantalla por segundo 1. La tarjeta gráfica también tiene una 
                  versión OpenCL de 3 1.
                  La Intel Arc A350 es compatible con la tecnología multi-display, lo que permite configurar múltiples monitores para 
                  crear una experiencia de juego más absorbente 1. También es compatible con el trazado de rayos, una técnica avanzada 
                  de reproducción de luz que proporciona una iluminación, sombras y reflejos más realistas en los juegos`
    },
    {
        id: 5,
        marca: 'Nvidia',
        serie: 'GeForce',
        nombre: 'GTX 1660 Ti',
        precio: 5800,
        imagen: '/Public/Images/products/Nvidia/gtx-1660-TI.jpg',
        context: `La Nvidia GeForce GTX 1660 Ti es una tarjeta gráfica de gama media que ofrece un excelente rendimiento en juegos. Con 6 GB de memoria GDDR6, 
                esta tarjeta ofrece una experiencia de juego suave a 1080p. Tiene una arquitectura Turing y un TDP de 120 W, lo que la hace eficiente en cuanto 
                a consumo de energía. Es una opción popular para los jugadores que buscan un buen rendimiento sin gastar demasiado.`
    },
    {
        id: 6,
        marca: 'Nvidia',
        serie: 'GeForce',
        nombre: 'RTX 3090 OC x Evangelion',
        precio: 42999,
        imagen: '/Public/Images/products/Nvidia/Nvidia-GeForce-RTX3090.png',
        context: `La Nvidia GeForce RTX 3090 es una tarjeta gráfica de gama alta diseñada para juegos y tareas de creación de contenido intensivas. Con 24 GB de 
                  memoria GDDR6X, ofrece un rendimiento excepcional a 4K y permite la edición de video 8K. Esta tarjeta tiene una arquitectura Ampere, 
                  un TDP de 350 W y un ancho de banda de 936 GB/s, lo que la convierte en una opción potente para entusiastas y profesionales.`
    },
    {
        id: 7,
        marca: 'AMD',
        serie: 'Radeon',
        nombre: 'RX 6900 XT',
        precio: 19999,
        imagen: '/Public/Images/products/Radeon/AMD-Radeon-RX6900XT.jpg',
        context: `La AMD Radeon RX 6900 XT es una tarjeta gráfica de alta gama que compite con las mejores de Nvidia. Con 16 GB de memoria GDDR6, ofrece un 
                  rendimiento excepcional en juegos y aplicaciones de creación de contenido. Esta tarjeta cuenta con la arquitectura RDNA 2, 
                  un TDP de 300 W y un ancho de banda de 512 GB/s. Es una elección sólida para jugadores y creadores de contenido exigentes.`
    },
    {
        id: 8,
        marca: 'Nvidia',
        serie: 'GeForce',
        nombre: 'RTX 3070',
        precio: 499,
        imagen: '/Public/Images/products/Nvidia/Nvidia-GeForce-RTX3070.jpg',
        context: `La Nvidia GeForce RTX 3070 es una tarjeta gráfica de gama alta de la serie RTX 30 de Nvidia. Con 8 GB de memoria GDDR6, ofrece un rendimiento 
                  sólido en juegos a 1440p y es capaz de manejar cargas de trabajo de creación de contenido. Esta tarjeta cuenta con la arquitectura Ampere, 
                  un TDP de 220 W y un ancho de banda de 448 GB/s. Es una opción excelente para jugadores y creadores que buscan un equilibrio entre rendimiento y precio.`

    }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMborrarItem = document.querySelector('#quitar-item')
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-3', 'bg-body-tertiary');
        miNodo.setAttribute('style', 'width: 18rem')
        miNodo.setAttribute('data-aos', "fade-down")
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('card-img-top','poster');
        miNodoImagen.setAttribute('src', info.imagen);

        //context
        const miNodoContext = document.createElement('p')
        miNodoContext.classList.add('card-text')
        miNodoContext.textContent = info.context

        //div cost
        
        const miNododivCost = document.createElement('div')
        miNododivCost.classList.add('d-flex', 'justify-content-evenly','justify-content-end', 'column-gap-3', 'p-3')

            // cost
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio.toLocaleString('en')}${divisa}`;

        //div button
        const miNodoDivBtn = document.createElement('div')
        miNodoDivBtn.classList.add('d-flex', 'justify-content-evenly','justify-content-end', 'column-gap-3', 'p-3')

            // Add to the car button
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('col', 'purple-btn', 'btn', 'buy-button', 'p-2', 'align-self-end','liveToastBtn');
            miNodoBoton.textContent = 'Agregar al carrito';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.setAttribute('id', 'liveToastBtn')
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        // Insertamos

        miNodo.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoContext)
        
        miNodo.appendChild(miNodoCardBody);

        miNodo.appendChild(miNododivCost)
            miNododivCost.appendChild(miNodoPrecio);
        
        miNodo.appendChild(miNodoDivBtn);
            miNodoDivBtn.appendChild(miNodoBoton)
           
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

        const miNodoCard = document.createElement('div')
        miNodoCard.classList.add('accordion')
        miNodoCard.setAttribute('data-aos','flip-down')
        miNodoCard.setAttribute('id','accordionExample')
        

            const miNodoCardBody = document.createElement('div')
            miNodoCardBody.classList.add('accordion-item')
            

                const miNodoAcordeonHeader = document.createElement('h2')
                miNodoAcordeonHeader.classList.add('accordion-header')

                    const miNodoAcordeonBtn = document.createElement('button')
                    miNodoAcordeonBtn.classList.add('accordion-style','accordion-button')
                    miNodoAcordeonBtn.setAttribute('type','button')
                    miNodoAcordeonBtn.setAttribute('data-bs-toggle','collapse')
                    miNodoAcordeonBtn.setAttribute('data-bs-target',`#${miItem[0].id}`)
                    miNodoAcordeonBtn.setAttribute('aria-expanded','true')
                    miNodoAcordeonBtn.setAttribute('aria-controls',`#${miItem[0].id}`)
                    miNodoAcordeonBtn.textContent = `${miItem[0].nombre}`

            const miNodoAcordeonContent = document.createElement('div')
            miNodoAcordeonContent.classList.add('accordion-collapse', 'collapse')
            miNodoAcordeonContent.setAttribute('id', `${miItem[0].id}`)
            miNodoAcordeonContent.setAttribute('data-bs-parent', '#accordionExample')

                const miNodeAccordeonContext = document.createElement('div')
                miNodeAccordeonContext.classList.add('accordion-body', 'grid', 'gap')

                    const miNodoCardPrice = document.createElement('li')
                    miNodoCardPrice.classList.add('p-2', 'g-col-1')
                    miNodoCardPrice.textContent = `Precio: ${miItem[0].precio.toLocaleString('en')}${divisa}`

                    const miNodoCardCount = document.createElement('li')
                    miNodoCardCount.classList.add('p-2', 'g-col-1')
                    miNodoCardCount.textContent = `Cantidad: ${numeroUnidadesItem}`

                    const miNodoProductBranch = document.createElement('li')
                    miNodoProductBranch.classList.add('p-2', 'g-col-1')
                    miNodoProductBranch.textContent = `Marca: ${miItem[0].marca}`

                    const miNodoProductSeries = document.createElement('li')
                    miNodoProductSeries.classList.add('p-2', 'g-col-1')
                    miNodoProductSeries.textContent = `Serie: ${miItem[0].serie}`

            const miBotonDiv = document.createElement('div')
            miBotonDiv.classList.add('d-flex', 'justify-content-evenly','justify-content-end', 'column-gap-3', 'p-3')

                // Boton de borrar
                const miBoton = document.createElement('button');
                miBoton.classList.add('col', 'purple-btn', 'btn', 'buy-button', 'p-2', 'align-self-end');
                miBoton.textContent = 'Eliminar';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);

                const miBotonLess = document.createElement('button');
                miBotonLess.classList.add('col', 'purple-btn', 'btn', 'buy-button', 'p-2', 'align-self-end');
                miBotonLess.textContent = 'Reducir';
                miBotonLess.addEventListener('click', reducirCantidadCarrito);
                miBotonLess.dataset.item = item;
                

                
                // Mezclamos nodos

        miNodoCard.appendChild(miNodoCardBody)
        
        miNodoCardBody.appendChild(miNodoAcordeonHeader)
            miNodoAcordeonHeader.appendChild(miNodoAcordeonBtn)
            
        miNodoCardBody.appendChild(miNodoAcordeonContent)
            miNodoAcordeonContent.appendChild(miNodeAccordeonContext)
                miNodoAcordeonContent.appendChild(miNodoProductBranch)
                miNodoAcordeonContent.appendChild(miNodoProductSeries)
                miNodoAcordeonContent.appendChild(miNodoCardPrice)
                miNodoAcordeonContent.appendChild(miNodoCardCount)

            miNodoAcordeonContent.appendChild(miBotonDiv)
                miBotonDiv.appendChild(miBoton)
                miBotonDiv.appendChild(miBotonLess)

        DOMcarrito.appendChild(miNodoCard);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**reducimos la cantidad del carrito */
function reducirCantidadCarrito(evento) {
    const id = evento.target.dataset.item; // Obtenemos el ID del producto
    const index = carrito.indexOf(id); // Encontramos el índice del producto en el carrito

    if (index !== -1) {
        carrito.splice(index, 1); // Eliminamos el producto del carrito
        renderizarCarrito(); // Volvemos a dibujar el carrito actualizado
    }
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

        return total + miItem[0].precio;
    }, 0).toLocaleString('en')//.toFixed(2);
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

