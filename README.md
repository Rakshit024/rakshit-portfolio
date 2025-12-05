# Portfolio Frontend

Modern, responsive portfolio website built with React and Tailwind CSS, ready for Vercel deployment.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment on Vercel

### Method 1: Vercel CLI

```bash
npm i -g vercel
cd frontend
vercel
```

### Method 2: GitHub Integration

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy

## Features

- ✅ Dark mode toggle
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Contact form with validation
- ✅ SEO optimized

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form + Yup
