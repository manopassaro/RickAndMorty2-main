const User = require('../user/user.models');
const jwt = require('jsonwebtoken');

const login = async (email) => 
await User.findOne({email: email}).select("+password");

const generatedToken = (userId) => 
    jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = {
    login,
    generatedToken
}
