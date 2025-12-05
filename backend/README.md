# Portfolio Backend API

Backend API server for the portfolio website built with Node.js and Express.

## Features

- RESTful API endpoints
- Contact form submission handling
- Email notifications (optional)
- CORS enabled for frontend connectivity
- Error handling and validation
- Environment variable configuration

## Setup

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables**
   Create a `.env` file in `backend/` with at least:
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   
   # Database (required for saving contact submissions)
   MONGODB_URI=mongodb://localhost:27017/portfolio
   MONGODB_NAME=portfolio
   
   # Optional: Email configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=patelrakshit024@gmail.com
   ```
   > If automation cannot create `.env` (e.g., file restrictions), create it manually in the `backend` folder using the values above.

3. **Start the Server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### Contact Form
- **POST** `/api/contact`
- Submit contact form
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested in..."
  }
  ```
- **Response:**
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

## Email Configuration (Optional)

To enable email notifications:

1. **Gmail Setup:**
   - Enable 2-Step Verification
   - Generate an App Password
   - Use the App Password in `EMAIL_PASS`

2. **Other Email Providers:**
   - Update the transporter configuration in `controllers/contactController.js`
   - Adjust SMTP settings as needed

## Project Structure

```
backend/
├── controllers/
│   └── contactController.js  # Contact form logic
├── routes/
│   └── contact.js             # Contact routes
├── server.js                  # Main server file
├── config/
│   └── db.js                  # Database connection helper
├── models/
│   └── Contact.js             # Contact schema/model
├── package.json
└── README.md
```

## Development

- Uses `nodemon` for auto-reload in development
- CORS configured for frontend origin
- Error handling middleware
- Request validation

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Update `FRONTEND_URL` to your production frontend URL
3. Use a process manager like PM2:
   ```bash
   pm2 start server.js --name portfolio-api
   ```

