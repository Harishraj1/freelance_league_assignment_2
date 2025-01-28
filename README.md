# Authentication Project

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (for the frontend and backend)
- Git (for cloning the repository)
- MongoDB (for the database)

## Installation and Setup

### 1. Clone the Repository
To clone the repository, run:
```bash
git clone https://github.com/YourUsername/authentication-project.git
```

Navigate to the project directory:
```bash
cd authentication-project
```

### 2. Backend Setup
- Navigate to the `backend` directory:
  ```bash
  cd backend
  ```
- Install the required Node.js packages:
  ```bash
  npm install
  npm install requirements.txt
  ```
- Configure environment variables:
  - Create a `.env` file in the `backend` directory.
  - Add the following variables:
    ```env
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongodb_uri
    ```
- Start the Node.js backend server:
  ```bash
  node server.js
  ```

The backend will now be running on [http://localhost:5000/](http://localhost:5000/).

### 3. Frontend Setup
- Open a new terminal and navigate to the `frontend` directory:
  ```bash
  cd frontend
  ```
- Install the required Node.js packages:
  ```bash
  npm install
  ```
- Start the React development server:
  ```bash
  npm start
  ```

The application will now be running on [http://localhost:3000/](http://localhost:3000/).

## Running the Project
1. Open two terminals.
2. In one terminal, navigate to the `backend` directory and start the backend server:
   ```bash
   node server.js
   ```
3. In the second terminal, navigate to the `frontend` directory and start the React server:
   ```bash
   npm start
   ```
4. Access the application in your browser at [http://localhost:3000/](http://localhost:3000/).

