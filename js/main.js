// Jeu du pendu
let score = 7;
let penality = score - 1; 

alert ("Hangman game");
alert ("Bienvenue dans le jeu du Pendu ");

let arrayWords = ["pollution", "foret" , "arbre" ,"pesticide" , "eolienne" , "proteger","ecosysteme"] ; // tableau des mots


let cptChoice = arrayWords [Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
let sizeWord = cptChoice.length;

console.log(cptChoice + score); // Pour vérifier le mot lors de la construction du code.

prompt(`Choisis une lettre et tente de découvrir le mot caché : ${"_ ".repeat(cptChoice.length)}`)// Affiche des underscores à la place du nombre de lettre.

//////////////////////  en cours de construction  /////////////////////


let splitWord = cptChoice.split("");
let playerChoice = ("b","o","a","e"); // Test alphabet pour choix des lettres 
console.log (splitWord +" " +score); // Pour vérifier le mot lors de la construction du code.
let tape = [];      // Choix du joueur en cours
let re = splitWord.includes(i.length); // renvoi true/false de manière aléatoire. ?

console.log(re);  
