//Тоглоом дууссан эсэх
var isNewGame;
var diceDom= document.querySelector('.dice');
var roundScore,activePlayer,scores;

//Тоглоом эхлүүлэх
initGame();

function initGame(){
    isNewGame=true;
 //Тоглогчийн ээлжийг хадгалах  хувьсагч 1рх тоглогч 0 2-рх тоглогч нь 1
 activePlayer =0;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
scores=[0,0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;
//Програм эхлэх бэлтгэл
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
//Тоглогчдын нэрийг буцааж гаргах
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display ="none"

}
// Start new Game EventListener
// document.querySelector('.btn-new').addEventListener('click',function(){
//     initGame();
//   })
document.querySelector('.btn-new').addEventListener('click',initGame)
  
// Шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(isNewGame){
        //1-6 доторх санамсаргүй нэг тоог гаргах
    var diceNumber =Math.floor(Math.random()*6)+1;  

    // Шооны зургийг харуулна
    diceDom.style.display ="block"
    // Шооны тоонд харгалзах зургийг харуулна
    diceDom.src="dice-"+ diceNumber +".png";
    
    // Тоглогчийн ээлжийн оноог өөрчилнө 1 -с их бол оноог нэмэгдүүлнэ.
    if(diceNumber!==1)
    {
        // 1-с их буусан тоог нэмнэ
        roundScore+=diceNumber;
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }
    else{
        // 1 буусан бол 0-лэнэ
        switchToNextPlayer();
    }
    }
    else{
        alert("Тоглоом дууссан байна. New Game товчийг дарж шинээр эхэлнэ үү")
    }
});
// hold eventlistener
document.querySelector('.btn-hold').addEventListener('click',function(){
    // Active player points to add global points and current point 0 and change active player
    if(isNewGame){
        scores[activePlayer] +=roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100){
        isNewGame=false;
        
            document.getElementById('name-'+activePlayer).textContent="WINNER!!!";
            var classdata =  document.querySelector(".player-"+activePlayer+"-panel").classList;
           classdata.add("winner");
           classdata.remove("active");    
           document.getElementById("current-"+activePlayer).textContent="0";
           diceDom.style.display ="none"
    }
    else{
        switchToNextPlayer();
    }
    } else{
        alert("Тоглоом дууссан байна. New Game товчийг дарж шинээр эхэлнэ үү")
    }
    
});
//Тоглогчийн ээлжийг шилжүүлэх
function switchToNextPlayer(){
    roundScore=0;
    document.getElementById("current-"+activePlayer).textContent='0';
    //Тоглогч шилжүүлж байна
    activePlayer===0?(activePlayer=1):(activePlayer=0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display="none";
    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");
}
