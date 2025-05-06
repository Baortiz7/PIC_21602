document.addEventListener('DOMContentLoaded', function() {
    // Función para crear el encabezado
    const crearEncabezado = () => {
        const encabezado = document.createElement('header');
        encabezado.innerHTML = '<h1>MI GALERIA</h1>';
        encabezado.style.backgroundColor = '#9a8c98';
        encabezado.style.color = '#f2e9e4';
        encabezado.style.padding = '20px';
        encabezado.style.textAlign = 'center';
        encabezado.style.borderBottom = '5px solid #4a4e69';
        return encabezado;
    };

    // Función para crear el menú lateral
    const crearMenuLateral = () => {
        const menu = document.createElement('aside');
        menu.style.width = '180px';
        menu.style.backgroundColor = '#4a4e69';
        menu.style.padding = '20px';
        menu.style.color = '#f2e9e4';
        
        // Elementos del menú
        menu.innerHTML = `
            <h3>Explorar</h3>
            <ul style="list-style: none; padding: 0;">
                <li><a href="index.html">Mi Colección</a></li>
                <li><a href="agregar.html">Nueva Fotografía</a></li>
            </ul>
        `;
        
        return menu;
    };

    // Función para crear la sección principal
    const crearSeccionPrincipal = () => {
        const seccion = document.createElement('main');
        seccion.style.flex = '1';
        seccion.style.padding = '15px';
        
        // Título de la galería
        const titulo = document.createElement('h2');
        titulo.textContent = 'Mi Álbum Fotográfico';
        titulo.style.borderBottom = '3px solid #9a8c98';
        titulo.style.paddingBottom = '10px';
        seccion.appendChild(titulo);
        
        // Contenedor de imágenes
        const contenedorGaleria = document.createElement('div');
        contenedorGaleria.classList.add('contenedor-galeria');
        seccion.appendChild(contenedorGaleria);
        
        return seccion;
    };

    // Función para crear el pie de página
    const crearPiePagina = () => {
        const pie = document.createElement('footer');
        pie.innerHTML = '<p>&copy; 21602-PROGRAM INTEGRATIVA DE COMPONE</p>';
        pie.style.backgroundColor = '#22223b';
        pie.style.color = '#f2e9e4';
        pie.style.padding = '15px';
        pie.style.textAlign = 'center';
        pie.style.borderTop = '5px solid #9a8c98';
        return pie;
    };

    // Función para cargar y mostrar las imágenes
    const cargarImagenes = (contenedor) => {
        // Obtenemos las imágenes guardadas o usamos un array vacío si no hay
        const imagenes = JSON.parse(localStorage.getItem('misImagenes')) || [];
        
        // Si no hay imágenes, mostramos un mensaje
        if (imagenes.length === 0) {
            const mensaje = document.createElement('p');
            mensaje.textContent = 'No hay imágenes en la galería. ¡Agrega algunas!';
            mensaje.style.textAlign = 'center';
            mensaje.style.margin = '20px';
            contenedor.appendChild(mensaje);
            return;
        }
        
        // Recorremos el array de imágenes y creamos un elemento para cada una
        imagenes.forEach(imagen => {
            // Crear el contenedor de la imagen
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-imagen');
            
            // Crear la imagen
            const elementoImg = document.createElement('img');
            elementoImg.src = imagen.url;
            elementoImg.alt = imagen.descripcion;
            
            // Crear la descripción
            const descripcion = document.createElement('p');
            descripcion.textContent = imagen.descripcion;
            
            // Agregar elementos a la tarjeta
            tarjeta.appendChild(elementoImg);
            tarjeta.appendChild(descripcion);
            
            // Agregar tarjeta al contenedor principal
            contenedor.appendChild(tarjeta);
            
            // Agregar evento click para ver la imagen más grande
            tarjeta.addEventListener('click', () => {
                mostrarImagenGrande(imagen);
            });
        });
    };

    // Función para mostrar una imagen en tamaño más grande
    const mostrarImagenGrande = (imagen) => {
        // Crear el fondo semi-transparente
        const fondo = document.createElement('div');
        fondo.style.position = 'fixed';
        fondo.style.top = '0';
        fondo.style.left = '0';
        fondo.style.width = '100%';
        fondo.style.height = '100%';
        fondo.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        fondo.style.display = 'flex';
        fondo.style.justifyContent = 'center';
        fondo.style.alignItems = 'center';
        fondo.style.zIndex = '1000';
        
        // Crear el contenedor de la imagen
        const contenedor = document.createElement('div');
        contenedor.style.backgroundColor = 'white';
        contenedor.style.padding = '10px';
        contenedor.style.borderRadius = '5px';
        contenedor.style.textAlign = 'center';
        
        // Crear la imagen
        const elementoImg = document.createElement('img');
        elementoImg.src = imagen.url;
        elementoImg.alt = imagen.descripcion;
        elementoImg.style.maxWidth = '80vw';
        elementoImg.style.maxHeight = '80vh';
        
        // Crear la descripción
        const descripcion = document.createElement('p');
        descripcion.textContent = imagen.descripcion;
        
        // Crear botón de cerrar
        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'Cerrar';
        botonCerrar.style.padding = '8px 15px';
        botonCerrar.style.marginTop = '10px';
        botonCerrar.style.backgroundColor = '#e74c3c';
        botonCerrar.style.color = 'white';
        botonCerrar.style.border = 'none';
        botonCerrar.style.borderRadius = '4px';
        botonCerrar.style.cursor = 'pointer';
        
        // Agregar elementos al contenedor
        contenedor.appendChild(elementoImg);
        contenedor.appendChild(descripcion);
        contenedor.appendChild(botonCerrar);
        fondo.appendChild(contenedor);
        
        // Agregar al body
        document.body.appendChild(fondo);
        
        // Evento para cerrar la vista grande
        botonCerrar.addEventListener('click', () => {
            document.body.removeChild(fondo);
        });
        
        // También cerrar al hacer clic en el fondo
        fondo.addEventListener('click', (e) => {
            if (e.target === fondo) {
                document.body.removeChild(fondo);
            }
        });
    };

    // Construir la estructura de la página
    const body = document.body;
    
    // Agregar el encabezado
    body.appendChild(crearEncabezado());
    
    // Crear contenedor flexbox para el contenido principal
    const contenedor = document.createElement('div');
    contenedor.style.display = 'flex';
    contenedor.style.minHeight = '80vh';
    body.appendChild(contenedor);
    
    // Agregar menú lateral al contenedor
    contenedor.appendChild(crearMenuLateral());
    
    // Agregar sección principal al contenedor
    const seccionPrincipal = crearSeccionPrincipal();
    contenedor.appendChild(seccionPrincipal);
    
    // Cargar las imágenes en el contenedor de la galería
    const contenedorGaleria = seccionPrincipal.querySelector('.contenedor-galeria');
    cargarImagenes(contenedorGaleria);
    
    // Agregar el pie de página
    body.appendChild(crearPiePagina());
});