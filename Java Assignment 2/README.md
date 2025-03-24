# HR Portal

An employee management system built with **Spring Boot**, **Thymeleaf**, and **PostgreSQL**. This portal allows HR users to log in, manage employee records, and perform CRUD operations.

## Features

- HR Authentication (Login/Logout)  
- Employee Management (Add, Edit, Delete, View)  
- Session Management with HttpSession  
- Secure Data Handling using Spring Boot JPA  
- Responsive UI with Thymeleaf & FontAwesome

## Setup Instructions

1. **Configure PostgreSQL:**

   Ensure PostgreSQL is installed and create the required tables:

   ```sql
   CREATE DATABASE hr_portal;

   \c hr_portal;

   CREATE TABLE employees (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       department VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       salary DOUBLE PRECISION NOT NULL
   );

   CREATE TABLE hr (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL
   );

   INSERT INTO hr (email, password) VALUES ('admin@example.com', 'password123');
   ```

3. **Set up application properties:**

   Update `src/main/resources/application.properties` with your database credentials:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/hr_portal
   spring.datasource.username=your_db_username
   spring.datasource.password=your_db_password
   spring.jpa.hibernate.ddl-auto=update
   ```

4. **Run the Application:**

    ```bash
    ./mvnw spring-boot:run
    ```

5. **Access the Portal:**

    Open [http://localhost:8000/](http://localhost:8000/) in your browser.

## Usage

1. **HR Login:** Use the credentials provided in the database (`manager@example.com / abcd1234`).
2. **Employee Management:** Add, update, delete, and view employee information.
3. **Logout:** Securely end the HR session by clicking "Logout".

