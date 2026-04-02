# 🖨️ Print Partners – Online Printing Management System

## 📌 Overview

Print Partners is a full-stack web application that allows users to place printing orders online and enables admins to manage those orders efficiently through a dashboard.

This project simulates a real-world printing service platform with file uploads, deadlines, and admin authentication.

---

## 🚀 Features

### 👤 User Side

* Place orders online
* Select printing services & specifications
* Upload documents (PDF/Image)
* Add special instructions
* Set deadlines for orders

### 🛠️ Admin Side

* Secure login authentication (JWT based)
* View all orders in dashboard
* Filter Ongoing & Completed orders
* Mark orders as completed
* Delete cancelled orders
* View uploaded files
* See order date & deadline
* Deadline exceeded warning system

---

## 🔐 Authentication

* Admin login system using JWT
* Protected routes (only admin can access dashboard)
* Token-based authorization

---

## 🏗️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Other Tools

* Multer (File Upload)
* JSON Web Token (JWT)

---

## 📁 Project Structure

```
print-partners/
│
├── public/        # Frontend files
├── backend/       # Backend server & APIs
├── screenshots/   # Project images
├── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/Aadya-Diwan/print-partners.git
cd print-partners
```

### 2️⃣ Install Backend Dependencies

```
cd backend
npm install
```

### 3️⃣ Run Server

```
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🔑 Admin Login

```
Username: admin
Password: 1234
```

Access:

```
/login.html
```

---

## 📸 Screenshots

### 🏠 Homepage

<img width="1911" height="1035" alt="image" src="https://github.com/user-attachments/assets/35597164-bbbf-4c7d-8070-5f93f4d809be" />

### 📝 Order Form

<img width="524" height="790" alt="image" src="https://github.com/user-attachments/assets/2a4ccfc2-e2ec-4324-8671-59d882c28bb0" />

### 🔐 Admin Login

<img width="534" height="354" alt="image" src="https://github.com/user-attachments/assets/144408a0-1033-4ce8-835b-0984fc0d185a" />

### 📊 Admin Dashboard

<img width="1898" height="1028" alt="image" src="https://github.com/user-attachments/assets/786caac9-6c7e-41b0-b5d4-6e283be96715" />

<img width="1894" height="1029" alt="image" src="https://github.com/user-attachments/assets/85753719-03c6-4e50-9e4c-38a50b21690e" />

---

## 💡 Future Improvements

* Payment Integration
* User authentication system
* Order tracking for users
* Email notifications
* Mobile responsiveness improvements

---

## 🎯 Purpose

This project was built to demonstrate full-stack development skills including frontend design, backend API creation, database integration, authentication, and real-world application logic.

---

## 👨‍💻 Author

Aadya Diwan

---

