# Student Management System API

## Overview
[cite_start]This project is a REST API for a Student Management System built using Node.js and MongoDB[cite: 4, 18]. [cite_start]It follows Clean Architecture principles to ensure a clear separation of concerns and maintainable code[cite: 4, 29].

By completing this assignment, the following objectives are met:
* [cite_start]Building REST APIs with Node.js and Express[cite: 12].
* [cite_start]Implementing full CRUD operations[cite: 12].
* [cite_start]Structuring projects using Clean Architecture[cite: 12].
* [cite_start]Using middleware for security and validation[cite: 12].
* [cite_start]Connecting applications to MongoDB[cite: 12].

---

## Technology Stack
* [cite_start]**Runtime:** Node.js [cite: 16]
* [cite_start]**Framework:** Express.js [cite: 17]
* [cite_start]**Database:** MongoDB [cite: 18]
* [cite_start]**ODM:** Mongoose [cite: 19]

---

## Project Structure
[cite_start]The project follows a modular structure to separate responsibilities[cite: 20, 29]:
* [cite_start]`src/controllers`: Handles incoming requests and returns responses[cite: 22].
* [cite_start]`src/services`: Contains business logic[cite: 23].
* [cite_start]`src/routes`: Defines API endpoints[cite: 24].
* [cite_start]`src/models`: Database schemas and models[cite: 25].
* [cite_start]`src/middleware`: Custom functions for validation and error handling[cite: 26].
* [cite_start]`src/config`: Configuration files (e.g., database connection)[cite: 27].

---

## Setup & Installation

### 1. Prerequisites
[cite_start]Ensure you have **Node.js** and **MongoDB** installed on your local machine[cite: 16, 18].

### 2. Environment Variables
[cite_start]Create a `.env` file in the root directory and configure the following variables[cite: 60, 75]:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string