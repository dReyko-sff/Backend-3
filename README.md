Backend III - Adoption API

Autor

Sergio Fernández

Descripción

Este proyecto corresponde a la entrega final del curso Backend III de Coderhouse.

Se desarrolló una API REST utilizando Node.js, Express y MongoDB Atlas para gestionar adopciones de mascotas.

La aplicación permite realizar operaciones CRUD completas sobre las adopciones.

---

Tecnologías utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Mocha
* Chai
* Supertest
* Faker
* Sinon
* Docker
* DockerHub



Instalación

Clonar el repositorio:

```bash
git clone https://github.com/dReyko-sff/Backend-3.git
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` con:

```env
PORT=8080
MONGO_URL=tu_cadena_de_conexion
```

Ejecutar el proyecto:

```bash
npm run dev
```



Tests

Ejecutar:

```bash
npm test
```

Los tests verifican:

* GET /api/adoptions
* GET /api/adoptions/:id
* POST /api/adoptions
* PUT /api/adoptions/:id
* DELETE /api/adoptions/:id

Además se utilizaron:

* Faker para generar datos ficticios.
* Sinon para realizar un stub simple.



Docker

Construir la imagen:

```bash
docker build -t backend-iii .
```

Ejecutar el contenedor:

```bash
docker run --rm --name backend-iii-container -p 8080:8080 --env-file .env backend-iii
```

---

DockerHub

Imagen publicada en:

https://hub.docker.com/r/dreykodream/backend-iii

---

GitHub

Repositorio:

https://github.com/dReyko-sff/Backend-3
