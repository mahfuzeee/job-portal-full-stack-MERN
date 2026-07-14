const errorHandler = (err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  //console.log(err);
  return res.status(500).json({
    message: err.message || "Internal server error",
    Stack: err.stack,
  });
};

const notFound = (req, _res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

module.exports = { errorHandler, notFound };
