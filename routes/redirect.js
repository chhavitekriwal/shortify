const express = require('express');
const router = express.Router();
const Url = require("../models/url");

router.get("/:code", async (req,res)=> {
    try {
        const code = req.params.code;
        const url = await Url.findOne({urlCode: code});

        if(url) res.redirect(url.longUrl);
        else res.status(404).json('Page not found');
    } catch (err) {
        res.status(500).json("Server error");
    }
})

module.exports = router;


// 2EXZIZrCj