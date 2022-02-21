const checkRequest = () => {
  return async (req, res, next) => {
    if (req.method == "GET") next();
    else {
      res.status(500).json({ message: `${req.method} not allowed` });
    }
  };
};

module.exports = checkRequest;
