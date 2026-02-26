function tryWord(word, base) {
  // Word est le mot indiqué par l'utilisateur et le base le mot à deviner.
  // TODO: fix jeu sensible à la casse.
  if (word === base) {
    return true;
  } else {
    let wellPlaced = []; // Créer un tableau pour le lettres bien placées.
    let notInWord = []; // Les lettres qui ne sont pas dans le mot.
    let missplaced = []; // Les lettres mal placées.

    let arrayBase = base.split("");
    console.log(arrayBase); // Je met un console.log parce que je ne sais pas ce que ça donne
    let arrayWord = word.split("");

    for (let i = 0; i < arrayBase.length - 1; i++) {
      if (arrayBase[i] === arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else {
        missplaced.push(arrayWord[i]);
      }
    }

    for (const char of arrayWord) {
      if (arrayBase.includes(char) === false) {
        notInWord.push(char);
      }
    }

    return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    };
  }
}

function guess() {
  let base = "dictionnaire";
  let word = document.getElementById("word").value;
  let result = tryWord(word, base); // Le return ne la fonction est trois tableaux.
  document.getElementById("word").value = "";
  document.getElementById("try").innerText = word;
  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerText =
    "Mal placé: " + result.missplaced.join(", ");
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", ");
  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerText = "Vous avez gagné";
  }
}

// L'appel de la fonction guess est fait dans le HTML.
// Récupérer le bouton dans le dom et appelé guess au clic avec un addEventListerner
