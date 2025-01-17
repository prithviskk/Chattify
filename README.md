# Chattify

**Chattify** is a powerful and sleek real-time chatting app designed to connect people seamlessly. Experience instant messaging with an intuitive interface, real-time updates, and robust features.

---

## Features
- **Real-time Messaging:** Instant updates with no delay.
- **User Authentication:** Secure login and signup with JWT.
- **Media Support:** Share images via Cloudinary integration.
- **Responsive Design:** Works beautifully across all devices.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

---

## Development Setup

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```
   MONGODB_URI=<your-mongodb-uri>
   PORT=5001
   JWT_SECRET=<your-jwt-secret>

   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Building the Application
To build the application for production:

1. Build the frontend:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

---

## Deployment

1. Ensure you have set the correct environment variables for production.
2. Use a platform like Render, Heroku, or Vercel for deployment.

---

## Tech Stack
- **Frontend:** React.js with Vite
- **Backend:** Express.js with Socket.IO
- **Database:** MongoDB
- **Media Storage:** Cloudinary

---

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

---



Enjoy seamless and real-time communication with **Chattify**! 🚀

