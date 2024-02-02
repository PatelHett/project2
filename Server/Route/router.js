const express = require('express')
const router = express.Router()
const userModel = require('../DB/signupDB')
const itemModel = require('../DB/itemDB')
const { useFormAction } = require('react-router-dom')
router.get('/apide', (req, res) => {
    const data = { d: "Hello Dev maurya" }
    res.send(data)
})

router.get('/recent', async(req, res) => {
    const itemdata = await itemModel.find({}).limit(4).exec()
    // const itemdata = await itemModel.find({}).sort({ _id: -1 }).limit(3).exec()
    if(itemdata){
        console.log(JSON.stringify(itemdata))
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
        (password == user.password)?res.send({redirectUrl:'/allitems'}):res.send({err:'id or pass incorrect'})
        
      } else {
        console.log('User not found');
        res.send({err:'User not found'})
      }
    })
    .catch((err) => {
      console.error('Error in login:', err);
    });

})

router.get('/allitems', (req,res)=>{
    res.send('Coming Soon 😎')
})



module.exports = router