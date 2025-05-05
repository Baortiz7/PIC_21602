document.addEventListener('DOMContentLoaded', function() {
    // Función para crear el encabezado
    const crearEncabezado = () => {
        const encabezado = document.createElement('header');
        encabezado.innerHTML = '<h1>Agregar Nueva Fotografía</h1>';
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

    // Función para crear el formulario
    const crearFormulario = () => {
        const formulario = document.createElement('form');
        formulario.classList.add('formulario-agregar');
        
        // Campo para la URL de la imagen
        const campoUrl = document.createElement('div');
        campoUrl.classList.add('campo-formulario');
        
        const etiquetaUrl = document.createElement('label');
        etiquetaUrl.setAttribute('for', 'url-imagen');
        etiquetaUrl.textContent = 'URL de la imagen:';
        
        const inputUrl = document.createElement('input');
        inputUrl.setAttribute('type', 'url');
        inputUrl.setAttribute('id', 'url-imagen');
        inputUrl.setAttribute('name', 'url');
        inputUrl.setAttribute('placeholder', 'https://ejemplo.com/imagen.jpg');
        inputUrl.setAttribute('required', true);
        
        campoUrl.appendChild(etiquetaUrl);
        campoUrl.appendChild(inputUrl);
        
        // Campo para la descripción
        const campoDescripcion = document.createElement('div');
        campoDescripcion.classList.add('campo-formulario');
        
        const etiquetaDesc = document.createElement('label');
        etiquetaDesc.setAttribute('for', 'descripcion-imagen');
        etiquetaDesc.textContent = 'Descripción:';
        
        const inputDesc = document.createElement('input');
        inputDesc.setAttribute('type', 'text');
        inputDesc.setAttribute('id', 'descripcion-imagen');
        inputDesc.setAttribute('name', 'descripcion');
        inputDesc.setAttribute('placeholder', 'Describe esta imagen');
        inputDesc.setAttribute('required', true);
        
        campoDescripcion.appendChild(etiquetaDesc);
        campoDescripcion.appendChild(inputDesc);
        
        // Botón de envío
        const botonEnviar = document.createElement('button');
        botonEnviar.setAttribute('type', 'submit');
        botonEnviar.textContent = 'Guardar Fotografía';
        
        // Añadir todos los elementos al formulario
        formulario.appendChild(campoUrl);
        formulario.appendChild(campoDescripcion);
        formulario.appendChild(botonEnviar);
        
        // Evento de envío del formulario
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores de los campos
            const url = inputUrl.value.trim();
            const descripcion = inputDesc.value.trim();
            
            // Validar campos
            if (url === '') {
                alert('Por favor, ingresa la URL de la imagen');
                return;
            }
            
            if (descripcion.length < 3) {
                alert('La descripción debe tener al menos 3 caracteres');
                return;
            }
            
            // Crear objeto de imagen
            const nuevaImagen = {
                url: url,
                descripcion: descripcion
            };
            
            // Obtener array existente o crear uno nuevo
            const imagenes = JSON.parse(localStorage.getItem('misImagenes')) || [];
            
            // Añadir la nueva imagen
            imagenes.push(nuevaImagen);
            
            // Guardar en localStorage
            localStorage.setItem('misImagenes', JSON.stringify(imagenes));
            
            // Limpiar formulario
            formulario.reset();
            
            // Mostrar mensaje de éxito
            alert('Imagen guardada correctamente');
            
            // Redireccionar a la página principal
            window.location.href = 'index.html';
        });
        
        return formulario;
    };

    // Función para crear la sección principal
    const crearSeccionPrincipal = () => {
        const seccion = document.createElement('main');
        seccion.style.flex = '1';
        seccion.style.padding = '15px';
        
        // Título del formulario
        const titulo = document.createElement('h2');
        titulo.textContent = 'Añadir una nueva fotografía al álbum';
        titulo.style.borderBottom = '3px solid #9a8c98';
        titulo.style.paddingBottom = '10px';
        seccion.appendChild(titulo);
        
        // Instrucciones
        const instrucciones = document.createElement('p');
        instrucciones.textContent = 'Completa el formulario para añadir una nueva fotografía a tu colección.';
        instrucciones.style.fontSize = '16px';
        instrucciones.style.marginBottom = '20px';
        seccion.appendChild(instrucciones);
        
        // Formulario
        const formulario = crearFormulario();
        seccion.appendChild(formulario);
        
        return seccion;
    };

    // Función para crear el pie de página
    const crearPiePagina = () => {
        const pie = document.createElement('footer');
        pie.innerHTML = '<p>&copy; 2025 - Fotografías y Recuerdos</p>';
        pie.style.backgroundColor = '#22223b';
        pie.style.color = '#f2e9e4';
        pie.style.padding = '15px';
        pie.style.textAlign = 'center';
        pie.style.borderTop = '5px solid #9a8c98';
        return pie;
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
    
    // Agregar el pie de página
    body.appendChild(crearPiePagina());
});