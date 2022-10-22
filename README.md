# Store APP

## Aplicación

Esta aplicación es la interface de una primera propuesta de una tienda online, la cual permite crear, buscar, editar y eliminar tipos de productos.  

## Tecnologías

Esta aplicación front-end esta desarrollada con React como librería principal para la creación del cliente; asimismo se utilizó React Router para el enrutado de las páginas, Axios para las peticiones, Redux para el manejo de estados. También, esta aplicación se conecta a una base de datos SQLITE mediante un [REST API](https://github.com/alxdrian/StoreAPI) como back-end.

## Funcionalidad

La aplicación tiene funciones dedicadas a modificar tipos de producto. Cada vista se conecta con productTypeSlice (redux store), para realizar peticiones mediante async thunks y almacenar los resultados en el store respectivo. Las páginas renderizan vistas con información obtenida del store, mediante el uso de componentes para cada función(mostrar detalles, edición, etc).

## Desarrollo

Para desarrollo ejecute el comando 'npm start'. La aplicación se ejecutará en el puerto 3000. Asimismo, se sugiere ejecutar simultáneamente con su [API](https://github.com/alxdrian/StoreAPI) respectivo.