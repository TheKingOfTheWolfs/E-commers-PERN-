const jwt = require('jsonwebtoken')



// Check function to verify ADMIN role

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Unauthorised user"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({message: "Don't have permissions"})
            }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Unauthorised user"})
        }
    };
}





