# EduCore - Course Management System

## Live Links
**Live Website:** [https://b11a11-educore.web.app/](https://b11a11-educore.web.app/)  
**Server URL:** [https://b11a11-educore-server.vercel.app](https://b11a11-educore-server.vercel.app)

## 📁 Project Repositories
- Client: [https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-arif128551](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-arif128551)
- Server: [https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-arif128551](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-arif128551)

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
📧 xossarif@gmail.com  
Assignment-11 Project for Programming Hero

## 🚨 Deployment Notes
- All routes work on reload (SPA)
- Firebase auth domain added
- No CORS/504 errors in production
- Mobile responsive and modern design

---

Thank you Programming Hero for the challenge & guidance!

> ⚡ Inspired by real-world platforms like Coursera & Udemy.