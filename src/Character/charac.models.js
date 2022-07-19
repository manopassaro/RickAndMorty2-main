const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  character: { type: String, required: true },
  pic: { type: String},
});

const List = mongoose.model("Character", CharacterSchema, "characters");

module.exports = List;
