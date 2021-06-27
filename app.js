var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/geomaticslive', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected.');
});

var indexRouter = require('./routes/index');
var travelfacilitiesRouter = require('./routes/travelfacilities');
var satwikiRouter = require('./routes/satwiki');
var pubarticleRouter = require('./routes/pubarticle');
var travel_cairnsRouter = require('./routes/travel_cairns');
var travel_noosabeachRouter = require('./routes/travel_noosabeach');
var pubarticleoneRouter = require('./routes/pubarticleone');
var pubarticletwoRouter = require('./routes/pubarticletwo');
var pubarticlethreeRouter = require('./routes/pubarticlethree');
var pubarticlefourRouter = require('./routes/pubarticlefour');
var pubarticlefiveRouter = require('./routes/pubarticlefive');
var pubarticlesixRouter = require('./routes/pubarticlesix');
var pubarticlesevenRouter = require('./routes/pubarticleseven');
var pubarticleeightRouter = require('./routes/pubarticleeight');
var pubarticlenineRouter = require('./routes/pubarticlenine');
var pubarticletenRouter = require('./routes/pubarticleten');
var pubarticleelevenRouter = require('./routes/pubarticleeleven');
var feedbacksRouter = require('./routes/feedbacks');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', travelfacilitiesRouter);
app.use('/', satwikiRouter);
app.use('/', pubarticleRouter);
app.use('/', travel_cairnsRouter);
app.use('/', travel_noosabeachRouter);
app.use('/', pubarticleoneRouter);
app.use('/', pubarticletwoRouter);
app.use('/', pubarticlethreeRouter);
app.use('/', pubarticlefourRouter);
app.use('/', pubarticlefiveRouter);
app.use('/', pubarticlesixRouter);
app.use('/', pubarticlesevenRouter);
app.use('/', pubarticleeightRouter);
app.use('/', pubarticlenineRouter);
app.use('/', pubarticletenRouter);
app.use('/', pubarticleelevenRouter);
app.use('/', feedbacksRouter);

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
    res.render('error');
});

module.exports = app;