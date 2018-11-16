const ERROR_500 = 'Internal Server Error';
const INV_REQ = 'Bad Request - Invalid Inputs';

const handleError = (res, next, err) => {
  res.err = err || ERROR_500;
  return next();
};

module.exports = {
  handleError,
  ERROR_500,
  INV_REQ
};
