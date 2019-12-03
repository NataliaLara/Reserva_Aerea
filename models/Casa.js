var mongoose = require('mongoose');


var CasaSchema = new mongoose.Schema({
  quartos: Number,
  suites: Number,
  sala_estar: Number,
  vagas:Number,
  area:Number,
  armario_embutido:{type: Boolean, default: false},
  descricao:String,
  valoraluguel:Number,
  rua:String,
  numero:String,
  outrobairro:String,
  endereco:{
    bairro:{ type: String, default: 'Nova Cintra' },
    cidade: { type: String, default: 'Belo Horizonte' },
    estado: { type: String, default: 'Minas Gerais' },
    siglaestado: { type: String, default: 'MG' },
  }
});

module.exports = mongoose.model('Casa', CasaSchema);
