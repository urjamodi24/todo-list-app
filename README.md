# 📌 To-Do List Mobile App

## 📌 Project Description
This is a **To-Do List Mobile App** built using **React Native (Expo)** for the frontend and **Node.js + Express + MySQL** for the backend. The app allows users to **add, view, update, and delete tasks** in a simple and intuitive UI.

## 📌 Features
✅ Add tasks to the to-do list  
✅ View a list of pending and completed tasks  
✅ Mark tasks as completed  
✅ Delete tasks from the list  
✅ Uses MySQL for storing tasks  
✅ API built with Node.js & Express  
✅ Expo for running the React Native app without Android Studio

## 📌 Tech Stack
### **Frontend (React Native + Expo)**
- React Native
- Expo
- Axios (for API calls)
- React Native Paper (for UI components)

### **Backend (Node.js + Express + MySQL)**
- Node.js
- Express.js
- MySQL
- dotenv (for environment variables)
- CORS (for handling cross-origin requests)

## 📌 Folder Structure
```
📦 todo-list-app
├── 📂 todo-backend       # Backend (Node.js + Express + MySQL)
│   ├── 📜 server.js      # Main backend server file
│   ├── 📜 .env           # Environment variables (DB credentials)
│   ├── 📜 db.js          # Database connection setup
│   ├── 📜 todoRoutes.js  # Routes for CRUD operations
│   ├── 📜 todoController.js  # Controller functions for handling logic
│   ├── 📜 package.json   # Backend dependencies
│
├── 📂 todo-app           # Frontend (React Native + Expo)
│   ├── 📂 components     # Reusable UI components (e.g., TodoItem.js)
│   ├── 📜 App.js         # Main React Native App file
│   ├── 📜 package.json   # Frontend dependencies
│   ├── 📜 styles.js      # Separate styles for the UI
│
└── 📜 README.md          # Main project documentation
```

## 📌 How to Run the Project

### **1️⃣ Setup the Backend**
```bash
cd todo-backend
npm install  # Install backend dependencies
node server.js  # Start the backend server
```

### **2️⃣ Setup the Frontend**
```bash
cd todo-app
npm install  # Install frontend dependencies
npx expo start  # Start the Expo development server
```

### **3️⃣ Run on Mobile**
- Scan the QR code in Expo CLI using the **Expo Go** app (Android/iOS) to preview the app.

## 📌 API Endpoints
| Method | Endpoint    | Description |
|--------|------------|-------------|
| GET    | `/todos`    | Fetch all tasks |
| POST   | `/todos`    | Add a new task |
| PUT    | `/todos/:id` | Mark task as completed |
| DELETE | `/todos/:id` | Delete a task |

## 📌 Future Improvements
🚀 Add **authentication** for users  
🚀 Improve **UI with animations**  
🚀 Deploy the backend to a cloud service  

## 📌 Author
👤 **Your Name**  
📧 urja7112@gmail.com 
🔗 [GitHub Profile](https://github.com/urjamodi24)  

