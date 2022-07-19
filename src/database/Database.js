const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado com o MongoDB"))
    .catch((error) =>
      console.log("Erro ao conectar ao MongoDB, erro: ", error)
    );
};

module.exports = connectToDatabase;
