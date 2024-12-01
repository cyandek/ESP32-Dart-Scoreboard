//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var D1Multiplier = 1;
var D2Multiplier = 1;
var D3Multiplier = 1;
var D1Score = 0;
var D2Score = 0;
var D3Score = 0;
var D1inputscore = 0;
var D2inputscore = 0;
var D3inputscore = 0;
var Tempscore = 0;
var CurrentGame;
var CurrentPlayerNum = 0;
var P1name = 'Caleb';
var P2name = 'Ana';
var P3name = 'Adam';
var P4name = 'Anastasia';
var P5name = 'Casey';
var P6name = 'Conor';
var P7name = 'Dad';
var P8name = 'David';
const D1DivClass = [
  'D1-Bull', 'D1-20', 'D1-19', 'D1-18', 'D1-17', 'D1-16', 'D1-15',
  'D1-14',   'D1-13', 'D1-12', 'D1-11', 'D1-10', 'D1-9',  'D1-8',
  'D1-7',    'D1-6',  'D1-5',  'D1-4',  'D1-3',  'D1-2',  'D1-1', 'D1-0'
];
const D2DivClass = [
  'D2-Bull', 'D2-20', 'D2-19', 'D2-18', 'D2-17', 'D2-16', 'D2-15', 'D2-14',
  'D2-13',   'D2-12', 'D2-11', 'D2-10', 'D2-9',  'D2-8',  'D2-7',  'D2-6',
  'D2-5',    'D2-4',  'D2-3',  'D2-2',  'D2-1',  'D2-0'
];
const D3DivClass = [
  'D3-Bull', 'D3-20', 'D3-19', 'D3-18', 'D3-17', 'D3-16', 'D3-15', 'D3-14',
  'D3-13',   'D3-12', 'D3-11', 'D3-10', 'D3-9',  'D3-8',  'D3-7',  'D3-6',
  'D3-5',    'D3-4',  'D3-3',  'D3-2',  'D3-1',  'D3-0'
];

const PLabelClass =
    ['P1label', 'P2label', 'P3label', 'P4label', 'P5label', 'P6label', 'P7label', 'P8label'];
const PdropdownClass = [
  'P1name', 'P2name', 'P3name', 'P4name', 'P5name', 'P6name',
  'P7name', 'P8name'];

var Playerarr =
    [P1name, P2name, P3name, P4name, P5name, P6name, P7name, P8name];
var Numplayers;
var CurrentPlayerarr =
    [1, 0, 0, 0, 0, 0, 0, 0];  // 0 = Not turn, 1 = Current turn
var D1DivClassIndex, D2DivClassIndex, D3DivClassIndex;
var D1buttoncolor, D2buttoncolor, D3buttoncolor;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function UpdateGame() {
  console.log('UpdateGame');
  CurrentGame = document.getElementById('CurrentGame').value;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/get?CurrentGame=' + CurrentGame, true);
  xhr.send();
  console.log('XMLHttpRequest sent');
}

