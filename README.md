# 📚 Online Library System (Madriguera de Papel)

> A full-stack web application for managing an online library, featuring a robust Java 21 Spring Boot backend and a modern Vue.js frontend styled with Tailwind CSS.

## 🛠️ Technology Stack

**Frontend**
* Vue.js 3
* TypeScript
* Tailwind CSS
* HTML5 / CSS3

**Backend**
* Java 21
* Spring Boot
* RESTful APIs
* SpringDoc OpenAPI (Swagger UI)
* MySQL (containerized via Docker)

## ✨ Key Features

* Complete catalog management (Add, edit, delete books).
* User authentication and authorization.
* Modern, responsive, and minimalist user interface.
* Interactive API documentation generated automatically with Swagger UI.
* Preloaded initial data for quick testing and demonstration out-of-the-box.

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* Node.js and npm (for the frontend)
* Java JDK 21 and Maven (for the backend)
* Docker (for the MySQL database)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/HowardP98/online-library-system.git](https://github.com/HowardP98/online-library-system.git)
    ```

2.  **Database Setup (Docker):**
    * Make sure you have a MySQL container running and mapped to port `3307`. If you don't have one, you can spin it up quickly with:
      ```bash
      docker run --name library-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=library -p 3307:3306 -d mysql:latest
      ```
    * *(Note: The Spring Boot application is configured to automatically preload initial data upon startup, so no manual SQL scripts are required).*

3.  **Backend Setup:**
    * Navigate to the backend directory:
        ```bash
        cd backend
        ```
    * Ensure your database credentials in `src/main/resources/application.properties` match your Docker container settings.
    * Run the Spring Boot application using Maven:
        ```bash
        mvn spring-boot:run
        ```
    * Once running, you can explore the API documentation at: `http://localhost:8080/swagger-ui.html`

4.  **Frontend Setup:**
    * Navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    * Install all project dependencies:
        ```bash
        npm install
        ```
    * Start the development server:
        ```bash
        npm run dev
        ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
