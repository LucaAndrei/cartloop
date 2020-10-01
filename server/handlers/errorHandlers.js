exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || "";
  const errorDetails = {
    message: err.message,
    status: err.status,
    stack: err.stack,
  };

  res.status(err.status || 500).json(errorDetails);
};

exports.notFound = (req, res, next) => {
  res.status(404).json({
    message: "Route not found"
  });
};