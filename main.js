

// Two players (player X, and player O) done
//A player can click  in an empty cell in the grid and display (X or O). done.
//If a player forms a row, a column or a diagonal with same letter player wins and the game ends. done
//If the grid is full and there’s no row, column or diagonal of the same letter,the game ends at tie. done 



//[1,2,3], [4,5,6], [7,8,9], // horizontal
//[1,4,7], [2,5,8], [3,6,9], // vertical
// [1,5,9], [3,5,7]           // diagonal
    

//turn of player


 let players= {
    player1:'X',
    player2:'O',
    numberPlay:1,
    scorePlayer1:0,
    scorePlayer2:0
    };
   

    // 1,3,5,7,9 => X
    // 2,4, 6, 8 , =>o
    let turn = function(event){
        if (players.numberPlay %2 === 0 ){
            $(event.target).text(players.player2)
            $("p").text("Next player X")  // //who’s turn is it
    

        }else {
            $(event.target).text(players.player1)
            $("p").text("Next player O")
            
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


   if ( $("#button1").text() + $("#button2").text() +  $("#button3").text() ==="XXX" ||
        $("#button4").text() + $("#button5").text() + $("#button6").text()  ==="XXX" ||
        $("#button7").text() + $("#button8").text() +  $("#button9").text() ==="XXX" || 
        $("#button1").text() + $("#button4").text() +  $("#button7").text() ==="XXX" ||
        $("#button2").text() + $("#button5").text() +  $("#button8").text() ==="XXX" ||
        $("#button3").text() + $("#button6").text() +  $("#button9").text() ==="XXX" ||
        $("#button1").text() + $("#button5").text() +  $("#button9").text() ==="XXX" ||
        $("#button3").text() + $("#button5").text() +  $("#button7").text() ==="XXX" ){
            
            swal("Good job X !", "You Winner!", "success");
            $('.position').off("click");

            players.scorePlayer1 += 1
            $('#count1').html(players.scorePlayer1);
            

           

   } else if ( $("#button1").text() + $("#button2").text() +  $("#button3").text() ==="OOO" ||
        $("#button4").text() + $("#button5").text() + $("#button6").text()  ==="OOO" ||
        $("#button7").text() + $("#button8").text() +  $("#button9").text() ==="OOO" || 
        $("#button1").text() + $("#button4").text() +  $("#button7").text() ==="OOO" ||
        $("#button2").text() + $("#button5").text() +  $("#button8").text() ==="OOO" ||
        $("#button3").text() + $("#button6").text() +  $("#button9").text() ==="OOO" ||
        $("#button1").text() + $("#button5").text() +  $("#button9").text() ==="OOO" ||
        $("#button3").text() + $("#button5").text() +  $("#button7").text() ==="OOO" ){
                
             swal("Good job O !", "You Winner!", "success");
             $('.position').off("click");
            
             players.scorePlayer2 += 1
             $('#count2').html(players.scorePlayer2);
 
            
    } else if(players.numberPlay === 9 ){
        swal(" DRAW !");
    }
}

// $('.position').on("click",findWinner);
    



   
    $("#reset").on("click", function(event){
        $('.position').on("click",turn);
        players.numberPlay = 1;
        $(".position").text("");
});
    

    

    






//sound of click

var sound = document.getElementById("audio");

$('.position').click(function(event){
  event.preventDefault();
  sound.play();
});


