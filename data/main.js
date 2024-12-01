// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Global variables for all
// games~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var CurrentPlayer;
var CurrentGame;
var Multiplier;
var inputscore;
var tempscore;
// Reset scoring variables
var D1Multiplier = 1;
var D2Multiplier = 1;
var D3Multiplier = 1;
var D1Score = 0;
var D2Score = 0;
var D3Score = 0;
var D1inputscore, D2inputscore, D3inputscore;
var numplayers;
var temptotal;
var x;
var y;
var replaceindex;
var D1y, D2y, D3y;
var P1name = 'Caleb';
var P2name = 'Ana';
var P3name = 'Adam';
var P4name = 'Anastasia';
var P5name = 'Casey';
var P6name = 'Conor';
var P7name = 'Dad';
var P8name = 'David';
var Playerstatus =
    [1, 0, 0, 0, 0, 0, 0, 0];  // 0 = Not playing, 1 = Playing, 2 = Winner
var CurrentPlayerarr =
    [1, 0, 0, 0, 0, 0, 0, 0];  // 0 = Not turn, 1 = Current turn
var CurrentPlayerNum = 0;      // Currrent player position in array
var Playerarr =
    [P1name, P2name, P3name, P4name, P5name, P6name, P7name, P8name];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Variables to update
// CSS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const PDivClass = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
const PListDivClass = [
  'P1List', 'P2List', 'P3List', 'P4List', 'P5List', 'P6List', 'P7List', 'P8List'
];
const PLabelDivClass = [
  'P1label', 'P2label', 'P3label', 'P4label', 'P5label', 'P6label', 'P7label',
  'P8label'
];
const PCheckoutClass = [
  'P1checkout', 'P2checkout', 'P3checkout', 'P4checkout', 'P5checkout',
  'P6checkout', 'checkout', 'P8checkout'
];

var divelement = document.createElement('div');
var listelement = document.createElement('li');
var underlineelement = document.createElement('hr');
var breaklineelement = document.createElement('br');
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Variables for Cricket
// Game~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var Cricketarr = [
  [0, 0, 0, 0, 0, 0, 0],    // Player 1 Cricket scores [20,19,18 ... Bull]
  [0, 0, 0, 0, 0, 0, 0],    // Player 2
  [0, 0, 0, 0, 0, 0, 0],    // Player 3
  [0, 0, 0, 0, 0, 0, 0],    // Player 4
  [0, 0, 0, 0, 0, 0, 0],    // Player 5
  [0, 0, 0, 0, 0, 0, 0],    // Player 6
  [0, 0, 0, 0, 0, 0, 0],    // Player 7
  [0, 0, 0, 0, 0, 0, 0],    // Player 8
  [0, 0, 0, 0, 0, 0, 0, 0]  // Scores for Players 1 - 8
];

var Cricketinputarr = [
  [20, 19, 18, 17, 16, 15, 25],  // Targets
  [0, 3, 6, 9, 12, 15, 18]  // The childnode that contains the symbol for each target
];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Array for Killer
// Game~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var Killerarr = [
  [3, 3, 3, 3, 3, 3, 3, 3],  // Lives for Killer game Players 1-8
  [0, 0, 0, 0, 0, 0, 0, 0],  // Targets Players 1 - 8
  [0, 0, 0, 0, 0, 0, 0, 0]   // Current killer = 1
];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Checkouts for '01
// Games~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var darttracker = [
  [0, 0, 0, 0, 0],  // Player1 [Turn score, Dart1, Dart2, Dart3, Dart Count]
  [0, 0, 0, 0, 0],  // Player2 [Turn score, Dart1, Dart2, Dart3, Dart Count]
  [0, 0, 0, 0, 0],  // Player3 [Turn score, Dart1, Dart2, Dart3, Dart Count]
  [0, 0, 0, 0, 0],  // Player4 [Turn score, Dart1, Dart2, Dart3, Dart Count]
  [0, 0, 0, 0, 0],  // Player5 [Turn score, Dart1, Dart2, Dart3, Dart Count]
  [0, 0, 0, 0, 0],  // Player6 [Turn score, Dart1, Dart2, Dart3, Dart Count]
  [0, 0, 0, 0, 0],  // Player7 [Turn score, Dart1, Dart2, Dart3, Dart Count]
  [0, 0, 0, 0, 0]   // Player8 [Turn score, Dart1, Dart2, Dart3, Dart Count]
];

var Checkout = [
  [170, 'T20', 'T20', 'D25'],
  [167, 'T20', 'T19', 'D25'],
  [164, 'T20', 'T18', 'D25'],
  [161, 'T20', 'T17', 'D25'],
  [160, 'T20', 'T20', 'D20'],
  [158, 'T20', 'T20', 'D19'],
  [157, 'T20', 'T19', 'D20'],
  [156, 'T20', 'T20', 'D18'],
  [155, 'T20', 'T15', 'D25'],
  [154, 'T20', 'T18', 'D20'],
  [153, 'T20', 'T19', 'D18'],
  [152, 'T20', 'T20', 'D16'],
  [151, 'T20', 'T17', 'D20'],
  [150, 'T20', 'T18', 'D18'],
  [149, 'T20', 'T19', 'D16'],
  [148, 'T20', 'T16', 'D20'],
  [147, 'T20', 'T17', 'D18'],
  [146, 'T20', 'T18', 'D16'],
  [145, 'T20', 'T15', 'D20'],
  [144, 'T20', 'T20', 'D12'],
  [143, 'T20', 'T17', 'D16'],
  [142, 'T20', 'T14', 'D20'],
  [141, 'T20', 'T15', 'D18'],
  [140, 'T20', 'T16', 'D16'],
  [139, 'T20', 'T13', 'D20'],
  [138, 'T20', 'T14', 'D18'],
  [137, 'T17', 'T18', 'D16'],
  [136, 'T20', 'T20', 'D8'],
  [135, 'T20', 'T15', 'D15'],
  [134, 'T20', 'T14', 'D16'],
  [133, 'T20', 'T19', 'D8'],
  [132, 'T20', 'T20', 'D6'],
  [131, 'T20', 'T13', 'D16'],
  [130, 'T20', 'T18', 'D8'],
  [129, 'T20', 'T19', 'D6'],
  [128, 'T18', 'T14', 'D16'],
  [127, 'T19', 'T18', 'D8'],
  [126, 'T19', 'T19', 'D6'],
  [125, 'Bull', 'T20', 'D20'],
  [124, 'T20', 'D16', 'D16'],
  [123, 'T19', 'T16', 'D9'],
  [122, 'T18', 'T20', 'D4'],
  [121, 'T20', 'T15', 'D8'],
  [120, 'T20', 20, 'D20'],
  [119, 'T19', 'T10', 'D16'],
  [118, 'T20', 18, 'D20'],
  [117, 'T20', 17, 'D20'],
  [116, 'T20', 16, 'D20'],
  [115, 'T20', 15, 'D20'],
  [114, 'T20', 14, 'D20'],
  [113, 'T20', 13, 'D20'],
  [112, 'T20', 20, 'D16'],
  [112, 'T20', 12, 'D20'],
  [111, 'T20', 19, 'D16'],
  [110, 'T20', 18, 'D16'],
  [109, 'T20', 17, 'D16'],
  [108, 'T20', 16, 'D16'],
  [107, 'T19', 18, 'D16'],
  [106, 'T20', 14, 'D16'],
  [105, 'T20', 13, 'D16'],
  [104, 'T18', 18, 'D16'],
  [103, 'T20', 11, 'D16'],
  [102, 'T20', 10, 'D16'],
  [101, 'T17', 18, 'D16'],
  [100, 'T20', 'D20'],
  [99, 'T19', 10],
  [98, 'T20', 'D19'],
  [97, 'T19', 'D20'],
  [96, 'T20', 'D18'],
  [95, 'T15', 18],
  [94, 'T18', 'D20'],
  [93, 'T19', 'D18'],
  [92, 'T20', 'D16'],
  [91, 'T17', 'D20'],
  [90, 'T18', 'D18'],
  [89, 'T19', 'D16'],
  [88, 'T16', 'D20'],
  [87, 'T17', 'D18'],
  [86, 'T18', 'D16'],
  [85, 'T15', 'D20'],
  [84, 'T20', 'D12'],
  [83, 'T17', 'D16'],
  [82, 'T14', 'D20'],
  [81, 'T15', 'D18'],
  [80, 'T16', 'D16'],
  [79, 'T13', 'D20'],
  [78, 'T14', 'D18'],
  [77, 'T15', 'D16'],
  [76, 'T20', 'D8'],
  [75, 'T15', 'D15'],
  [74, 'T14', 'D16'],
  [73, 'T19', 'D8'],
  [72, 'T20', 'D6'],
  [71, 'T13', 'D16'],
  [70, 'T18', 'D8'],
  [69, 'T19', 'D6'],
  [68, 'T16', 'D10'],
  [67, 'T17', 'D8'],
  [66, 'T10', 'D18'],
  [65, 'T15', 'D10'],
  [64, 'D16', 'D16'],
  [63, 'T13', 'D12'],
  [62, 'T10', 'D16'],
  [61, 'T15', 'D8'],
  [60, 20, 'D20'],
  [59, 19, 'D20'],
  [58, 18, 'D20'],
  [57, 17, 'D20'],
  [56, 16, 'D20'],
  [55, 15, 'D20'],
  [54, 14, 'D20'],
  [53, 13, 'D20'],
  [52, 20, 'D16'],
  [51, 19, 'D16'],
  [50, 18, 'D16'],
  [49, 17, 'D16'],
  [48, 16, 'D16'],
  [47, 15, 'D16'],
  [46, 14, 'D16'],
  [45, 13, 'D16'],
  [44, 12, 'D16'],
  [43, 11, 'D16'],
  [42, 10, 'D16'],
  [41, 9, 'D16'],
  [40, 'D20']
];
var DoublesCheckout = [
  [39, 7, 'D16'], [38, 'D19'], [37, 5, 'D16'], [36, 'D18'],
  [35, 3, 'D16'], [34, 'D17'], [33, 17, 'D8'], [32, 'D16'],
  [31, 15, 'D8'], [30, 'D15'], [29, 13, 'D8'], [28, 'D14'],
  [27, 19, 'D4'], [26, 'D13'], [25, 9, 'D8'],  [24, 'D12'],
  [23, 7, 'D8'],  [22, 'D11'], [21, 13, 'D4'], [20, 'D10'],
  [19, 11, 'D4'], [18, 'D9'],  [17, 9, 'D4'],  [16, 'D8'],
  [15, 7, 'D4'],  [14, 'D7'],  [13, 5, 'D4'],  [12, 'D6'],
  [11, 3, 'D4'],  [10, 'D5'],  [9, 1, 'D4'],   [8, 'D4'],
  [7, 3, 'D2'],   [6, 'D3'],   [5, 1, 'D2'],   [4, 'D2'],
  [3, 1, 'D1'],   [2, 'D1']
];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~Variables to assist with
// debugging~~~~~~~~~~~~~~~~~~~~~~~~~~
var debuginputs = true;
var debug01 = true;
var debugcricket = true;
var debugcricketpts = true;
var debugkiller = true;
var debuggolf = true;
var debugworld = true;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~WLED
// Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const wledIP = 'http://10.0.0.86/json';
const Winsetting = {
  'on': true,
  'bri': 255,
  'transition': 7,
  'ps': 1,
  'pl': -1,
  'nl': {'on': false, 'dur': 60, 'mode': 1, 'tbri': 0, 'rem': -1},
  'udpn': {'send': false, 'recv': true, 'sgrp': 1, 'rgrp': 1},
  'lor': 0,
  'mainseg': 0,
  'seg': [{
    'id': 0,
    'start': 0,
    'stop': 186,
    'len': 186,
    'grp': 1,
    'spc': 0,
    'of': 0,
    'on': true,
    'frz': false,
    'bri': 255,
    'cct': 127,
    'set': 0,
    'col': [[255, 194, 135], [0, 0, 0], [0, 0, 0]],
    'fx': 89,
    'sx': 53,
    'ix': 211,
    'pal': 11,
    'c1': 128,
    'c2': 128,
    'c3': 16,
    'sel': true,
    'rev': false,
    'mi': false,
    'o1': false,
    'o2': false,
    'o3': false,
    'si': 0,
    'm12': 0
  }]
};

