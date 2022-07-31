const Url = require('../models/url');
const User = require('../models/user');

const redirectToOriginalUrl = async (req,res)=> {
    try {
        const code = req.params.code;
        const url = await Url.findOne({urlCode: code});
        if(!url){
            throw new Error("Short Code Not Found");
        }
        if(!url.reg && url.createdAt<new Date().setMinutes(new Date().getMinutes()-5)){
            throw new Error("Code Expired");
        }
        return res.redirect(url.longUrl);    
    } catch (err) {
        res.status(500).json({"message":err.message});
    }
}

module.exports = {redirectToOriginalUrl};