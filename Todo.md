# ASSIGNMENT PORTAL

## Full Stack Development Lab Project

### MERN Stack Web Application

---

# 1. Project Title

**Assignment Portal**

A MERN Stack-based web application for managing academic assignments, submissions, deadlines, evaluation, marks, and feedback.

---

# 2. Abstract

The **Assignment Portal** is a full-stack web application developed using the **MERN Stack — MongoDB, Express.js, React.js, and Node.js**.

The primary objective of the system is to provide a centralized platform for managing the complete academic assignment lifecycle. Faculty members can create assignments, provide instructions, set deadlines, upload resources, view student submissions, evaluate assignments, and provide feedback. Students can register, log in, view available assignments, submit their work, track submission status, and view marks and faculty feedback.

The application uses **React.js with Vite and Tailwind CSS** for the frontend, **Node.js and Express.js** for the backend, and **MongoDB with Mongoose** for data management. RESTful APIs are used for communication between the frontend and backend.

The project also uses **JWT-based authentication**, password hashing, role-based authorization, and Git/GitHub for collaborative development.

---

# 3. Introduction

Managing academic assignments manually can become difficult when the number of students and assignments increases. Faculty members need to distribute assignments, monitor submissions, evaluate student work, and maintain records. Students need a reliable platform to access assignments, understand deadlines, submit their work, and track their results.

The Assignment Portal addresses these problems by providing a centralized digital platform.

The application supports two primary users:

* **Student**
* **Faculty**

Each user receives functionality based on their role.

The system aims to make assignment management more organized, efficient, transparent, and accessible.

---

# 4. Problem Statement

Traditional assignment management systems may involve email, messaging applications, physical submissions, or multiple disconnected platforms.

This can lead to:

* Difficulty tracking assignments.
* Missed deadlines.
* Manual submission management.
* Difficulty identifying late submissions.
* Scattered assignment resources.
* Time-consuming evaluation.
* Poor organization of marks and feedback.
* Difficulty maintaining submission history.
* Lack of a centralized academic workflow.

Therefore, a centralized web-based Assignment Portal is proposed to manage assignments and submissions efficiently.

---

# 5. Proposed System

The proposed Assignment Portal provides a centralized platform through which faculty and students can interact.

### Faculty can:

* Log in securely.
* Create assignments.
* Add assignment descriptions and instructions.
* Set deadlines.
* Upload resources.
* Edit assignments.
* Delete assignments.
* View student submissions.
* Evaluate submissions.
* Assign marks.
* Provide feedback.

### Students can:

* Register and log in.
* Access their dashboard.
* View assignments.
* Search and filter assignments.
* View assignment details.
* Download assignment resources.
* Upload completed assignments.
* Submit assignments.
* Track submission status.
* View submission history.
* View marks and feedback.

---

# 6. Objectives

The main objectives of the project are:

1. To develop a centralized assignment management system.
2. To simplify assignment distribution.
3. To provide students with an easy submission mechanism.
4. To allow faculty to efficiently manage assignments.
5. To track assignment deadlines.
6. To automatically identify late submissions.
7. To simplify assignment evaluation.
8. To maintain student submission records.
9. To provide marks and faculty feedback.
10. To implement secure role-based authentication.
11. To demonstrate practical MERN Stack development.
12. To implement REST API-based communication between frontend and backend.
13. To provide a responsive and user-friendly interface.

---

# 7. Scope of the Project

The Assignment Portal is designed for academic environments such as colleges, universities, departments, and individual courses.

The current scope includes:

* User authentication.
* Student management.
* Faculty management.
* Assignment creation.
* Assignment management.
* Assignment viewing.
* File upload.
* Assignment submission.
* Deadline tracking.
* Late submission detection.
* Evaluation.
* Marks.
* Feedback.
* Dashboard statistics.
* Submission history.

The system can later be expanded to support complete academic management.

---

# 8. Target Users

## 8.1 Student

Students use the portal to access and submit assignments.

### Student operations

* Registration
* Login
* Dashboard
* View assignments
* Search assignments
* Filter assignments
* View assignment details
* Download resources
* Submit assignments
* Track submission status
* View submission history
* View marks
* View feedback

---

## 8.2 Faculty

Faculty members use the portal to manage assignments and evaluate submissions.

### Faculty operations

* Login
* Dashboard
* Create assignments
* Edit assignments
* Delete assignments
* Upload resources
* View assignments
* View student submissions
* Download submissions
* Evaluate submissions
* Enter marks
* Provide feedback

