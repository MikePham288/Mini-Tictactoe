// Create some players
const players = [{ name: "Mike", symbol: "X" }]
players.push({ name: "Everyone Else", symbol: "O" });

// Assign players
document.getElementById('p1-name').textContent = players[0].name;
document.getElementById('p2-name').textContent = players[1].name;

// Let's play
const squares = document.querySelectorAll('.square');

// // P1

// squares[4].textContent = players[0].symbol;

// // P2
// squares[0].textContent = players[1].symbol;

let counter = 1;
squares.forEach(square => square.addEventListener('click', () => {
    if (counter <= 9) {
        if (counter % 2 === 0) {
        square.textContent = players[1].symbol   
        } else {
            square.textContent = players[0].symbol   
        }
        counter++;
    }
}))
// So on...!