const HAwebhook_lennon =
    'http://10.0.0.7:8123/api/webhook/-YxXKia2yrcjcu1HceSbP2bPV';
const HAwebhook_justin =
    'http://10.0.0.7:8123/api/webhook/-YxXKia2yrcjcu1HceKGFPhgflg5g';
const HAwebhook_adam =
    'http://10.0.0.7:8123/api/webhook/-YxXKia2yrcjcu1HcKTbi8U';
const HAwebhook_fog = 'http://10.0.0.7:8123/api/webhook/dart-winner-fogbaby';

const solidsetting = {
  'on': true,
  'bri': 255,
  'transition': 7,
  'ps': -1,
  'pl': -1,
  'nl': {'on': false, 'dur': 60, 'mode': 1, 'tbri': 0, 'rem': -1},
  'udpn': {'send': false, 'recv': true, 'sgrp': 1, 'rgrp': 1},
  'lor': 0,
  'mainseg': 0,
  'seg': [{
    'id': 0,
    'start': 0,
    'stop': 186,
    'len': 186,
    'grp': 1,
    'spc': 0,
    'of': 0,
    'on': true,
    'frz': false,
    'bri': 255,
    'cct': 127,
    'set': 0,
    'col': [[255, 194, 135], [0, 0, 0], [0, 0, 0]],
    'fx': 0,
    'sx': 128,
    'ix': 128,
    'pal': 11,
    'c1': 128,
    'c2': 128,
    'c3': 16,
    'sel': true,
    'rev': false,
    'mi': false,
    'o1': false,
    'o2': false,
    'o3': false,
    'si': 0,
    'm12': 0
  }]
};

var token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5MGRhMDQxNDdjNjQ0YTliOWJiMDhkZTE2ZDhiNGU5MSIsImlhdCI6MTcyMDU3MDE1MSwiZXhwIjoyMDM1OTMwMTUxfQ.ATNFykg9ksVIrBM4-B1HNOwn64BzWv3qwh4Dd_KEOD0';
const HAgame = 'http://10.0.0.7:8123/api/states/input_boolean.';
const HAhelper = '{\'state\': \'on\'}';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function UpdateGame() {
  CurrentGame = document.getElementById('CurrentGame').innerHTML;
  if (debuginputs) {
    console.log('Current Game:' + CurrentGame);
  }
  if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
    // Add starting value to each players column
    for (let x = 0; x < 8; x++) {  // For each player
      let node = divelement.cloneNode(true)
      node.appendChild(document.createTextNode(CurrentGame));
      document.getElementById(PListDivClass[x]).appendChild(node);
    }
  }

  if (CurrentGame == '301 Double out') {
    for (let x = 0; x < 8; x++) {  // For each player
      let node = divelement.cloneNode(true)
      node.appendChild(document.createTextNode(301));
      document.getElementById(PListDivClass[x]).appendChild(node);
    }
  }

  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    for (let x = 0; x < 8; x++) {    // For each player
      for (let i = 0; i < 7; i++) {  // create 7 targets
        let node = divelement.cloneNode(true);
        let underline = underlineelement.cloneNode(true);
        let breakline = breaklineelement.cloneNode(true);

        // Create textnode and append to "li" node:
        node.appendChild(document.createTextNode('-'));

        // Append the entire node:
        document.getElementById(PListDivClass[x]).appendChild(node);
        document.getElementById(PListDivClass[x]).appendChild(breakline);
        document.getElementById(PListDivClass[x]).appendChild(underline);
      }
    }
  }

  if (CurrentGame == 'Cricket With Points') {
    for (let x = 0; x < 8; x++) {  // For each player add score section
      let node = divelement.cloneNode(true);

      // Create textnode and append to "li" node:
      node.appendChild(document.createTextNode('Score: ' + Cricketarr[8][x]));

      // Append the entire node:
      document.getElementById(PListDivClass[x]).appendChild(node);
    }
  }

  if (CurrentGame == 'Killer') {
    for (let x = 0; x < 8; x++) {  // For each player add Target and lives
      let node = divelement.cloneNode(true);

      // Create textnode and append to "li" node:
      node.appendChild(document.createTextNode('Target: ' + Killerarr[1][x]));
      document.getElementById(PListDivClass[x]).appendChild(node);

      let node1 = divelement.cloneNode(true);

      // Create textnode and append to "li" node:
      node1.appendChild(document.createTextNode('Lives: ' + Killerarr[0][x]));
      document.getElementById(PListDivClass[x]).appendChild(node1);

      let node2 = divelement.cloneNode(true);

      // Create textnode and append to "li" node:
      node2.appendChild(document.createTextNode(''));
      document.getElementById(PListDivClass[x]).appendChild(node2);
    }
  }

  // HAlogs();
}

