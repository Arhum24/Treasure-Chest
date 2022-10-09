var jwt = require('jsonwebtoken');
var configs = require('../configs');

function VerifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No Token Provided.' });
    
  jwt.verify(token, configs.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to Authenticate Token.' });
      
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = VerifyToken;