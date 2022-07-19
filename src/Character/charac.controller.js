const Service = require("./charac.service");

const teste = (req, res) => {
  const msg = Service.teste();
  res.send({ msg });
};

const findAllCh = async (req, res) => {
  const List = await Service.findAllCh();
  console.log(List);
  res.send(List);
};

const findById = async (req, res) => {
  const id = req.params.id;
  const find = await Service.findById(id);

  res.send({ message: "Personagem encontrado!", find });
};

const createCh = async (req, res) => {
  const newCh = req.body;
  const banana = await Service.createCh(newCh);
  res.status(201).send(banana);
};

const updateCh = async (req, res) => {
  const id = req.params.id;
  const upCh = req.body;
  const updatedCh = await Service.updateCh(id, upCh);

  res.send({ message: "Personagem atualizado!", updatedCh });
};

const deleteCh = async (req, res) => {
  const id = req.params.id;
  await Service.deleteCh(id);

  res.send({ message: "Personagem deletado!" });
};

module.exports = {
  teste,
  findAllCh,
  findById,
  createCh,
  updateCh,
  deleteCh
};
