# Portfolio Website - FullStack (MERN)

A modern, responsive portfolio website for Rakshit Patel, built with React, Tailwind CSS, and Node.js/Express backend.

## Features

- 🎨 Modern, responsive design with dark mode
- ⚡ Smooth animations with Framer Motion
- 📧 Contact form with backend integration
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast and optimized

## Project Structure

```
portfolio2/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   └── services/
│   └── package.json
│
└── backend/          # Node.js/Express backend API
    ├── controllers/
    ├── routes/
    ├── server.js
    └── package.json
```

## Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
npm run dev
```

Backend will run on `http://localhost:5000`

### Environment Variables

**Frontend** (`frontend/.env`):
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend** (`backend/.env`):
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio
MONGODB_NAME=portfolio

# Optional: Email configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=patelrakshit024@gmail.com
```

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form + Yup
- Lucide React (Icons)

### Backend
- Node.js
- Express
- Nodemailer (for email notifications)
- CORS
- dotenv

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form

## Deployment

### Frontend
Build for production:
```bash
cd frontend
npm run build
```

Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

### Backend
Deploy to services like:
- Railway
- Render
- Heroku
- DigitalOcean
- AWS

Don't forget to update environment variables in production!

## License

ISC

## Author

Rakshit Patel - FullStack Developer (MERN Stack)

