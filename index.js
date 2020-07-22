const axios = require("axios");

const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const { json } = require("body-parser");
const app = express();

// var JsonParser = require("json-parser");
// var ObjFilter = require("obj-filter");
// var Stringifier = require("stringifier");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

const url =
  "http://datos.sae.gob.mx/ArchivosDatos/Bienes/CatalogoBienesInmueblesAdmon/Actual/Catalogo_de_Bienes_Inmuebles_en_administracion_susceptibles_de_venta.json";

// NumeroSIAB = "2474512";
  const url2 =
  "http://datos.sae.gob.mx/ArchivosDatos/Bienes/CatalogoBienesInmueblesAdmon/Actual/Catalogo_de_Bienes_Inmuebles_en_administracion_susceptibles_de_venta.json" +
  "/NumeroSIAB";


//   var parser = new JsonParser();


//  axios.get(url2).then((json) => {
//    console.log(json);
//  });


function makeGetRequest() {
    axios.get(url).then((resp) => {
      
      // console.log(resp.data); Muestra la info en string
      datos = resp.data
      variable = typeof(resp.data);
      console.log(variable); //Es tipo string

      var jsonData = datos.split(); // Tipo Object
     
      variable2 = typeof(jsonData);
      console.log(variable2);

      jsonFile = jsonData.filter(function (a) {
        return a.NumeroSIAB === "2474512";
      });

      console.log(jsonFile)


      var task_id = jsonData.map((task) =>   console.log(task.NumeroSIAB));

      // const result = jsonData.find((dato) => {dato.NumeroSIAB == "2474512");

      // const resultado = jsonData.find(
      //   (dato) => {
      //        dato.NumeroSIAB;
      //        dato.EntidadFederativa;
            //  dato.municipio;
            //  dato.TipoInmueble;
            //  dato.Ubicacion;
            //  dato.ProblematicaJuridica;
    });

}
makeGetRequest();




