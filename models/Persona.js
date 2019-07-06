const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
  nombre: {type: String},
  foto: String,
  sexo: String,
  complexion: String,
  ubicacion: String,
  edad: Number,
  vestimenta: String,
  condicion: String,
  nombre_contacto: String,
  telefono_contacto: String  
})

const Persona = mongoose.model('Persona',personaSchema);
module.exports = Persona;