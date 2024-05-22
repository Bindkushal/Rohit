function computeScore(word) {
    let score = 0;
    const letterScores = {
        'a': 1, 'b': 3, 'c': 3, 'd': 2,  'e': 1, 'f': 4, 'g': 2, 'h': 4, 'i': 1,
        'j': 8, 'k': 5, 'l': 1, 'm': 3,  'n': 1, 'o': 1, 'p': 3, 'q': 10, 'r': 1,
        's': 1, 't': 1, 'u': 1, 'v': 4,  'w': 4, 'x': 8, 'y': 4, 'z': 10
    };

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        if (letter >= 'a' && letter <= 'z') {
            score += letterScores[letter];
        }
    }
    return score;
}

function main() {
    const word1 = prompt("Player 1: ");
    const word2 = prompt("Player 2: ");

    const score1 = computeScore(word1);
    const score2 = computeScore(word2);

    if (score1 > score2) {
        console.log("Player 1 wins!");
    } else if (score2 > score1) {
        console.log("Player 2 wins!");
    } else {
        console.log("It's a tie!");
    }
}

main();
