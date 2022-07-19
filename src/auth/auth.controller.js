const authService = require("./auth.service");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.login(email);

    if(!user) {
        return res.status(400).send({message: 'Informações de login inválidas!'})
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if(!passwordValid) {
        return res.status(400).send({message: 'Informações de login inválidas!'});
    }

    const token = authService.generatedToken(user.id);

    res.send({ token });
}

module.exports = { login };
