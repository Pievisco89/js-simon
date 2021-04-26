$(function(){

  var arrNumComputer;
  var arrNumUtente = [];
  var arrRisultato = [];

  reset();

  //click su start e scateno gli eventi
  $('#start').click(function(){

    $(this).hide();
    //uso la funzione creata per generare numeri random e pusharli nell'arrNumComputer
    arrNumComputer = arrNumGenerator(5, 100);
    console.log(arrNumComputer);
    //stampo arrNumComputer
    printOutput(arrNumComputer, '#display');
    //vedo arrNumComputer per 5 secondi, alla fine deve apparire box
    setTimeout(function(){
      printOutput('Inserisci i numeri', '#display');
      $('#box').show();
    }, 5000);
    
  });

  //click su invia
  $('#btn').click(function(){
    //pusho valore input nell'arrNumUtente
    arrNumUtente.push($('input').val());
    console.log(arrNumUtente);
    $('input').val(''); //svuoto sempre l'input ad ogni click su invia

    //quando i due array hanno lenght uguale sparisce box con input e bottone
    if(arrNumComputer.length === arrNumUtente.length){
      $('#box').hide();
      printOutput('Controllo in corso', '#display'); //stampo controllo in corso

      //dopo 3 secondi di controllo o stampo arrRisultato o stampo sconfitta utente
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
       
        //ricompare bottone start con scritta ricomincia
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
  };
  return arrNum;
};

function getNumRandom(max){
  return Math.floor(Math.random() * max) + 1;
};