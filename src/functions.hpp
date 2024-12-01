/*
#include <WiFi.h>
#include <WiFiClient.h>
#include <declarations.hpp>
#include <iostream>
//#include <string>

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
} */
/*
void ClearDarts(){
  Dart1str = "";
  Dart1 = 0;
  Dart2str = "";
  Dart2 = 0;
  Dart3str = "";
  Dart3 = 0;
}

void ClearPlayers() {
  Players_str = "";
  Players = 0;
}

void html_helpers() {




  if (Players_str == "1") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='7'>7</option>";
    Players_Dropdown += "<option value='8'>8</option>";

    Webcolumns = "";
    Webcolumns += "50% ";
    Webcolumns += "50% ";
  }

  if (Players_str == "2") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='7'>7</option>";
    Players_Dropdown += "<option value='8'>8</option>";

    Webcolumns = "";
    Webcolumns += "20% ";
    Webcolumns += "40% ";
    Webcolumns += "40%";
  }

  if (Players_str == "3") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='7'>7</option>";
    Players_Dropdown += "<option value='8'>8</option>";

    Webcolumns = "";
    Webcolumns += "16% ";
    Webcolumns += "28% ";
    Webcolumns += "28% ";
    Webcolumns += "28%";
  }

  if (Players_str == "4") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='7'>7</option>";
    Players_Dropdown += "<option value='8'>8</option>";

    Webcolumns = "";
    Webcolumns += "14% ";
    Webcolumns += "21.5% ";
    Webcolumns += "21.5% ";
    Webcolumns += "21.5% ";
    Webcolumns += "21.5%";
  }

  if (Players_str == "5") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='7'>7</option>";
    Players_Dropdown += "<option value='8'>8</option>";

    Webcolumns = "";
    Webcolumns += "12% ";
    Webcolumns += "17.6% ";
    Webcolumns += "17.6% ";
    Webcolumns += "17.6% ";
    Webcolumns += "17.6% ";
    Webcolumns += "17.6%";
  }

  if (Players_str == "6") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='7'>7</option>";
    Players_Dropdown += "<option value='8'>8</option>";

    Webcolumns = "";
    Webcolumns += "12% ";
    Webcolumns += "14.66% ";
    Webcolumns += "14.66% ";
    Webcolumns += "14.66% ";
    Webcolumns += "14.66% ";
    Webcolumns += "14.66% ";
    Webcolumns += "14.66%";
  }

  if (Players_str == "7") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='7'>7</option>";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='8'>8</option>";

    Webcolumns = "";
    Webcolumns += "12% ";
    Webcolumns += "12.56% ";
    Webcolumns += "12.56% ";
    Webcolumns += "12.56% ";
    Webcolumns += "12.56% ";
    Webcolumns += "12.56% ";
    Webcolumns += "12.56% ";
    Webcolumns += "12.56%";
  }

  if (Players_str == "8") {
    Players_Dropdown = "";
    Players_Dropdown += "<option value='8'>8</option>";
    Players_Dropdown += "<option value='1'>1</option>";
    Players_Dropdown += "<option value='2'>2</option>";
    Players_Dropdown += "<option value='3'>3</option>";
    Players_Dropdown += "<option value='4'>4</option>";
    Players_Dropdown += "<option value='5'>5</option>";
    Players_Dropdown += "<option value='6'>6</option>";
    Players_Dropdown += "<option value='7'>7</option>";

    Webcolumns = "";
    Webcolumns += "10% ";
    Webcolumns += "11.25% ";
    Webcolumns += "11.25% ";
    Webcolumns += "11.25% ";
    Webcolumns += "11.25% ";
    Webcolumns += "11.25% ";
    Webcolumns += "11.25% ";
    Webcolumns += "11.25% ";
    Webcolumns += "11.25%";
  }

// Set first item in array equal to the game that was selected and move 301 to
its old position if (debug) { Serial.printf("GamesValue: %s\n", GamesValue);
    Serial.print(GamesValue);
  }


      Game_Dropdown = "";
      Game_Dropdown += "<option value='";
      Game_Dropdown += GamesValue;
      Game_Dropdown += "'>";
      Game_Dropdown += GamesValue;
      Game_Dropdown += "</option>";
      for (int i = 0; i < 5; i++)
      {
        Game_Dropdown += "<option value='";
        Game_Dropdown += Gamearr[i];
        Game_Dropdown += "'>";
        Game_Dropdown += Gamearr[i];
        Game_Dropdown += "</option>";
      }

        // Set first name in dropdown equal to P1name and add all the other
names

      Serial.printf("P1name: %s\n", P1name);
      P1name_Dropdown = "";
      P1name_Dropdown += "<option value='";
      P1name_Dropdown += P1name;
      P1name_Dropdown += "'>";
      P1name_Dropdown += P1name;
      P1name_Dropdown += "</option>";

      Serial.printf("P2name: %s\n", P2name);
      P2name_Dropdown = "";
      P2name_Dropdown += "<option value='";
      P2name_Dropdown += P2name;
      P2name_Dropdown += "'>";
      P2name_Dropdown += P2name;
      P2name_Dropdown += "</option>";

      Serial.printf("P3name: %s\n", P3name);
      P3name_Dropdown = "";
      P3name_Dropdown += "<option value='";
      P3name_Dropdown += P3name;
      P3name_Dropdown += "'>";
      P3name_Dropdown += P3name;
      P3name_Dropdown += "</option>";

      Serial.printf("P4name: %s\n", P4name);
      P4name_Dropdown = "";
      P4name_Dropdown += "<option value='";
      P4name_Dropdown += P4name;
      P4name_Dropdown += "'>";
      P4name_Dropdown += P4name;
      P4name_Dropdown += "</option>";

      Serial.printf("P5name: %s\n", P5name);
      P5name_Dropdown = "";
      P5name_Dropdown += "<option value='";
      P5name_Dropdown += P5name;
      P5name_Dropdown += "'>";
      P5name_Dropdown += P5name;
      P5name_Dropdown += "</option>";

      Serial.printf("P6name: %s\n", P6name);
      P6name_Dropdown = "";
      P6name_Dropdown += "<option value='";
      P6name_Dropdown += P6name;
      P6name_Dropdown += "'>";
      P6name_Dropdown += P6name;
      P6name_Dropdown += "</option>";

      Serial.printf("P7name: %s\n", P7name);
      P7name_Dropdown = "";
      P7name_Dropdown += "<option value='";
      P7name_Dropdown += P7name;
      P7name_Dropdown += "'>";
      P7name_Dropdown += P7name;
      P7name_Dropdown += "</option>";

      Serial.printf("P8name: %s\n", P8name);
      P8name_Dropdown = "";
      P8name_Dropdown += "<option value='";
      P8name_Dropdown += P8name;
      P8name_Dropdown += "'>";
      P8name_Dropdown += P8name;
      P8name_Dropdown += "</option>";

      for (int i = 0; i < Namearr_size; i++) {
        P1name_Dropdown += "<option value='";
        P1name_Dropdown += Namearr[i];
        P1name_Dropdown += "'>";
        P1name_Dropdown += Namearr[i];
        P1name_Dropdown += "</option>";

        P2name_Dropdown += "<option value='";
        P2name_Dropdown += Namearr[i];
        P2name_Dropdown += "'>";
        P2name_Dropdown += Namearr[i];
        P2name_Dropdown += "</option>";

        P3name_Dropdown += "<option value='";
        P3name_Dropdown += Namearr[i];
        P3name_Dropdown += "'>";
        P3name_Dropdown += Namearr[i];
        P3name_Dropdown += "</option>";

        P4name_Dropdown += "<option value='";
        P4name_Dropdown += Namearr[i];
        P4name_Dropdown += "'>";
        P4name_Dropdown += Namearr[i];
        P4name_Dropdown += "</option>";

        P5name_Dropdown += "<option value='";
        P5name_Dropdown += Namearr[i];
        P5name_Dropdown += "'>";
        P5name_Dropdown += Namearr[i];
        P5name_Dropdown += "</option>";

        P6name_Dropdown += "<option value='";
        P6name_Dropdown += Namearr[i];
        P6name_Dropdown += "'>";
        P6name_Dropdown += Namearr[i];
        P6name_Dropdown += "</option>";

        P7name_Dropdown += "<option value='";
        P7name_Dropdown += Namearr[i];
        P7name_Dropdown += "'>";
        P7name_Dropdown += Namearr[i];
        P7name_Dropdown += "</option>";

        P8name_Dropdown += "<option value='";
        P8name_Dropdown += Namearr[i];
        P8name_Dropdown += "'>";
        P8name_Dropdown += Namearr[i];
        P8name_Dropdown += "</option>";
          }
          BlackBorder +=
              "<div style='background-color: black; Color: white; text-align: ";
          BlackBorder += "center; border-style: solid; border-width: 6px; "
                        "border-color: black;'>";

          BlueBorder +=
              "<div style='background-color: black; Color: white; text-align: ";
          BlueBorder += "center; border-style: solid; border-width: 6px; "
                        "border-color: blue;'>";
          RedBorder +=
              "<div style='background-color: black; Color: white; text-align: ";
          RedBorder += "center; border-style: solid; border-width: 6px; "
                  "border-color: red;'>";
}

void Blink_Player(){
  for (int i = 0; i < 8; i++) {
    if (status[i][0]==1)
    {
      if (status[i][1] == 2) {
        status[i][1] == 3;
      }

      if (status[i][1] == 3) {
        status[i][1] == 2;
      }
    }
  }


  } */
