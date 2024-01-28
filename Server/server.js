// import express from 'express';
const express = require('express');
const cors = require('cors');
const bp = require('body-parser')
const router = require('./Route/router')

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended:false}))

const corsop = {
    origin:'*',
    Credential : true,
    optionSuccessStatus:200
}

app.use(cors(corsop))
app.use('/',router)

app.get('/apidata', (req, res) => {
    res.send('Listening..!');
});

app.listen(4000, () => {
    console.log('Server is ready..!');
});