function UpdatePlayers() {
  numplayers = Number(document.getElementById('Numplayers').innerHTML);

  for (let i = 0; i < 8; i++) {
    if (i + 1 <= numplayers) {
      document.getElementById(PDivClass[i]).style.display = 'block';
      Playerstatus[i] = 1;
    }
    if (i + 1 > numplayers) {
      document.getElementById(PDivClass[i]).style.display = 'none';
      Playerstatus[i] = 0;
    }
  }

  if (numplayers == 1) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct1').style.display = 'block';
      document.getElementById('ct1').style.gridArea = '1 / 3 / 2 / 4';
      document.getElementById('ct2').style.display = 'none';
      document.getElementById('ct3').style.display = 'none';
      document.getElementById('ct4').style.display = 'none';
      document.getElementById('ct5').style.display = 'none';
      document.getElementById('p1').style.gridArea = '1 / 4 / 2 / 7';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 3 / 2 / 7';
    }
  }

  if (numplayers == 2) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct2').style.display = 'block';
      document.getElementById('ct2').style.gridArea = '1 / 4 / 2 / 6';
      document.getElementById('ct1').style.display = 'none';
      document.getElementById('ct3').style.display = 'none';
      document.getElementById('ct4').style.display = 'none';
      document.getElementById('ct5').style.display = 'none';
      document.getElementById('p1').style.gridArea = '1 / 2 / 2 / 4';
      document.getElementById('p2').style.gridArea = '1 / 6 / 2 / 8';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 2 / 2 / 5';
      document.getElementById('p2').style.gridArea = '1 / 5 / 2 / 8';
    }
  }

  if (numplayers == 3) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct1').style.display = 'block';
      document.getElementById('ct2').style.display = 'none';
      document.getElementById('ct3').style.display = 'none';
      document.getElementById('ct4').style.display = 'none';
      document.getElementById('ct5').style.display = 'none';
      document.getElementById('ct1').style.gridArea = '1 / 1 / 2 / 3';
      document.getElementById('p1').style.gridArea = '1 / 3 / 2 / 5';
      document.getElementById('p2').style.gridArea = '1 / 5 / 2 / 7';
      document.getElementById('p3').style.gridArea = '1 / 7 / 2 / 9';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 2 / 2 / 4';
      document.getElementById('p2').style.gridArea = '1 / 4 / 2 / 6';
      document.getElementById('p3').style.gridArea = '1 / 6 / 2 / 8';
    }
  }

  if (numplayers == 4) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct3').style.display = 'block';
      document.getElementById('ct1').style.display = 'none';
      document.getElementById('ct2').style.display = 'none';
      document.getElementById('ct4').style.display = 'none';
      document.getElementById('ct5').style.display = 'none';
      document.getElementById('p1').style.gridArea = '1 / 1 / 2 / 3';
      document.getElementById('p2').style.gridArea = '1 / 3 / 2 / 5';
      document.getElementById('ct3').style.gridArea = '1 / 5 / 2 / 6';
      document.getElementById('p3').style.gridArea = '1 / 6 / 2 / 8';
      document.getElementById('p4').style.gridArea = '1 / 8 / 2 / 10';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 1 / 2 / 3';
      document.getElementById('p2').style.gridArea = '1 / 3 / 2 / 5';
      document.getElementById('p3').style.gridArea = '1 / 5 / 2 / 7';
      document.getElementById('p4').style.gridArea = '1 / 7 / 2 / 9';
    }
  }

  if (numplayers == 5) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct1').style.display = 'block';
      document.getElementById('ct2').style.display = 'none';
      document.getElementById('ct3').style.display = 'none';
      document.getElementById('ct4').style.display = 'none';
      document.getElementById('ct5').style.display = 'none';
      document.getElementById('ct1').style.gridArea = '1 / 1 / 2 / 2';
      document.getElementById('p1').style.gridArea = '1 / 2 / 2 / 4';
      document.getElementById('p2').style.gridArea = '1 / 4 / 2 / 6';
      document.getElementById('p3').style.gridArea = '1 / 6 / 2 / 8';
      document.getElementById('p4').style.gridArea = '1 / 8 / 2 / 10';
      document.getElementById('p5').style.gridArea = '1 / 10 / 2 / 12';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 1 / 2 / 3';
      document.getElementById('p2').style.gridArea = '1 / 3 / 2 / 5';
      document.getElementById('p3').style.gridArea = '1 / 5 / 2 / 7';
      document.getElementById('p4').style.gridArea = '1 / 7 / 2 / 9';
      document.getElementById('p5').style.gridArea = '1 / 9 / 2 / 11';
    }
  }

  if (numplayers == 6) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct4').style.display = 'block';
      document.getElementById('ct1').style.display = 'none';
      document.getElementById('ct2').style.display = 'none';
      document.getElementById('ct3').style.display = 'none';
      document.getElementById('ct5').style.display = 'none';
      document.getElementById('p1').style.gridArea = '1 / 1 / 2 / 2';
      document.getElementById('p2').style.gridArea = '1 / 2 / 2 / 3';
      document.getElementById('p3').style.gridArea = '1 / 3 / 2 / 4';
      document.getElementById('ct4').style.gridArea = '1 / 4 / 2 / 6';
      document.getElementById('p4').style.gridArea = '1 / 6 / 2 / 7';
      document.getElementById('p5').style.gridArea = '1 / 7 / 2 / 8';
      document.getElementById('p6').style.gridArea = '1 / 8 / 2 / 9';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 2 / 2 / 2';
      document.getElementById('p2').style.gridArea = '1 / 3 / 2 / 4';
      document.getElementById('p3').style.gridArea = '1 / 4 / 2 / 5';
      document.getElementById('p4').style.gridArea = '1 / 5 / 2 / 6';
      document.getElementById('p5').style.gridArea = '1 / 6 / 2 / 7';
      document.getElementById('p6').style.gridArea = '1 / 7 / 2 / 8';
    }
  }

  if (numplayers == 7) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct1').style.display = 'block';
      document.getElementById('ct2').style.display = 'none';
      document.getElementById('ct3').style.display = 'none';
      document.getElementById('ct4').style.display = 'none';
      document.getElementById('ct5').style.display = 'none';
      document.getElementById('ct1').style.gridArea = '1 / 1 / 2 / 2';
      document.getElementById('p1').style.gridArea = '1 / 2 / 2 / 3';
      document.getElementById('p2').style.gridArea = '1 / 3 / 2 / 4';
      document.getElementById('p3').style.gridArea = '1 / 4 / 2 / 5';
      document.getElementById('p4').style.gridArea = '1 / 5 / 2 / 6';
      document.getElementById('p5').style.gridArea = '1 / 6 / 2 / 7';
      document.getElementById('p6').style.gridArea = '1 / 7 / 2 / 8';
      document.getElementById('p7').style.gridArea = '1 / 8 / 2 / 9';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 1 / 2 / 2';
      document.getElementById('p2').style.gridArea = '1 / 2 / 2 / 3';
      document.getElementById('p3').style.gridArea = '1 / 3 / 2 / 4';
      document.getElementById('p4').style.gridArea = '1 / 4 / 2 / 5';
      document.getElementById('p5').style.gridArea = '1 / 5 / 2 / 6';
      document.getElementById('p6').style.gridArea = '1 / 6 / 2 / 7';
      document.getElementById('p7').style.gridArea = '1 / 7 / 2 / 8';
    }
  }

  if (numplayers == 8) {
    if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
      document.getElementById('ct5').style.display = 'block';
      document.getElementById('ct1').style.display = 'none';
      document.getElementById('ct2').style.display = 'none';
      document.getElementById('ct3').style.display = 'none';
      document.getElementById('ct4').style.display = 'none';
      document.getElementById('p1').style.gridArea = '1 / 1 / 2 / 2';
      document.getElementById('p2').style.gridArea = '1 / 2 / 2 / 3';
      document.getElementById('p3').style.gridArea = '1 / 3 / 2 / 4';
      document.getElementById('p4').style.gridArea = '1 / 4 / 2 / 5';
      document.getElementById('ct5').style.gridArea = '1 / 5 / 2 / 6';
      document.getElementById('p5').style.gridArea = '1 / 6 / 2 / 7';
      document.getElementById('p6').style.gridArea = '1 / 7 / 2 / 8';
      document.getElementById('p7').style.gridArea = '1 / 8 / 2 / 9';
      document.getElementById('p8').style.gridArea = '1 / 9 / 2 / 10';
    }
    if (CurrentGame == 301 || CurrentGame == 401 || CurrentGame == 501 ||
        CurrentGame == 'Murder' || CurrentGame == '301 Double out') {
      document.getElementById('p1').style.gridArea = '1 / 1 / 2 / 2';
      document.getElementById('p2').style.gridArea = '1 / 2 / 2 / 3';
      document.getElementById('p3').style.gridArea = '1 / 3 / 2 / 4';
      document.getElementById('p4').style.gridArea = '1 / 4 / 2 / 5';
      document.getElementById('p5').style.gridArea = '1 / 5 / 2 / 6';
      document.getElementById('p6').style.gridArea = '1 / 6 / 2 / 7';
      document.getElementById('p7').style.gridArea = '1 / 7 / 2 / 8';
      document.getElementById('p8').style.gridArea = '1 / 8 / 2 / 9';
    }
  }
  CurrentPlayer = P1name;
}