---

# 9. Technology Stack

The project uses the **MERN Stack**.

| Layer                   | Technology           |
| ----------------------- | -------------------- |
| Frontend                | React.js             |
| Build Tool              | Vite                 |
| Styling                 | Tailwind CSS         |
| Backend Runtime         | Node.js              |
| Backend Framework       | Express.js           |
| Database                | MongoDB              |
| ODM                     | Mongoose             |
| Authentication          | JSON Web Token (JWT) |
| Password Hashing        | bcrypt               |
| API                     | REST API             |
| Version Control         | Git                  |
| Repository              | GitHub               |
| Development Environment | Visual Studio Code   |

---

# 10. Why MERN Stack?

MERN is suitable for the Assignment Portal because it provides a complete JavaScript-based development environment.

### MongoDB

Used to store:

* Users
* Assignments
* Submissions
* Marks
* Feedback

### Express.js

Used to create:

* REST APIs
* Authentication routes
* Assignment routes
* Submission routes
* Evaluation routes

### React.js

Used to build:

* User interfaces
* Dashboards
* Assignment pages
* Submission forms
* Faculty management pages

### Node.js

Provides the runtime environment for executing the backend JavaScript application.

---

# 11. Frontend Technology

## React.js

React is used to create a component-based and interactive user interface.

The application can be divided into reusable components such as:

* Navbar
* Sidebar
* Assignment Card
* Dashboard Card
* Assignment Form
* Submission Form
* Modal
* Table
* Button
* Loading Component

---

## Vite

Vite is used as the development and build tool for the React application.

Advantages include:

* Fast development server.
* Fast Hot Module Replacement.
* Modern frontend tooling.
* Efficient production builds.

---

## Tailwind CSS

Tailwind CSS is used for styling the application.

It enables:

* Responsive layouts.
* Consistent spacing.
* Modern UI design.
* Reusable utility classes.
* Responsive dashboards.
* Professional component styling.

---

# 12. Backend Technology

## Node.js

Node.js provides the runtime environment for the server-side application.

It handles:

* HTTP requests.
* API execution.
* Authentication.
* Database communication.
* File handling.
* Server-side business logic.

---

## Express.js

Express.js is used to create the backend server and REST APIs.

Responsibilities include:

* Routing.
* Middleware.
* Request handling.
* Response handling.
* Authentication middleware.
* Error handling.

---

# 13. Database

## MongoDB

MongoDB is used as the primary database.

MongoDB stores information in flexible document-based collections.

Major collections include:

```text
Users
Assignments
Submissions
```

---

# 14. Mongoose

Mongoose is used as the ODM for MongoDB.

It provides:

* Schema definition.
* Data validation.
* Database models.
* Query support.
* Relationships using ObjectId references.

---

# 15. System Architecture

The Assignment Portal follows a client-server architecture.

```text
                       ASSIGNMENT PORTAL
                              │
                              ▼
                 ┌────────────────────────┐
                 │        FRONTEND        │
                 │ React.js + Vite        │
                 │ Tailwind CSS           │
                 └────────────┬───────────┘
                              │
                         REST API
                              │
                              ▼
                 ┌────────────────────────┐
                 │        BACKEND         │
                 │ Node.js + Express.js   │
                 └────────────┬───────────┘
                              │
                         Mongoose ODM
                              │
                              ▼
                 ┌────────────────────────┐
                 │        MongoDB         │
                 │        Database        │
                 └────────────────────────┘
```

---

# 16. System Workflow

## Student Workflow

```text
Student
   ↓
Register / Login
   ↓
Student Dashboard
   ↓
View Assignments
   ↓
Select Assignment
   ↓
Read Instructions
   ↓
Upload Assignment
   ↓
Submit
   ↓
Submission Stored
   ↓
Faculty Evaluation
   ↓
Marks + Feedback
   ↓
Student Views Result
```

---

## Faculty Workflow

```text
Faculty
   ↓
Login
   ↓
Faculty Dashboard
   ↓
Create Assignment
   ↓
Set Deadline
   ↓
Publish Assignment
   ↓
Receive Submissions
   ↓
View / Download Submission
   ↓
Evaluate
   ↓
Enter Marks + Feedback
   ↓
Student Views Result
```

---

# 17. Major Modules

The application is divided into the following modules:

### Module 1 — Authentication

Handles:

* Registration
* Login
* Logout
* Password hashing
* JWT authentication
* Authorization

### Module 2 — Student Module

