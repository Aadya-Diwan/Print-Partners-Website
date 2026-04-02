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

<img width="1916" height="1033" alt="image" src="https://github.com/user-attachments/assets/ba43caf5-8767-4236-aed4-92e31987b356" />

### 📝 Order Form

<img width="635" height="966" alt="image" src="https://github.com/user-attachments/assets/9027050c-69c8-451e-a413-e760c3f6c5c0" />

### 🔐 Admin Login

<img width="630" height="404" alt="image" src="https://github.com/user-attachments/assets/82c9e99b-e954-4af0-aba6-6e179448755c" />

### 📊 Admin Dashboard

<img width="1899" height="1023" alt="image" src="https://github.com/user-attachments/assets/6338b196-cf7e-411b-92c2-92fec2389574" />

<img width="1901" height="1067" alt="image" src="https://github.com/user-attachments/assets/2f24f5f1-ca6b-4a42-8bb6-065f2657558c" />

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

