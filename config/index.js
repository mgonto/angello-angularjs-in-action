var logger =        require('morgan'),
    cors =          require('cors'),
    mongoose =      require('mongoose'),
    jwt =           require('express-jwt');
    express =       require('express'),
    bodyParser =    require('body-parser');

exports.parsers = function(app) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());
}

exports.log = function(app) {
  if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
  }
}

exports.db = function(app) {
  var db = mongoose.connect(process.env.MONGO_URL);
}

exports.authentication = function(app) {
   var jwtCheck = jwt({
    secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
    audience: process.env.AUTH0_CLIENT_ID
  });

   app.use('/api', jwtCheck);
}
