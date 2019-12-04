var mongoose = require('mongoose');

var PessoaSchema = new mongoose.Schema({
  nome:String,
  cpf:String,
  email:String,
  //updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pessoa', PessoaSchema);
