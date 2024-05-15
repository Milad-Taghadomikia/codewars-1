// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

function rps(player1, player2) {
    if (player1 === player2) {
        return "Draw";
    }

    if ((player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")) {
        return "Player1 won";
    } else {
        return "Player2 won";
    }
}


// Complete the solution so that it reverses the string passed into it. and run that

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(str) {
    return str.split('').reverse().join('');
}


// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value. and run that

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]


function toggleOnFlick(items) {
    let result = [];
    let currentBool = true;

    for (let item of items) {
        if (item === 'flick') {
            result.push(currentBool);
            currentBool = !currentBool;
        } else {
            result.push(currentBool);
        }
    }

    return result;
}

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

const quote = "How can mirrors be real if our eyes aren't real";
console.log(toJadenCase(quote));

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }
    return result;
}
