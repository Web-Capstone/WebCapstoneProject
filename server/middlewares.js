const jwt = require("jsonwebtoken");

// check if the user has token if he has then he can post add and contact the buyer etc
const auth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization.split("")[1];
    const isCustomauth = token.length < 500; // if greaater than 500 it means google auth token 
    let decodedData;

    if (token && isCustomauth) {
      // for our own token
      decodedData = jwt.verify(token, process.env.token);
      req.userId = decodedData?.indexOf;
    } else {
      // for google auth token
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

const notFound = (req, res, next) => {
  const error = new Error(`Not Found ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
  });
};

module.exports = {
  auth,
  notFound,
  errorHandler,
};
