const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/url');
const PORT = process.env.PORT || 8000;
const baseUrl = process.env.BASE_URL || `localhost:${PORT}`;

const shortenUrl = async (req,res) => {
    try {
        const longUrl = req.body.longUrl;
        const user = req?.session?.getUserId();
        if(!validUrl.isUri(baseUrl)) throw new Error("Invalid Base URL");
        if(!user) {
            const result = await Url.findOne({longUrl: longUrl,reg:true});
            if(result){
                console.log(baseUrl+'/'+result.urlCode);
                res.status(200).json(result);
            }
            else {
                const code = shortid.generate();
                const result = new Url({
                    longUrl: longUrl,
                    urlCode: code,
                    reg:true
                })
                await result.save();
                console.log(baseUrl+'/'+code);
                res.json(result);
            }
        }
        else {
            const result = await Url.findOne({longUrl: longUrl,reg:false});
            if(result){
                console.log(baseUrl+'/'+result.urlCode);
                res.status(200).json(result);
            } 
            else {
                const code = shortid.generate();
                const result = new Url({
                    longUrl: longUrl,
                    urlCode: code,
                    reg:false
                })
                await result.save();
                console.log(baseUrl+'/'+code);
                res.json(result);
            }
        }
    } catch(err) {
        res.status(500).json('Server error');
        process.exit(1);
    }    
}

module.exports = {shortenUrl};