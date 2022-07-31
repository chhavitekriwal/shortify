const supertokens = require('supertokens-node');
const EmailPassword = require('supertokens-node/recipe/emailpassword');
const Session = require('supertokens-node/recipe/session');

const User = require('../models/user');

const initSupertokens = () => {
        supertokens.init({
        framework: "express",
        supertokens: {
            // These are the connection details of the app you created on supertokens.com
            connectionURI: process.env.SUPERTOKENS_URI,
            apiKey: process.env.SUPERTOKENS_APIKEY,
        },
        appInfo: {
            // learn more about this on https://supertokens.com/docs/session/appinfo
            appName: "shortify",
            apiDomain: process.env.BACKEND_URL,
            websiteDomain: process.env.FRONTEND_URL,
            apiBasePath: "/api",
            //websiteBasePath: "/auth",
        },
        recipeList: [
            EmailPassword.init({
                override: {
                    functions: (originalImplementation) => {
                        return {
                            ...originalImplementation,
    
                            // here we are only overriding the function that's responsible
                            // for signing in a user.
                            signUp: async function (input) {
                                // TODO: some custom logic
                                const user = new User({
                                    userEmail: input.email
                                });
                                await user.save();
                                // or call the default behaviour as show below
                                return await originalImplementation.signUp(input);
                            }
                            // ...
                            // TODO: override more functions
                        }
                    }}}), // initializes signin / sign up features
            Session.init() // initializes session features
        ]
    });
    console.log("Supertokens connected");
};


module.exports = {initSupertokens};