function NextPlayer() {
  if (CurrentGame == 'Killer') {
    if (debuginputs) {
      console.log('CurrentGame == Killer');
      console.log('OldPlayerNum: ' + CurrentPlayerNum);
      console.log('OldPlayer: ' + CurrentPlayer);
    }

    // Old player is last player
    if (CurrentPlayerNum + 1 == numplayers) {
      console.log('Old player = last player');
      for (let i = 0; i < numplayers; i++) {  // from 1st to last player
        if (Killerarr[0][i] > 0) {
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'white';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '2px'
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'

          if (debuginputs) {
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
          }
          return;
        }
      }
    }

    // Old player is not last
    if (CurrentPlayerNum != numplayers - 1) {
      if (debuginputs) {
        console.log('Old player is not last');
      }

      // Find first remaining player from current player to last player
      for (let i = CurrentPlayerNum + 1; i < numplayers;
           i++) {  // from last player to current player
        if (Killerarr[0][i] > 0) {
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'white';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '2px'
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'

          if (debuginputs) {
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
          }
          return;
        }
      }

      // Find any remaining players from Player1 to current player
      for (let i = 0; i < CurrentPlayerNum;
           i++) {  // from Player1 to current player
        if (Killerarr[0][i] > 0) {
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'white';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '2px'
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'

          if (debuginputs) {
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
          }
          return;
        }
      }
    }
  }


  if (CurrentGame != 'Killer') {
    if (debuginputs) {
      console.log('CurrentGame !=  Killer');
      console.log('Old Playernum: ' + CurrentPlayerNum);
      console.log('Old Player: ' + CurrentPlayer);
    }

    //  Update to current player to next active player
    for (let i = 0; i < 9; i++) {
      if (i - 1 == CurrentPlayerNum) {
        CurrentPlayerarr[CurrentPlayerNum] = 0;
        document.getElementById(PDivClass[CurrentPlayerNum]).style.borderColor =
            'white';
        document.getElementById(PDivClass[CurrentPlayerNum]).style.borderWidth =
            '2px'

        if (i + 1 > numplayers) {
          CurrentPlayerarr[i - numplayers] = 1;
          CurrentPlayer = Playerarr[i - numplayers];
          CurrentPlayerNum = i - numplayers;
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'
          if (debuginputs) {
            console.log('CurrentPlayerNum: ' + CurrentPlayerNum);
            console.log('CurrentPlayer: ' + CurrentPlayer);
          }
          return;
        }

        if (i + 1 <= numplayers) {
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'
          if (debuginputs) {
            console.log('CurrentPlayerNum: ' + CurrentPlayerNum);
            console.log('CurrentPlayer: ' + CurrentPlayer);
          }
          return;
        }
      }
    }
  }
}

function PrevPlayer() {
  if (CurrentGame == 'Killer') {
    if (debuginputs) {
      console.log('CurrentGame == Killer');
      console.log('OldPlayerNum: ' + CurrentPlayerNum);
      console.log('OldPlayer: ' + CurrentPlayer);
    }

    // Old player is last player
    if (CurrentPlayerNum + 1 == numplayers) {
      console.log('Old player = last player');
      for (let i = numplayers - 2; i >= 0;
           i--) {  // from 2nd to last player to first player
        if (Killerarr[0][i] > 0) {
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'white';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '2px'
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'

          if (debuginputs) {
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
          }
          return;
        }
      }
    }

    // Old player is first player
    if (CurrentPlayerNum == 0) {
      console.log('Old player = first player');
      for (let i = numplayers - 1; i > 0;
           i--) {  // from last player to second player
        if (Killerarr[0][i] > 0) {
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'white';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '2px'
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'

          if (debuginputs) {
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
          }
          return;
        }
      }
    }

    // Old player is not first or last
    if (CurrentPlayerNum != 0 && CurrentPlayerNum != numplayers) {
      if (debuginputs) {
        console.log('Old player is not first or last');
      }

      // Find any remaining players from current player to Player1
      for (let i = CurrentPlayerNum - 1; i >= 0;
           i--) {  // from current player to Player 1
        if (Killerarr[0][i] > 0) {
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'white';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '2px'
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'

          if (debuginputs) {
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
          }
          return;
        }
      }
      // Find first remaining player from last player to current player
      for (let i = numplayers - 1; i > CurrentPlayerNum;
           i--) {  // from last player to current player
        if (Killerarr[0][i] > 0) {
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'white';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '2px'
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'

          if (debuginputs) {
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
          }
          return;
        }
      }
    }
  }

  if (CurrentGame != 'Killer') {
    if (CurrentPlayerarr[0] == 1) {
      CurrentPlayerarr[0] = 0;
      document.getElementById(PDivClass[CurrentPlayerNum]).style.borderColor =
          'white';
      document.getElementById(PDivClass[CurrentPlayerNum]).style.borderWidth =
          '2px'

      CurrentPlayerarr[numplayers - 1] = 1;
      CurrentPlayer = Playerarr[numplayers - 1];
      CurrentPlayerNum = numplayers - 1;
      document.getElementById(PDivClass[CurrentPlayerNum]).style.borderColor =
          'red';
      document.getElementById(PDivClass[CurrentPlayerNum]).style.borderWidth =
          '6px'
      return;
    }

    // Update to current player to next active player
    for (let i = 2; i < 9; i++) {
      if (i - 1 == CurrentPlayerNum) {
        CurrentPlayerarr[CurrentPlayerNum] = 0;
        document.getElementById(PDivClass[CurrentPlayerNum]).style.borderColor =
            'white';
        document.getElementById(PDivClass[CurrentPlayerNum]).style.borderWidth =
            '2px'
        if (i - 1 <= numplayers) {
          CurrentPlayerarr[i - 2] = 1
          CurrentPlayerNum = i - 2;
          CurrentPlayer = Playerarr[i - 2];
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderColor = 'red';
          document.getElementById(PDivClass[CurrentPlayerNum])
              .style.borderWidth = '6px'
          return;
        }
      }
    }
  }
}

function NameUpdate() {
  P1name = document.getElementById('p1name').innerHTML;
  P2name = document.getElementById('p2name').innerHTML;
  P3name = document.getElementById('p3name').innerHTML;
  P4name = document.getElementById('p4name').innerHTML;
  P5name = document.getElementById('p5name').innerHTML;
  P6name = document.getElementById('p6name').innerHTML;
  P7name = document.getElementById('p7name').innerHTML;
  P8name = document.getElementById('p8name').innerHTML;
  Playerarr = [P1name, P2name, P3name, P4name, P5name, P6name, P7name, P8name];
  if (debuginputs) {
    console.log(Playerarr);
  }
}

/* function UpdateScoresBull() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  inputscore = 25;
  y = 6;              // set index for Cricketarr[x][y]
  replaceindex = 19;  // The 19th childnode contains the symbol for this target

  GetScore();

  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    UpdateCricketSymbols();
  }

  document.getElementById('x1').checked = true;
}

function UpdateScores20() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  inputscore = 20;
  y = 0;             // set index for Cricketarr[x][y]
  replaceindex = 0;  // The 1st childnode contains the symbol for this target
  GetScore();

  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    UpdateCricketSymbols();
  }
}

function UpdateScores19() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  inputscore = 19;
  y = 1;             // set index for Cricketarr[x][y]
  replaceindex = 1;  // The 4th childnode contains the symbol for this target
  GetScore();

  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    UpdateCricketSymbols();
  }
}

function UpdateScores18() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  inputscore = 18;
  y = 2;             // set index for Cricketarr[x][y]
  replaceindex = 4;  // The 7th childnode contains the symbol for this target
  GetScore();


  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    UpdateCricketSymbols();
  }
}

function UpdateScores17() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  inputscore = 17;
  y = 3;              // set index for Cricketarr[x][y]
  replaceindex = 7;  // The 10th childnode contains the symbol for this target
  GetScore();

  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    UpdateCricketSymbols();
  }
}

function UpdateScores16() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  inputscore = 16;
  y = 4;              // set index for Cricketarr[x][y]
  replaceindex = 10;  // The 13th childnode contains the symbol for this target
  GetScore();

  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    UpdateCricketSymbols();
  }
}

function UpdateScores15() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  inputscore = 15;
  y = 5;              // set index for Cricketarr[x][y]
  replaceindex = 12;  // The 16th childnode contains the symbol for this target

  GetScore();

  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    UpdateCricketSymbols();
  }
}

function UpdateScores14() {
  inputscore = 14;
  GetScore();
}

function UpdateScores13() {
  inputscore = 13;
  GetScore();
}

function UpdateScores12() {
  inputscore = 12;
  GetScore();
}

function UpdateScores11() {
  inputscore = 11;
  GetScore();
}

function UpdateScores10() {
  inputscore = 10;
  GetScore();
}

function UpdateScores9() {
  inputscore = 9;
  GetScore();
}

function UpdateScores8() {
  inputscore = 8;
  GetScore();
}

function UpdateScores7() {
  inputscore = 7;
  GetScore();
}

function UpdateScores6() {
  inputscore = 6;
  GetScore();
}

function UpdateScores5() {
  inputscore = 5;
  GetScore();
}
function UpdateScores4() {
  inputscore = 4;
  GetScore();
}

function UpdateScores3() {
  inputscore = 3;
  GetScore();
}

function UpdateScores2() {
  inputscore = 2;
  GetScore();
}

function UpdateScores1() {
  inputscore = 1;
  GetScore();
} */

