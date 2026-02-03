# AI Interview Preparation & Assessment Platform

A full MERN application designed to help candidates prepare for technical and HR interviews through AI-generated questions, timed assessment, and performance analytics.

---

## 🚀 Features

### 👤 Candidate
- Register and login securely
- Attempt MCQ, coding, and HR interview questions
- Timed tests with auto submission
- View detailed performanace analytics

### 🧑‍💼 HR / Recruiter
- Create interview tests
- Add questions manually or generate them using AI
- View candidate performance and test results


### 🛠️ Admin
- Manage users and roles
- Manage question banks
- Monitors platform-level analytics

**Frontend**
- React (Vite)
- Tailwind CSS

**BACKEND**
- Node.js
- Express.js

**Database**
- MongoDB (Mongoose)

**Authentication**
- JWT (JSON Web Tokens)

**AI**
- OpenAI API (question generation)

**Other Tools**
- ImageKit (Profile picture & resume upload)
- Multer (File handling)
- Git & GitHub
---


## 📁 Project Structure

interview-platform/
├── backend/
│ ├── src/
│ │ ├── app.js
│ │ ├── server.js
│ │ ├── models/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── middlewares/
│ │ └── utils/
├── frontend/
│ └── src/
└── README.md


---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js
- MongoDB
- Git

### Backend Setup
```bash
cd backend
npm install
npm run dev

```

# How to enable ES Modules in Node
In package.json:
- "type": "module"