Handles:

* Student dashboard
* Assignment viewing
* Assignment submission
* Submission history
* Marks
* Feedback

### Module 3 — Faculty Module

Handles:

* Faculty dashboard
* Assignment creation
* Assignment management
* Submission management
* Evaluation

### Module 4 — Assignment Module

Handles:

* Create assignment
* Read assignment
* Update assignment
* Delete assignment

### Module 5 — Submission Module

Handles:

* Assignment upload
* Submission record
* Submission status
* Late submission detection
* Submission history

### Module 6 — Evaluation Module

Handles:

* Marks
* Feedback
* Evaluation status

### Module 7 — Dashboard Module

Provides statistics and important information for students and faculty.

---

# 18. Functional Requirements

## Authentication

The system shall:

* Allow students to register.
* Allow users to log in.
* Authenticate users.
* Hash passwords.
* Generate JWT tokens.
* Protect private routes.
* Restrict access according to user role.

---

## Assignment Management

The system shall allow faculty to:

* Create assignments.
* View assignments.
* Update assignments.
* Delete assignments.
* Set assignment deadlines.
* Add assignment instructions.
* Upload assignment resources.

---

## Assignment Viewing

Students shall be able to:

* View available assignments.
* Search assignments.
* Filter assignments.
* View assignment details.
* View deadlines.
* Download resources.

---

## Assignment Submission

Students shall be able to:

* Upload assignment files.
* Submit assignments.
* View submission status.
* View submission history.

---

## Evaluation

Faculty shall be able to:

* View submissions.
* Download submitted files.
* Enter marks.
* Add feedback.
* Mark submissions as evaluated.

---

# 19. Non-Functional Requirements

## Performance

The system should provide fast responses for normal operations.

## Security

The system should prevent unauthorized access to protected resources.

## Usability

The interface should be simple and easy to understand.

## Reliability

Assignment and submission data should be stored consistently.

## Maintainability

The code should follow a modular structure.

## Scalability

The architecture should allow additional users and features.

## Responsiveness

The interface should work on:

* Desktop
* Laptop
* Tablet
* Mobile

---

# 20. Database Design

## Users Collection

The Users collection stores student and faculty information.

Possible fields:

| Field       | Description           |
| ----------- | --------------------- |
| `_id`       | Unique user ID        |
| `name`      | User name             |
| `email`     | User email            |
| `password`  | Hashed password       |
| `role`      | Student / Faculty     |
| `createdAt` | Account creation time |

---

# 21. Assignments Collection

Possible fields:

| Field          | Description            |
| -------------- | ---------------------- |
| `_id`          | Assignment ID          |
| `title`        | Assignment title       |
| `subject`      | Subject name           |
| `description`  | Assignment description |
| `instructions` | Instructions           |
| `deadline`     | Submission deadline    |
| `maxMarks`     | Maximum marks          |
| `resource`     | Assignment resource    |
| `createdBy`    | Faculty ID             |
| `createdAt`    | Creation time          |

---

# 22. Submissions Collection

Possible fields:

| Field          | Description               |
| -------------- | ------------------------- |
| `_id`          | Submission ID             |
| `assignmentId` | Assignment reference      |
| `studentId`    | Student reference         |
| `file`         | Submitted file            |
| `submittedAt`  | Submission time           |
| `status`       | Submitted / Late / Graded |
| `marks`        | Marks obtained            |
| `feedback`     | Faculty feedback          |
| `evaluatedAt`  | Evaluation time           |

---

# 23. Entity Relationship

The logical relationship between the entities is:

```text
                 ┌─────────────┐
                 │    USER     │
                 └──────┬──────┘
                        │
             ┌──────────┴──────────┐
             │                     │
          Faculty                Student
             │                     │
          creates                submits
             │                     │
             ▼                     │
       ┌─────────────┐             │
       │ ASSIGNMENT  │◄────────────┘
       └──────┬──────┘
              │
              │
              ▼
       ┌─────────────┐
       │ SUBMISSION  │
       └─────────────┘
```

---

# 24. REST API Architecture

The frontend communicates with the backend through REST APIs.

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

## Assignments

```text
GET    /api/assignments
GET    /api/assignments/:id
POST   /api/assignments
PUT    /api/assignments/:id
DELETE /api/assignments/:id
```

## Submissions

```text
POST /api/submissions
GET  /api/submissions
GET  /api/submissions/:id
```

## Evaluation

```text
PUT /api/submissions/:id/evaluate
```

