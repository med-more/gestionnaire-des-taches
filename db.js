const mongoose = require('mongoose');//import du module mongoose

//function asynchrone pour la connexion mongodb
const connectDB = async () => {
    try {
      const URI = 'mongodb://127.0.0.1:27017/gestion'; // URL MongoDb
      await mongoose.connect(URI);//attent la connexion
      console.log('Connecté à MongoDB');
    } catch (err) {
      console.error('Erreur de connexion à MongoDB :', err);
      process.exit(1); // Quitte l'application en cas d'erreur
    }
  };
  
  module.exports = connectDB;
