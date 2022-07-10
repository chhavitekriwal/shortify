const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/url');
const PORT = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `localhost:${PORT}`;
const router = express.Router();

router.post('/shorten',async (req,res)=>{
    try {
        const longUrl = req.body.longUrl;
        if(validUrl.isUri(baseUrl)) {
            const result = await Url.findOne({longUrl: longUrl});
            if(result){
                console.log(baseUrl+'/'+result.urlCode);
                res.json(result);
            } else {
                const code = shortid.generate();
                const result = new Url({
                    longUrl: longUrl,
                    urlCode: code
                })
                await result.save();
                console.log(baseUrl+'/'+code);
                res.json(result);
            }
        }else {
            res.status(401).json('Invalid base URL');
        }
    } catch(err) {
        res.status(500).json('Server error');
        process.exit(1);
    }    
});

module.exports = router;