# API RESTful de Libros

Esta es una API RESTful construida con Node.js, Express y MySQL para gestionar una base de datos de libros. Proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos de libros.

## Requisitos

Para ejecutar este proyecto en tu máquina local, necesitarás tener instalado lo siguiente:

- Node.js
- MySQL

## Configuración del Proyecto

1. **Clonar el repositorio:**

git clone https://github.com/tuusuario/nombre-proyecto.git



2. **Instalar las dependencias:**

cd nombre-proyecto
npm install


3. **Configurar la base de datos:**

- Crea una base de datos MySQL y un usuario con acceso a esa base de datos.
- Copia el archivo `.env.example` a `.env` y modifica las variables de entorno con la información de tu base de datos.

4. **Inicializar la base de datos:**

npm run db:init


Este comando creará la tabla de libros y la poblara con algunos datos de ejemplo.

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

npm start


La API estará disponible en `http://localhost:3000`.

### Endpoints Disponibles

- `GET /api/libros`: Obtener todos los libros.
- `GET /api/libros/:isbn`: Obtener un libro por su isbn.
- `POST /api/libros`: Crear un nuevo libro.
- `PUT /api/libros/:isbn`: Actualizar un libro existente.
- `DELETE /api/books/:isbn`: Eliminar un libro por su isbn.

Consulta la documentación de la API para obtener más detalles sobre cómo utilizar cada endpoint.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o deseas mejorar este proyecto, siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
