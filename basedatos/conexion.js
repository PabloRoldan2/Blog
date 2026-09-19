const mongoose = require("mongoose");

const conexion = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mi_blog");

        console.log("Conectado correctamente a la base de datos mi_blog");
        console.log("Estado: ", mongoose.connection.readyState);
        
        //Prueba de insert
        /*const resultado = await mongoose.connection.db    
            .collection("prueba")
            .insertOne({
                mensaje: "Prueba de conexión"
            });

        console.log("Documento creado: ", resultado.insertedId);*/

    } catch (error) {
        console.log("Error de conexión",error);
        //throw new Error("No se ha podido conectar a la base de datos");
    }
};

module.exports = {
    conexion
}

//conexion();