function UpdateScores() {
  D1Multiplier = Number(document.getElementById('D1Multiplier').innerHTML);
  D2Multiplier = Number(document.getElementById('D2Multiplier').innerHTML);
  D3Multiplier = Number(document.getElementById('D3Multiplier').innerHTML);
  D1inputscore = Number(document.getElementById('D1inputscore').innerHTML);
  D2inputscore = Number(document.getElementById('D2inputscore').innerHTML);
  D3inputscore = Number(document.getElementById('D3inputscore').innerHTML);
  D1Score = Number(document.getElementById('D1Score').innerHTML);
  D2Score = Number(document.getElementById('D2Score').innerHTML);
  D3Score = Number(document.getElementById('D3Score').innerHTML);

  console.log('D1Multiplier: ' + D1Multiplier);
  console.log('D2Multiplier: ' + D2Multiplier);
  console.log('D3Multiplier: ' + D3Multiplier);
  console.log('D1inputscore: ' + D1inputscore);
  console.log('D2inputscore: ' + D2inputscore);
  console.log('D3inputscore: ' + D3inputscore);
  console.log('D1Score: ' + D1Score);
  console.log('D2Score: ' + D2Score);
  console.log('D3Score: ' + D3Score);


  if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301 ||
      CurrentGame == '301 Double out') {
    // Get current player

    tempscore = D1Score + D2Score + D3Score;
    if (debug01) {
      console.log('tempscore: %d', tempscore);
    }

    let x = CurrentPlayerNum;
    const element = document.getElementById(PListDivClass[x])
    let lastscore = Number(element.lastElementChild.innerHTML);

    if (debug01) {
      console.log('lastscore: %d', lastscore);
    }

    // Create an "li" node:
    let node = divelement.cloneNode(true);
    let node2 = divelement.cloneNode(true);

    // Create text nodes for busting:
    if ((lastscore - tempscore) < 0) {
      // Create textnode and append
      node.appendChild(document.createTextNode('Bust'));

      // Append the entire node
      document.getElementById(PListDivClass[x]).appendChild(node);

      // Create textnode and append
      node2.appendChild(document.createTextNode(lastscore));

      // Append the entire node
      document.getElementById(PListDivClass[x]).appendChild(node2);
    }

    if (CurrentGame == '301 Double out') {
      if ((lastscore - tempscore) == 1) {
        // Create textnode and append
        node.appendChild(document.createTextNode('Bust'));

        // Append the entire node
        document.getElementById(PListDivClass[x]).appendChild(node);

        // Create textnode and append
        node2.appendChild(document.createTextNode(lastscore));

        // Append the entire node
        document.getElementById(PListDivClass[x]).appendChild(node2);
      }

      // if 0
    }

    if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
      if ((lastscore - tempscore) >= 0) {
        // Create textnode and append
        node.appendChild(document.createTextNode(lastscore - tempscore));

        // Append the entire node
        document.getElementById(PListDivClass[x]).appendChild(node);
      }
    }

    if ((lastscore - tempscore) == 0) {
      if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
        Playerstatus[x] = 2;
        Winner();
        return;
      }
      // Confirm last dart thrown was a double
      if (CurrentGame == '301 Double out') {
        console.log('Checking for 301 Double out winner');

        // Check if D1 was the winning dart and was a doublle
        if ((lastscore - D1Score) == 0 && D1Multiplier == 2) {
          console.log('Won with D1');
          Playerstatus[x] = 2;
          Winner();
          return;
        }
        // Check if D2 was the winning dart and was a doublle
        if ((lastscore - D1Score - D2Score) == 0 && D2Multiplier == 2) {
          console.log('Won with D2');
          Playerstatus[x] = 2;
          Winner();
          return;
        }
        // Check if D3 was the winning dart and was a doublle
        if ((lastscore - D1Score - D2Score - D3Score) == 0 &&
            D3Multiplier == 2) {
          console.log('Won with D3');
          Playerstatus[x] = 2;
          Winner();
          return;
        }
        console.log('No 301 Double out winner');
      }
      // Create textnode and append
      node.appendChild(document.createTextNode('Bust'));

      // Append the entire node
      document.getElementById(PListDivClass[x]).appendChild(node);

      // Create textnode and append
      node2.appendChild(document.createTextNode(lastscore));

      // Append the entire node
      document.getElementById(PListDivClass[x]).appendChild(node2);
    } else {
      if (CurrentGame == '301 Double out') {
        if ((lastscore - tempscore) > 1) {
          // Create textnode and append
          node.appendChild(document.createTextNode(lastscore - tempscore));

          // Append the entire node
          document.getElementById(PListDivClass[x]).appendChild(node);
        }
      }
    }
    console.log('Update Checkout');
    GetCheckout();
    console.log('Next Player');
    NextPlayer();
  }

  // Update Cricketarr and symbols on scoreboard
  if (CurrentGame == 'Cricket' || CurrentGame == 'Cricket With Points') {
    let x = CurrentPlayerNum;

    // Dart 1
    if (D1inputscore == 25) {
      D1y = 6;
    } else {
      D1y = 20 - D1inputscore;
    }

    Cricketarr[x][D1y] = Cricketarr[x][D1y] + D1Multiplier;

    //_______________________________________________________________________________________
    if (CurrentGame == 'Cricket With Points') {
      if (numplayers == 2) {
        if (CurrentPlayerarr[0] == 1) {
          if (Cricketarr[1][D1y] < 3 && Cricketarr[0][D1y] > 3)

            if (Cricketarr[0][D1y] - D1Multiplier >= 3) {
              Cricketarr[8][0] =
                  Cricketarr[8][0] + (D1Multiplier * D1inputscore);
            } else {
              Cricketarr[8][0] =
                  Cricketarr[8][0] + ((Cricketarr[0][D1y] - 3) * D1inputscore);
            }

          let node = divelement.cloneNode(true);
          node.appendChild(
              document.createTextNode('Score: ' + Cricketarr[8][0]));

          // Get the <div> element with PList id
          const list = document.getElementById(PListDivClass[0]);

          // Replace the first child node with the new <div> element:
          list.replaceChild(node, list.childNodes[21]);

          if (Cricketarr[0][6] >= 3 && Cricketarr[0][5] >= 3 &&
              Cricketarr[0][4] >= 3 && Cricketarr[0][3] >= 3 &&
              Cricketarr[0][2] >= 3 && Cricketarr[0][1] >= 3 &&
              Cricketarr[0][0] >= 3 && Cricketarr[8][0] > Cricketarr[8][1]) {
            Playerstatus[0] = 2;
            Winner();
          }
        }

        if (CurrentPlayerarr[1] == 1) {
          if (Cricketarr[0][D1y] < 3 && Cricketarr[1][D1y] > 3)

            if (Cricketarr[1][D1y] - D1Multiplier >= 3) {
              Cricketarr[8][1] =
                  Cricketarr[8][1] + (D1Multiplier * D1inputscore);
            } else {
              Cricketarr[8][1] =
                  Cricketarr[8][1] + ((Cricketarr[1][D1y] - 3) * D1inputscore);
            }

          let node = divelement.cloneNode(true);
          node.appendChild(
              document.createTextNode('Score: ' + Cricketarr[8][1]));

          // Get the <div> element with PList id
          const list = document.getElementById(PListDivClass[1]);

          // Replace the first child node with the new <div> element:
          list.replaceChild(node, list.childNodes[21]);
        }

        if (Cricketarr[1][6] >= 3 && Cricketarr[1][5] >= 3 &&
            Cricketarr[1][4] >= 3 && Cricketarr[1][3] >= 3 &&
            Cricketarr[1][2] >= 3 && Cricketarr[1][1] >= 3 &&
            Cricketarr[1][0] >= 3 && Cricketarr[8][1] > Cricketarr[8][0]) {
          Playerstatus[1] = 2;
          Winner();
        }
      }

      if (numplayers > 2) {
        if (debugcricketpts) {
          console.log('numplayers > 2');
        }
        let x = CurrentPlayerNum;
        if (Cricketarr[x][D1y] > 3) {
          for (let i = 0; i < 8; i++) {
            if (Cricketarr[i][D1y] < 3) {
              if (Cricketarr[x][D1y] - D1Multiplier >= 3) {
                if (debugcricketpts) {
                  console.log('Cricketarr[i][D1y] - D1Multiplier >= 3');
                }
                Cricketarr[8][i] =
                    Cricketarr[8][i] + (D1Multiplier * D1inputscore);
                if (debugcricketpts) {
                  console.log('D1Multiplier: ' + D1Multiplier);
                  console.log('D1inputscore: ' + D1inputscore);
                  console.log('Points given: ' + (D1Multiplier * D1inputscore));
                }

              } else {
                Cricketarr[8][i] = Cricketarr[8][i] +
                    ((Cricketarr[x][D1y] - 3) * D1inputscore);
                if (debugcricketpts) {
                  console.log('D1Multiplier: ' + (Cricketarr[x][D1y] - 3));
                  console.log('inputscore: ' + D1inputscore);
                  console.log(
                      'Points given: ' +
                      ((Cricketarr[x][D1y] - 3) * D1inputscore));
                }
              }

              let node = divelement.cloneNode(true);
              node.appendChild(
                  document.createTextNode('Score: ' + Cricketarr[8][i]));

              // Get the <div> element with PList id
              const list = document.getElementById(PListDivClass[i]);

              // Replace the first child node with the new <div>
              // element:
              list.replaceChild(node, list.childNodes[21]);
            }
          }
        }

        if (Cricketarr[x][6] >= 3 && Cricketarr[x][5] >= 3 &&
            Cricketarr[x][4] >= 3 && Cricketarr[x][3] >= 3 &&
            Cricketarr[x][2] >= 3 && Cricketarr[x][1] >= 3 &&
            Cricketarr[x][0] >= 3) {
          for (let i = 0; i < numplayers; i++) {
            if (Cricketarr[8][x] <= Cricketarr[8][i]) {
              if (i + 1 == numplayers) {
                Playerstatus[x] = 2
                Winner();
              }
            } else {
              break;
            }
          }
        }
      }
    }
    //_______________________________________________________________________________________

    // Dart2
    if (D2inputscore == 25) {
      D2y = 6;
    } else {
      D2y = 20 - D2inputscore;
    }

    Cricketarr[x][D2y] = Cricketarr[x][D2y] + D2Multiplier;

    //_______________________________________________________________________________________
    if (CurrentGame == 'Cricket With Points') {
      if (numplayers == 2) {
        if (CurrentPlayerarr[0] == 1) {
          if (Cricketarr[1][D2y] < 3 && Cricketarr[0][D2y] > 3)

            if (Cricketarr[0][D2y] - D2Multiplier >= 3) {
              Cricketarr[8][0] =
                  Cricketarr[8][0] + (D2Multiplier * D2inputscore);
            } else {
              Cricketarr[8][0] =
                  Cricketarr[8][0] + ((Cricketarr[0][D2y] - 3) * D2inputscore);
            }

          let node = divelement.cloneNode(true);
          node.appendChild(
              document.createTextNode('Score: ' + Cricketarr[8][0]));

          // Get the <div> element with PList id
          const list = document.getElementById(PListDivClass[0]);

          // Replace the first child node with the new <div> element:
          list.replaceChild(node, list.childNodes[21]);

          if (Cricketarr[0][6] >= 3 && Cricketarr[0][5] >= 3 &&
              Cricketarr[0][4] >= 3 && Cricketarr[0][3] >= 3 &&
              Cricketarr[0][2] >= 3 && Cricketarr[0][1] >= 3 &&
              Cricketarr[0][0] >= 3 && Cricketarr[8][0] > Cricketarr[8][1]) {
            Playerstatus[0] = 2;
            Winner();
          }
        }

        if (CurrentPlayerarr[1] == 1) {
          if (Cricketarr[0][D2y] < 3 && Cricketarr[1][D2y] > 3)

            if (Cricketarr[1][D2y] - D2Multiplier >= 3) {
              Cricketarr[8][1] =
                  Cricketarr[8][1] + (D2Multiplier * D2inputscore);
            } else {
              Cricketarr[8][1] =
                  Cricketarr[8][1] + ((Cricketarr[1][D2y] - 3) * D2inputscore);
            }

          let node = divelement.cloneNode(true);
          node.appendChild(
              document.createTextNode('Score: ' + Cricketarr[8][1]));

          // Get the <div> element with PList id
          const list = document.getElementById(PListDivClass[1]);

          // Replace the first child node with the new <div> element:
          list.replaceChild(node, list.childNodes[21]);
        }

        if (Cricketarr[1][6] >= 3 && Cricketarr[1][5] >= 3 &&
            Cricketarr[1][4] >= 3 && Cricketarr[1][3] >= 3 &&
            Cricketarr[1][2] >= 3 && Cricketarr[1][1] >= 3 &&
            Cricketarr[1][0] >= 3 && Cricketarr[8][1] > Cricketarr[8][0]) {
          Playerstatus[1] = 2;
          Winner();
        }
      }

      if (numplayers > 2) {
        if (debugcricketpts) {
          console.log('numplayers > 2');
        }
        let x = CurrentPlayerNum;
        if (Cricketarr[x][D2y] > 3) {
          for (let i = 0; i < 8; i++) {
            if (Cricketarr[i][D2y] < 3) {
              if (Cricketarr[x][D2y] - D2Multiplier >= 3) {
                if (debugcricketpts) {
                  console.log('Cricketarr[i][D2y] - D2Multiplier >= 3');
                }
                Cricketarr[8][i] =
                    Cricketarr[8][i] + (D2Multiplier * D2inputscore);
                if (debugcricketpts) {
                  console.log('D2Multiplier: ' + D2Multiplier);
                  console.log('D2inputscore: ' + D2inputscore);
                  console.log('Points given: ' + (D2Multiplier * D2inputscore));
                }

              } else {
                Cricketarr[8][i] = Cricketarr[8][i] +
                    ((Cricketarr[x][D2y] - 3) * D2inputscore);
                if (debugcricketpts) {
                  console.log('D2Multiplier: ' + (Cricketarr[x][D2y] - 3));
                  console.log('D2inputscore: ' + D2inputscore);
                  console.log(
                      'Points given: ' +
                      ((Cricketarr[x][D2y] - 3) * D2inputscore));
                }
              }

              let node = divelement.cloneNode(true);
              node.appendChild(
                  document.createTextNode('Score: ' + Cricketarr[8][i]));

              // Get the <div> element with PList id
              const list = document.getElementById(PListDivClass[i]);

              // Replace the first child node with the new <div>
              // element:
              list.replaceChild(node, list.childNodes[21]);
            }
          }
        }

        if (Cricketarr[x][6] >= 3 && Cricketarr[x][5] >= 3 &&
            Cricketarr[x][4] >= 3 && Cricketarr[x][3] >= 3 &&
            Cricketarr[x][2] >= 3 && Cricketarr[x][1] >= 3 &&
            Cricketarr[x][0] >= 3) {
          for (let i = 0; i < numplayers; i++) {
            if (Cricketarr[8][x] <= Cricketarr[8][i]) {
              if (i + 1 == numplayers) {
                Playerstatus[x] = 2
                Winner();
              }
            } else {
              break;
            }
          }
        }
      }
    }
    //_______________________________________________________________________________________

    // Dart 3
    if (D3inputscore == 25) {
      D3y = 6;
    } else {
      D3y = 20 - D3inputscore;
    }

    Cricketarr[x][D3y] = Cricketarr[x][D3y] + D3Multiplier;

    //_______________________________________________________________________________________
    if (CurrentGame == 'Cricket With Points') {
      if (numplayers == 2) {
        if (CurrentPlayerarr[0] == 1) {
          if (Cricketarr[1][D3y] < 3 && Cricketarr[0][D3y] > 3)

            if (Cricketarr[0][D3y] - D3Multiplier >= 3) {
              Cricketarr[8][0] =
                  Cricketarr[8][0] + (D3Multiplier * D3inputscore);
            } else {
              Cricketarr[8][0] =
                  Cricketarr[8][0] + ((Cricketarr[0][D3y] - 3) * D3inputscore);
            }

          let node = divelement.cloneNode(true);
          node.appendChild(
              document.createTextNode('Score: ' + Cricketarr[8][0]));

          // Get the <div> element with PList id
          const list = document.getElementById(PListDivClass[0]);

          // Replace the first child node with the new <div> element:
          list.replaceChild(node, list.childNodes[21]);

          if (Cricketarr[0][6] >= 3 && Cricketarr[0][5] >= 3 &&
              Cricketarr[0][4] >= 3 && Cricketarr[0][3] >= 3 &&
              Cricketarr[0][2] >= 3 && Cricketarr[0][1] >= 3 &&
              Cricketarr[0][0] >= 3 && Cricketarr[8][0] > Cricketarr[8][1]) {
            Playerstatus[0] = 2;
            Winner();
          }
        }

        if (CurrentPlayerarr[1] == 1) {
          if (Cricketarr[0][D3y] < 3 && Cricketarr[1][D3y] > 3)

            if (Cricketarr[1][D3y] - D3Multiplier >= 3) {
              Cricketarr[8][1] =
                  Cricketarr[8][1] + (D3Multiplier * D3inputscore);
            } else {
              Cricketarr[8][1] =
                  Cricketarr[8][1] + ((Cricketarr[1][D3y] - 3) * D3inputscore);
            }

          let node = divelement.cloneNode(true);
          node.appendChild(
              document.createTextNode('Score: ' + Cricketarr[8][1]));

          // Get the <div> element with PList id
          const list = document.getElementById(PListDivClass[1]);

          // Replace the first child node with the new <div> element:
          list.replaceChild(node, list.childNodes[21]);
        }

        if (Cricketarr[1][6] >= 3 && Cricketarr[1][5] >= 3 &&
            Cricketarr[1][4] >= 3 && Cricketarr[1][3] >= 3 &&
            Cricketarr[1][2] >= 3 && Cricketarr[1][1] >= 3 &&
            Cricketarr[1][0] >= 3 && Cricketarr[8][1] > Cricketarr[8][0]) {
          Playerstatus[1] = 2;
          Winner();
        }
      }

      if (numplayers > 2) {
        if (debugcricketpts) {
          console.log('numplayers > 2');
        }
        let x = CurrentPlayerNum;
        if (Cricketarr[x][D3y] > 3) {
          for (let i = 0; i < 8; i++) {
            if (Cricketarr[i][D3y] < 3) {
              if (Cricketarr[x][D3y] - D3Multiplier >= 3) {
                if (debugcricketpts) {
                  console.log('Cricketarr[i][D3y] - D3Multiplier >= 3');
                }
                Cricketarr[8][i] =
                    Cricketarr[8][i] + (D3Multiplier * D3inputscore);
                if (debugcricketpts) {
                  console.log('D3Multiplier: ' + D3Multiplier);
                  console.log('D3inputscore: ' + D3inputscore);
                  console.log('Points given: ' + (D3Multiplier * D3inputscore));
                }

              } else {
                Cricketarr[8][i] = Cricketarr[8][i] +
                    ((Cricketarr[x][D3y] - 3) * D3inputscore);
                if (debugcricketpts) {
                  console.log('D3Multiplier: ' + (Cricketarr[x][D3y] - 3));
                  console.log('D3inputscore: ' + D3inputscore);
                  console.log(
                      'Points given: ' +
                      ((Cricketarr[x][D3y] - 3) * D3inputscore));
                }
              }

              let node = divelement.cloneNode(true);
              node.appendChild(
                  document.createTextNode('Score: ' + Cricketarr[8][i]));

              // Get the <div> element with PList id
              const list = document.getElementById(PListDivClass[i]);

              // Replace the first child node with the new <div>
              // element:
              list.replaceChild(node, list.childNodes[21]);
            }
          }
        }

        if (Cricketarr[x][6] >= 3 && Cricketarr[x][5] >= 3 &&
            Cricketarr[x][4] >= 3 && Cricketarr[x][3] >= 3 &&
            Cricketarr[x][2] >= 3 && Cricketarr[x][1] >= 3 &&
            Cricketarr[x][0] >= 3) {
          for (let i = 0; i < numplayers; i++) {
            if (Cricketarr[8][x] <= Cricketarr[8][i]) {
              if (i + 1 == numplayers) {
                Playerstatus[x] = 2
                Winner();
              }
            } else {
              break;
            }
          }
        }
      }
    }
    //_______________________________________________________________________________________
    console.log('x: ' + x);
    console.log('Cricketarr[x][D1y]: ' + Cricketarr[x][D1y]);
    console.log('Cricketarr[x][D2y]: ' + Cricketarr[x][D2y]);
    console.log('Cricketarr[x][D3y]: ' + Cricketarr[x][D3y]);

    // Update symbols on scoreboard
    UpdateCricketSymbols();


    // Check for winner if not playing with points
    if (CurrentGame == 'Cricket') {
      if (Cricketarr[x][6] >= 3 && Cricketarr[x][5] >= 3 &&
          Cricketarr[x][4] >= 3 && Cricketarr[x][3] >= 3 &&
          Cricketarr[x][2] >= 3 && Cricketarr[x][1] >= 3 &&
          Cricketarr[x][0] >= 3) {
        Playerstatus[x] = 2;
        Winner();
        return;
      }
      NextPlayer();
    }

    if (CurrentGame == 'Cricket With Points') {
      NextPlayer();
    }
  }
}

