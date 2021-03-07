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

function noCheatOneLetter (oneLetter){
    while(oneLetter.length > 1) {
        oneletter = prompt("Bah oui bien sûr !! C'est pas parce que je suis un Développeur Web Junior que tu dois commencer à tricher...Choisis une lettre merci !");
    }
    return oneLetter
};
