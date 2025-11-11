
# 💼 CRM App Backend

The **CRM App Backend** is a scalable and secure backend service built with **Node.js**, **Express.js**, and **MongoDB**, designed to manage customer relationships, leads, and sales pipelines efficiently.

It provides a RESTful API architecture that enables seamless integration with frontend clients and supports user authentication, data validation, and role-based operations — all optimized for performance and maintainability.

---

## 🚀 Tech Stack

| Category               | Technology                          |
| ---------------------- | ----------------------------------- |
| Runtime                | **Node.js**                         |
| Framework              | **Express.js**                      |
| Database               | **MongoDB** with **Mongoose ODM**   |
| Authentication         | **JWT (JSON Web Tokens)**           |
| Security               | **bcrypt.js**, **helmet**, **CORS** |
| Environment Management | **dotenv**                          |
| Validation             | **Joi / express-validator**         |

---

## ✨ Key Features

* 🔐 **User Authentication & Authorization** using JWT
* 👥 **Customer Management** — Create, read, update, delete (CRUD) customers
* 📞 **Leads Tracking** — Manage potential clients and status updates
* 💼 **Sales Pipeline Management** — Track deal stages and progress
* 📈 **Activity Logging** — Monitor user actions and changes
* 🔍 **Search & Filtering** — Efficient query-based filtering
* ⚙️ **Environment Configuration** for different deployment stages (dev/prod)
* 🧩 **Modular Code Structure** for scalability and maintainability

---

## 📁 Project Structure

```
crm-backend/
│
├── src/
│   ├── config/         # Environment and database configurations
│   ├── controllers/    # API endpoint handlers
│   ├── middlewares/    # Authentication, error handling, etc.
│   ├── models/         # Mongoose schemas and data models
│   ├── repositories/   # Data access logic
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic
│   ├── utils/          # Helper utilities
│   ├── validators/     # Data validation schemas
│   └── server.ts       # Main Express app setup
│
├── .env.example        # Example environment file
├── package.json        # Project metadata and dependencies
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/anujpal247/CRM_TS_Node.git
cd crm-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Copy `.env.example` → `.env` and update the following:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

Great Job!👍 Backend will run at 👉 **[http://localhost:5000](http://localhost:5000)**

---

## 🧠 Future Enhancements

* 📧 Email and Notification Integration
* 📊 Dashboard Analytics API
* 🌐 Integration with Third-Party CRMs or Payment Gateways
* ☁️ Deployment with Docker and CI/CD pipeline

---