function GetScore() {
  Multiplier =
      Number(document.querySelector('input[name="Multiplier"]:checked').value);
  tempscore = inputscore * Multiplier;
  console.log(Multiplier);



  if (CurrentGame == 'Killer') {
    if (debugkiller) {
      console.log('Killerarr[0]: ' + Killerarr[0]);
      console.log('Killerarr[1]: ' + Killerarr[1]);
      console.log('Killerarr[2]: ' + Killerarr[2]);
    }
    let x = CurrentPlayerNum;

    // If current player is the killer and hits someones target, remove lives
    if (Killerarr[2][x] == 1) {
      for (let i = 0; i < numplayers; i++) {  // Cycle through players
        if (Killerarr[1][i] ==
            inputscore) {  // Find players that have inputscore as a target
          Killerarr[0][i] =
              Killerarr[0][i] - Multiplier;  // Remove lives from player(s)
          if (Killerarr[0][i] < 0) {
            Killerarr[0][i] = 0;  // Prevent negative lives
          }
        }
        // Update lives in Player column
        let node = divelement.cloneNode(true);
        node.appendChild(document.createTextNode('Lives: ' + Killerarr[0][i]));

        // Get the <div> element with PList id
        const list = document.getElementById(PListDivClass[i]);

        // Replace the first child node with the new <div> element:
        list.replaceChild(node, list.childNodes[2]);

        if (Killerarr[0][i] <= 0) {
          Playerstatus[i] = 0;
        }
      }
    }

    // Set current player as the killer if they hit a double or triple of
    // their own target
    if (Killerarr[1][x] == inputscore && Killerarr[2][x] == 0) {
      if (Multiplier == 2 || Multiplier == 3) {
        for (let i = 0; i < numplayers; i++) {  // Cycle through players
          Killerarr[2][i] = 0;  // Remove killer status from old player

          let node = divelement.cloneNode(true);
          node.appendChild(document.createTextNode(''));

          // Get the <div> element with PList id
          const list = document.getElementById(PListDivClass[i]);

          // Replace the first child node with the new <div> element:
          list.replaceChild(node, list.childNodes[3]);
        }
        Killerarr[2][x] = 1;  // Set killer status for current player
        if (debugkiller) {
          console.log('Killerarr[2]: ' + Killerarr[2]);
        }

        let node = divelement.cloneNode(true);
        node.appendChild(document.createTextNode('Current Killer'));

        // Get the <div> element with PList id
        const list = document.getElementById(PListDivClass[x]);

        // Replace the first child node with the new <div> element:
        list.replaceChild(node, list.childNodes[3]);
      }
    }

    if (Killerarr[1][x] == 0) {  // If current player does not have a target
      if (debugkiller) {
        console.log('Killerarr[1][x] == 0');
      }

      for (let i = 0; i < numplayers; i++) {
        if (Killerarr[1][i] ==
            inputscore) {  // Confirm no other player has the same target
          if (debugkiller) {
            console.log('Killerarr[1][i] == ' + inputscore);
          }
          Killerarr[1][x] =
              0;  // Set current players target to 0 if the arget is taken
          if (debugkiller) {
            console.log('Killerarr[1][x] = 0');
          }
          break;
        } else {
          if (i + 1 == numplayers) {
            Killerarr[1][x] = inputscore  // set current player's target
            if (debugkiller) {
              console.log('Killerarr[1][x] = ' + Killerarr[1][x]);
              console.log('inputscore = ' + inputscore);
            }

            // Update target in Player column
            let node = divelement.cloneNode(true);
            if (Killerarr[1][x] != 25) {
              node.appendChild(
                  document.createTextNode('Target: ' + Killerarr[1][x]));
            }

            if (Killerarr[1][x] == 25) {
              node.appendChild(document.createTextNode('Target: Bullseye'));
            }

            // Get the <div> element with PList id
            const list = document.getElementById(PListDivClass[x]);

            // Replace the first child node with the new <div> element:
            list.replaceChild(node, list.childNodes[1]);
            break;
          }
        }
      }
    }
  }

  // search for winner
  let templives = 0;

  for (let z = 0; z < numplayers; z++) {
    if (Killerarr[0][z] > 0) {  // Confirm a player has at least one life
      for (let y = 0; y < numplayers; y++) {
        templives = templives + Killerarr[0][y];
      }
      if (templives == Killerarr[0][z]) {
        Playerstatus[z] = 2;
        Winner();
      }
    }
  }
  // reset Multiplier to 1
  document.getElementById('x1').checked = true;
}

