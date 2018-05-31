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

  passportConfigurator.init();

  passportConfigurator.setupModels({
    userModel: app.models.user,
    userIdentityModel: app.models.userIdentity,
    userCredentialModel: app.models.userCredential,
  });

  passportConfigurator.configureProvider('openstreetmap', {
    provider: 'openstreetmap',
    authScheme: 'oauth',
    module: 'passport-openstreetmap',
    callbackURL: `${process.env.SERVER_URL}/auth/openstreetmap/callback`,
    authPath: '/auth/openstreetmap',
    callbackPath: '/auth/openstreetmap/callback',
    successRedirect: '/auth/redirect',
    failureRedirect: '/auth/fail',
    consumerKey: process.env.OSM_CONSUMER_KEY,
    consumerSecret: process.env.OSM_CONSUMER_SECRET,
    scope: ['id', 'displayName'],
    link: false,
  });
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
