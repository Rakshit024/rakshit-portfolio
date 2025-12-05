# Setup Guide - Portfolio Backend Connectivity

Follow these steps to set up backend connectivity for your portfolio.

## Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 2: Configure Backend Environment

Create a `.env` file in the `backend` folder:

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Optional: For email notifications
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=patelrakshit024@gmail.com
```

**Note:** If you don't want email notifications, leave `EMAIL_USER` and `EMAIL_PASS` empty. The form will still work and log submissions to the console.

## Step 3: Configure Frontend Environment

Create a `.env` file in the `frontend` folder:

```bash
cd frontend
```

Create `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## Step 4: Start Backend Server

```bash
cd backend
npm run dev
```

The backend will start on `http://localhost:5000`

## Step 5: Start Frontend

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

## Testing the Connection

1. Open your browser to `http://localhost:5173`
2. Navigate to the Contact section
3. Fill out and submit the contact form
4. Check the backend console for the submission log
5. If email is configured, check your inbox

## Troubleshooting

### CORS Errors
- Make sure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check that both servers are running

### API Connection Failed
- Verify backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env`
- Check browser console for errors

### Email Not Sending
- Verify Gmail App Password is correct
- Check that 2-Step Verification is enabled
- Check backend console for email errors

## Production Deployment

### Backend
1. Set `NODE_ENV=production`
2. Update `FRONTEND_URL` to your production frontend URL
3. Deploy to Railway, Render, Heroku, etc.

### Frontend
1. Update `VITE_API_URL` to your production backend URL
2. Build: `npm run build`
3. Deploy `dist` folder to Vercel, Netlify, etc.

## API Endpoints

- **Health Check:** `GET http://localhost:5000/api/health`
- **Contact Form:** `POST http://localhost:5000/api/contact`

### Contact Form Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

### Success Response:
```json
{
  "success": true,
  "message": "Thank you! Your message has been sent successfully.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "submittedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

