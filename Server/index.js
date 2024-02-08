const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./Route/router');

const app = express();

// Enable CORS
const corsOptions = {
    origin: '*', // Change this to your specific frontend origin
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session middleware
app.use(
    session({
        secret: 'your-secret-key', // Change this to a secure key
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Change to true in production for HTTPS
    })
);


app.use('/',(req,res)=>{
    console.log('connected...!')
    res.json({"msg" : 'connected'});
})

// Routes from router.js
app.use('/', router);

app.get('/apidata', (req, res) => {
    res.send('Listening..!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
