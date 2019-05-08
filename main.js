

// Two players (player X, and player O) done
//A player can click  in an empty cell in the grid and display (X or O). done.
//If a player forms a row, a column or a diagonal with same letter player wins and the game ends. done
//If the grid is full and there’s no row, column or diagonal of the same letter,the game ends at tie. done 



//[1,2,3], [4,5,6], [7,8,9], // horizontal
//[1,4,7], [2,5,8], [3,6,9], // vertical
// [1,5,9], [3,5,7]           // diagonal
    

//turn of player


 let players= {
    player1: " ",
    player2: " ",
    numberPlay:1,
    scorePlayer1:0,
    scorePlayer2:0
    };
   
   
const tokens=function(event){
    let input = prompt("You have to insert 'X' or 'O' ")
  if ( input.toUpperCase() === "X"){
      players.player1 = "X";
      players.player2 = "O";
}else if (input.toUpperCase()  === "O"){
      
      players.player1  = "O";
      players.player2  = "X";
}
}
tokens();    

 




    // 1,3,5,7,9 => X
    // 2,4, 6, 8 , =>o
    let turn = function(event){


        if (players.numberPlay %2 === 0 ){
            $(event.target).text(players.player2)
            $("p").text("Next player " + players.player1)  // //who’s turn is it

        }else {
            $(event.target).text(players.player1)
            $("p").text("Next player " + players.player2)
            
        }
        $(event.target).off("click")
        findWinner();
        console.log(players.numberPlay);
        players.numberPlay += 1;
        
        }

        $('.position').on("click",turn);



//the result of the game
let playerscore= 0;


const findWinner =function(){

    let correctValue = ["XXX","OOO"];
    correctValue.forEach(function(both){
        if ( $("#button1").text() + $("#button2").text() +  $("#button3").text() ===both ||
        $("#button4").text() + $("#button5").text() + $("#button6").text()  ===both ||
        $("#button7").text() + $("#button8").text() +  $("#button9").text() ===both || 
        $("#button1").text() + $("#button4").text() +  $("#button7").text() ===both ||
        $("#button2").text() + $("#button5").text() +  $("#button8").text() ===both ||
        $("#button3").text() + $("#button6").text() +  $("#button9").text() ===both ||
        $("#button1").text() + $("#button5").text() +  $("#button9").text() ===both ||
        $("#button3").text() + $("#button5").text() +  $("#button7").text() ===both ){
            if(both === "XXX"){
                swal("Good job X !", "You Winner!", "success");
                $('.position').off("click");
                players.scorePlayer1 += 1
                $('#count1').html(players.scorePlayer1);
            }else{
                swal("Good job O !", "You Winner!", "success");
                  $('.position').off("click");
                  players.scorePlayer2 += 1
                 $('#count2').html(players.scorePlayer2);
            }      
   } else if(players.numberPlay === 9 ){
    swal(" DRAW !");
}


    });


}


//play again function
   
    $("#reset").on("click", function(event){
        $('.position').on("click",turn);
        players.numberPlay = 1;
        $(".position").text("");
        

});

    

    

// play with computer
let random = Math.floor((Math.random() * 9) + 1);
let r;
$(".com").on("click" , function(event){

    if ( random % 2 === 0){
        players.numberPlay = random;
        console.log("lll");
    }
})



//sound of click

var sound = document.getElementById("audio");

$('.row').click(function(event){
  event.preventDefault();
  sound.play();
});


