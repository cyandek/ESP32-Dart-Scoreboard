/////////////////////////////////////////////////////////////////
//         ESP32 Web Server for Dart Games                     //
/////////////////////////////////////////////////////////////////

#include "ESPAsyncWebServer.h"
#include "SPIFFS.h"
#include <AsyncTCP.h>
// #include <WebServer.h>
#include <Arduino_Json.h>
#include <WiFi.h>
#include <WiFiClient.h>
//#include <functions.hpp>
#include <iostream>
//#include <string>

//Wifi credentials
const char *SSID = "Flush Poo to St Lou";
const char *PASSWORD = "Latin4Windy312";

// Create AsyncWebServer object on port 80
AsyncWebServer server(80);

/* // Create an Event Source on /events
AsyncEventSource events("/events"); */

// Create a WebSocket object
AsyncWebSocket ws("/ws");

// Json Variable to Hold Sensor Readings
JSONVar readings;

// Timer variables
unsigned long lastTime = 0;
unsigned long timerDelay = 2000;

// Get Sensor Readings and return JSON object
String getSensorReadings() {
  
  String jsonString = JSON.stringify(readings);
  return jsonString;
  readings = "";
  jsonString = "";
}
void connectToWifi();
void UpdateScore();
//void UpdateGame();

void notifyClients(String sensorReadings) { 
  ws.textAll(sensorReadings); 
}

void handleWebSocketMessage(void *arg, uint8_t *data, size_t len) {
  AwsFrameInfo *info = (AwsFrameInfo *)arg;
  if (info->final && info->index == 0 && info->len == len &&
      info->opcode == WS_TEXT) {
    // data[len] = 0;
    // String message = (char*)data;
    //  Check if the message is "getReadings"
    // if (strcmp((char*)data, "getReadings") == 0) {
    // if it is, send current sensor readings
    String sensorReadings = getSensorReadings();
    Serial.print(sensorReadings);
    notifyClients(sensorReadings);
    //}
  }
}

void onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client,
             AwsEventType type, void *arg, uint8_t *data, size_t len) {
  switch (type) {
  case WS_EVT_CONNECT:
    Serial.printf("WebSocket client #%u connected from %s\n", client->id(),
                  client->remoteIP().toString().c_str());
    break;
  case WS_EVT_DISCONNECT:
    Serial.printf("WebSocket client #%u disconnected\n", client->id());
    break;
  case WS_EVT_DATA:
    handleWebSocketMessage(arg, data, len);
    break;
  case WS_EVT_PONG:
  case WS_EVT_ERROR:
    break;
  }
}

void initWebSocket() {
  ws.onEvent(onEvent);
  server.addHandler(&ws);
}

const char *D1Score_param = "D1Score";
const char *D2Score_param = "D2Score";
const char *D3Score_param = "D3Score";
const char *D1Multiplier_param = "D1Multiplier";
const char *D2Multiplier_param = "D2Multiplier";
const char *D3Multiplier_param = "D3Multiplier";
const char *D1inputscore_param = "D1inputscore";
const char *D2inputscore_param = "D2inputscore";
const char *D3inputscore_param = "D3inputscore";
const char *CurrentPlayer_param = "CurrentPlayer";
const char *CurrentGame_param = "CurrentGame";
const char *Numplayers_param = "Numplayers";
const char *P1name_param = "P1name";
const char *P2name_param = "P2name";
const char *P3name_param = "P3name";
const char *P4name_param = "P4name";
const char *P5name_param = "P5name";
const char *P6name_param = "P6name";
const char *P7name_param = "P7name";
const char *P8name_param = "P8name";
const char *NextPlayer_param = "NextPlayer";
const char *PrevPlayer_param = "PrevPlayer";
const char *Reset_param = "Reset";

String D1Score, D2Score, D3Score, D1Multiplier, D2Multiplier, D3Multiplier,
    D1inputscore, D2inputscore, D3inputscore, CurrentGame,
    CurrentPlayer, Numplayers, P1name, P2name, P3name, P4name, P5name, P6name,
    P7name, P8name, NextPlayer, PrevPlayer, Reset;

