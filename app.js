var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/alojados', {useNewUrlParser: true }, function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/alojado')(app, mongoose);
var AlojadoCtrl = require('./controllers/alojados');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
   res.send("Hello World!");
});
app.use(router);


// API routes
var alojados = express.Router();

alojados.route('/alojados')
  .get(AlojadoCtrl.findAllAlojados)
  .post(AlojadoCtrl.addAlojado);

alojados.route('/alojados/:id')
  .get(AlojadoCtrl.findById)
  .put(AlojadoCtrl.updateAlojado)
  .delete(AlojadoCtrl.deleteAlojado);

app.use('/api', alojados);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
