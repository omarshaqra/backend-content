## Course Content Structure

### Course Title

**Backend JavaScript & Node.js Bootcamp with E‑Commerce Project**

### Learner Profile

- **Fresh Graduates**: Especially from Computer Science, Software Engineering, and MIS who know basic programming but want to become backend developers.  
- **Junior Web Developers**: Frontend or full‑stack juniors who know a bit of JavaScript and want to specialize in backend engineering.  
- **Career Switchers**: Developers from other stacks (PHP, .NET, Java, Python) moving to the Node.js ecosystem.  
- **IT Professionals**: System/infra people who want enough backend skills to build and maintain APIs and services.

### Total Duration (hours)

**80–100 hours** of content across **100+ recorded videos** (average 45–60 minutes each, some shorter, some longer).

### Course Format

**Recorded** (B2C) with downloadable resources, code examples, and quizzes.

### Prerequisites

- Comfortable with basic programming concepts (variables, loops, functions) in any language.  
- Very basic JavaScript exposure is a plus but not required.  
- Basic understanding of HTTP and the web (what is a browser, what is an API).  
- Git installed and ability to use a terminal at a beginner level.

### Course Outcome (Desired Level) – What Learners Should Achieve

By the end of the course, learners will be able to:

- **Design and implement production‑ready REST APIs** using Node.js, Express, and TypeScript following **SOLID** and clean‑code principles.  
- **Model and persist data** using relational and NoSQL databases with ORMs (TypeORM/Prisma/Mongoose), including migrations, indexes, and query optimization basics.  
- **Implement secure authentication and authorization**, including JWT, cookies/sessions, OAuth, RBAC, password hashing, rate limiting, CSRF/XSS protection, and secure file uploads.  
- **Build real‑time and event‑driven features** (e.g., chat, notifications) using WebSockets and message brokers, and integrate background jobs where appropriate.  
- **Apply caching, logging, and monitoring** (Redis, structured logs, error tracking) to make backend systems reliable and observable in production.  
- **Containerize, test, and deploy** Node.js services using Docker, CI/CD pipelines, and environment‑based configuration.  
- **Build a complete backend for an e‑commerce platform** (orders, checkout, inventory, coupons, auditing, payments via **Paymob**, wallets, and transactions) and reason about scalability and future extensions.

---

## Modules Overview

### Module 1 – Modern JavaScript & TypeScript Foundations  
*(Videos 1–30)*

**Learning Objectives**

- Gain strong command of modern JavaScript (ES6+) for backend development.  
- Understand how JavaScript runs in Node.js, memory management, and asynchronous patterns.  
- Use TypeScript to write type‑safe backend code (interfaces, enums, generics, classes, decorators).  
- Apply core concepts like **shallow vs deep copy**, `this`, modules, and error handling.

**Sessions / Video Names**

1. Course Overview, Roadmap & Environment Setup  
2. How JavaScript Runs: Engines, Runtimes & Node vs Browser  
3. Variables & `use strict` – `var`, `let`, `const`  
4. Primitive Data Types in Depth  
5. Objects & Reference Types  
6. Operators & Expressions  
7. Control Flow: `if`, `switch`, Conditional Logic  
8. Loops: `for`, `while`, `for...of`, `for...in`  
9. Functions Basics & Parameters  
10. Arrow Functions & Higher‑Order Functions  
11. Scope & Closures  
12. Hoisting Deep Dive  
13. Shallow Copy vs Deep Copy (Objects & Arrays)  
14. Working with Arrays (map, filter, reduce)  
15. Working with Objects & Destructuring  
16. The `this` Keyword, `call`, `apply`, `bind`  
17. Prototypes & ES6 Classes  
18. Error Types & Exception Handling in JS  
19. Asynchronous JavaScript: Callbacks & the Event Loop  
20. Promises: Chaining, Error Handling  
21. `async/await` & Best Practices  
22. Modules in JS: CommonJS vs ES Modules  
23. Memory Management, Garbage Collection & Performance Basics  
24. Introduction to TypeScript & Tooling  
25. Core TypeScript Types, Interfaces & Enums  
26. Functions, Generics & Utility Types in TypeScript  
27. Classes, Access Modifiers & Inheritance in TS  
28. Decorators Concept & Use Cases in Backend Code  
29. Setting Up a TypeScript Node Project (tsconfig, scripts, eslint/prettier)  
30. Putting It Together: Small CLI Project with TypeScript

---

### Module 2 – Node.js & Express Backend Engineering  
*(Videos 31–70, includes Event‑Driven, CI/CD, GraphQL, etc.)*

**Learning Objectives**

- Understand Node.js internals: event loop, modules, npm, and process management.  
- Build RESTful APIs with **Express** before moving to NestJS.  
- Integrate relational and NoSQL databases and write efficient queries.  
- Implement authentication, authorization, and robust API security.  
- Add caching, logging, testing, containerization, CI/CD, and **event‑driven**/real‑time capabilities.  
- Explore GraphQL and how it compares to REST.

**Sessions / Video Names**

