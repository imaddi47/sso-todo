import jwt from 'jsonwebtoken';
import config from '../config/index.js';

export const authorization = async (req, res, next) => {
    const tokenHeader = req.headers['authorization'];
    if (!tokenHeader) {
        return res.status(401).json({
            message: 'No "authorization" header was found'
        })
    }

    const token = tokenHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            message: 'Token is missing'
        })
    }

    const tokenParse = jwt.verify(token, config.jwtSecret);
    if(!tokenParse){
        return res.status(403).json({
            message: 'Invalid token'
        })
    }
    req.user = tokenParse;
    next();
}