void notFound(AsyncWebServerRequest *request) {
  request->send(404, "text/plain", "Not found");
}

// Configure WiFi via hardcoded info
void connectToWifi() {
  WiFi.enableSTA(true);

  delay(2000);

  WiFi.begin(SSID, PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);

  // Initialize SPIFFS
  if (!SPIFFS.begin(true)) {
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  connectToWifi();
  initWebSocket();

  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/index.html", String(), false);
  });

/*   // Handle Web Server Events
  events.onConnect([](AsyncEventSourceClient *client) {
    if (client->lastId()) {
      Serial.printf("Client reconnected! Last message ID that it got is: %u\n",
                    client->lastId());
    }
  }); */

  server.on("/inputs", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/inputs.html", String(), false);
  });

  server.on("/styles.css", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/styles.css", "text/css");
  });

  server.on("/main.js", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/main.js", "text/javascript");
  });

  server.on("/inputs.js", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/inputs.js", "text/javascript");
  });

  server.on("/Wrigley.jpg", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/Wrigley.jpg", "image/jpg");
  });

  // Send a GET request to <ESP_IP>/get?input1=<inputMessage>
  server.on("/get", HTTP_GET, [](AsyncWebServerRequest *request)
            {
    

    // GET input1 value on <ESP_IP>/get?input1=<inputMessage>
    if (request->hasParam(D1Score_param)) {
      D1Score = request->getParam(D1Score_param)->value();
      Serial.print("D1Score: ");
      Serial.println(D1Score);
      readings["D1Score"] = String(D1Score);
    }

    if (request->hasParam(D2Score_param)) {
      D2Score = request->getParam(D2Score_param)->value();
      Serial.print("D2Score: ");
      Serial.println(D2Score);
      readings["D2Score"] = String(D2Score);
    }

    if (request->hasParam(D3Score_param)) {
      D3Score = request->getParam(D3Score_param)->value();
      Serial.print("D3Score: ");
      Serial.println(D3Score);
      readings["D3Score"] = String(D3Score);
    }
    if (request->hasParam(D1Multiplier_param)) {
      D1Multiplier = request->getParam(D1Multiplier_param)->value();
      Serial.print("D1Multiplier: ");
      Serial.println(D1Multiplier);
      //events.send(String(D1Multiplier).c_str(), "D1Multiplier");
      readings["D1Multiplier"] = String(D1Multiplier);
    }

    if (request->hasParam(D2Multiplier_param)) {
      D2Multiplier = request->getParam(D2Multiplier_param)->value();
      Serial.print("D2Multiplier: ");
      Serial.println(D2Multiplier);
      //events.send(String(D2Multiplier).c_str(), "D2Multiplier");
      readings["D2Multiplier"] = String(D2Multiplier);
    }

    if (request->hasParam(D3Multiplier_param)) {
      D3Multiplier = request->getParam(D3Multiplier_param)->value();
      Serial.print("D3Multiplier: ");
      Serial.println(D3Multiplier);
      //events.send(String(D3Multiplier).c_str(), "D3Multiplier");
      readings["D3Multiplier"] = String(D3Multiplier);
    }
    if (request->hasParam(D1inputscore_param)) {
      D1inputscore = request->getParam(D1inputscore_param)->value();
      Serial.print("D1inputscore: ");
      Serial.println(D1inputscore);
      readings["D1inputscore"] = String(D1inputscore);
    }

    if (request->hasParam(D2inputscore_param)) {
      D2inputscore = request->getParam(D2inputscore_param)->value();
      Serial.print("D2inputscore: ");
      Serial.println(D2inputscore);
      readings["D2inputscore"] = String(D2inputscore);
    }

    if (request->hasParam(D3inputscore_param)) {
      D3inputscore = request->getParam(D3inputscore_param)->value();
      Serial.print("D3inputscore: ");
      Serial.println(D3inputscore);
      readings["D3inputscore"] = String(D3inputscore);
    }

    if (request->hasParam(CurrentPlayer_param)) {
      CurrentPlayer = request->getParam(CurrentPlayer_param)->value();
      Serial.print("CurrentPlayer: ");
      Serial.println(CurrentPlayer);
      //new readings?
    }

    if (request->hasParam(CurrentGame_param)) {
      CurrentGame = request->getParam(CurrentGame_param)->value();
      Serial.print("CurrentGame: ");
      Serial.println(CurrentGame);
      readings["CurrentGame"] = String(CurrentGame);
    }

    if (request->hasParam(Numplayers_param)) {
      Numplayers = request->getParam(Numplayers_param)->value();
      Serial.print("Numplayers: ");
      Serial.println(Numplayers);
      readings["Numplayers"] = String(Numplayers);
    }

    if (request->hasParam(P1name_param)) {
      P1name = request->getParam(P1name_param)->value();
      Serial.print("P1name: ");
      Serial.println(P1name);
      readings["p1name"] = String(P1name);
    }
    if (request->hasParam(P2name_param)) {
      P2name = request->getParam(P2name_param)->value();
      Serial.print("P2name: ");
      Serial.println(P2name);
      readings["p2name"] = String(P2name);
    }
    if (request->hasParam(P3name_param)) {
      P3name = request->getParam(P3name_param)->value();
      Serial.print("P3name: ");
      Serial.println(P3name);
      readings["p3name"] = String(P3name);
    }
    if (request->hasParam(P4name_param)) {
      P4name = request->getParam(P4name_param)->value();
      Serial.print("P4name: ");
      Serial.println(P4name);
      readings["p4name"] = String(P4name);
    }
    if (request->hasParam(P5name_param)) {
      P5name = request->getParam(P5name_param)->value();
      Serial.print("P5name: ");
      Serial.println(P5name);
      readings["p5name"] = String(P5name);
    }
    if (request->hasParam(P6name_param)) {
      P6name = request->getParam(P6name_param)->value();
      Serial.print("P6name: ");
      Serial.println(P6name);
      readings["p6name"] = String(P6name);
    }
    if (request->hasParam(P7name_param)) {
      P7name = request->getParam(P7name_param)->value();
      Serial.print("P7name: ");
      Serial.println(P7name);
      readings["p7name"] = String(P7name);
    }
    if (request->hasParam(P8name_param)) {
      P8name = request->getParam(P8name_param)->value();
      Serial.print("P8name: ");
      Serial.println(P8name);
      readings["p8name"] = String(P8name);
    }

    if (request->hasParam(NextPlayer_param)) {
      NextPlayer = request->getParam(NextPlayer_param)->value();
      Serial.print("NextPlayer: ");
      Serial.println(NextPlayer);
      readings["NextPlayer"] = String(NextPlayer);
    }

    if (request->hasParam(PrevPlayer_param)) {
      PrevPlayer = request->getParam(PrevPlayer_param)->value();
      Serial.print("PrevPlayer: ");
      Serial.println(PrevPlayer);
      readings["PrevPlayer"] = String(PrevPlayer);
    }

    if (request->hasParam(Reset_param)) {
      Reset = request->getParam(Reset_param)->value();
      Serial.print("Reset: ");
      Serial.println(Reset);
      readings["Reset"] = String(Reset);
    }

    request->send(SPIFFS, "/index.html", String(), false);
    getSensorReadings();
    UpdateScore();
    readings = ""; 
    });
  //server.onNotFound(notFound);
  //server.addHandler(&events);
  server.begin();
}

//void UpdateGame() {}

void UpdateScore() {
  String sensorReadings = getSensorReadings();
  Serial.print(sensorReadings);
  notifyClients(sensorReadings);
  
  ws.cleanupClients();
}
void loop() {
  
}