/* function LogDarts() {
  Multiplier =
Number(document.querySelector('input[name="Multiplier"]:checked').value); let x
= CurrentPlayerNum;

  // Add dart number to array
  darttracker[x][4] = darttracker[x][4] + 1;
  let dartnum = darttracker[x][4];

  // Add current dart value to array and update turn score
  if (darttracker[x][4] > 0 && darttracker[x][4] <= 3) {
    darttracker[x][dartnum] = inputscore * Multiplier;
    darttracker[x][0] = darttracker[x][0] + (inputscore * Multiplier);
  }

  if (darttracker[x][4] == 3) {
    //add score to doc
  } else {
    // add dart score(s) and temp score to doc
  }
} */

/* function HAlogs() {


  fetch(HAgame + CurrentGame, {
    method: 'POST',
    body: JSON.stringify(HAhelper),
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
    }
  })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data));
} */

function UpdateCricketSymbols() {
  for (let i = 0; i < 7; i++) {
    replaceindex = Cricketinputarr[1][i];
    console.log('replaceindex', replaceindex);

    if (Cricketarr[CurrentPlayerNum][i] < 1) {
      let node = divelement.cloneNode(true);
      node.appendChild(document.createTextNode('-'));
      const list = document.getElementById(PListDivClass[CurrentPlayerNum]);

      // Replace the first child node with the new <div> element:
      list.replaceChild(node, list.childNodes[replaceindex]);
    }

    if (Cricketarr[CurrentPlayerNum][i] == 1) {
      let node = divelement.cloneNode(true);
      node.appendChild(document.createTextNode('\u2215'));

      // Get the <div> element with PList id
      const list = document.getElementById(PListDivClass[CurrentPlayerNum]);

      // Replace the first child node with the new <div> element:
      list.replaceChild(node, list.childNodes[replaceindex]);
    }

    if (Cricketarr[CurrentPlayerNum][i] == 2) {
      let node = divelement.cloneNode(true);
      //node.appendChild(document.createTextNode('×'));
      node.appendChild(document.createTextNode('\u2715'));
      // Get the <div> element with PList id
      const list = document.getElementById(PListDivClass[CurrentPlayerNum]);

      // Replace the first child node with the new <div> element:
      list.replaceChild(node, list.childNodes[replaceindex]);
    }

    if (Cricketarr[CurrentPlayerNum][i] >= 3) {
      let node = divelement.cloneNode(true);
      node.appendChild(document.createTextNode('\u2297'));

      // Get the <div> element with PList id
      const list = document.getElementById(PListDivClass[CurrentPlayerNum]);

      // Replace the first child node with the new <div> element:
      list.replaceChild(node, list.childNodes[replaceindex]);
    }
  }
}

