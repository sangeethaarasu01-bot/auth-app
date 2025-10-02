"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


// Static JSON users
const users = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user123", role: "user" },
];



export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (e?: React.FormEvent) => {
    // if called from a form submit, prevent default
    e?.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }

    // Set cookie with role (expires in 1 day)
    Cookies.set("userRole", user.role, { expires: 1 });

    toast.success(`Login successful! Role: ${user.role}`);
    console.log("Role-based navigation:", user.role);
    // Redirect based on role after a short delay so toast is visible
    const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_API_URL 
    const reportUrl = process.env.NEXT_PUBLIC_REPORT_API_URL 
    console.log("Booking URL:", bookingUrl);
    if(user.role.toLowerCase() === "admin"){
      window.location.href = `${reportUrl}`;
    }else{
      window.location.href = `${bookingUrl}/booking`;
    }
    
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0f7fa",
      }}
    >
      <Box
        sx={{
          width: 400,
          minHeight: 450,
          p: 5,
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold">
          Welcome Back
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Please login to your account
        </Typography>

        <Box component="form" onSubmit={handleLogin} sx={{ display: 'contents' }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 1,
            py: 1.5,
            background: "linear-gradient(45deg, #1de9b6, #1dc4e9)",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg, #14cba8, #14b8d6)",
            },
          }}
          type="submit"
        >
          Sign In
        </Button>
        </Box>


      </Box>

      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
}
