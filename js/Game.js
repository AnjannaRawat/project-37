class Game{

    constructor(){

    }

    getState(){

        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
            }
            questions= new Questions();
            questions.display();
        }
    }

    play(){
        
        questions.Hide();
        
        Contestant.getcontestantsInfo();
        if(allContestants!==undefined){
            var contestant_position=200;
            for(var i in allContestants){
                var correctOption="3";
                if(correctOption === allContestants[i].option){
                    fill("green")
                }
                else{
                    fill("red");
                }
                contestant_position+=20;
                textSize(17);
                text(allContestants[i].name+" : "+allContestants[i].option, 320, contestant_position);

            }
        }
        /*if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.update();

        }*/
    }
}