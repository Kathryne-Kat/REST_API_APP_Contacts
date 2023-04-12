const express = require("express");
const ctrl = require("../../controllers/auth");

const router = express.Router();

const { validateBody } = require("../../middlewares");

const { schema } = require("../../models/user");

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

router.post("/login", validateBody(schema.registerSchema), ctrl.login);

module.exports = router;
