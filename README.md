# SincX Announcement Manager

A full-stack announcement management system built using React (frontend), Node.js + Express (backend), and MongoDB (database). This app allows creating, viewing, editing, and deleting company-wide announcements with rich text formatting support.

---

## 📌 Features

- Create, Read, Update, and Delete (CRUD) announcements
- Rich text formatting (bold, italic, underline, etc.)
- View announcement list with formatted descriptions
- Edit and delete existing announcements
- Fully responsive and functional frontend
- RESTful API design

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Others:** dotenv, cors, react-toastify

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sincx-announcement-manager.git
cd sincx-announcement-manager
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Create a `.env` file inside `/server`

```env
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
Frontend_URL=http://localhost:5173
```

### 4. Start backend server

```bash
npm run dev
```

### 5. Install frontend dependencies

Open new terminal:
```bash
cd client
npm install
```

### 6. Create `.env` inside `/client`

```env
VITE_API_URL=http://localhost:5000
```

### 7. Start frontend

```bash
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/announcements` | Get all announcements |
| `GET` | `/api/announcements/:id` | Get single announcement |
| `POST` | `/api/announcements` | Create a new announcement |
| `PUT` | `/api/edit-announcements/:id` | Update an announcement |
| `DELETE` | `/api/announcements/:id` | Delete an announcement |

---

## 📹 Demo Video

[Click here to watch the demo](#)  
_(Replace this link with your Loom/YouTube demo video)_

---

## 📂 Folder Structure

```
sincx-announcement-manager/
├── client/         # React frontend
├── server/         # Express backend
└── README.md
```

---

## 👨‍💻 Author

**Shivam Maurya**  
Built as part of the SincX Full-Stack Developer Assignment

---

## ✅ Status

✅ Completed core features  
🚀 Bonus: Search feature (optional) can be added  
