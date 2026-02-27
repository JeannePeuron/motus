function tryWord(word, base) {
  // Word est le mot indiqué par l'utilisateur et le base le mot à deviner.
  // TODO: fix jeu sensible à la casse.
  if (word === base) {
    return true;
  } else {
    let wellPlaced = []; // Créer un tableau pour le lettres bien placées.
    let notInWord = []; // Les lettres qui ne sont pas dans le mot.
    let missplaced = []; // Les lettres mal placées.

    let arrayBase = base.split(""); // Chaque lettre  est séparée "d","i","c"...

    let arrayWord = word.split(""); // Chaque lettre  est séparée

    for (let i = 0; i < arrayBase.length - 1; i++) {
      // On boucle sur toutes les lettres du mot à deviner
      if (arrayBase[i] === arrayWord[i]) {
        // Si la lettre [i] est égale à la lettre du mot donné
        wellPlaced.push(arrayWord[i]); // On pousse la lettre du mot donné dans le tableau des lettres bien placées
      } else {
        missplaced.push(arrayWord[i]); // Sinon on pousse la lettre dans le tableau des lettres mal placées
      }
    }

    for (const char of arrayWord) {
      // On boucle sur le mot donné
      if (arrayBase.includes(char) === false) {
        // Si les lettres contenues dans le mot donnée ne sont pas égales au lettres du mot à deviner
        notInWord.push(char); // On pousse les lettres en question dans le tableau des lettres qui ne sont pas dans le mot.
      }
    }

    return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    };

    // Le return retourne un objet contenant des tableaux !
  }
}

// L'appel de la fonction guess est fait dans le HTML.
// Récupérer le bouton dans le dom et appelé guess au clic avec un addEventListerner et empêcher le rechargement

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  guess();
}); // empêche le rechargement
function guess() {
  //   La fonction qui doit se déclencher au clic sur "ok"

  let base = "dictionnaire"; // Le mot à deviner
  let word = document.getElementById("word").value; // On récupère la valeur de l'input pour le passer en paramètre de la fonction tryWord
  let result = tryWord(word, base); // On stock le return de tryWord dans une variable
  document.getElementById("word").value = ""; // Nécessaire ?
  document.getElementById("try").innerText = word; // On ajoute le mot dans la liste try
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", "); // Vérifier aue ça ajoute bien le tableau pourquoi join ?
  document.getElementById("miss").innerText =
    "Mal placé: " + result.missplaced.join(", "); // Vérifier aue ça ajoute bien le tableau pourquoi join ?
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", "); // Vérifier aue ça ajoute bien le tableau pourquoi join ?
  if (result.wellPlaced.length === base.length) {
    // Si le résultat de wellPlaced est égal à la base on gagne
    document.getElementById("win").innerText = "Vous avez gagné";
  }
}
