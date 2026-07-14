# Job Portal Frontend

This is the frontend client application for the `job-portal-full-stack-MERN` project. It is built with React, Vite, Tailwind CSS, and Zustand, and is designed to work with the backend API hosted in the parent repository.

## Key Features

- Responsive React-based job portal UI
- Job listing, search, and filtering
- Job details and one-click apply flow
- Authentication with login/register and JWT support
- User dashboard with profile management
- Employer job posting and editing
- My applications and my job posts tabs
- Toast notifications for success and error feedback

## Tech Stack

- React 19
- Vite 4
- Tailwind CSS 4
- React Router DOM 7
- Axios
- Zustand
- React Query 5
- React Hot Toast

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm or yarn
- Backend API running from the parent repository

### Install dependencies

```bash
cd client
npm install
```

### Run development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Environment Configuration

The client uses an environment variable to define the backend API base URL.

Create a `.env` file in `client` if needed and add:

```env
VITE_API_URL=http://localhost:5000/api
```

If `VITE_API_URL` is not set, the app defaults to `http://localhost:5000/api`.

## Folder Structure

```text
client/
├── public/              # Static public assets
├── src/
│   ├── api.js           # Axios instance and interceptors
│   ├── App.jsx          # Main router and layout
│   ├── main.jsx         # App bootstrap and React Query provider
│   ├── index.css        # Tailwind CSS import
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom data-fetching hooks
│   ├── pages/           # Route pages
│   │   ├── tabs/        # Dashboard tab sub-pages
│   ├── store/           # Zustand stores
├── package.json         # Frontend dependencies and scripts
├── vite.config.js       # Vite configuration
```

## Important Files

- `src/App.jsx` - Defines client routing and page layout
- `src/main.jsx` - Wraps the app with `QueryClientProvider`
- `src/api.js` - Axios client, JWT injection, and network error handling
- `src/store/auth.store.js` - Auth state and actions for login/register/logout/profile updates
- `src/store/dashboard.store.js` - Dashboard tab state
- `src/hooks/useMyApplication.jsx` - Fetches current user's applications
- `src/hooks/useMyJobPost.jsx` - Fetches current user's job posts

## Pages and Routes

- `/` - Home page with featured job listings
- `/jobs` - Searchable job listings
- `/jobs/:id` - Job details and apply page
- `/login` - User login
- `/register` - User registration
- `/dashboard` - User dashboard
- `/dashboard/create-job` - Create new job post
- `/dashboard/edit-job/:id` - Edit existing job post
- `/about` - About page
- `/contact` - Contact page

## Components Overview

- `Header.jsx` - Navigation, login/register links, dashboard access, logout
- `Footer.jsx` - Footer links, contact info, social links
- `EditProfile.jsx` - Profile edit form for dashboard
- `ProfileDetails.jsx` - Current user profile display
- `Sidebar.jsx` - Dashboard navigation tabs

## Authentication Flow

- `auth.store.js` stores user and token state in Zustand
- Auth state persists in `localStorage`
- `src/api.js` adds `Authorization: Bearer <token>` to outgoing requests when available
- Protected dashboard actions require valid login

## API Integration

The frontend depends on backend routes such as:

- `/auth/login`
- `/auth/register`
- `/auth/update`
- `/jobs`
- `/jobs/:id`
- `/jobs/user/myjobs`
- `/applications/:id`
- `/applications/myapplications`

## Notes

- The contact page form is currently frontend-only and shows a local success message.
- The dashboard uses tabs to switch between profile, job posts, and applications.
- Tailwind CSS is enabled through `@tailwindcss/vite` with a simple import in `src/index.css`.

## Maintenance

- Keep package versions aligned with the backend Node environment
- Update API endpoints only if backend routes change
- Use `npm run lint` to validate code style across the client
