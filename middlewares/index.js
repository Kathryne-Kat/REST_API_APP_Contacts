const validateBody = require("./validateBody");
const { isValidId, isValidFavorite } = require("./isValidId");
const authenticate = require("./authenticate");
module.exports = {
  validateBody,
  isValidId,
  isValidFavorite,
  authenticate,
};
