const express = require('express');
const Persona = require('../models/Persona');

const router = express.Router();

router.get('/',(req,res,next)=>{
  let data = req.body;
  console.log( '-->',data )
  Persona.find(data)
  .then(data =>{
    res.status(200).json({data});
  })
  .catch(err =>{
    res.status(500).json({
      text: "Error del servidor",
      err: err
    })
  })
})

module.exports = router;