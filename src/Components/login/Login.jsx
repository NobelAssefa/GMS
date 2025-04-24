import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    IconButton,
    InputAdornment,
    Divider
} from '@mui/material';
import { Facebook, Google, LinkedIn, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to home page after login
        navigate('/home');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="left-panel">
                    <Typography variant="h3" className="welcome-text">
                        Welcome Back!
                    </Typography>
                    <Typography variant="body1" className="welcome-subtitle">
                        To keep connected with us please login with your personal info
                    </Typography>
                    <Button 
                        variant="outlined" 
                        color="inherit" 
                        className="sign-in-btn"
                        onClick={() => setIsSignIn(true)}
                    >
                        SIGN IN
                    </Button>
                </div>

                <div className="right-panel">
                    <Typography variant="h3" className="create-account-text">
                        {isSignIn ? 'Sign In' : 'Create Account'}
                    </Typography>

                    <div className="social-buttons">
                        <IconButton className="social-btn">
                            <Facebook />
                        </IconButton>
                        <IconButton className="social-btn">
                            <Google />
                        </IconButton>
                        <IconButton className="social-btn">
                            <LinkedIn />
                        </IconButton>
                    </div>

                    <Typography variant="body1" className="or-text">
                        {isSignIn 
                            ? 'or use your email to sign in:'
                            : 'or use your email for registration:'
                        }
                    </Typography>

                    <form onSubmit={handleSubmit} className="login-form">
                        {!isSignIn && (
                            <TextField
                                fullWidth
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i className="fas fa-user"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                        <TextField
                            fullWidth
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <i className="fas fa-envelope"></i>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            name="password"
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <i className="fas fa-lock"></i>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={togglePasswordVisibility}
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
                            color="primary" 
                            type="submit"
                            className="submit-btn"
                        >
                            {isSignIn ? 'SIGN IN' : 'SIGN UP'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
