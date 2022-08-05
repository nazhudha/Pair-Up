const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get json web token from header
  const token = req.header('x-auth-token');

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'Authorisation has been denied - No Valid Token.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWTSECRETTOKEN);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid Token.' });
  }
};
