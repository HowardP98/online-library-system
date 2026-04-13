# ⚙️ Library System - Backend API

Este es el núcleo lógico del sistema de biblioteca, desarrollado con un enfoque en robustez y escalabilidad utilizando el ecosistema de Java.

---

## 🛠️ Stack Tecnológico

* **Java 21**: Aprovechando las últimas características de rendimiento del lenguaje.
* **Spring Boot**: Framework principal para la creación de la API REST.
* **Spring Data JPA**: Para la persistencia de datos y comunicación con MySQL.
* **Hibernate**: Motor ORM para el mapeo de objetos.
* **Maven**: Gestor de dependencias y construcción.

---

## 🚀 Configuración y Ejecución

### 🔧 Requisitos Previos

* JDK 21 instalado.
* MySQL Server (o un contenedor Docker con MySQL).
* Maven instalado.

---

### 📥 Instalación

1. Configura la base de datos en el archivo `src/main/resources/application.properties` (o `application.yml`):

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/library_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

2. Compila el proyecto:

```bash
mvn clean install
```

3. Ejecuta la aplicación:

```bash
mvn spring-boot:run
```

4. La API estará disponible en:

```
http://localhost:8080
```

---

## 📦 Estructura del Proyecto

```
src/
 └── main/
     ├── java/
     │   └── com/example/library/
     │       ├── controller/    # Controladores REST
     │       ├── service/       # Lógica de negocio
     │       ├── repository/    # Acceso a datos
     │       ├── model/         # Entidades JPA
     │       └── dto/           # Objetos de transferencia de datos
     └── resources/
         ├── application.properties
         └── data.sql (opcional)
```

---

## 📚 Endpoints Principales

### 📖 Libros

| Método | Endpoint        | Descripción              |
| ------ | --------------- | ------------------------ |
| GET    | /api/books      | Obtener todos los libros |
| GET    | /api/books/{id} | Obtener libro por ID     |
| POST   | /api/books      | Crear un nuevo libro     |
| PUT    | /api/books/{id} | Actualizar un libro      |
| DELETE | /api/books/{id} | Eliminar un libro        |

---

### 👤 Usuarios

| Método | Endpoint        | Descripción            |
| ------ | --------------- | ---------------------- |
| GET    | /api/users      | Listar usuarios        |
| GET    | /api/users/{id} | Obtener usuario por ID |
| POST   | /api/users      | Crear usuario          |
| DELETE | /api/users/{id} | Eliminar usuario       |

---

### 🔄 Préstamos

| Método | Endpoint               | Descripción       |
| ------ | ---------------------- | ----------------- |
| GET    | /api/loans             | Listar préstamos  |
| POST   | /api/loans             | Crear préstamo    |
| PUT    | /api/loans/{id}/return | Marcar devolución |

---

## 🧪 Testing

Ejecuta los tests con:

```bash
mvn test
```

---

## 🌍 Variables de Entorno (Opcional)

Puedes evitar credenciales hardcodeadas usando variables de entorno:

```properties
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
```

---

## 🐳 Docker (Opcional)

Ejemplo básico de `docker-compose.yml` para levantar MySQL:

```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8
    container_name: library_mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: library_db
    ports:
      - "3306:3306"
```

---

## 📌 Notas

* Se recomienda usar **Postman** o **Insomnia** para probar la API.
* Puedes habilitar logs SQL para debugging.
* El proyecto está preparado para escalar hacia arquitectura de microservicios.

---

## 👨‍💻 Autor

Desarrollado como parte de un sistema de gestión de biblioteca.
