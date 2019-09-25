class Quiz {
    constructor(name) {

        this.name = name;
        this.questions = [];
        this.correct = 0;
        this.currentQuestion = 0;


    }
    isChecked() {

        // kolla vilken checkbox som är ikryssad och om det är rätt svar, fortsätter till nästa fråga
        //med hjälp av att this.currentQuestion byter value från 0-1 vid första frågan. 

        if (this.currentQuestion + 1 >= this.questions.length) {
            console.log("DU KLARADE DET");
        } else {
            if (document.getElementById("checkbox" + (this.questions[this.currentQuestion].correct + 1)).checked){
                this.currentQuestion++;
                this.nextQuestion();

                console.log("RÄTT SVAR");
            }
        }

    }

    // hämtar in 
    
    nextQuestion() {
        this.whichQuestion();

        document.getElementById("question").innerHTML = quiz.questions[quiz.currentQuestion].question;
        document.getElementById("a1").innerHTML = quiz.questions[quiz.currentQuestion].answers[0];
        document.getElementById("a2").innerHTML = quiz.questions[quiz.currentQuestion].answers[1];
        document.getElementById("a3").innerHTML = quiz.questions[quiz.currentQuestion].answers[2];
        document.getElementById("a4").innerHTML = quiz.questions[quiz.currentQuestion].answers[3];


    } 

    whichQuestion(){
        document.getElementById("progress").innerHTML = "fråga " + (this.currentQuestion +1) + " av " + this.questions.length;
    }
}
 




let name = prompt("skriv in ditt namn för att starta spelet!"); //frågar om namnet och ger den en variabel


let quiz = new Quiz(name); // sparar namnet i klassen name, gör inget annat med den


quiz.questions.push(question1, question2, question3, question4); //pushar in frågorna i classen Quiz från objektet 
//med frågor fråm klassen questions.

// kör spelet, för att få igång första frågan


quiz.nextQuestion();






