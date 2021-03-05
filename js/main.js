// Jeu du pendu

alert ("Hangman game");
alert ("bienvenue");

let arrayWords = ["pollution", "foret" , "arbre" ,"pesticide" , "eolienne" , "proteger","ecosysteme"] ; // tableau des mots


let cptChoise = arrayWords [Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
let sizeWord = cptChoise.length;
console.log(cptChoise)



//If nombre de lettre a trouver = 0, joueur gagne. Else compteur ===7, le joueur perd.