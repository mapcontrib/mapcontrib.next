'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  router.get('/auth', (req, res) => {
    if (!req.query.successRedirect || !req.query.failureRedirect) {
      return res.sendStatus(400);
    }
    req.session.authSuccessRedirect = req.query.successRedirect;
    req.session.authFailureRedirect = req.query.failureRedirect;

    res.redirect('/auth/openstreetmap');
  });

  router.get('/auth/redirect', (req, res) => {
    if (!req.session.authSuccessRedirect) {
      return res.sendStatus(500);
    }
    res.redirect(req.session.authSuccessRedirect);
  });

  router.get('/auth/fail', (req, res) => {
    if (!req.session.authFailureRedirect) {
      return res.sendStatus(500);
    }
    res.redirect(req.session.authFailureRedirect);
  });

  server.use(router);
};
