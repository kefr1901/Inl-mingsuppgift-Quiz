class Quiz {
    constructor(name) {

        this.name = name;
        this.questions = [];
        this.correct = 0;
        this.currentQuestion = 0;
        this.howManyQuestions_answer = 0;
        this.count = 0;
        this.point = 0;


    }


    checkboxAnswer() {

        //hämtar hem alla DOM element som en array
        let answers = Array.from(document.getElementsByClassName("checkboxes"));

        answers = answers.map(function (checkbox) {
            return checkbox.checked
        });

        if (answers.filter(function (answer) {
            return answer == true
        }).length == quiz.questions[quiz.currentQuestion].correct.length) {

            quiz.questions[quiz.currentQuestion].correct.forEach(function (i) {
                if (answers[i]) {

                    quiz.point++

                    document.getElementById("points").innerHTML = "du har " + quiz.point + "poäng";
                }
            })
        }
    }

    endGame() {

        if (this.currentQuestion + 1 >= this.questions.length) {
            console.log("DU KLARADE DET"); //kollar när spelet är slut 


            document.getElementsByClassName("container")[0].style.display = "none";
            document.getElementById("show-points").style.display = "block";
            document.getElementById("pointsp").innerHTML = "DU FICK:  " + quiz.point + " POÄNG.";
            
            //document.getElementById("playAgain").innerHTML = "Spela igen";//
            // document.getElementById("points").innerHTML = "DU KLARADE DET, DU FICK " + quiz.point + "POÄNG!!!!!"; 

        }



    }





    /* let score = 0;
     for(let i =0; i < 4; ++i){

         let correctAnswer = this.questions[this.currentQuestion].correct.checkboxes[i] ==
             this.questions[this.currentQuestion].answers[i].correct;

             if(correctAnswer && this.answers[this.currentQuestion].checkboxes[i] ){
                 ++score;
             }else if(!correctAnswer && this.answers[this.currentQuestion].checkboxes[i]){
                 --score;

             }
             
     }

     return score;

     

      

     /*
     // kolla vilken checkbox som är ikryssad och om det är rätt svar, fortsätter till nästa fråga
     //med hjälp av att this.currentQuestion byter value från 0-1 vid första frågan. 
     
     if (this.currentQuestion +1 >= this.questions.length) {
         console.log("DU KLARADE DET"); //kollar när spelet är slut 
     } else {
         
         let argument = (this.questions[this.currentQuestion].correct);
         let index = 0;
         for (let i = 0; i < argument.length; i++) {
             

                 if (document.getElementById("checkbox" + (argument[i])).checked && argument.length == 2) {
                 

                 index += 1;
                 if (index == 2) {
                 console.log("RÄTT SVAR2");
                 //this.currentQuestion++;
                 //this.nextQuestion();

                 }

             
             } else if ((document.getElementById("checkbox" + (argument[i])).checked && argument.length == 1)) {
                 //this.currentQuestion++;
                 //this.nextQuestion();
                 console.log("RÄTT SVAR3");

                
             }

         }


         
     }*/





    // hämtar in 

    nextQuestion() {
        this.whichQuestion();



        //tar bort checkade checkboxes inför nästa fråga
        let checkboxes = Array.from(document.getElementsByClassName("checkboxes"));
        checkboxes.forEach((checkbox) => {
            if (checkbox.type === "checkbox" && checkbox.checked === true) {
                checkbox.click();
            }

            document.getElementById("question").innerHTML = quiz.questions[quiz.currentQuestion].question;
            document.getElementById("category").innerHTML = "Din kategori är: " + quiz.questions[quiz.currentQuestion].category;
            document.getElementById("a1").innerHTML = quiz.questions[quiz.currentQuestion].answers[0];
            document.getElementById("a2").innerHTML = quiz.questions[quiz.currentQuestion].answers[1];
            document.getElementById("a3").innerHTML = quiz.questions[quiz.currentQuestion].answers[2];
            document.getElementById("a4").innerHTML = quiz.questions[quiz.currentQuestion].answers[3];
        })
        /*if (quiz.currentQuestion == quiz.questions.length){
            for(let currentQuestion = 0; currentQuestion < quiz.questions.length; ++currentQuestion){
                let score = quiz.isChecked(currentQuestion);
                console.log(score);
            }
        }*/
    }

    whichQuestion() { //håller redo på x på längden av frågor
        document.getElementById("progress").innerHTML = "fråga " + (this.currentQuestion + 1) + " av " + this.questions.length;
    }

    howManyQuestions() { //frågar hur många frågor användaren vill använda och slicar arreyern med frågor. 
        if (this.howManyQuestions_answer <= this.questions.length) {
            this.questions = this.questions.slice(0, (this.howManyQuestions_answer));

            this.whichQuestion();
        }


    }

    checkboxDisable() {

        //lyssna på om någon klickar på checkbox 
        let checkboxes = Array.from(document.getElementsByClassName("checkboxes"));

        // kollar vilken som är checkad och 
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("click", function () {
                quiz.count = 0;
                for (let i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].type === "checkbox" && checkboxes[i].checked === true) {
                        quiz.count++;
                    }
                }
                if (quiz.count >= quiz.questions[quiz.currentQuestion].correct.length) {
                    checkboxes.forEach((checkbox) => {
                        if (!checkbox.checked) {
                            checkbox.disabled = true;
                        }
                    })
                } else {
                    checkboxes.forEach((checkbox) => {
                        checkbox.disabled = false;
                    })
                }

            });
        });


    }

}





class Question {
    constructor(category, question, answers, correct) {

        this.category = category;
        this.question = question;
        this.answers = answers;
        this.correct = correct;

    }
} 



document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("btn_start").addEventListener("click", function () {

        let name = document.getElementById("name").value;
        document.getElementById("playername").innerHTML = "Spelare:" + name;

        quiz.howManyQuestions_answer = document.getElementById("howManyQ").value;
        document.getElementById("startgame").style.display = "none";
        document.getElementById("showquestion").style.display = "block";

        if( quiz.howManyQuestions_answer <= 0 || quiz.howManyQuestions_answer > 10 ){
            alert("Du har valt för få eller för många frågor, försök igen mellan 1 och 10")
            document.location.reload()
        }else{

        quiz.howManyQuestions();
         quiz.nextQuestion();


        }



        



    })


})






let quiz = new Quiz(name); // sparar namnet i klassen name, gör inget annat med den

//let quiz1 = new Quiz(howManyQuestions_answer);
//alert("hej" + quiz.name + "du har valt att spela med " + quiz.howManyQuestions_answer + " tryck för att starta");

let json = getJSON("http://www.mocky.io/v2/5d9720303b00006600c31437")

for (let question of json) {

    quiz.questions.push(new Question(question.category, question.question, question.answers, question.correct));

}




//quiz.questions.push(question1, question2, question3, question4); //pushar in frågorna i classen Quiz från objektet 
//med frågor fråm klassen questions.

// kör spelet, för att få igång första frågan

/*quiz.howManyQuestions();
quiz.nextQuestion();
quiz.checkboxDisable();*/





document.getElementById("next-btn").addEventListener("click", function () {


    quiz.checkboxAnswer();
    quiz.checkboxDisable();
    quiz.endGame();
    quiz.currentQuestion++;
    quiz.nextQuestion();




})







