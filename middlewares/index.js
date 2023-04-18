const validateBody = require("./validateBody");
const { isValidId, isValidFavorite } = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");
module.exports = {
  validateBody,
  isValidId,
  isValidFavorite,
  authenticate,
  upload,
};
