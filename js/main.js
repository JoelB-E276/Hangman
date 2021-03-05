// Jeu du pendu

alert ("Hangman game");
alert ("Bienvenue dans le jeu du Pendu ");

let arrayWords = ["pollution", "foret" , "arbre" ,"pesticide" , "eolienne" , "proteger","ecosysteme"] ; // tableau des mots


let cptChoice = arrayWords [Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
let sizeWord = cptChoice.length;
//console.log(cptChoice) // cptChoise = string
console.log(cptChoice);

prompt(`Choisis une lettre et tente de découvrir le mot caché : ${"_ ".repeat(cptChoice.length)}`)
let splitWord = cptChoice.split("");
let playerChoice = ["b","o","a","e"];
console.log (splitWord);

let tape = [];
let re = splitWord.includes(tape);
console.log(re);
if (splitWord.includes(tape)) ;


// boucle for pour décompte ?
//If nombre de lettre a trouver = 0, joueur gagne. Else compteur ===7, le joueur perd