The exact API routes may be modified during implementation.

---

# 25. Authentication Flow

The authentication process can work as follows:

```text
User
 ↓
Login
 ↓
Backend receives credentials
 ↓
Find user in MongoDB
 ↓
Compare password using bcrypt
 ↓
Generate JWT
 ↓
Return token
 ↓
Frontend stores authentication state
 ↓
Protected API request
 ↓
JWT verification
 ↓
Access granted
```

---

# 26. Role-Based Authorization

The application provides different permissions to different roles.

| Feature           | Student | Faculty |
| ----------------- | ------: | ------: |
| Register          |       ✓ |       — |
| Login             |       ✓ |       ✓ |
| View assignments  |       ✓ |       ✓ |
| Create assignment |       — |       ✓ |
| Edit assignment   |       — |       ✓ |
| Delete assignment |       — |       ✓ |
| Submit assignment |       ✓ |       — |
| View submissions  |     Own |       ✓ |
| Evaluate          |       — |       ✓ |
| View marks        |       ✓ |       ✓ |
| Give feedback     |       — |       ✓ |

---

# 27. File Upload System

The portal requires file management for assignment resources and student submissions.

The system should validate:

* File type.
* File size.
* File name.
* Upload request.
* User authorization.

The exact file storage mechanism will be finalized during implementation.

---

# 28. Assignment Status

The portal will provide clear assignment statuses.

### Pending

The student has not submitted the assignment.

### Submitted

The student submitted the assignment before the deadline.

### Late

The student submitted the assignment after the deadline.

### Graded

The faculty member has evaluated the submission.

Example:

```text
PENDING
   ↓
SUBMITTED
   ↓
GRADED
```

or:

```text
PENDING
   ↓
LATE
   ↓
GRADED
```

---

# 29. Deadline Management

Each assignment has a defined deadline.

The backend can compare the submission timestamp with the assignment deadline.

```text
Submission Time < Deadline
        ↓
     ON TIME
```

```text
Submission Time > Deadline
        ↓
       LATE
```

The frontend can display the remaining time for upcoming assignments.

---

# 30. Student Dashboard

The Student Dashboard can display:

* Total assignments.
* Submitted assignments.
* Pending assignments.
* Late submissions.
* Graded assignments.
* Upcoming deadlines.

Example:

```text
┌─────────────────┐
│ Total           │
│ Assignments     │
│      12         │
└─────────────────┘

┌─────────────────┐
│ Submitted       │
│       8         │
└─────────────────┘

┌─────────────────┐
│ Pending         │
│       3         │
└─────────────────┘

┌─────────────────┐
│ Graded          │
│       7         │
└─────────────────┘
```

---

# 31. Faculty Dashboard

The Faculty Dashboard can display:

* Total assignments.
* Total students.
* Total submissions.
* Pending evaluations.
* Completed evaluations.

Example:

```text
Total Assignments       10
Total Students          60
Total Submissions       85
Pending Evaluation      12
Evaluated               73
```

---

# 32. Search and Filtering

The portal can provide assignment search and filtering.

Students can search by:

* Assignment title.
* Subject.

Assignments can be filtered by:

* Subject.
* Deadline.
* Submission status.
* Assignment status.

This makes assignment management easier for students.

---

# 33. Security

Security measures include:

* JWT authentication.
* bcrypt password hashing.
* Protected API routes.
* Role-based authorization.
* Input validation.
* File validation.
* Secure environment variables.
* Error handling.
* Unauthorized request protection.

Sensitive values such as:

```text
MongoDB URI
JWT Secret
```

should be stored in `.env` and must not be committed to GitHub.

---

# 34. Frontend Structure

The React application can be organized into reusable components.

Possible structure:

```text
client/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── AssignmentCard.jsx
│   │   └── DashboardCard.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── FacultyDashboard.jsx
│   │   ├── Assignments.jsx
│   │   └── Submissions.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

# 35. Backend Structure

The Node.js and Express backend can be organized as:

```text
server/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── assignmentController.js
│   └── submissionController.js
│
├── models/
│   ├── User.js
│   ├── Assignment.js
│   └── Submission.js
│
├── routes/
│   ├── authRoutes.js
│   ├── assignmentRoutes.js
│   └── submissionRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── uploads/
│
├── server.js
└── package.json
```

The final structure may be modified during development.

---

# 36. Git and GitHub Collaboration

GitHub will be used for collaborative development.

The repository will be private during development.

Both team members will use their individual GitHub accounts.

Recommended branch structure:

```text
                 main
                /    \
               /      \
          member-1   member-2
               \      /
                \    /
                 main
