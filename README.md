(## Job Portal — Full Stack (MERN))

This repository contains a full-stack MERN job portal application: a React + Vite frontend (client/) and a Node.js + Express + MongoDB backend (server/).

live demo: https://job-portal-mern-five-sigma.vercel.app/

**Project:** Combined frontend and backend for a simple job portal supporting user authentication, job postings, applications, and a user dashboard.

**Status:** Development-ready. Frontend intended for deployment on Vercel and backend on Render (deployment notes included below).

**Contents**

- `client/` — React (Vite) frontend with Tailwind CSS, Zustand, and React Query.
- `server/` — Express backend API using MongoDB, Mongoose, and JWT authentication.

**Quick Start**

Prerequisites: Node.js 20+, npm, and a running MongoDB instance.

- Backend: install and run from `server/`.

```bash
cd server
npm install
cp exmple.env .env   # copy and edit required env vars
npm run dev
```

- Frontend: install and run from `client/`.

```bash
cd client
npm install
npm run dev
```

Open the frontend URL reported by Vite. The client expects the backend API at `VITE_API_URL` (defaults to `http://localhost:5000/api`).

**Tech Stack**

- Frontend: React 19, Vite 4, Tailwind CSS 4, React Router DOM, Axios, Zustand, React Query
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt

**Repository layout**

```
client/          # React frontend (Vite)
server/          # Express API server
README.md        # This consolidated overview
```

Client highlights

- Built with Vite and React, uses `src/api.js` for Axios instance and JWT injection.
- Environment variable: `VITE_API_URL` (defaults to `http://localhost:5000/api`).
- Common scripts: `npm run dev`, `npm run build`, `npm run preview`.

Server highlights

- Entry: `server/src/server.js` (main). Uses config in `server/src/config/db.js` to connect to MongoDB.
- Environment variables (example): `PORT`, `MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `NODE_ENV`.
- Common scripts: `npm run dev` (nodemon), `npm start`.

Environment variables

- server/.env (example)

```
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

- client/.env (example)

```
VITE_API_URL=http://localhost:5000/api
```

Deployment notes (placeholders)

- Frontend — Vercel
  - Connect the `client/` folder as a Vercel project (or monorepo configuration).
  - Build command: `npm run build` (in `client/`).
  - Output directory: `dist` (Vite default).
  - Environment variable: `VITE_API_URL` should point to the deployed backend API URL.

- Backend — Render (or similar)
  - Create a new Web Service pointing to the `server/` folder.
  - Build / Start commands: `npm install` and `npm start` (or `npm run dev` for staging).
  - Set environment variables on the service: `MONGO_URI`, `JWT_SECRET`, `PORT`.

Add detailed, provider-specific deployment steps here when ready (Vercel & Render). Include any CORS configuration or allowed origins required by the frontend.

API overview

- Typical endpoints served from the backend (prefix `/api`):
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /api/jobs`
  - `POST /api/jobs` (auth)
  - `PUT /api/jobs/:id` (auth)
  - `DELETE /api/jobs/:id` (auth)

Contributing

If you'd like to contribute:

1. Fork the repo and create a feature branch.
2. Run the backend and frontend locally and add tests where applicable.
3. Open a PR with a clear description of changes.

Contact

For questions, open an issue or contact the repository owner.
