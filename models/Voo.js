var mongoose = require('mongoose');

var VooSchema = new mongoose.Schema({
  numero: Number,
  dataPartida: Date,
  dataChegada: Date,
  passagensDisp: Number,
  origem:{
    pais: { type: String, default: 'Brasil' },
    cidade: { type: String, default: 'São Paulo' },
    estado: { type: String, default: 'São Paulo' },
    siglaestado: { type: String, default: 'SP' }
  },
  destino:{
    pais: { type: String, default: 'Brasil' },
    cidade: { type: String, default: 'Belo Horizonte' },
    estado: { type: String, default: 'Minas Gerais' },
    siglaestado: { type: String, default: 'MG' }
  }
});

module.exports = mongoose.model('Voo', VooSchema);