```

Each member should work on their assigned branch and push meaningful commits.

Example:

```text
Initial project setup
Add TODO project plan
Create React application
Create login page
Create authentication API
Add MongoDB connection
Create assignment model
Implement assignment CRUD
Create submission interface
Add evaluation API
Improve dashboard UI
Fix authentication bug
Update documentation
```

---

# 37. Team Responsibilities

Since the project has two members, the responsibilities can be divided as follows.

## Member 1

### Primary Responsibilities

* React frontend.
* Student interface.
* Student dashboard.
* Assignment listing.
* Assignment details.
* Submission interface.
* UI/UX.
* Frontend API integration.

### Secondary Responsibilities

* Backend integration.
* Testing.
* Documentation.

---

## Member 2

### Primary Responsibilities

* Node.js backend.
* Express.js APIs.
* MongoDB.
* Mongoose models.
* Authentication.
* Faculty module.
* Assignment APIs.
* Submission APIs.
* Evaluation APIs.

### Secondary Responsibilities

* Frontend integration.
* Testing.
* Documentation.

Both members should understand the complete project for the final demonstration and viva.

---

# 38. Development Plan

## Week 1 — Planning and Setup

Tasks:

* Finalize requirements.
* Finalize MERN stack.
* Configure GitHub.
* Connect local project with repository.
* Create `TODO.md`.
* Initialize React/Vite frontend.
* Initialize Node/Express backend.
* Configure MongoDB.
* Design database schemas.
* Create basic UI structure.

### Deliverable

Basic MERN project structure.

---

## Week 2 — Authentication

Tasks:

* Registration.
* Login.
* JWT authentication.
* bcrypt password hashing.
* Protected routes.
* Role-based authorization.
* Login/Register UI.
* Student dashboard skeleton.
* Faculty dashboard skeleton.

### Deliverable

Working authentication system.

---

## Week 3 — Assignment Management

Tasks:

* Create assignment.
* View assignments.
* Update assignment.
* Delete assignment.
* Assignment details.
* Assignment resources.
* Search.
* Filtering.

### Deliverable

Complete assignment management system.

---

## Week 4 — Assignment Submission

Tasks:

* Student submission UI.
* File upload.
* Submission API.
* Submission database model.
* Submission history.
* Submission status.
* Late submission detection.
* Faculty submission view.

### Deliverable

Complete assignment submission workflow.

---

## Week 5 — Evaluation and Dashboard

Tasks:

* Faculty evaluation.
* Marks.
* Feedback.
* Student results.
* Student dashboard statistics.
* Faculty dashboard statistics.
* Deadline countdown.
* UI improvements.

### Deliverable

Complete end-to-end portal.

---

## Week 6 — Testing and Documentation

Tasks:

* Functional testing.
* API testing.
* Authentication testing.
* File upload testing.
* UI testing.
* Responsive testing.
* Bug fixing.
* Documentation.
* Screenshots.
* PPT.
* README.
* Final GitHub cleanup.
* Viva preparation.

### Deliverable

Final project ready for submission.

---

# 39. Testing Strategy

Testing will be performed throughout development.

## Authentication Testing

| Test Case                       | Expected Result  |
| ------------------------------- | ---------------- |
| Valid registration              | Account created  |
| Duplicate email                 | Error displayed  |
| Valid login                     | Dashboard opened |
| Invalid password                | Login rejected   |
| Unauthorized API request        | Access denied    |
| Student accessing faculty route | Access denied    |

---

# 40. Assignment Testing

| Test Case         | Expected Result                |
| ----------------- | ------------------------------ |
| Create assignment | Assignment created             |
| View assignment   | Details displayed              |
| Edit assignment   | Assignment updated             |
| Delete assignment | Assignment removed             |
| Search assignment | Matching assignments displayed |
| Filter assignment | Correct assignments displayed  |

---

# 41. Submission Testing

| Test Case                    | Expected Result      |
| ---------------------------- | -------------------- |
| Valid file upload            | File accepted        |
| Invalid file type            | Upload rejected      |
| Submit before deadline       | Status = Submitted   |
| Submit after deadline        | Status = Late        |
| View submission              | Submission displayed |
| Faculty downloads submission | File downloaded      |

---

# 42. Evaluation Testing

| Test Case              | Expected Result    |
| ---------------------- | ------------------ |
| Enter marks            | Marks saved        |
| Add feedback           | Feedback saved     |
| Evaluate submission    | Status updated     |
| Student views result   | Marks displayed    |
| Student views feedback | Feedback displayed |

---

# 43. Advantages

The Assignment Portal provides:

* Centralized assignment management.
* Reduced paperwork.
* Faster assignment distribution.
* Easy submission process.
* Automatic deadline tracking.
* Late submission identification.
* Organized evaluation.
* Centralized marks and feedback.
* Better student-faculty interaction.
* Assignment history.
* Improved transparency.
* Reduced manual workload.

---

# 44. Limitations

The initial version may have the following limitations:

* Requires network access when hosted remotely.
* File storage depends on the selected storage solution.
* Advanced notification systems may not be included initially.
* Large institutional deployment may require additional optimization.
* Advanced plagiarism detection may not be included in the first version.

---

# 45. Future Scope

The project can be extended with:

## Email Notifications

Automatic reminders for upcoming deadlines.

## Push Notifications

Real-time notifications for assignments, submissions, and results.

## Calendar Integration

Integration with academic calendars.

## Advanced Analytics

Faculty can analyze:

* Submission rates.
* Average marks.
* Late submissions.
* Student performance.

## Multiple Courses

Support for:

* Departments.
* Semesters.
* Sections.
* Subjects.

## Plagiarism Detection

Integration with plagiarism detection services.

## Cloud Storage

Cloud-based storage for assignment resources and submissions.

## Mobile Application

Development of Android and iOS applications.

---

# 46. Expected Outcome

The completed Assignment Portal will provide a complete digital workflow:

```text
Faculty Creates Assignment
          ↓
