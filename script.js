class Quiz {
    constructor(name) {

        this.name = name;
        this.questions = [];
        this.correct = 0;
        this.currentQuestion = 0;
        this.howManyQuestions_answer;
        this.count = 0;
    }

    
    isChecked() {
        


        // kolla vilken checkbox som är ikryssad och om det är rätt svar, fortsätter till nästa fråga
        //med hjälp av att this.currentQuestion byter value från 0-1 vid första frågan. 

        if (this.currentQuestion + 1 >= this.questions.length) {
            console.log("DU KLARADE DET"); //kollar när spelet är slut 
        } else {

            let argument = (this.questions[this.currentQuestion].correct);
            let index = 0;
            for (let i = 0; i < argument.length; i++) {


                if (document.getElementById("checkbox" + (argument[i])).checked && argument.length == 2) {


                    index += 1;
                    if (index == 2) {
                        console.log("RÄTT SVAR");
                        this.currentQuestion++;
                        this.nextQuestion();
                        
                    }



                } else if ((document.getElementById("checkbox" + (argument[i])).checked && argument.length == 1)) {
                    this.currentQuestion++;
                    this.nextQuestion();
                    

                }

            }


            /*if (document.getElementById("checkbox" + (this.questions[this.currentQuestion].correct[0])).checked) {
                console.log("RÄTT SVAR");
                this.currentQuestion++;
                this.nextQuestion();



            }*/
        }

    }

    // hämtar in 

    nextQuestion() {
        this.whichQuestion();
        

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
    }

    whichQuestion() {
        document.getElementById("progress").innerHTML = "fråga " + (this.currentQuestion + 1) + " av " + this.questions.length;
    }

    howManyQuestions() {
        if (this.howManyQuestions_answer <= this.questions.length) {
            this.questions = this.questions.slice(0, (this.howManyQuestions_answer));

            this.whichQuestion();
        }


    }

    checkboxDisable() {
        
        //lyssna på om någon klickar på checkbox 
        let checkboxes = Array.from(document.getElementsByClassName("checkboxes"));
        

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("click", function () { 
                quiz.count = 0;
                for (let i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].type === "checkbox" && checkboxes[i].checked === true) {
                        quiz.count++;                           
                    }
                }
                if(quiz.count >= quiz.questions[quiz.currentQuestion].correct.length) {
                    checkboxes.forEach((checkbox) => {
                        if(!checkbox.checked) {
                            checkbox.disabled = true;
                        }
                    })
                } else {
                    checkboxes.forEach((checkbox) => {
                        checkbox.disabled = false;
                    })
                }
                console.log(quiz.count);  
            });
        });

        /*let checkboxes = document.getElementsByClassName("checkboxes").addEventListener("click", function () {
            let count = 0;

            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].type === "checkbox" && checkboxes[i].checked === true) {
                    count++;

                    console.log(count);
                    
                }
            }

        });*/

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




let name = prompt("skriv in ditt namn för att starta spelet!"); //frågar om namnet och ger den en variabel
let quiz = new Quiz(name); // sparar namnet i klassen name, gör inget annat med den
quiz.howManyQuestions_answer = Number(prompt("hur många frågor vill du svara på?"));
alert("hej" + quiz.name + "du har valt att spela med " + quiz.howManyQuestions_answer + " tryck för att starta");

let json = getJSON("http://www.mocky.io/v2/5d91e88c310000e08410cbbb")

for (let question of json) {

    quiz.questions.push(new Question(question.category, question.question, question.answers, question.correct));

}




//quiz.questions.push(question1, question2, question3, question4); //pushar in frågorna i classen Quiz från objektet 
//med frågor fråm klassen questions.

// kör spelet, för att få igång första frågan

quiz.howManyQuestions();
quiz.nextQuestion();

setTimeout(() => {
    quiz.checkboxDisable();
}, 2000)









