const jtw = require("jsonwebtoken");
const { nextTick } = require("process");
const {promisify} = require('util');
const SECRET = "etE1gniNysMhlHOUXflGPD0e";
module.exports = {
    eAdmin :async function(req,res,next){
       const authHeader = req.headers.authorization;
       //console.log(authHeader)
       if(!authHeader){
           return res.status(401).json({
               error:true,
               mensagem:"token invalido"
           });
       }
       const [, token] = authHeader.split(' ');
       console.log("token: " + token);
       if(!token){
        return res.status(401).json({
            error:true,
            mensagem:"token invalido 2"
        });
       }
       try {
           const decoded = await promisify(jtw.verify)(token, SECRET);
           req.userId= decoded.id;
           return next()
       } catch (error) {
        return res.status(401).json({
            error:true,
            mensagem:"token invalido 3"
        });
       }
    }
}
