// Jeu du pendu
/* let score = 7;
let penality = score - 1; 

alert ("Hangman game");
alert ("Bienvenue dans le jeu du Pendu ");

let arrayWords = ["pollution", "foret" , "arbre" ,"pesticide" , "eolienne" , "proteger","ecosysteme"] ; // tableau des mots


let cptChoice = arrayWords [Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
let sizeWord = cptChoice.length;
console.log(cptChoice)

// Affichage du mot aléatoire en underscore
var chars = {'a':'_ ','b':'_ ','c':'_ ','d':'_ ','e':'_ ','f':'_ ','g':'_ ','h':'_ ','i':'_ ','j':'_ ','k':'_ ','l':'_ ','m':'_ ','n':'_ ','o':'_ ','p':'_ ','q':'_ ','r':'_ ','r':'_ ','s':'_ ','t':'_ ','u':'_ ','v':'_ ','w':'_ ','x':'_ ','y':'_ ','z':'_ '};
cptChoice = cptChoice.replace(/[abcdefghijklmnopqrstruvwxyz]/g, m => chars[m]);
prompt ("le mot à trouver est : " + (cptChoice));

console.log(cptChoice)
// vérification de la lettre choisie par le joueur
//function updateGuess(arraywords, playerChoice, chars) {
//    for (let i = 0; i < arraywords.length; i++) {
//      if(arraywords[i] === chars) {
//        playerChoice[i] = chars
//      }
//    }
//  }
//  console.log(updateGuess());
  


let playerChoice = [];

if (playerChoice == cptChoice.includes(0)){
    console.log("ok");
   } else if (playerChoice != cptChoice.includes(0));{
      console.log("no");
   }



 */

//console.log(cptChoice + score); // Pour vérifier le mot lors de la construction du code.

//wordToFind = fillString("_", word.length);

//prompt(wordToFind);

//prompt(`Choisis une lettre et tente de découvrir le mot caché : ${"_ ".repeat(cptChoice.length)}`)// Affiche des underscores à la place du nombre de lettre.

//////////////////////  en cours de construction  /////////////////////

let tape = [];      // Choix du joueur en cours
let score = 7;
let penality = score - 1; 
//alert ("Hangman game");
//alert ("Bienvenue dans le jeu du Pendu ");
let arrayWords = ["pollution", "foret" , "arbre" ,"pesticide" , "eolienne" , "proteger","ecosysteme"] ; // tableau des mots
let cptChoice = arrayWords [Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
//let sizeWord = cptChoice.length;
let sizeWord =  "_ ".repeat(cptChoice.length);

console.log(cptChoice +" "+ score); // Pour vérifier le mot lors de la construction du code.
//var userChoice = prompt(`Choisis une lettre et tente de découvrir le mot caché : ${"_ ".repeat(cptChoice.length)}`)ES6
let userChoice = prompt('Choisis une lettre et tente de découvrir le mot caché :\r' + sizeWord)// Affiche des underscores à la place du nombre de lettre.
let arrUserChoice = userChoice.split();  //input to array
let splitWord = cptChoice.split();       //Word to find to array
console.log (splitWord +" " +score); // Pour vérifier le mot lors de la construction du code.
//let re = splitWord.includes(i.length); // renvoi true/false de manière aléatoire. ?

console.log(splitWord);
console.log(arrUserChoice);

//////////////////////  en cours de construction  /////////////////////
for(i=0;i<splitWord.length;i++){
 var letter = splitWord[i]
 if(letter == userChoice)
    console.log("contient " + userChoice);    
}
let rep = cptChoice.indexOf(userChoice)
let indexWord = [];
while(rep!= -1){
   indexWord.push(rep)
   rep = cptChoice.indexOf(userChoice, rep+1)
   sizeWord.length[indexWord] == letter;
   prompt(sizeWord)

}
console.log(indexWord);


   

//prompt(sizeWord+ userChoice.replace(userChoice, userChoice))
