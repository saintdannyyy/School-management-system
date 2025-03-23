# School Management System

## Description
The School Management System is a Nodejs with MongoDB backend web application designed to manage and streamline various administrative tasks within a school. It allows for the creation, retrieval, and management of student records, including their personal information and academic details.

## Installation Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/saintdannyyy/School-management-system.git
   ```
2. Navigate to the project directory:
   ```sh
   cd School-management-system
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Set up the environment variables by creating a `.env` file in the root directory and adding the following:
   ```
   DEV_MONGO_URL=<your_mongodb_connection_string>
   PORT=<your_preferred_port>
   ```

## Usage Instructions
1. Start the server:
   ```sh
   npm start
   ```
2. The server will be running on the port specified in the `.env` file. You can access the API endpoints using a tool like Postman or through your web browser.

## API Endpoints
- **Create a new student**
  - **URL:** `/api/v1/students`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "fName": "John",
      "lName": "Doe",
      "programme": "Computer Science",
      "residence": "Dormitory A"
    }
    ```
  - **Response:**
    ```json
    {
      "_id": "60c72b2f9b1d4c3a4c8e4b8a",
      "firstName": "John",
      "lastName": "Doe",
      "programme": "Computer Science",
      "residence": "Dormitory A",
      "__v": 0
    }
    ```

- **Find a student by ID**
  - **URL:** `/api/v1/students/:id`
  - **Method:** `GET`
  - **Response:**
    ```json
    {
      "_id": "60c72b2f9b1d4c3a4c8e4b8a",
      "firstName": "John",
      "lastName": "Doe",
      "programme": "Computer Science",
      "residence": "Dormitory A",
      "__v": 0
    }
    ```
