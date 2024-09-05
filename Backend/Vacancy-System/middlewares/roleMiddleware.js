// middleware/roleMiddleware.js
const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
      if (req.user && req.user.role === requiredRole) {
        next();
      } else {
        res.sendStatus(403); // Forbidden
      }
    };
  };
  
  module.exports = roleMiddleware;
  