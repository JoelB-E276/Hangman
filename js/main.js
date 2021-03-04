// Jeu du pendu

alert ("Hangman game");
alert ("bienvenue");

var arrayWords = [["mots"] , ["Mot2"]] ; // tableau des mots
arrayWords.split([,[0]]);
console.log (arrayWords)

var cptChoise = arrayWords[Math.floor(Math.random() * arrayWords.length)]; // choix aléatoire des mots
 
console.log(cptChoise);

// Affichage des lettres du mot par underscore dans boite de dialogue (prompt)

// joueur choisis une lettre, "If" c'est bon le joueur continu. "Else" perd un point (compteur max  ===7) 

//If nombre de lettre a trouver = 0, joueur gagne. Else compteur ===7, le joueur perd.