# UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE
### Nombre: Bryan Ortiz

# Galería de Imágenes Dinámica

Este proyecto demuestra la manipulación avanzada del DOM utilizando JavaScript moderno (ES6+). Toda la estructura del sitio, incluyendo la galería de imágenes, es generada dinámicamente sin utilizar HTML estático.

## Características

- **Generación dinámica**: Todo el HTML es creado mediante JavaScript
- **Arquitectura de dos páginas**: Página principal con galería y página de registro
- **Persistencia de datos**: Almacenamiento local usando localStorage
- **Estilos CSS dinámicos**: Aplicados mediante JavaScript
- **JavaScript moderno**: Uso de ES6+ (arrow functions, let/const, template literals, etc.)

## Estructura del Proyecto

//
├── index.html             # Archivo HTML mínimo para la página principal
├── agregar.html           # Archivo HTML mínimo para la página de registro
├── js/
│   ├── galeria.js         # Lógica de la página principal y galería
│   └── agregar.js         # Lógica para la página de registro de fotografías
└── README.md              # Este archivo

## Funcionalidades

### Página Principal
- **Header**: Muestra el título del sitio
- **Sidebar**: Contiene navegación, incluyendo enlace para registrar nueva imagen
- **Galería**: Muestra todas las imágenes guardadas con su descripción
- **Footer**: Información de copyright y autoría

### Página de Registro
- **Formulario**: Campos para URL de imagen y descripción
- **Validación**: Asegura que los datos sean correctos antes de guardar
- **Redirección**: Tras registrar una imagen, vuelve automáticamente a la página principal

## Instrucciones de Ejecución

1. **Clonar el repositorio o descargar desde el repositorio**:
   ```
   git clone https://github.com/Baortiz7/PIC_21602.git
   
   ```

2. **Abrir el proyecto**:
   - Opción 1: Abrir el archivo `index.html` directamente en un navegador moderno

3. **Navegar por la aplicación**:
   - La página principal muestra la galería de imágenes
   - Para agregar una nueva imagen, haz clic en "Registrar nueva imagen" en la barra lateral
   - Completa el formulario con una URL válida de imagen y una descripción
   - Al enviar el formulario, volverás automáticamente a la galería donde verás tu nueva imagen

## Requisitos Técnicos

- Navegador moderno con soporte para ES6+
- JavaScript habilitado
- Conexión a internet para cargar imágenes desde URLs externas

## Tecnologías Utilizadas

- JavaScript ES6+
- LocalStorage API
- DOM Manipulation
- CSS dinámico

## Detalles de Implementación

- **Manipulación del DOM**: Todo el contenido HTML es generado dinámicamente usando `createElement`, `appendChild`, etc.
- **Gestión de Eventos**: Uso de event listeners para manejar interacciones (clicks, envío de formularios)
- **Persistencia**: Las imágenes se guardan en localStorage para mantener los datos entre sesiones
- **Estilos**: Aplicados mediante inserción dinámica de reglas CSS

---