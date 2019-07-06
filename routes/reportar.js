const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const Persona = require('../models/Persona');


// mongoose.connect('mongodb://localHost:27017/perdidosApp', { useNewUrlParser: true })

// // When successfully connected
// mongoose.connection.on('connected', () => {  
//   console.log('Mongoose connection open');
// }); 


router.post('/',(req,res,next)=>{

  const {nombre, foto, sexo, complexion, ubicacion,
    edad, vestimenta, condicion, nombre_contacto, telefono_contacto} = req.body;

  const persona = new Persona({
    nombre,
    foto, sexo, complexion, ubicacion, edad, vestimenta,
    condicion, nombre_contacto, telefono_contacto 
  });

  persona.save()
    .then(p => res.status(200).json({persona: p}))
      .catch(err => console.log(err))

    




  /* Persona.create({
    nombre: 'Juan Perez',
    sexo: 'masculino',
    edad: 35,
    contacto:{
      nombre: "Ironhacker",
      telefono: "xxx-xxx-xxxx"
    }
  })
  .then(person =>{ console.log('Persona registrada: ', person)})
  .catch(err=>{
    console.log('Ocurrio un error', err);
  })*/


})

module.exports = router;