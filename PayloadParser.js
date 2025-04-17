function parseUplink(device, payload) {
  // Obtén el contenido del payload como un array JSON
  var parsedArray = JSON.parse(payload.asString());

  // Verificamos si es un array y si tiene al menos un elemento
  if (Array.isArray(parsedArray) && parsedArray.length > 0) {
    var parsed = parsedArray[0];

    // Verificamos si el objeto tiene la propiedad 'sensor'
    if (parsed.sensor) {
      // Actualizamos cada endpoint con el valor correspondiente del sensor
      device.endpoints.byAddress("1").updateHumiditySensorStatus(parseFloat(parsed.sensor[0]));
      device.endpoints.byAddress("2").updateHumiditySensorStatus(parseFloat(parsed.sensor[1]));
      device.endpoints.byAddress("3").updateGenericSensorStatus(parseFloat(parsed.sensor[2]));  
      device.endpoints.byAddress("4").updateGenericSensorStatus(parseFloat(parsed.sensor[3])); 
      device.endpoints.byAddress("5").updateHumiditySensorStatus(parseFloat(parsed.sensor[4]));
      device.endpoints.byAddress("6").updateGenericSensorStatus(parseFloat(parsed.sensor[5]));
      device.endpoints.byAddress("7").updateTemperatureSensorStatus(parseFloat(parsed.sensor[6]));
      device.endpoints.byAddress("8").updateHumiditySensorStatus(parseFloat(parsed.sensor[7]));
      device.endpoints.byAddress("9").updateGenericSensorStatus(parseFloat(parsed.sensor[8]));
      device.endpoints.byAddress("10").updateTemperatureSensorStatus(parseFloat(parsed.sensor[9]));
      device.endpoints.byAddress("11").updateTemperatureSensorStatus(parseFloat(parsed.sensor[10]));
      device.endpoints.byAddress("12").updateHumiditySensorStatus(parseFloat(parsed.sensor[11]));
      device.endpoints.byAddress("13").updateVoltageSensorStatus(parseFloat(parsed.sensor[12]));
      device.endpoints.byAddress("14").updateVoltageSensorStatus(parseFloat(parsed.sensor[13]));
      device.endpoints.byAddress("15").updateCurrentSensorStatus(parseFloat(parsed.sensor[14]));
    } else {
      env.log("Propiedad 'sensor' no encontrada en el objeto JSON.");
    }
  } else {
    env.log("El payload no es un array válido o está vacío.");
  }
}