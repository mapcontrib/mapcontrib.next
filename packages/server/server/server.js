'use strict';

require('dotenv').config();
var loopback = require('loopback');
var boot = require('loopback-boot');
var session = require('express-session');

var app = module.exports = loopback();

app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
}));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

function configurePassport() {
  var PassportConfigurator = require('loopback-component-passport').PassportConfigurator;
  var passportConfigurator = new PassportConfigurator(app);
  var config = require('../providers.json');

  config.openstreetmap.consumerKey = process.env.OSM_CONSUMER_KEY;
  config.openstreetmap.consumerSecret = process.env.OSM_CONSUMER_SECRET;

  passportConfigurator.init();

  passportConfigurator.setupModels({
    userModel: app.models.user,
    userIdentityModel: app.models.userIdentity,
    userCredentialModel: app.models.userCredential,
  });

  for (var s in config) {
    var c = config[s];
    c.session = c.session !== false;
    passportConfigurator.configureProvider(s, c);
  }
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  configurePassport();

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
