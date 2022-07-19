const List = require("./charac.models");

const teste = () => {
  const msg = "src funfando";
  return msg;
};

const findAllCh = async () => {
  const All = await List.find();
  return All;
};

const findById = async (id) => {
  return await List.findById(id);
};

const createCh = async (newCh) => {
  await List.create(newCh);
};

const updateCh = async (id, updatedCh) => {
  return await List.findByIdAndUpdate(id, updatedCh);
};

const deleteCh = async (id) => {
  return await List.findByIdAndDelete(id);
};

module.exports = {
  teste,
  findAllCh,
  findById,
  createCh,
  updateCh,
  deleteCh
};
