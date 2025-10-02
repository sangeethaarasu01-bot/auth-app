# Auth App

This is a simple authentication-based app with **two types of users**:  
- **Admin**: Can log in and access the Dashboard.  
- **User**: Can log in and access Booking List and Booking Form.  

## 🚀 Features
- Login authentication with email and password
- Role-based access (Admin/User)
- Admin can view Dashboard
- User can view Booking List and Booking Form

## 👥 User Credentials

### Admin
```json
{ 
  "email": "admin@example.com", 
  "password": "admin123", 
  "role": "admin" 
}

{ 
  "email": "user@example.com", 
  "password": "user123", 
  "role": "user" 
}

# Clone the repository
git clone https://github.com/sangeethaarasu01-bot/auth-app.git

# Navigate into the project
cd auth-app

# Install dependencies
npm install

# Start the development server
npm run dev