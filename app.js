var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reservaaerea')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//var apiRouter = require('./routes/book');
var enderecoRouter = require('./routes/endereco');
//var casaRouter = require('./routes/casa');
//var apartamentoRouter = require('./routes/apartamento');
var vooRouter = require('./routes/voo');
var reservaRouter = require('./routes/reserva');
var passagemaereaRouter = require('./routes/passagemaerea');
var pessoaRouter = require('./routes/pessoa');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/reservaaerea')));
/*
app.use('/books', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/book-details/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/book-create', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/book-edit/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/api', apiRouter);

*/
app.use('/enderecos', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/endereco-details/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/endereco-create', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/endereco-edit/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/apiendereco', enderecoRouter);

app.use('/voos', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/voo-details/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/voo-create', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/voo-edit/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/apivoo', vooRouter);

app.use('/reservas', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/reserva-details/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/reserva-create', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/reserva-edit/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/apireserva', reservaRouter);
app.use('/reserva-voo/', express.static(path.join(__dirname, 'dist/reservaaerea')));

app.use('/passagensaereas', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/passagemaerea-details/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/passagemaerea-create', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/passagemaerea-edit/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/apipassagemaerea', passagemaereaRouter);

app.use('/pessoas', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/pessoa-details/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/pessoa-create', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/pessoa-edit/:id', express.static(path.join(__dirname, 'dist/reservaaerea')));
app.use('/apipessoa', pessoaRouter);

app.use('/inicio', express.static(path.join(__dirname, 'dist/reservaaerea')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
