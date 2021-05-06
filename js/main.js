let score = 7;
let arrayWords = ["pollution", "foret", "arbre", "pesticide", "eolienne", "proteger", "ecosysteme"]; // tableau des mots
let cptChoice = arrayWords[Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
console.log(cptChoice);
let sizeWord = "_".repeat(cptChoice.length);
sizeWord = sizeWord.split("");



let splitWord = cptChoice.split("");       //Word to find to array
console.log(splitWord);


console.log(sizeWord); // tant que contient _ ou des points

function inputCheck() {
    userChoice.toLowerCase()
    if (userChoice.length != 1) {
        alert("UNE SEULE LETTRE !")
        return false
    }
    return true
}
// Programme Principale 
do {
    console.log(sizeWord.includes("_"));
    userChoice = prompt('Choisis une lettre et tente de découvrir le mot caché :\r' + sizeWord.join(" ") + ": reste " + score + " tentative(s)")// Affiche des underscores à la place du nombre de lettre.
    let lettre = inputCheck(); // Fonction qui vérifie qu'une seule lettre est rentré
    if (lettre) {              // var lettre doit contenir true

        for (i = 0; i < splitWord.length; i++) {
            let letter = splitWord[i]
            if (letter == userChoice) {
                console.log("contient " + userChoice);
                sizeWord[i] = userChoice;          // replace la lettre à sa place
            } else {
            } score--
        }

    }
} while (score > 0 && sizeWord.includes("_"))  // Boucle pour que le jeu continue 

///////////////////////////// SCORE A AJOUTER  ///////////////////////////////////////////////////////////////////////////////////////////