31. Node.js Fundamentals: Event Loop, Libuv & Non‑Blocking IO  
32. npm, package.json, Semantic Versioning & Scripts  
33. Project Structure for Node/Express Backends  
34. Introduction to Express & First API Endpoint  
35. Express Routing, Middleware & Controllers  
36. Request Validation with JOI/Zod or Class‑Validator  
37. Environment Variables & Configuration Management  
38. Working with Files & File Uploads in Express  
39. Connecting to a Relational Database (PostgreSQL/MySQL)  
40. Data Modeling & Relations (Users, Products, Orders)  
41. ORMs Overview: TypeORM vs Prisma – Choosing & Setup  
42. Writing Queries, Joins & Pagination  
43. Migrations & Schema Versioning  
44. Introduction to NoSQL & MongoDB  
45. Modeling Documents with Mongoose  
46. Caching with Redis – Concepts & Setup  
47. Applying Caching to API Endpoints (Read‑Heavy Scenarios)  
48. Authentication with JWT (Login, Refresh Tokens)  
49. Cookies & Sessions Authentication  
50. OAuth Fundamentals (Google/GitHub Login Example)  
51. Role‑Based Access Control (RBAC) & Permissions  
52. Password Hashing with bcrypt & Password Policies  
53. API Security: HTTPS, CORS, Rate Limiting  
54. Protecting Against XSS, CSRF & Injection Attacks  
55. Secure File Upload & Storage Considerations  
56. Logging & Monitoring Fundamentals (Winston/Pino)  
57. Structured Logs, Error Handling Middleware & Correlation IDs  
58. Unit Testing with Jest for Pure Functions  
59. Integration Testing for Express APIs (Supertest)  
60. Test Strategy: Unit vs Integration vs E2E  
61. Real‑Time Basics: WebSockets & Socket.IO  
62. Building a Simple Chat App with Socket.IO  
63. Real‑Time Notifications & Live Updates  
64. Event‑Driven Architectures: Concepts & Patterns  
65. Message Brokers (RabbitMQ/Kafka) – When & Why  
66. Implementing Background Jobs & Queues (BullMQ or similar)  
67. Containerization with Docker for Node.js  
68. CI/CD Pipelines Overview (GitHub Actions / GitLab CI)  
69. Deploying an Express API with Docker & CI/CD  
70. Introduction to GraphQL with Node.js

---

### Module 3 – E‑Commerce Backend Project (Express & NestJS)  
*(Videos 71–110+, Backend‑Only Project with Paymob Integration)*

**Learning Objectives**

- Design and implement a full **e‑commerce backend** from scratch.  
- Model complex domains: products, inventory, carts, orders, payments, wallets.  
- Integrate **Paymob** and handle payment flows, webhooks, and transaction safety.  
- Implement audits, logging, and admin operations suitable for production.  
- Apply Express knowledge first, then introduce **NestJS** for scalable structure.

**Sessions / Video Names**

71. Project Overview & Requirements – E‑Commerce Backend  
72. Domain Modeling Workshop: Entities & Relationships  
73. Setting Up the Monorepo/Repo Structure for the Project  
74. Express Project Bootstrap for the E‑Commerce API  
75. Database Schema Setup & Migrations for E‑Commerce  
76. Implementing Product & Category APIs (Express)  
77. Inventory Management & Stock Adjustments  
78. User Registration & Authentication for the Storefront  
79. Customer Profiles, Addresses & Contact Info  
80. Shopping Cart Basics – Add, Update & Remove Items  
81. Cart Pricing, Discounts & Tax Calculation  
82. Coupon & Promotion Codes Design  
83. Wishlist & Recently Viewed Items  
84. Checkout Flow Design & API Contracts  
85. Order Creation Lifecycle & Statuses  
86. Introduction to Paymob & Payment Concepts  
87. Implementing Paymob Payment Integration (Card Payments)  
88. Wallets & Stored Balance – Domain Design  
89. Wallet Transactions: Top‑Ups, Debits & Refunds  
90. Handling Payment Webhooks & Idempotency  
91. Audit Logs for Orders, Payments & Admin Actions  
92. Handling Partial Refunds, Cancellations & Chargebacks  
93. Shipping Options, Delivery Windows & Fees  
94. Notifications: Email/SMS/Push Integration Strategy  
95. Admin Panel APIs: Managing Products, Orders & Users  
96. Reporting APIs: Sales, Revenue & Inventory Analytics  
97. Hardening Security for the E‑Commerce Backend  
98. Load Testing & Basic Performance Tuning  
99. Introducing NestJS: Why Frameworks on Top of Express  
100. Setting Up a NestJS Project Mirroring the Express API  
101. NestJS Modules, Controllers & Providers for E‑Commerce  
102. Migrating Selected Express Routes to NestJS  
103. Validation, Guards & Interceptors in NestJS  
104. Implementing Auth & RBAC in NestJS for Admin APIs  
105. End‑to‑End Testing of the Full E‑Commerce Backend  
106. Preparing the Backend for Production Deployment  
107. Observability: Metrics, Health Checks & Dashboards  
108. Future Extensions: Marketplaces, Multi‑Store, Multi‑Currency  
109. Course Wrap‑Up & Next Steps for Learners  
110. Bonus: Interview Questions for Backend/Node.js Roles

---

## Assignments Methodology

- **Per‑Module Coding Assignments**: After each major section (JS/TS, Express/Node, Project parts), learners implement small features or refactor code following SOLID and clean‑code standards.  
- **Guided Code Reviews**: Sample solutions and code review videos where the instructor walks through common mistakes and improvements.  
- **Quizzes & Reflections**: Short quizzes to reinforce theory (HTTP, security, databases, event‑driven patterns).  
- **Stretch Challenges**: Optional tasks (e.g., add a new payment method, implement a new cache layer) for advanced learners.

## Capstone Project

The capstone is the **E‑Commerce Backend Project**:

- Learners design and build their own version of the backend using Node.js, Express, TypeScript, and optionally NestJS.  
- Must include: authentication & RBAC, product catalog, carts, checkout, orders, Paymob integration, wallets, transaction history, auditing, and basic reporting.  
- Final submission: Git repository plus a short architecture document (ERD, sequence diagrams, and deployment diagram) explaining design decisions, trade‑offs, and how the system can be scaled in the future.

