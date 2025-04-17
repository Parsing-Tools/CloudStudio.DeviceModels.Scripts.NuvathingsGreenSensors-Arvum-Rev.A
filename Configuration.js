function getConfiguration(config) {
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.

  config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints) {
  // Esta función permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo.

  endpoints.addEndpoint("1", "Humedad de suelo (TERRA 31-1)", endpointType.humiditySensor);
  endpoints.addEndpoint("2", "Humedad de suelo (TERRA 31-2)", endpointType.humiditySensor);
  var e = endpoints.addEndpoint("3", "Dendrómetro de tronco", endpointType.genericSensor);
  e.variableTypeId = 1368; 
  var e = endpoints.addEndpoint("4", "Contador de riego (PULSE)", endpointType.genericSensor);
  e.variableTypeId = 1367; 
  endpoints.addEndpoint("5", "Humedad de suelo (TERRA 34-1)", endpointType.humiditySensor);
  var e = endpoints.addEndpoint("6", "Salinidad de suelo (TERRA 34-1)", endpointType.genericSensor);
  e.variableTypeId = 1366;
  endpoints.addEndpoint("7", "Temperatura de suelo (TERRA 34-1)", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Humedad de suelo (TERRA 34-2)", endpointType.humiditySensor);
  var e = endpoints.addEndpoint("9", "Salinidad de suelo (TERRA 34-2)", endpointType.genericSensor);
  e.variableTypeId = 1366;
  endpoints.addEndpoint("10", "Temperatura de suelo (TERRA 34-2)", endpointType.temperatureSensor);
  endpoints.addEndpoint("11", "Temperatura ambiente (TEMP)", endpointType.temperatureSensor);
  endpoints.addEndpoint("12", "Humedad relativa (HUM)", endpointType.humiditySensor);
  endpoints.addEndpoint("13", "Voltaje de placa solar (VSOLAR)", endpointType.voltageSensor);
  endpoints.addEndpoint("14", "Batería (BATT)", endpointType.voltageSensor);
  endpoints.addEndpoint("15", "Corriente de carga de batería (Batt Ch Current)", endpointType.currentSensor); 
}

function validateDeviceAddress(address, result) {
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
}

function updateDeviceUIRules(device, rules) {
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.
}

function updateEndpointUIRules(endpoint, rules) {
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.
  rules.canDelete = true;
}