// create a new express router
const express      = require('express'),
  router           = express.Router(),
  mainController   = require('./controllers/main.controller');

// export router
module.exports = router;

/*
define view routes
--------------------------------------------------------
*/

// show home page
router.get('/', mainController.showHome);

// processInput
router.get('/:input', mainController.processInput);