const express = require('express');
const { verifySession } = require('supertokens-node/recipe/session/framework/express');
const router = express.Router();

const {shortenUrl} = require('../controllers/url');

router.post('/shorten',verifySession(), shortenUrl);

module.exports = router;