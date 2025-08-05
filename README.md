# EduCore - Course Management System

## Live Links
**Live Website:** [https://b11a11-educore.web.app/](https://b11a11-educore.web.app/)  
**Server URL:** [https://b11a11-educore-server.vercel.app](https://b11a11-educore-server.vercel.app)

## 📁 Project Repositories
- **Client:** [EduCore-Client](https://github.com/arifuddincoder/educore-clientside)
- **Server:** [EduCore-Server](https://github.com/arifuddincoder/educore-serverside)

## 🧪 How to Run Locally

To run the project locally on your machine, follow these steps carefully:

### 🚀 1. Clone & Run the Client

```bash
git clone https://github.com/arifuddincoder/educore_clientside.git
cd educore_clientside
npm install
npm run dev
```

### 🛠️ 2. Clone & Run the Server

```bash
git clone https://github.com/arifuddincoder/educore_serverside.git
cd educore_serverside
npm install
npm run dev
```

✅ **Note:** The client will not function properly unless the server is running.  
So make sure the server is started **before** using the client.

---

### 🔐 3. Setup `.env` Files

Create a `.env` file in both the client and server directories.

For **client**:
```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

For **server**:
```
PORT=5000
DB_USER=your_mongo_user
DB_PASS=your_mongo_pass
FB_SERVICE_KEY=base64_encoded_service_account_json
```

If there are `.env.example` files, copy them as `.env` and fill in the correct values.

---

Now you're all set!  
- Server should run at `http://localhost:5000`  
- Client should run at `http://localhost:5173`

---

## 📅 Project Description
EduCore is a full-stack Course Management System that allows users to browse, enroll, and manage educational courses in a clean and modern UI. It includes Firebase authentication, Firebase-based login (Email/Google/GitHub), protected routes, course management, seat-limit validation, and dynamic filtering.


## 🎯 Project Purpose
The main purpose of EduCore is to simulate a real-world course management system where users can explore educational content, enroll in courses, and manage their learning activities. 

It aims to:
- Solidify the understanding of full-stack development concepts (React + Express + MongoDB)
- Apply Firebase Authentication and Firebase-based authorization
- Implement secure CRUD operations and protected APIs
- Practice advanced React features like dynamic routing, loaders, and context
- Ensure responsive and accessible design using TailwindCSS
- Provide a polished user experience with notifications, animations, and modern UI/UX patterns

This project was developed as a part of Programming Hero’s Assignment-11 to reflect real-life use-cases and demonstrate production-level quality.


## 🌟 Key Features
- User Registration with Firebase + Validation
- Email/Password, Google, and GitHub login
- Protected routes using `PrivateRoute`
- Add/Edit/Delete Courses (CRUD)
- Enroll/Unenroll in courses (Max 3, Seat Limit enforced)
- Display of Latest & Popular Courses
- "My Enrolled Courses" & "Manage Courses" Dashboard
- Fully Responsive Layout
- Clean UI/UX with TailwindCSS
- Dynamic Route Title & Toast Notifications
- 404 Page, Loading Spinners, and Newsletter UI
- MongoDB + Express backend with Firebase Token 

## 🚀 Functional Routes
### Public Pages
- `/` - Home (with Banner, Latest, Popular, Testimonials, Categories)
- `/courses` - All Courses
- `/course-details/:id` - Course Details with Enroll button
- `/contact` - Contact Page
- `/login` - Login with social logins
- `/register` - Registration page

### Private Pages
- `/add-course` - Add new course (Author only)
- `/edit-course/:id` - Edit existing course (Author only)
- `/manage-courses` - All courses added by logged-in user
- `/my-courses` - Enrolled courses of the user

## 🔐 Authentication & Authorization
- Firebase Authentication with updateProfile
- `verifyFirebaseToken` & `verifyTokenEmail` middlewares on server

## 📄 Tech Stack
### 🛠️ Client-side:
- react
- react-dom
- react-router
- firebase
- react-hot-toast
- react-icons
- sweetalert2
- react-slick
- swiper
- react-tooltip
- react-simple-typewriter
- react-spinners
- tailwindcss
- daisyui
- @tailwindcss/vite
- eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh
- vite, @vitejs/plugin-react

### 🛠️ Server-side:
- express
- cors
- dotenv
- firebase-admin
- mongodb

### 🎨 Special Server Setup:
- Firebase Admin initialized from `.env` encoded service key:
```js
const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString("utf8");
const serviceAccount = JSON.parse(decoded);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
```
- MongoDB connected via URI using `process.env.DB_USER` and `process.env.DB_PASS`
- Token Verification Middleware:
```js
const verifyFirebaseToken = async (req, res, next) => { /* ... */ }
const verifyTokenEmail = async (req, res, next) => { /* ... */ }
```

## 📊 Backend Endpoints
- `POST /api/jwt` - Generate token
- `GET /api/courses` - Fetch courses with `?filter=recent|popular`
- `GET /api/courses/:id` - Course details with author info
- `POST /api/courses` - Add course
- `PATCH /api/edit-course/:id` - Update course
- `DELETE /api/delete-course/:id` - Delete course
- `GET /api/my-courses?email=&filter=recent` - Own courses
- `POST /api/enroll` - Enroll / Unenroll (toggle)
- `GET /api/is-enrolled` - Check if enrolled
- `GET /api/my-enrollments?email=` - Enrolled courses
- `POST /api/users` - Register user (check+create)

## 🌞 Developer Info
**Md Arif Uddin**  
📧 arifuddincoder@gmail.com  
Assignment-11 Project for Programming Hero

## 🚨 Deployment Notes
- All routes work on reload (SPA)
- Firebase auth domain added
- No CORS/504 errors in production
- Mobile responsive and modern design

---

Thank you Programming Hero for the challenge & guidance!

> ⚡ Inspired by real-world platforms like Coursera & Udemy.
