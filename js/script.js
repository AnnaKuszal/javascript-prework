function playGame(playerInput){
  console.log('wywołano playGame');
  clearMessages();

  function getMoveName(argMoveId){
    console.log('wywołano getMoveName');
    console.log('argumenty: ' + argMoveId);

    if(argMoveId === 1){
      return 'kamień';
    } else if(argMoveId === 2){
      return 'papier';
    } else if(argMoveId === 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }


  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('Wylosowana opcja to: ' + computerMove);

  printMessage('Mój ruch to: ' + computerMove);

  const playerMove = getMoveName(playerInput);
  console.log('Wylosowana opcja to: ' + playerMove);

  printMessage('Twój ruch to: ' + playerMove);


  function displayResult(argComputerMove, argPlayerMove) {
    console.log('wywołano displayResult');
    console.log('moves:', argComputerMove, argPlayerMove);

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    
    if (
      (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
      (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
      (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
      ) {
          printMessage('Ty wygrywasz!');
      } else if(
      (argComputerMove === 'papier' && argPlayerMove === 'kamień') ||
      (argComputerMove === 'nożyce' && argPlayerMove === 'papier') ||
      (argComputerMove === 'kamień' && argPlayerMove === 'nożyce')
      ) {
          printMessage('Ja wygrywam!');
      } else if(argComputerMove === argPlayerMove){
          printMessage('Remis!');
      } else if(argPlayerMove === 'nieznany ruch'){
          printMessage('Dokonałeś nieprawidłowego wyboru.');
      }
  }


  displayResult(computerMove, playerMove);

  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

