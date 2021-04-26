$(function(){

  var livello = parseInt(prompt('Livello: con quanti numeri vuoi giocare?'));

  var arrNumComputer;
  var arrNumUtente = [];
  var arrRisultato = [];

  reset();

  $('#start').click(function(){

    $(this).hide();

    arrNumComputer = arrNumGenerator(livello, 100);
    console.log(arrNumComputer);

    printOutput(arrNumComputer, '#display');

    setTimeout(function(){
      printOutput('Inserisci i numeri', '#display');
      $('#box').show();
    }, 5000);
    
  });

  $('#btn').click(function(){

    arrNumUtente.push($('input').val());
    console.log(arrNumUtente);
    $('input').val('');

    if(arrNumComputer.length === arrNumUtente.length){
      $('#box').hide();
      printOutput('Controllo in corso', '#display');

      setTimeout(function(){

        var numeroPresente = false;

        for(var i = 0; i < arrNumUtente.length; i++){

          var numero = parseInt(arrNumUtente[i]);

          if(arrNumComputer.includes(numero)){

            numeroPresente = true;
            arrRisultato.push(numero);
            printOutput(arrRisultato, '#display');

          }else if(!arrNumComputer.includes(numero)){
            
            printOutput('Hai perso, nessun numero indovinato!', '#display');

          };
          
        };
       
        $('#start').text('Ricomincia').show();
        
      }, 3000);

    };

  });

});


//FUNZIONI
function reset(){
  printOutput('Concentrati e clicca su VAI!', display);
  $('#box').hide();
};

function printOutput(text, target){
  $(target).text(text);
};

function arrNumGenerator(num, max){
  var arrNum =[];
  /* ciclo while per creare numeri casuali e pusharli nell'array*/
  while(arrNum.length < num){

    var numRandom = getNumRandom(max);
    if(arrNum.includes(numRandom) === false){    
      arrNum.push(numRandom); 
    }
  }
  return arrNum;
}

function getNumRandom(max){
  return Math.floor(Math.random() * max) + 1;
}