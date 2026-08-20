# 📓 iNotebook

**iNotebook** is a full-stack notes management web application that allows users to securely create, read, update, and delete their personal notes.

## 🚀 Features

* 🔐 User authentication
* ➕ Create new notes
* ✏️ Edit existing notes
* 🗑️ Delete notes
* 📖 View saved notes
* 🔎 Manage notes easily
* 📱 Responsive user interface
* ☁️ Persistent data storage using MongoDB
* 🔗 REST API integration

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Tools

* Git
* GitHub
* VS Code
* npm

## 📂 Project Structure

```text
iNotebook/
├── backend/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── src/
│   ├── components/
│   ├── context/
│   ├── App.js
│   └── index.js
│
├── public/
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/inotebook.git
```

### 2. Open the project

```bash
cd inotebook
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

If your backend is separate, open the backend directory and install its dependencies:

```bash
cd backend
npm install
```

Then start the backend server:

```bash
npm start
```

## 🔑 Environment Variables

Create a `.env` file in the backend directory and add your required environment variables.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Never upload your `.env` file or secret keys to GitHub.**

## 📸 Screenshots

Add screenshots of your application here.

```text
![iNotebook Home](screenshots/home.png)
![iNotebook Notes](screenshots/notes.png)
```

## 📌 What I Learned

Through this project, I practiced:

* Building React components
* Managing application state
* Connecting frontend and backend
* Creating REST APIs
* Performing CRUD operations
* Working with MongoDB
* Implementing authentication
* Using Git and GitHub
* Structuring a full-stack application

## 🔮 Future Improvements

* Dark mode
* Advanced search and filtering
* Note categories and tags
* Rich-text editor
* Image/file attachments
* Cloud deployment
* Improved authentication and security

## 👨‍💻 Author

**Krushna Kolkar**

Full-Stack Web Developer

* GitHub: `https://github.com/yourusername`
* LinkedIn: `https://linkedin.com/in/yourusername`

---

⭐ If you find this project useful, consider giving it a star!
