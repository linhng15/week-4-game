$(document).ready(function() {

  var yourName;
  var yourHealth;
  var yourAttack;
  var attackDouble;
  var defenderName;
  var defenderHealth;
  var defenderCounterAttack;
  var tracker = true;
  var usedCharacters;
  var winCounter = 0;
  var defenderHolder; // Refers to all objects 

  //note: User pick "attack power" x2 while defender "Counter Attack Power never changes"
  // The Health Points, Attack Power and Counter Attack Power of each character must differ.
  // if starting pt 180 - damage 25
  // pt 150 - 20
  // pt 120 - 15
  // pt 100 - 5

  var characterA = $('#characterA');
  var characterB = $('#characterB');
  var characterC = $('#characterC');
  var characterD = $('#characterD');
  characterA.data("value", {
    name: "Felonius Gru",
    healthPoints: 180,
    attackPower: 6,
    counterAttackPower: 25
  });
  characterB.data("value", {
    name: "Scarlet Overkill",
    healthPoints: 150,
    attackPower: 5,
    counterAttackPower: 20
  });
  characterC.data("value", {
    name: 'El Macho',
    healthPoints: 120,
    attackPower: 7,
    counterAttackPower: 15
  });
  characterD.data("value", {
    name: 'Tyrannosaurus Rex',
    healthPoints: 100,
    attackPower: 8,
    counterAttackPower: 5
  });

  var characterArray = [characterA.data("value"), characterB.data("value"), characterC.data("value"), characterD.data("value")];


  function setDefender(defender) {
    defenderName = defender.name
    defenderHealth = defender.healthPoints;
    defenderCounterAttack = defender.counterAttackPower;

    console.log(defenderHolder);
    characterNum = characterArray.indexOf(defenderHolder);
    console.log(characterNum + " defender Object");
    characterArray.splice(characterNum, 1);
    console.log(characterArray + "Remaining Enemies");

  }


  //create a fuction based on the provided for your character
  // function -- attack button to minus the pts from both characters
  // also append the result to the displayed 
  $('.character').on('click', function() {
    console.log("clicked button");
    if (tracker) {
      //Create a holder for this information 
      defenderHolder = $(this).data('value');
      console.log(defenderHolder);
      characterNum = characterArray.indexOf(defenderHolder);
      console.log(" defender Object index " +  characterNum);
      characterArray.splice(characterNum, 1);
      console.log(characterArray);

      yourName = defenderHolder.name;
      console.log(yourName);
      yourHealth = $(this).data('value').healthPoints;
      console.log(yourHealth + " your health");
      yourAttack = $(this).data('value').attackPower;
      console.log(yourAttack + " your attack ");
      attackDouble = yourAttack;
      console.log(attackDouble);
      tracker = false; //
      characterNum = characterArray.indexOf();
      console.log(characterNum + " Spot in an array");
      $(this).addClass('move');
      $('.choosenCharacter').append($('.move'));

    } else {
      defenderHolder = $(this).data('value');

      console.log(characterArray);
      setDefender(defenderHolder);
      $(this).addClass('defender');
      $('.defender1').append($('.defender'));
    }
  });


  $('.attack').on('click', function() {
        // if there are still villians to fight continue 

        console.log(characterArray.length + "Remaining opponents left");
        if (yourHealth > 0 && defenderHealth > 0) {
          $(".textInput").html('');
          console.log(yourHealth + "your health " + defenderHealth + " defender health");
          console.log(yourAttack + "your attack " + defenderCounterAttack + "defenderCounterAttack");
          defenderHealth = defenderHealth - yourAttack;
          yourHealth = yourHealth - defenderCounterAttack;
          $(".textInput").html(function() {
            var entry = "<p><h2>" + "You attacked " + defenderName + " for " + yourAttack + "points of damage" + '</h2></p>';
            var secondEntry = "<p><h2>" + defenderName + " Attacked you for " + defenderCounterAttack + "points of damage" + '</h2></p>';
            return entry + secondEntry;
          });
          //Increase attack every attack 
          yourAttack = yourAttack + attackDouble;

        } else if (yourHealth < 0) {
          $('.textInput').html('YOU LOST !!!');
          reset();
        } else if (winCounter === 3) {
          alert("you win!");
        } else {
          winCounter++;
          $('.textInput').html('<p><h2>You won Round ' + winCounter + "! Choose Your next Opponent</h2></p>");
          $('.defender').html('');
        }

  });


  // click option to move the individual character to it's appropriate spot
  // changes the css padding color white (user pick)  border color -green
  //                red (left over)    ---- black
  //                black (defender)    ---- green 

  // need a restart button to appear (lose or win) to reset the frame to the beginning


  // create a reset function
  function reset() {
    //Reset all variables back to zero. 
    yourName = '';
    yourHealth = 0;
    yourAttack = 0;
    defenderName = '';
    defenderHealth = 0;
    defenderCounterAttack = 0;
    attackDouble = 0;
    tracker = true;
  }




})
