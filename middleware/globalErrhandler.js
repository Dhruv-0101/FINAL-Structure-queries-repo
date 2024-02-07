const globalErrhandler = (err, req, res, next) => {
  //stack
  //message
  const stack = err?.stack;
  const statusCode = err?.statusCode ? err?.statusCode : 500;
  const message = err?.message;
  res.status(statusCode).json({
    statusCode,
    stack,
    message,
  });
};

//404 handler
const notFound = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  next(err);
};
module.exports = { globalErrhandler, notFound };
