var mongoose = require('mongoose');

var ReservaSchema = new mongoose.Schema({
  pessoas:Number,
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
  },
  dataIda: Date,
  dataVolta:Date
});

module.exports = mongoose.model('Reserva', ReservaSchema);
