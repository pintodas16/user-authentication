# User Authentication

[![Live Demo Client](https://img.shields.io/badge/Client-Live%20Demo-blue)](https://user-authentication-client-mu.vercel.app/)
[![Live Demo Server](https://img.shields.io/badge/Server-API%20Live%20Demo-green)](https://user-authentication-tawny-two.vercel.app/)

## Overview

A modern authentication project with a React + Redux client and an Express + MongoDB backend. The application supports user signup, signin, protected profile access, password reset via email, and JSON Web Token (JWT) authentication.

## Live Demo

- Client: https://user-authentication-client-mu.vercel.app/
- Server: https://user-authentication-tawny-two.vercel.app/

## Features

- User registration and login
- Protected routes with JWT authentication
- Password reset flow via email
- Secure password hashing with bcrypt
- React frontend with Redux Toolkit and React Router
- Email sending using Resend

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS, Redux Toolkit, React Router, Axios
- Backend: Node.js, Express 5, MongoDB, Mongoose, JWT, bcryptjs
- Email: Resend API
- Tools: ESLint, Nodemon, Vercel

## Project Structure

- `client/` — React application and frontend code
- `server/` — Express API, routes, controllers, models, middleware
- `server/config/db.js` — MongoDB connection helper
- `server/controllers/authController.js` — auth workflows and token generation
- `server/models/User.js` — user schema, password hashing, reset token generation
- `client/src/api/axios.js` — Axios instance with backend base URL and auth header injection

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd user-authentication
```

2. Install dependencies for the client:

```bash
cd client
npm install
```

3. Install dependencies for the server:

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside `server/` with the following values:

```env
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
RESEND_API_KEY=<your_resend_api_key>
EMAIL_FROM_NAME=YourCompany
EMAIL_FROM_ADDRESS=your@email.com
PORT=5000
```

> Note: The client currently points to the deployed backend URL in `client/src/api/axios.js`. For local development, update `baseURL` to `http://localhost:5000/api/auth/`.

## Usage

### Start the frontend

```bash
cd client
npm run dev
```

### Start the backend

```bash
cd server
npm run dev
```

### Production server

```bash
cd server
npm start
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/signin` | Authenticate user and return JWT |
| GET | `/api/auth/me` | Get current user profile (protected) |
| POST | `/api/auth/forgot-password` | Request password reset email |
| POST | `/api/auth/reset-password/:token` | Reset password with token |

## Notes

- The server allows CORS from `http://localhost:5173` and the deployed frontend origin.
- The authentication flow stores JWTs in local storage and attaches them to requests automatically.
- Password reset tokens expire after 15 minutes.

## Development Scripts

### Client

- `npm run dev` — start Vite development server
- `npm run build` — build production assets
- `npm run lint` — run ESLint
- `npm run preview` — preview production build

### Server

- `npm run dev` — run server with nodemon
- `npm start` — run server with Node.js

---

Built for a clean, secure user authentication experience with a production-ready structure.