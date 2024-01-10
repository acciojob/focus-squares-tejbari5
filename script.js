//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        // Change the color of the other squares to Coffee
        squares.forEach(otherSquare => {
            if (otherSquare !== square) {
                otherSquare.style.backgroundColor = '#6F4E37';
            }
        });
    });

    square.addEventListener('mouseleave', () => {
        // Reset the color of all squares to Lavender
        squares.forEach(otherSquare => {
            otherSquare.style.backgroundColor = '#E6E6FA';
        });
    });
});
