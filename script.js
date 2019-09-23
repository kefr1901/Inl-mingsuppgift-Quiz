class Quiz {
    constructor(name) {

        this.name = name;
        this.questions = [];
        this.correct = 0;
        this.currentQuestion = 0;


    }
    isChecked() {




        if (this.currentQuestion + 1 >= this.questions.length) {
            console.log("DU KLARADE DET");
        } else {
            if (document.getElementById("checkbox" + (this.questions[this.currentQuestion].correct + 1)).checked) {
                this.currentQuestion++;
                this.nextQuestion();

                console.log("RÄTT SVAR");
            }
        }





    }

    nextQuestion() {

        document.getElementById("question").innerHTML = quiz.questions[quiz.currentQuestion].question;
        document.getElementById("a1").innerHTML = quiz.questions[quiz.currentQuestion].answers[0];
        document.getElementById("a2").innerHTML = quiz.questions[quiz.currentQuestion].answers[1];
        document.getElementById("a3").innerHTML = quiz.questions[quiz.currentQuestion].answers[2];
        document.getElementById("a4").innerHTML = quiz.questions[quiz.currentQuestion].answers[3];


    }

}




let name = prompt("skriv in ditt namn för att starta spelet!"); //frågar om namnet och ger den en variabel

let quiz = new Quiz(name); // sparar namnet i klassen name

quiz.questions.push(question1, question2, question3, question4); //pushar in frågorna i classen

// kör spelet första frågan

quiz.nextQuestion();


// kolla vilken som är ikryssad









