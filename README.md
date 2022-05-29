### Netlify status widget

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6017250-ac31-455e-8a79-db9ade2c51fd/deploy-status)](https://app.netlify.com/sites/velvety-queijadas-44c1c5/deploys)

# **Bienvenidos al proyecto DB3D**

    Este proyecto consiste en un webshop a utilizar como store real hecho para el curso de React.js de Coderhouse

------

## **Introducción**

Este proyecto consiste de 3 secciones:

- DB3D Frontend: https://github.com/D-M-Gonzalez/db3dgonzalez
- DB3D Manager privado para modificar la base de datos
- DB3D Backend: https://github.com/D-M-Gonzalez/DB3Dbackend

------

### ***DB3D Frontend***

### Librerías

- React.js: Librería principal del proyecto
- React DOM: Librería utilizada para la navegación
- MUI: Framework de UI principal https://mui.com/
- MUI Icons: Librería parte de MUI que contiene los íconos genéricos
- React Awesome Reveal: Animaciones para la carga de elementos https://react-awesome-reveal.morello.dev/
- Sweet Alert 2: Libería para manejar los Modal de feedback

------

### Estructura

| Carpeta | Contenido |
| --------- | --------- |
| root | Contiene todo el proyecto y las dependencias
| public | Contenedor de los íconos custom e index.html
| src/ | Todos los archivos de código
| src/index.js | Componente inicial del proyecto
| src/App.js | Componente con la lógica de navegación
| src/index.css | Estilos globales y de Sweet Alert 2
| src/MuiTheme.js | Provider de estilos custom para MUI
| src/components/ | Componentes con hijos puros y con nula o poca lógica
| src/container/ | Componentes padre que realizan la lógica
| src/container/Layout.js | Componente default que incluye todas las secciones
| src/controllers/ | Lógica de comunicación con la API
| src/data/ | Definición de constantes
| src/img/ | Imágenes utilizadas como background, necesario para MUI
| src/modules/ | Lógica genérica de JS
| src/modules/Navigator.js | Constantes definidas para facilitar la navegación y no utilizar links
| src/modules/Validation.js | Lógica de validación de formularios
| src/modules/ValidateURL.js | Lógica de validación de la query url
| src/store/ |  Contenedor del contexto
| src/store/Context.js | Componente proveedor del contexto

------

### Rutas de la APP

| Ruta | Descripción | 
| --------- | --------- |
| https://velvety-queijadas-44c1c5.netlify.app/items? | Catálogo de productos |
| https://velvety-queijadas-44c1c5.netlify.app/home | Presentación |
| https://velvety-queijadas-44c1c5.netlify.app/contact | Sección de contacto |
| https://velvety-queijadas-44c1c5.netlify.app/detail/:id | Detalle del producto |
| https://velvety-queijadas-44c1c5.netlify.app/checkout | Detalle del carrito |
| https://velvety-queijadas-44c1c5.netlify.app/login | Sección de ingreso de usuario |
| https://velvety-queijadas-44c1c5.netlify.app/signup | Sección de registro de usuario |
| https://velvety-queijadas-44c1c5.netlify.app/userorders/:id | Listado de órdenes del usuario |
| https://velvety-queijadas-44c1c5.netlify.app/order/:id | Vista de detalle de orden |

------
### APIs consumidas

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/order | POST |

### Body

```json
{
    "email": "string",
    "password": "string",
    "name": "string",
    "surname": "string",
    "phone": "string",
    "products": [],
}
```

Creación de ordenes, verifica token para saber si se crea con un usuario genérico o definido.

------

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/users/ | POST |

### Body

```json
{
    "email": "string",
    "password": "string",
    "name": "string",
    "surname": "string",
    "phone": "string",
}
```

Creación de un nuevo usuario.

------

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/orders/ | GET |

| Parámetro | Descripción | 
| --------- | --------- |
| id | ID de la orden en la base de datos |

Búsqueda de una orden por ID.

------

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/products/ | GET |

| Parámetro | Descripción | 
| --------- | --------- |
| id | ID del producto en la base de datos |

Búsqueda de un producto por ID.

------

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/users/ | GET |

| Parámetro | Descripción | 
| --------- | --------- |
| id | ID del usuario en la base de datos |

Búsqueda de un usuario por ID.

------

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/users/ | PUT |

| Parámetro | Descripción | 
| --------- | --------- |
| id | ID del usuario en la base de datos |

### Body

```json
{
    "name": "string",
    "surname": "string",
    "phone": "string",
}
```

Modificación de un usuario por medio de la ID.

------

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/users/login/user/ | POST |

### Body

```json
{
    "email": "string",
    "password": "string",
}
```

API utilizada para que un usuario ingrese a la página, devuelve Token si las credenciales son correctas.

------

| API | Acción | 
| --------- | --------- |
| https://db3dbackend.herokuapp.com/api/products? | GET |

| Parámetro Query | Descripción | 
| --------- | --------- |
| page | Número de página a buscar |
| size | Cantidad de items por página |
| category | Nombre de la categoría en la base de datos |
| subcategory | Nombre de la subcategoría en la base de datos |
| search | Criterio de búsqueda, utiliza nombre y tags del producto |
| sort | Ordenamiento solicitado |

Búsqueda de una lista de productos.

------

## ***Cómo utilizar esta app***

Se ejecuta el siguiente código en la consola en caso de querer iniciar el proyecto local:

    npm start

En caso de querer usar el web:

https://velvety-queijadas-44c1c5.netlify.app/

La página inicial muestra el catálogo de productos ( solo en la entrega para coderhouse ), allí podemos navegar entre las diferentes categorías. Al presionar sobre un producto nos muestra una vista en detalle del mismo, dandonos la opción de agregarlo al carrito. Una vez agregado, no se puede agregar el mismo producto, se desabilita el botón de comprar y se habilita el boton de Ir al checkout. Se puede volver e ir a comprar otros productos o directamente ir hacia el checkout.

Al ir al checkout, ya sea por medio del boton correspondiente o por medio del boton de carrito en la barra de navegación, nos presenta una lista de los productos que estamos deseando comprar y el precio total a pagar, con un envío fijo de 600$.
Dentro de esta vista podemos eliminar un producto, navegar hacia el mismo, o eliminar toda la lista.

Para poder comprar hay que ingresar los datos solicitados en el formulario o loguear un usuario. Una vez que hagamos alguna de las dos, al confirmar la compra nos va a presentar un modal para re-confirmar y si se hace, nos presentará un modal con la id de la orden y un link para poder verla.

Se puede loguear un usuario ingresando en la barra de navegación al ícono de la persona. De allí un menú desplegable nos presenta la opción de ingresar con un usuario existente o registrar uno nuevo. Para registrar un usuario nos pide algunos datos básicos, siendo el email y la password los requeridos. El backend va a validar el email para ver que no exista ya registrado y en caso de serlo devolverá el mensaje correspondiente.

En caso de que el usuario creado sea válido, nos redireccionará a la sección de login, donde podremos ingresar con nuestro nuevo usuario.

Al ingresar, nos lleva a la sección de presentación.

Tanto el carrito como el usuario son persistentes, y el hecho de cambiar de usuario no borra el carrito.

El usuario puede ver el estado de sus órdenes ingresando al menú de usuario -> mis órdenes
Dentro de esta puede ingresar al detalle de cada una.

También, un usuario sin estar ingresado, puede ver una orden específica si posee el id e ingresa a /order/:id.

----

### **Elección de librerías**


  - Se utiliza Material UI (MUI) por su versatilidad permitiendo customización completa de la misma y facilitando componentes que permiten un maquetado con una agilidad elevada comparada con otras. Es una librería que se encuentra actualizada constantemente, es muy utilizada y sus elementos son sólidos y compatibles con la lógica de React, utilizando propiedades y estados como si se tratase de una librería nativa de React.
  - Se utiliza React Awesome Reveal debido a que interactua correctamente con el montaje/desmontaje de elementos, y con la visualización de los mismos sin tener que agregar referencias, utilizando wrappers, facilitando la escritura del código de animaciones.
  - Se utiliza Sweet Alert 2 y no MUI Modals debido a que los mismos son básicos y requieren bastante trabajo extra, mientras que los modal de Sweet Alert 2 ya tienen incluidas animaciones y estilos muy amenos a la vista, haciendola una excelente librería para manejarlos con relativa facilidad. La librería ademas, es muy utilizada por lo que consta de mantenimiento constante.

----

### **Finalización**

    Tanto los precios como los productos mostrados son ficticios, la APP publicada es una copia realizada con el objetivo de la entrega del proyecto.
    El uso de la misma esta límitado a pruebas específicas y de detectarse un tráfico anormal será dada de baja.

