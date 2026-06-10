# TaskFlow Manager

A full-stack MERN application designed for task assignment, progress tracking, team collaboration, and administrative task management. The platform provides role-based access control, analytics dashboards, checklist-based progress tracking, and report export functionality.

## Overview

TaskFlow Manager helps organizations and teams manage tasks efficiently through a centralized platform. Administrators can create and assign tasks, monitor team performance, and export reports, while users can manage assigned work, update task progress, and track completion through interactive checklists.

---

## Key Features

### Authentication & Authorization

* JWT-based authentication
* Secure login and registration
* Protected API routes
* Role-based access control
* Admin and User dashboards

### Task Management

* Create, update, and delete tasks
* Assign tasks to multiple users
* Set task priorities (Low, Medium, High)
* Manage task status (Pending, In Progress, Completed)
* Configure due dates
* Add external resource attachments

### Progress Tracking

* Interactive task checklists
* Automatic progress calculation
* Dynamic task status updates based on completion percentage
* Individual task detail view

### User Management

* User profile management
* Profile image support
* User task statistics
* User assignment system

### Analytics Dashboard

* Task distribution overview
* Priority-level analysis
* User-specific statistics
* Recent task tracking
* Data visualization using charts

### Reporting

* Export task reports to Excel
* Export user reports to Excel
* Administrative reporting tools

---

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* Recharts
* React Icons
* Moment.js

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### Development Tools

* Vite
* Git
* GitHub

---

## System Architecture

```text
Client (React + Tailwind CSS)
            |
            |
            v
REST API (Express.js)
            |
            |
            v
Authentication Layer (JWT)
            |
            |
            v
MongoDB Database
```

---

## Project Structure

```bash
TaskFlow-Manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Database Models

### User

```javascript
{
  name,
  email,
  password,
  profileImageUrl,
  role
}
```

### Task

```javascript
{
  title,
  description,
  priority,
  status,
  dueDate,
  assignedTo,
  createdBy,
  attachment,
  todoChecklist,
  progress
}
```

---

## API Modules

### Authentication

* User Registration
* User Login
* Get User Profile
* Image Upload

### Users

* Get All Users
* Get User By ID
* User Statistics

### Tasks

* Create Task
* Update Task
* Delete Task
* Get Task By ID
* Get All Tasks
* Update Status
* Update Checklist
* Dashboard Analytics

### Reports

* Export Tasks Report
* Export Users Report

---

## Installation

### Clone Repository

```bash
git clone https://github.com/nanduholkar/TaskFlow-Manager.git

cd TaskFlow-Manager
```

---

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Technical Highlights

* RESTful API architecture
* JWT-based authentication and authorization
* Role-based access control implementation
* MongoDB aggregation for dashboard analytics
* Dynamic progress calculation using checklist completion
* Excel report generation
* Reusable React component architecture
* Context API state management
* Responsive dashboard design
* Secure route protection

---

## Challenges Solved

* Role-based route protection
* Multi-user task assignment
* Checklist synchronization between frontend and backend
* Dynamic progress tracking
* Dashboard analytics generation
* Report export functionality
* Task status automation based on completion percentage

---

## Future Improvements

* Real-time notifications using Socket.io
* Email notifications
* Activity logs
* Team workspaces
* Calendar integration
* Task comments and discussions
* File upload support using cloud storage
* Dark mode
* Advanced filtering and search

---

## What I Learned

Through this project, I gained practical experience in:

* Full-Stack MERN Development
* Authentication and Authorization
* MongoDB Data Modeling
* REST API Development
* React Component Design
* State Management
* Data Visualization
* File Handling
* Report Generation
* Debugging and Application Architecture

---

## Author

Nandu Holkar

GitHub: https://github.com/nanduholkar

LinkedIn: Add LinkedIn Profile URL

---

## License

This project is licensed under the MIT License.
