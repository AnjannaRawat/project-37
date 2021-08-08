class Questions{

    constructor(){

        this.input1=createInput("Enter Your Name!");
        this.button= createButton("Submit");
        this.input2=createInput("Enter Your Option");


    }

    Hide(){

        this.input1.hide();
        this.button.hide();
        this.input2.hide();

    }

    display(){

        var title= createElement('h1');
        title.html("My Quiz Game");
        title.position(350,50);

        var question= createElement('h2');
        question.html("Question:- What starts with T, ends with T and is full of tea?");
        question.position(150,130);

        var option1= createElement('h3');
        option1.html("1. Tent");
        option1.position(150,160);

        var option2= createElement('h3');
        option2.html("2. Taunt");
        option2.position(150,190);

        var option3= createElement('h3');
        option3.html("3. Teapot");
        option3.position(150,220);

        var option4= createElement('h3');
        option4.html("4. Torrent");
        option4.position(150,250);

        this.input1.position(200,300);
        this.input2.position(400,300);
        this. button.position(350,350);

        this.button.mousePressed(()=>{

            this.input1.hide();
            this.input2.hide();
            this. button.hide();

            contestant.name=this.input1.value();
            contestant.option= this.input2.value();

            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

            var greeting=createElement("h2");
            greeting.html(contestant.name +" chose option:"+ contestant.option);
            greeting.position(800,400);
        });
    }
}