class Contestant{

    constructor(){

        this.index=null;
        this.option=0;
        this.name=null;
    }

    getCount(){

        var contestantCountRef=database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{

            contestantCount=data.val();

        })
    }

    updateCount(count){

        database.ref('/').update({
            contestantCount:count
        });
    }

    update(){

        var contestantIndex="contestants/contestant"+this.index;
        database.ref(contestantIndex).set({
            name:this.name,
            option: this.option
        })
    }

    static getcontestantsInfo(){
        var contestantsInfoRef=database.ref("contestants");
        contestantsInfoRef.on("value",(data)=>{
            allContestants=data.val()
        })
    }
}