function GetCheckout() {
  let x = CurrentPlayerNum;
  const element = document.getElementById(PListDivClass[x])
  let currentscore = Number(element.lastElementChild.innerHTML);
  console.log('currentscore: ' + currentscore);

  for (let n = 0; n < 124; n++) {
    if (currentscore == Checkout[n][0]) {
      console.log('Checkout[n][0]: ' + Checkout[n][0]);
      let size = Number(Checkout[n].length);
      console.log('size: ' + size);
      if (size == 4) {
        document.getElementById(PCheckoutClass[x]).innerHTML =
            'Checkout: ' + Checkout[n][1] + ', ' + Checkout[n][2] + ', ' +
            Checkout[n][3];
        break;
      }
      if (size == 3) {
        document.getElementById(PCheckoutClass[x]).innerHTML =
            'Checkout: ' + Checkout[n][1] + ', ' + Checkout[n][2];
        break;
      }
      if (size == 2) {
        document.getElementById(PCheckoutClass[x]).innerHTML =
            'Checkout: ' + Checkout[n][1];
        break;
      }
      let pnumb = x + 1;
      document.getElementById(PCheckoutClass[x]).innerHTML = '';
      console.log('No checkout found')
    }
  }

  if (CurrentGame == '301 Double out') {
    if (currentscore < 40) {
      for (let n = 0; n < 38; n++) {
        if (currentscore == DoublesCheckout[n][0]) {
          let size = Number(DoublesCheckout[n].length);
          if (size == 3) {
            document.getElementById(PCheckoutClass[x]).innerHTML =
                'Checkout: ' + DoublesCheckout[n][1] + ', ' +
                DoublesCheckout[n][2];
            break;
          }
          if (size == 2) {
            document.getElementById(PCheckoutClass[x]).innerHTML =
                'Checkout: ' + DoublesCheckout[n][1];
            break;
          }
        }
      }
    }
  }
}

function Reset() {
  fetch(wledIP, {
    method: 'POST',
    body: JSON.stringify(solidsetting),
    headers: {
      'Content-Type': 'application/json',
    }
  })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      }) /*
       .catch((error) => {
         console.error('Error:', error);
       }); */
  location.reload();
  return false;
}

'use strict';

function Winner() {
  // Clear everything
  /*   for (let i = 0; i < 8; i++) {
      document.getElementById(PDivClass[i]).style.display = 'none';
      document.getElementById(PListDivClass[i]).style.display = 'none';
    }

    document.getElementById('ct1').style.display = 'none';
    document.getElementById('ct2').style.display = 'none';
    document.getElementById('ct3').style.display = 'none';
    document.getElementById('ct4').style.display = 'none';
    document.getElementById('ct5').style.display = 'none'; */

  for (let z = 0; z < numplayers; z++) {
    if (Playerstatus[z] == 2) {
      document.getElementById('CurrentGame').innerHTML =
          ('Winner: ' + Playerarr[z]);

      if (Playerarr[z] == 'Lennon') {
        console.log('Lennon won');
        fetch(HAwebhook_lennon, {method: 'POST'});
      }
      if (Playerarr[z] == 'Justin') {
        console.log('Justin won');
        fetch(HAwebhook_justin, {method: 'POST'});
      }
      if (Playerarr[z] == 'Adam') {
        console.log('Adam won');
        fetch(HAwebhook_adam, {method: 'POST'});
      }
    }
  }


  fetch(wledIP, {
    method: 'POST',
    body: JSON.stringify(Winsetting),
    headers: {
      'Content-Type': 'application/json',
    }
  })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data));

  fetch(HAwebhook_fog, {method: 'POST'});

  // Globals
  var random = Math.random, cos = Math.cos, sin = Math.sin, PI = Math.PI,
      PI2 = PI * 2, timer = undefined, frame = undefined, confetti = [];

  var particles = 10, spread = 40, sizeMin = 5, sizeMax = 15 - sizeMin,
      eccentricity = 10, deviation = 100, dxThetaMin = -.1,
      dxThetaMax = -dxThetaMin - dxThetaMin, dyMin = .13, dyMax = .18,
      dThetaMin = .4, dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function() {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    },
    function() {
      var black = 200 * random() | 0;
      return color(200, black, black);
    },
    function() {
      var black = 200 * random() | 0;
      return color(black, 200, black);
    },
    function() {
      var black = 200 * random() | 0;
      return color(black, black, 200);
    },
    function() {
      return color(200, 100, 200 * random() | 0);
    },
    function() {
      return color(200 * random() | 0, 200, 200);
    },
    function() {
      var black = 256 * random() | 0;
      return color(black, black, black);
    },
    function() {
      return colorThemes[random() < .5 ? 1 : 2]();
    },
    function() {
      return colorThemes[random() < .5 ? 3 : 5]();
    },
    function() {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity, radius2 = radius + radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius], measure = 1 - radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      // Update the domain
      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d)
            domain[l] = d;  // Move interior (Left case)
          else
            domain.splice(l, 2);  // Delete interval
        else if (a < c && b > c)
          if (b <= d)
            domain[i] = c;  // Move interior (Right case)
          else
            domain.splice(i, 0, c, d);  // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis =
        'rotate3D(' + cos(360 * random()) + ',' + cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function(height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
          this.splineY[i], this.splineY[j],
          (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i]));
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti
      var theme = colorThemes[0], count = 0;
      (function addConfetto() {
        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = window.innerHeight;

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  poof();
};


var gateway = `ws://${window.location.hostname}/ws`;
var websocket;
// Init web socket when the page loads
window.addEventListener('load', onload);

function onload(event) {
  initWebSocket();
}

function getReadings() {
  websocket.send('getReadings');
}

function initWebSocket() {
  console.log('Trying to open a WebSocket connection…');
  websocket = new WebSocket(gateway);
  websocket.onopen = onOpen;
  websocket.onclose = onClose;
  websocket.onmessage = onMessage;
}

// When websocket is established, call the getReadings() function
function onOpen(event) {
  console.log('Connection opened');
  getReadings();
}

function onClose(event) {
  console.log('Connection closed');
  setTimeout(initWebSocket, 2000);
}

// Function that receives the message from the ESP32 with the readings
function onMessage(event) {
  console.log(event.data);
  var myObj = JSON.parse(event.data);
  var keys = Object.keys(myObj);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    document.getElementById(key).innerHTML = myObj[key];
    if (key == 'CurrentGame') {
      console.log('UpdateGame() triggered');
      UpdateGame();
      return;
    }
    if (key == 'Numplayers') {
      console.log('UpdatePlayers() triggered');
      UpdatePlayers();
      return;
    }
    if (key == ('P1name')) {
      console.log('NameUpdate() triggered');
      NameUpdate();
      return;
    }
    if (key == ('p1name') || key == ('p2name') || key == ('p3name') ||
        key == ('p4name') || key == ('p5name') || key == ('p6name') ||
        key == ('p7name') || key == ('p8name')) {
      console.log('Names updated');
      NameUpdate();
      return;
    }
    if (key == 'NextPlayer') {
      console.log('NextPlayer() triggered');
      NextPlayer();
      return;
    }
    if (key == 'PrevPlayer') {
      console.log('PrevPlayer() triggered');
      PrevPlayer();
      return;
    }
    if (key == 'Reset') {
      console.log('Reset() triggered');
      Reset();
      return;
    }
  }
  console.log('UpdateScores() triggered');
  UpdateScores();
}