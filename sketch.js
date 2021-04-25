var canvas,database,playerCount,backgroundImage;
var gameState=0;
var form,player,game;


function setup(){
  database = firebase.database();
  
  createCanvas(400,400);

 game=new Game();
 game.getState();
 game.start();

}

function draw(){
  background("white");
  
   if(playerCount===4){
     game.update(1)
     
   } 
   if(gameState===1){
     clear();
     game.play();
   }
  
}

