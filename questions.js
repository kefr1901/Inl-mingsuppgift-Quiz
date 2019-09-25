class Question{
    constructor(category,question,answers,correct){

        this.category = category;
        this.question = question;
        this.answers = answers;
        this.correct = correct;

    }
}


let question1 = new Question( 
 "fruits",
 "what colour is a banana?",
 ["green", "black", "white", "yellow"],
 3
);

let question2 = new Question(
    "math",
    "what is 2+2",
    ["4", "red", "car", "16"],
    0
   );

   let question3 = new Question(
    "IT",
    "who is bill gates",
    ["a homless person", "IT-guru", "guy working in the local store", "trumps cusin"],
    1
   );

   let question4 = new Question(
    "schools",
    "what is nackademin?",
    ["A school", "A phone", "A carmodel", "A person"],
    4
   );

   