function UpdatePlayers() {
    console.log('UpdatePlayers');
    Numplayers = Number(document.getElementById('Numplayers').value);

    for (let i = 0; i < 8; i++) {
      document.getElementById(PLabelClass[i]).style.display = 'inline';
      document.getElementById(PdropdownClass[i]).style.display = 'inline';
      PdropdownClass[i];
    }

      for (let i = 0; i < 8; i++) {
        if (i + 1 > Numplayers) {
          console.log('Hide player index: ' + i);
          document.getElementById(PLabelClass[i]).style.display = 'none';
          document.getElementById(PdropdownClass[i]).style.display = 'none';
          PdropdownClass[i];
      }
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/get?Numplayers=' + Numplayers, true);
    xhr.send();
    console.log('XMLHttpRequest sent');
    }

function NextPlayer() {
  console.log('NextPlayer');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/get?NextPlayer=NextPlayer', true);
  xhr.send();
  console.log('XMLHttpRequest sent');

    if (CurrentGame == 'Killer') {

        console.log('CurrentGame == Killer');
        console.log('OldPlayerNum: ' + CurrentPlayerNum);
        console.log('OldPlayer: ' + CurrentPlayer);


      // Old player is last player
        if (CurrentPlayerNum + 1 == Numplayers) {
          console.log('Old player = last player');
          for (let i = 0; i < Numplayers; i++) {  // from 1st to last player
            if (Killerarr[0][i] > 0) {
              CurrentPlayerarr[CurrentPlayerNum] = 0;
              CurrentPlayerarr[i] = 1
              CurrentPlayerNum = i;
              CurrentPlayer = Playerarr[i];
              console.log('NewPlayerNum' + CurrentPlayerNum);
              console.log('NewPlayer' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
            }
          }
        }

      // Old player is not last
        if (CurrentPlayerNum != Numplayers - 1) {
          console.log('Old player is not last');

        // Find first remaining player from current player to last player
        for (let i = CurrentPlayerNum + 1; i < Numplayers; i++) {  // from last player to current player
            if (Killerarr[0][i] > 0) {
              CurrentPlayerarr[CurrentPlayerNum] = 0;
              CurrentPlayerarr[i] = 1
              CurrentPlayerNum = i;
              CurrentPlayer = Playerarr[i];

              console.log('NewPlayerNum' + CurrentPlayerNum);
              console.log('NewPlayer' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
            }
        }

        // Find any remaining players from Player1 to current player
        for (let i = 0; i < CurrentPlayerNum;
             i++) {  // from Player1 to current player
          if (Killerarr[0][i] > 0) {
            CurrentPlayerarr[CurrentPlayerNum] = 0;
            CurrentPlayerarr[i] = 1
            CurrentPlayerNum = i;
            CurrentPlayer = Playerarr[i];

              console.log('NewPlayerNum' + CurrentPlayerNum);
              console.log('NewPlayer' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
          }
        }
        }
    }


    if (CurrentGame != 'Killer') {
        console.log('CurrentGame !=  Killer');
        console.log('Old Playernum: ' + CurrentPlayerNum);
        console.log('Old Player: ' + CurrentPlayer);

      //  Update to current player to next active player
      for (let i = 0; i < 9; i++) {
        if (i - 1 == CurrentPlayerNum) {
          CurrentPlayerarr[CurrentPlayerNum] = 0;

          if (i + 1 > Numplayers) {
            CurrentPlayerarr[i - Numplayers] = 1;
            CurrentPlayer = Playerarr[i - Numplayers];
            CurrentPlayerNum = i - Numplayers;
            console.log('CurrentPlayerNum: ' + CurrentPlayerNum);
            console.log('CurrentPlayer: ' + CurrentPlayer);
            document.getElementById('CurrentPlayer').innerHTML =
                'Current Player: ' + Playerarr[CurrentPlayerNum];
            return;
          }

          if (i + 1 <= Numplayers) {
            CurrentPlayerarr[i] = 1
            CurrentPlayerNum = i;
            CurrentPlayer = Playerarr[i];
              console.log('CurrentPlayerNum: ' + CurrentPlayerNum);
              console.log('CurrentPlayer: ' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
          }
        }
      }
    }
  document.getElementById('CurrentPlayer').innerHTML = 'Current Player: ' +Playerarr[CurrentPlayerNum];
}

function HeaderUpdate() {
  if (CurrentGame == 'Killer') {
      console.log('CurrentGame == Killer');
      console.log('OldPlayerNum: ' + CurrentPlayerNum);
      console.log('OldPlayer: ' + CurrentPlayer);
    

    // Old player is last player
      if (CurrentPlayerNum + 1 == Numplayers) {
        console.log('Old player = last player');
        for (let i = 0; i < Numplayers; i++) {  // from 1st to last player
          if (Killerarr[0][i] > 0) {
            CurrentPlayerarr[CurrentPlayerNum] = 0;
            CurrentPlayerarr[i] = 1
            CurrentPlayerNum = i;
            CurrentPlayer = Playerarr[i];
            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
            document.getElementById('CurrentPlayer').innerHTML =
                'Current Player: ' + Playerarr[CurrentPlayerNum];
            return;
        }
        }
      }

    // Old player is not last
      if (CurrentPlayerNum != Numplayers - 1) {
        console.log('Old player is not last');

      // Find first remaining player from current player to last player
        for (let i = CurrentPlayerNum + 1; i < Numplayers;
             i++) {  // from last player to current player
          if (Killerarr[0][i] > 0) {
            CurrentPlayerarr[CurrentPlayerNum] = 0;
            CurrentPlayerarr[i] = 1
            CurrentPlayerNum = i;
            CurrentPlayer = Playerarr[i];

            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
            document.getElementById('CurrentPlayer').innerHTML =
                'Current Player: ' + Playerarr[CurrentPlayerNum];
            return;
        }
        }

      // Find any remaining players from Player1 to current player
      for (let i = 0; i < CurrentPlayerNum;
           i++) {  // from Player1 to current player
        if (Killerarr[0][i] > 0) {
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];

            console.log('NewPlayerNum' + CurrentPlayerNum);
            console.log('NewPlayer' + CurrentPlayer);
            document.getElementById('CurrentPlayer').innerHTML =
                'Current Player: ' + Playerarr[CurrentPlayerNum];
            return;
        }
      }
      }
  }


  if (CurrentGame != 'Killer') {

      console.log('CurrentGame !=  Killer');
      console.log('Old Playernum: ' + CurrentPlayerNum);
      console.log('Old Player: ' + CurrentPlayer);


    //  Update to current player to next active player
    for (let i = 0; i < 9; i++) {
      if (i - 1 == CurrentPlayerNum) {
        CurrentPlayerarr[CurrentPlayerNum] = 0;

        if (i + 1 > Numplayers) {
          CurrentPlayerarr[i - Numplayers] = 1;
          CurrentPlayer = Playerarr[i - Numplayers];
          CurrentPlayerNum = i - Numplayers;

          console.log('CurrentPlayerNum: ' + CurrentPlayerNum);
            console.log('CurrentPlayer: ' + CurrentPlayer);
            document.getElementById('CurrentPlayer').innerHTML =
                'Current Player: ' + Playerarr[CurrentPlayerNum];
            return;
        }

        if (i + 1 <= Numplayers) {
          CurrentPlayerarr[i] = 1
          CurrentPlayerNum = i;
          CurrentPlayer = Playerarr[i];
            console.log('CurrentPlayerNum: ' + CurrentPlayerNum);
            console.log('CurrentPlayer: ' + CurrentPlayer);
            document.getElementById('CurrentPlayer').innerHTML =
                'Current Player: ' + Playerarr[CurrentPlayerNum];
            return;
        }
      }
    }
  }
}

function PrevPlayer() {
  console.log('PrevPlayer');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/get?PrevPlayer=PrevPlayer', true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    if (CurrentGame == 'Killer') {
        console.log('CurrentGame == Killer');
        console.log('OldPlayerNum: ' + CurrentPlayerNum);
        console.log('OldPlayer: ' + CurrentPlayer);

      // Old player is last player
        if (CurrentPlayerNum + 1 == Numplayers) {
          console.log('Old player = last player');
          for (let i = Numplayers - 2; i >= 0;
               i--) {  // from 2nd to last player to first player
            if (Killerarr[0][i] > 0) {
              CurrentPlayerarr[CurrentPlayerNum] = 0;
              CurrentPlayerarr[i] = 1
              CurrentPlayerNum = i;
              CurrentPlayer = Playerarr[i];

              console.log('NewPlayerNum' + CurrentPlayerNum);
              console.log('NewPlayer' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum]
;
              return;
          }
          }
        }

      // Old player is first player
      if (CurrentPlayerNum == 0) {
        console.log('Old player = first player');
        for (let i = Numplayers - 1; i > 0;
             i--) {  // from last player to second player
          if (Killerarr[0][i] > 0) {
            CurrentPlayerarr[CurrentPlayerNum] = 0;
            CurrentPlayerarr[i] = 1
            CurrentPlayerNum = i;
            CurrentPlayer = Playerarr[i];

              console.log('NewPlayerNum' + CurrentPlayerNum);
              console.log('NewPlayer' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
          }
        }
      }

      // Old player is not first or last
      if (CurrentPlayerNum != 0 && CurrentPlayerNum != Numplayers) {
        console.log('Old player is not first or last');

        // Find any remaining players from current player to Player1
        for (let i = CurrentPlayerNum - 1; i >= 0;
             i--) {  // from current player to Player 1
          if (Killerarr[0][i] > 0) {
            CurrentPlayerarr[CurrentPlayerNum] = 0;
            CurrentPlayerarr[i] = 1
            CurrentPlayerNum = i;
            CurrentPlayer = Playerarr[i];

              console.log('NewPlayerNum' + CurrentPlayerNum);
              console.log('NewPlayer' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
          }
        }
        // Find first remaining player from last player to current player
        for (let i = Numplayers - 1; i > CurrentPlayerNum;
             i--) {  // from last player to current player
          if (Killerarr[0][i] > 0) {
            CurrentPlayerarr[CurrentPlayerNum] = 0;
            CurrentPlayerarr[i] = 1
            CurrentPlayerNum = i;
            CurrentPlayer = Playerarr[i];

              console.log('NewPlayerNum' + CurrentPlayerNum);
              console.log('NewPlayer' + CurrentPlayer);
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
          }
        }
      }
    }

    if (CurrentGame != 'Killer') {
      if (CurrentPlayerarr[0] == 1) {
        CurrentPlayerarr[0] = 0;

        CurrentPlayerarr[Numplayers - 1] = 1;
        CurrentPlayer = Playerarr[Numplayers - 1];
          CurrentPlayerNum = Numplayers - 1;
          document.getElementById('CurrentPlayer').innerHTML =
              'Current Player: ' + Playerarr[CurrentPlayerNum];
          return;
      }

      // Update to current player to next active player
      for (let i = 2; i < 9; i++) {
        if (i - 1 == CurrentPlayerNum) {
          CurrentPlayerarr[CurrentPlayerNum] = 0;
          if (i - 1 <= Numplayers) {
            CurrentPlayerarr[i - 2] = 1
            CurrentPlayerNum = i - 2;
              CurrentPlayer = Playerarr[i - 2];
              document.getElementById('CurrentPlayer').innerHTML =
                  'Current Player: ' + Playerarr[CurrentPlayerNum];
              return;
          }
        }
      }
    }
  document.getElementById('CurrentPlayer').innerHTML = 'Current Player: ' +Playerarr[CurrentPlayerNum];
}

function P1nameUpdate() {
  console.log('P1nameUpdate');
  P1name = document.getElementById('P1name').value;
    console.log('P1name: ', P1name);
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/get?P1name=' + P1name, true);
    xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[0] = P1name;
    console.log('Playerarr: ', Playerarr[0]);
    document.getElementById('CurrentPlayer').innerHTML =
        'Current Player: ' + Playerarr[CurrentPlayerNum];
}

function P2nameUpdate() {
  console.log('P2nameUpdate');
  P2name = document.getElementById('P2name').value;
  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?P2name=' + P2name,
      true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[1] = P2name;
    console.log('Playerarr: ', Playerarr[1]);
    document.getElementById('CurrentPlayer').innerHTML = 'Current Player: ' +
        Playerarr[CurrentPlayerNum];
}
function P3nameUpdate() {
  console.log('P3nameUpdate');
  P3name = document.getElementById('P3name').value;

  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?P3name=' + P3name,
      true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[2] = P3name;
    console.log('Playerarr: ', Playerarr[2]);
    document.getElementById('CurrentPlayer').innerHTML =
        'Current Player: ' + Playerarr[CurrentPlayerNum];
}
function P4nameUpdate() {
  console.log('P4nameUpdate');
    P4name = document.getElementById('P4name').value;
    
  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?P4name=' + P4name,
      true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[3] = P4name;
    console.log('Playerarr: ', Playerarr[3]);
    document.getElementById('CurrentPlayer').innerHTML =
        'Current Player: ' + Playerarr[CurrentPlayerNum];
}
function P5nameUpdate() {
  console.log('P5nameUpdate');
  P5name = document.getElementById('P5name').value;
    
  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?P5name=' + P5name,
      true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[4] = P5name;
    console.log('Playerarr: ', Playerarr[4]);
    document.getElementById('CurrentPlayer').innerHTML =
        'Current Player: ' + Playerarr[CurrentPlayerNum];
}
function P6nameUpdate() {
  P6name = document.getElementById('P6name').value;

  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?P6name=' + P6name,
      true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[5] = P6name;
    console.log('Playerarr: ', Playerarr[5]);
    document.getElementById('CurrentPlayer').innerHTML =
        'Current Player: ' + Playerarr[CurrentPlayerNum];
}
function P7nameUpdate() {
  P7name = document.getElementById('P7name').value;
  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?P7name=' + P7name,
      true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[6] = P7name;
    console.log('Playerarr: ', Playerarr[6]);
    document.getElementById('CurrentPlayer').innerHTML =
        'Current Player: ' + Playerarr[CurrentPlayerNum];
}
function P8nameUpdate() {
  P8name = document.getElementById('P8name').value;

  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?P8name=' + P8name,
      true);
  xhr.send();
    console.log('XMLHttpRequest sent');

    Playerarr[7] = P8name;
    console.log('Playerarr: ', Playerarr[7]);
    document.getElementById('CurrentPlayer').innerHTML =
        'Current Player: ' + Playerarr[CurrentPlayerNum];
}

function Reset() {
  console.log('Reset');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/get?Reset=Reset', true);
  xhr.send();
  console.log('XMLHttpRequest sent');
  document.getElementById('CurrentGame').value = 'Select Game';
  document.getElementById('Numplayers').value = ' ';

  // Reset buttons
    D1Unclick();
    D2Unclick();
    D3Unclick();

    // Reset Multipliers
    document.getElementById('D1x1').checked = true;
    document.getElementById('D2x1').checked = true;
    document.getElementById('D3x1').checked = true;

    // Reset Headers
    document.getElementById('Dart1header').innerHTML = 'Dart 1: ';
    document.getElementById('Dart2header').innerHTML = 'Dart 2: ';
    document.getElementById('Dart3header').innerHTML = 'Dart 3: ';
    document.getElementById('RoundScore').innerHTML = 'Current Round Score: ';

    // Reset scoring variables
    D1Multiplier = 1;
    D2Multiplier = 1;
    D3Multiplier = 1;
    D1Score = 0;
    D2Score = 0;
    D3Score = 0;
    Tempscore = 0;
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Dart 1
  // Buttons~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function D1UpdateScoresBull() {
    D1inputscore = 25;
    D1DivClassIndex = 0;

    D1Multiplier = Number(
        document.querySelector('input[name="D1Multiplier"]:checked').value);

    if (D1Multiplier == 3) {
      D1Multiplier = 2;
    }

    D1Unclick();
    document.getElementById(D1DivClass[0]).style.backgroundColor = 'green';

    // if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
    D1Score = (D1Multiplier * D1inputscore);
    if (D1Multiplier == 1) {
      document.getElementById('Dart1header').innerHTML = 'Dart 1: Bull';
    }
    if (D1Multiplier == 2) {
      document.getElementById('Dart1header').innerHTML = 'Dart 1: Double Bull';
    }
    Tempscore = D1Score + D2Score + D3Score;
    document.getElementById('RoundScore').innerHTML =
        'Current Round Score: ' + Tempscore;
  //}
}

function D1UpdateScores20() {
  // Set variables
  D1inputscore = 20;
  D1DivClassIndex = 1;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores19() {
  // Set variables
  D1inputscore = 19;
  D1DivClassIndex = 2;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores18() {
  // Set variables
  D1inputscore = 18;
  D1DivClassIndex = 3;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores17() {
  // Set variables
  D1inputscore = 17;
  D1DivClassIndex = 4;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores16() {
  // Set variables
  D1inputscore = 16;
  D1DivClassIndex = 5;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores15() {
  // Set variables
  D1inputscore = 15;
  D1DivClassIndex = 6;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores14() {
  // Set variables
  D1inputscore = 14;
  D1DivClassIndex = 7;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores13() {
  // Set variables
  D1inputscore = 13;
  D1DivClassIndex = 8;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores12() {
  // Set variables
  D1inputscore = 12;
  D1DivClassIndex = 9;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores11() {
  // Set variables
  D1inputscore = 11;
  D1DivClassIndex = 10;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores10() {
  // Set variables
  D1inputscore = 10;
  D1DivClassIndex = 11;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores9() {
  // Set variables
  D1inputscore = 9;
  D1DivClassIndex = 12;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores8() {
  // Set variables
  D1inputscore = 8;
  D1DivClassIndex = 13;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores7() {
  // Set variables
  D1inputscore = 7;
  D1DivClassIndex = 14;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores6() {
  // Set variables
  D1inputscore = 6;
  D1DivClassIndex = 15;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores5() {
  // Set variables
  D1inputscore = 5;
  D1DivClassIndex = 16;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores4() {
  // Set variables
  D1inputscore = 4;
  D1DivClassIndex = 17;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores3() {
  // Set variables
  D1inputscore = 3;
  D1DivClassIndex = 18;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores2() {
  // Set variables
  D1inputscore = 2;
  D1DivClassIndex = 19;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores1() {
  // Set variables
  D1inputscore = 1;
  D1DivClassIndex = 20;
  D1buttoncolor = 'green'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
function D1UpdateScores0() {
  // Set variables
  D1inputscore = 0;
  D1DivClassIndex = 21;
  D1buttoncolor = 'red'

  // Call functions
  D1Unclick();
  D1ScoreUpdate();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Dart 2
//Buttons~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function D2UpdateScoresBull() {
  D2inputscore = 25;
  D2Multiplier = Number(
      document.querySelector('input[name="D2Multiplier"]:checked').value);

  if (D2Multiplier == 3) {
    D2Multiplier = 2;
  }

  D2Unclick();
  document.getElementById(D2DivClass[0]).style.backgroundColor = 'green';

  //if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
    D2Score = (D2Multiplier * D2inputscore);
    if (D2Multiplier == 1) {
      document.getElementById('Dart2header').innerHTML = 'Dart 2: Bull';
    }
    if (D2Multiplier == 2) {
      document.getElementById('Dart2header').innerHTML = 'Dart 2: Double Bull';
    }
    Tempscore = D1Score + D2Score + D3Score;
    document.getElementById('RoundScore').innerHTML =
        'Current Round Score: ' + Tempscore;
  //}
}

function D2UpdateScores20() {
  // Set variables
  D2inputscore = 20;
  D2DivClassIndex = 1;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores19() {
  // Set variables
  D2inputscore = 19;
  D2DivClassIndex = 2;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores18() {
  // Set variables
  D2inputscore = 18;
  D2DivClassIndex = 3;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores17() {
  // Set variables
  D2inputscore = 17;
  D2DivClassIndex = 4;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores16() {
  // Set variables
  D2inputscore = 16;
  D2DivClassIndex = 5;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores15() {
  // Set variables
  D2inputscore = 15;
  D2DivClassIndex = 6;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores14() {
  // Set variables
  D2inputscore = 14;
  D2DivClassIndex = 7;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores13() {
  // Set variables
  D2inputscore = 13;
  D2DivClassIndex = 8;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores12() {
  // Set variables
  D2inputscore = 12;
  D2DivClassIndex = 9;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores11() {
  // Set variables
  D2inputscore = 11;
  D2DivClassIndex = 10;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores10() {
  // Set variables
  D2inputscore = 10;
  D2DivClassIndex = 11;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores9() {
  // Set variables
  D2inputscore = 9;
  D2DivClassIndex = 12;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores8() {
  // Set variables
  D2inputscore = 8;
  D2DivClassIndex = 13;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores7() {
  // Set variables
  D2inputscore = 7;
  D2DivClassIndex = 14;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores6() {
  // Set variables
  D2inputscore = 6;
  D2DivClassIndex = 15;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores5() {
  // Set variables
  D2inputscore = 5;
  D2DivClassIndex = 16;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores4() {
  // Set variables
  D2inputscore = 4;
  D2DivClassIndex = 17;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores3() {
  // Set variables
  D2inputscore = 3;
  D2DivClassIndex = 18;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores2() {
  // Set variables
  D2inputscore = 2;
  D2DivClassIndex = 19;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores1() {
  // Set variables
  D2inputscore = 1;
  D2DivClassIndex = 20;
  D2buttoncolor = 'green'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
function D2UpdateScores0() {
  // Set variables
  D2inputscore = 0;
  D2DivClassIndex = 21;
  D2buttoncolor = 'red'

  // Call functions
  D2Unclick();
  D2ScoreUpdate();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Dart 3
//Buttons~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function D3UpdateScoresBull() {
  D3inputscore = 25;
  D3Multiplier = Number(
      document.querySelector('input[name="D3Multiplier"]:checked').value);

  if (D3Multiplier == 3) {
    D3Multiplier = 2;
  }

  D3Unclick();
  document.getElementById(D3DivClass[0]).style.backgroundColor = 'green';

  //if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
    D3Score = (D3Multiplier * D3inputscore);
    if (D3Multiplier == 1) {
      document.getElementById('Dart3header').innerHTML = 'Dart 3: Bull';
      document.getElementById('Dart3header').innerHTML = 'Dart 3: Bull';
    }
    if (D3Multiplier == 2) {
      document.getElementById('Dart3header').innerHTML = 'Dart 3: Double Bull';
    }
    Tempscore = D1Score + D2Score + D3Score;
    document.getElementById('RoundScore').innerHTML =
        'Current Round Score: ' + Tempscore;
  //}
}

function D3UpdateScores20() {
  // Set variables
  D3inputscore = 20;
  D3DivClassIndex = 1;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores19() {
  // Set variables
  D3inputscore = 19;
  D3DivClassIndex = 2;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores18() {
  // Set variables
  D3inputscore = 18;
  D3DivClassIndex = 3;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores17() {
  // Set variables
  D3inputscore = 17;
  D3DivClassIndex = 4;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores16() {
  // Set variables
  D3inputscore = 16;
  D3DivClassIndex = 5;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores15() {
  // Set variables
  D3inputscore = 15;
  D3DivClassIndex = 6;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores14() {
  // Set variables
  D3inputscore = 14;
  D3DivClassIndex = 7;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores13() {
  // Set variables
  D3inputscore = 13;
  D3DivClassIndex = 8;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores12() {
  // Set variables
  D3inputscore = 12;
  D3DivClassIndex = 9;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores11() {
  // Set variables
  D3inputscore = 11;
  D3DivClassIndex = 10;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores10() {
  // Set variables
  D3inputscore = 10;
  D3DivClassIndex = 11;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores9() {
  // Set variables
  D3inputscore = 9;
  D3DivClassIndex = 12;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores8() {
  // Set variables
  D3inputscore = 8;
  D3DivClassIndex = 13;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores7() {
  // Set variables
  D3inputscore = 7;
  D3DivClassIndex = 14;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores6() {
  // Set variables
  D3inputscore = 6;
  D3DivClassIndex = 15;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores5() {
  // Set variables
  D3inputscore = 5;
  D3DivClassIndex = 16;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores4() {
  // Set variables
  D3inputscore = 4;
  D3DivClassIndex = 17;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores3() {
  // Set variables
  D3inputscore = 3;
  D3DivClassIndex = 18;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores2() {
  // Set variables
  D3inputscore = 2;
  D3DivClassIndex = 19;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores1() {
  // Set variables
  D3inputscore = 1;
  D3DivClassIndex = 20;
  D3buttoncolor = 'green'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
function D3UpdateScores0() {
  // Set variables
  D3inputscore = 0;
  D3DivClassIndex = 21;
  D3buttoncolor = 'red'

  // Call functions
  D3Unclick();
  D3ScoreUpdate();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



function D1Unclick() {
  // Set buttons to transparent green
  for (let i = 0; i < 22; i += 2) {
    document.getElementById(D1DivClass[i]).style.backgroundColor =
        'rgba(0, 128, 0, 0.35)';
  }
  // Set buttons to transparent red
  for (let i = 1; i < 22; i += 2) {
    document.getElementById(D1DivClass[i]).style.backgroundColor =
        'rgba(255, 0, 0, 0.35)';
  }
}

function D2Unclick() {
  // Set buttons to transparent green
  for (let i = 0; i < 22; i += 2) {
    document.getElementById(D2DivClass[i]).style.backgroundColor =
        'rgba(0, 128, 0, 0.35)';
  }
  // Set buttons to transparent red
  for (let i = 1; i < 22; i += 2) {
    document.getElementById(D2DivClass[i]).style.backgroundColor =
        'rgba(255, 0, 0, 0.35)';
  }
}

function D3Unclick() {
  // Set buttons to transparent green
  for (let i = 0; i < 22; i += 2) {
    document.getElementById(D3DivClass[i]).style.backgroundColor =
        'rgba(0, 128, 0, 0.35)';
  }
  // Set buttons to transparent red
  for (let i = 1; i < 22; i += 2) {
    document.getElementById(D3DivClass[i]).style.backgroundColor =
        'rgba(255, 0, 0, 0.35)';
  }
}

function D1ScoreUpdate() {
  // Determine Single, Double, or Triple
  D1Multiplier = Number(
      document.querySelector('input[name="D1Multiplier"]:checked').value);
  // Change selected button to red or green
  document.getElementById(D1DivClass[D1DivClassIndex]).style.backgroundColor =
      D1buttoncolor;

  // Update Score
  //if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
    D1Score = (D1Multiplier * D1inputscore);
    if (D1Multiplier == -1) {
      document.getElementById('Dart1header').innerHTML =
          'Dart 1: -' + D1inputscore;
    }
    if (D1Multiplier == 1) {
      document.getElementById('Dart1header').innerHTML =
          'Dart 1: ' + D1inputscore;
    }
    if (D1Multiplier == 2) {
      document.getElementById('Dart1header').innerHTML =
          'Dart 1: D' + D1inputscore;
    }
    if (D1Multiplier == 3) {
      document.getElementById('Dart1header').innerHTML =
          'Dart 1: T' + D1inputscore;
    }
    Tempscore = D1Score + D2Score + D3Score;
    document.getElementById('RoundScore').innerHTML =
        'Current Round Score: ' + Tempscore;
  //}
}

function D2ScoreUpdate() {
  // Determine Single, Double, or Triple
  D2Multiplier = Number(
      document.querySelector('input[name="D2Multiplier"]:checked').value);
  // Change selected button to red or green
  document.getElementById(D2DivClass[D2DivClassIndex]).style.backgroundColor =
      D2buttoncolor;

  // Update Score
  //if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
    D2Score = (D2Multiplier * D2inputscore);
    if (D2Multiplier == -1) {
      document.getElementById('Dart2header').innerHTML =
          'Dart 2: -' + D2inputscore;
    }
    if (D2Multiplier == 1) {
      document.getElementById('Dart2header').innerHTML =
          'Dart 2: ' + D2inputscore;
    }
    if (D2Multiplier == 2) {
      document.getElementById('Dart2header').innerHTML =
          'Dart 2: D' + D2inputscore;
    }
    if (D2Multiplier == 3) {
      document.getElementById('Dart2header').innerHTML =
          'Dart 2: T' + D2inputscore;
    }
    Tempscore = D1Score + D2Score + D3Score;
    document.getElementById('RoundScore').innerHTML =
        'Current Round Score: ' + Tempscore;
  //}
}

function D3ScoreUpdate() {
  // Determine Single, Double, or Triple
  D3Multiplier = Number(
      document.querySelector('input[name="D3Multiplier"]:checked').value);
    
    // Change selected button to red or green
    document.getElementById(D3DivClass[D3DivClassIndex]).style.backgroundColor =
        D3buttoncolor;

    // Update Score
    // if (CurrentGame == 501 || CurrentGame == 401 || CurrentGame == 301) {
    D3Score = (D3Multiplier * D3inputscore);

    if (D3Multiplier == -1) {
      document.getElementById('Dart3header').innerHTML =
          'Dart 3: -' + D3inputscore;
    }
    if (D3Multiplier == 1) {
      document.getElementById('Dart3header').innerHTML =
          'Dart 3: ' + D3inputscore;
    }
    if (D3Multiplier == 2) {
      document.getElementById('Dart3header').innerHTML =
          'Dart 3: D' + D3inputscore;
    }
    if (D3Multiplier == 3) {
      document.getElementById('Dart3header').innerHTML =
          'Dart 3: T' + D3inputscore;
    }
    Tempscore = D1Score + D2Score + D3Score;
    document.getElementById('RoundScore').innerHTML =
        'Current Round Score: ' + Tempscore;
  //}
}

function ScoreSubmit() {
  var xhr = new XMLHttpRequest();
  xhr.open(
      'GET',
      '/get?D1Score=' + D1Score + '&D2Score=' + D2Score +
          '&D3Score=' + D3Score + '&D1Multiplier=' + D1Multiplier +
          '&D2Multiplier=' + D2Multiplier + '&D3Multiplier=' + D3Multiplier +
          '&D1inputscore=' + D1inputscore + '&D2inputscore=' + D2inputscore +
          '&D3inputscore=' + D3inputscore,
      true);
    xhr.send();
    
    // Update Header to next player
    HeaderUpdate();

  // Reset buttons
  D1Unclick();
  D2Unclick();
  D3Unclick();

  // Reset Multipliers
  document.getElementById('D1x1').checked = true;
  document.getElementById('D2x1').checked = true;
  document.getElementById('D3x1').checked = true;

  // Reset Headers
  document.getElementById('Dart1header').innerHTML = 'Dart 1: ';
  document.getElementById('Dart2header').innerHTML = 'Dart 2: ';
  document.getElementById('Dart3header').innerHTML = 'Dart 3: ';
  document.getElementById('RoundScore').innerHTML = 'Current Round Score: ';

  // Reset scoring variables
  D1Multiplier = 1;
  D2Multiplier = 1;
  D3Multiplier = 1;
  D1Score = 0;
  D2Score = 0;
  D3Score = 0;
  D1inputscore = 0;
  D2inputscore = 0;
  D3inputscore = 0;
  Tempscore = 0;
  D1DivClassIndex = "";
  D2DivClassIndex = "";
  D3DivClassIndex = '';
}