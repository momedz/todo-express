const { Unauthorized } = require('../helper/failure');
const { Failure } = require('../helper/response');
const uuid = require('uuid');

const authentication = (req, res, next) => {
  try {
    req.payload = {};
    if (req.headers['x-username']) {
      req.payload.base = req.originalUrl.split('/')[1];
      req.payload.uuid = uuid.v4();
      next();
    } else throw Unauthorized({});
  } catch(error) { Failure(res, error); }
};

module.exports = authentication;
