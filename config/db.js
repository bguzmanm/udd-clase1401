const mongoose = require("mongoose");

const connectDb = async () => {
  try {

    mongoose.set("strictQuery", true);
    console.log('intentando conectarme a la BD');
    await mongoose.connect(process.env.MONGO_DB);
    console.log('conectado a la base de datos');

  } catch (error) {
    console.log(`error al conectar con la base de datos: ${error}`);
    process.exit(1);
  }
}

module.exports = connectDb;