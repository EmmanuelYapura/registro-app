const mongoose = require('mongoose');

//Manera de conectar con la variable de entorno llamada MONGO, puede ser cualquier nombre
mongoose.connect(process.env.MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Base conectada"))
    .catch(err => console.log(err));

