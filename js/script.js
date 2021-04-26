//cliccando su via il computer genera 5 numeri random-->creare in html display e bottone
//i numeri generati vengono mostrati per 5 secondi-->setTimeout dopo 5 secondi e dopo devono apparire input
//dopo il quinto numero mostrare per 3 secondi "Calcolo in corso"
//mostrare numeri indovinati, se non ce ne sono mostrare "Hai perso, nessun numero indovinato!"
//opzionale: far apparire bottone start alla fine
//opzionale: fare scegliere all'utente all'inizio con quanti numeri giocare

$(function(){

  var arrNumComputer;
  var arrNumUtente = [];
  var arrRisultato = [];

  reset();

  $('#start').click(function(){

    $(this).hide();

    arrNumComputer = arrNumGenerator(5, 100);
    console.log(arrNumComputer);

    printOutput(arrNumComputer, '#display');

    setTimeout(function(){
      printOutput('Inserisci i numeri', '#display');
      $('#box').show();
    }, 2000);//da sistemare prima di pushare e mettere 5000
    
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
          var numero = arrNumUtente[i];

          if(arrNumComputer.includes(numero)){
            numeroPresente = true;
            arrRisultato.push(numero);
          }
          
        };
       
        console.log(arrRisultato);
      }, 2000);//da sistemare prima di pushare e mettere 5000
    };

  });

});


//FUNZIONI
function reset(){
  printOutput('Concentrati e clicca su VAI!', display);
  $('#box').hide();
;}

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