// grab our dependencies
const express    = require('express'),
  app            = express(),
  expressLayouts = require('express-ejs-layouts'),
  bodyParser     = require('body-parser'),
  argv           = require('minimist')(process.argv.slice(2));


// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser to grab info from a form
app.use(bodyParser.urlencoded({ extended: true })); //true changed to false for validation test
app.use(bodyParser.json());

// set the routes =============================
app.use(require('./app/routes'));

// port definition
var   port = process.env.PORT || 8080;

// start our engines ===========================
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
