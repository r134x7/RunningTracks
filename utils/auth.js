const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login'); // redirect if not logged in
    } else {
      next(); // next step in middleware
    }
  };
  
  module.exports = withAuth;