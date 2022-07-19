const Service = require("./user.service");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
    .status(206)
    .send({
      message: "Todos os campos obrigatórios!",
    });
  }

  const foundUsername = await Service.findUsername(username);
  const foundEmail = await Service.findEmail(email);

  if (foundUsername) {
    return res.send({
      message: "Username já cadastrado!",
    });
  }

  if (foundEmail) {
    return res.send({
      message: "Email já cadastrado!",
    });
  }

  const user = await Service.createUser(req.body).catch((error) =>
    console.log(error)
  );

  res.status(201).send(user);
};

const findAll = async (req, res) => {
  const users = await Service.allUser();

  if (users.length == 0) {
    return res.status(206).send({ message: "Nenhum usuário cadastrado!" });
  }

  res.send(users);
};

module.exports = {
  createUser,
  findAll
};
