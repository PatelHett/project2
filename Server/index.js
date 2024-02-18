const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./Route/router');

const app = express();

// Enable CORS
const corsOptions = {
    origin: function (origin, callback) {
        // Check if the origin is allowed, or set to a whitelist of allowed origins
        const allowedOrigins = ['https://lost-found-kappa.vercel.app'];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    // other options...
};


app.use(cors(corsOptions));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session middleware
app.use(
    session({
        secret: 'lost and found', // Change this to a secure key
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Change to true in production for HTTPS
    })
);

// Routes from router.js
app.use('/', router);

// Handle non-existent routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