Assignment Published
          ↓
Student Views Assignment
          ↓
Student Submits Work
          ↓
Deadline Checked
          ↓
Submission Stored
          ↓
Faculty Evaluates
          ↓
Marks + Feedback
          ↓
Student Views Result
```

The project demonstrates practical knowledge of:

* React.js
* Vite
* Tailwind CSS
* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* JWT authentication
* bcrypt
* CRUD operations
* File handling
* Git
* GitHub
* Full-stack integration

---

# 47. Project Deliverables

The final submission will contain:

```text
✓ Working MERN Assignment Portal
✓ React + Vite Frontend
✓ Tailwind CSS UI
✓ Node.js + Express Backend
✓ MongoDB Database
✓ REST APIs
✓ JWT Authentication
✓ Role-Based Authorization
✓ Assignment Management
✓ Assignment Submission
✓ File Upload
✓ Deadline Tracking
✓ Late Submission Detection
✓ Evaluation System
✓ Marks and Feedback
✓ Student Dashboard
✓ Faculty Dashboard
✓ GitHub Repository
✓ README.md
✓ TODO.md
✓ Project Documentation
✓ Test Cases
✓ Screenshots
✓ PPT Presentation
```

---

# 48. Conclusion

The **Assignment Portal** is a MERN Stack-based full-stack web application designed to simplify and centralize academic assignment management.

The system provides separate functionality for students and faculty. Faculty members can create, manage, and evaluate assignments, while students can access assignments, submit their work, track deadlines, and view marks and feedback.

The use of **React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, and GitHub** demonstrates the practical implementation of modern full-stack web development technologies.

The project aims to reduce manual assignment management, improve organization, provide transparent submission and evaluation workflows, and create a better digital experience for both students and faculty.

---

# 49. References

The following official documentation can be referred to during development:

* React.js Documentation
* Vite Documentation
* Tailwind CSS Documentation
* Node.js Documentation
* Express.js Documentation
* MongoDB Documentation
* Mongoose Documentation
* JSON Web Token Documentation
* Git Documentation
* GitHub Documentation

---

# 50. Final Project Summary

| Category          | Details                        |
| ----------------- | ------------------------------ |
| Project Name      | Assignment Portal              |
| Project Type      | Full Stack Web Application     |
| Domain            | Education                      |
| Architecture      | Client-Server                  |
| Frontend          | React.js                       |
| Build Tool        | Vite                           |
| Styling           | Tailwind CSS                   |
| Backend           | Node.js + Express.js           |
| Database          | MongoDB                        |
| ODM               | Mongoose                       |
| Authentication    | JWT                            |
| Password Security | bcrypt                         |
| API               | REST API                       |
| Version Control   | Git + GitHub                   |
| IDE               | VS Code                        |
| Primary Users     | Students and Faculty           |
| Core Function     | Academic Assignment Management |
