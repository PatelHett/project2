const express = require('express')
const router = express.Router()
const userModel = require('../DB/signupDB')
const itemModel = require('../DB/itemDB')
const { useFormAction } = require('react-router-dom')
router.get('/apide', (req, res) => {
    const data = { d: "Hello Dev maurya" }
    res.json(data)
})

router.get('/recent', async(req, res) => {
    const itemdata = await itemModel.find({}).sort({ _id: -1 }).limit(4).exec()

    if(itemdata){
        res.send(JSON.stringify(itemdata))
    }
    else{
        console.log('error in fetching data items.')
    }
}) 

router.get('/lostitem', async(req,res)=>{
    const itemdata = await itemModel.find({}).exec()
    // const itemdata = await itemModel.find({}).sort({ _id: -1 }).limit(3).exec()
    if(itemdata){
        // console.log(JSON.stringify(itemdata))
        res.send(JSON.stringify(itemdata))
    }
    else{
        console.log('error in fetching data items.')
    }
})


router.post('/registerdata', async (req, res) => {
    var data = { d: 'Done', redirectUrl: '/login' };
    console.log(req.body);
    let isUserExist = false
    await userModel.findOne({email:req.body.email}).then((user) =>{
        if(user) {
            isUserExist = true
            res.send({err:'User Already Exist'})
            res.end()
        }
    })

    if (!isUserExist){
        res.send(data);
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const isSave = await newUser.save()
        if (isSave) {
            console.log('Saved in DB')
        }
        else {
            console.log('error in saving the data')
        }
    }
    res.end()
});

router.post('/login', async (req,res) =>{
    const {email,password} = req.body
    // console.log(req.body.password)
    userModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        console.log('User found');
        (password == user.password)?res.send({redirectUrl:'/lost-items'}):res.send({err:'id or pass incorrect'})
        
      } else {
          res.send({err:'User not found'})
        console.log('User not found');
      }
    })
    .catch((err) => {
      console.error('Error in login:', err);
    });

})

const multer = require("multer");
const path = require("path");
const User2 = require("../DB/lost-itemsdb");


// Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload = multer({ storage });

// POST /api/register
// Register a new user
router.post("/register", upload.single("image"), async (req, res) => {
  const { username, email, /*password*/objectName, location, date} = req.body;
  const image = req.file;

  try {
    // Check if user already exists
    let user = await User2.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User2({
      username,
      email,
    //   password,
      image: image ? image.filename : null,
      objectName,
      location,
      date,
    });

    // Save user to the database
    await user.save();

    res.json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error submitting lost item details'})
};

})

module.exports = router