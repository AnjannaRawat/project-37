var cavas;
var contestantCount,allContestants,database,gameState=0,option=0,contestant
var questions,contestant,game;

function setup(){

  canvas = createCanvas(1000,600);

  database= firebase.database();

    game= new Game();
    game.getState();
    game.start();
}


function draw(){

  background("pink");

  if(contestantCount===2){
    game.update(1);
}
if(gameState===1){
    clear();
    game.play();
}

  
}
