// Jeu du pendu
let score = 7;
let penality = score - 1; 
let i;

alert ("Hangman game");
alert ("Bienvenue dans le jeu du Pendu ");

    let arrayWords = ["pollution", "foret" , "arbre" ,"pesticide" , "eolienne" , "proteger","ecosysteme"] ; // tableau des mots


    let cptChoice = arrayWords [Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
    let sizeWord = cptChoice.length;

  console.log(cptChoice + score); // Pour vérifier le mot lors de la construction du code.

prompt(`Choisis une lettre et tente de découvrir le mot caché : ${"_ ".repeat(cptChoice.length)}`)// Affiche des underscores à la place du nombre de lettre.
let splitWord = cptChoice.split("");
let playerChoice = ["b","o","a","e"];
console.log (splitWord +" " +score); // Pour vérifier le mot lors de la construction du code.

let tape = [];      // Choix du joueur en cours
let re = splitWord.includes(tape);
console.log(re);
if (splitWord.includes(tape)) ;


 
function counter(){     // Comptage du score et fin du jeu en cours
   
    if (playerChoice != splitWord) {
         penality;
    }  
    if (score === 0){
        return alert(" PEERDU ! Tu as été pendu!! ") 
    }
}
