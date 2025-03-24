function createGrid(gridSize) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';
    const squareSize = 960 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = getRandomColor();
            darkenSquare(div);
        });
        
        container.appendChild(div);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function darkenSquare(div) {
    let currentOpacity = div.style.opacity || 1;
    if (currentOpacity > 0.1) {
        div.style.opacity = currentOpacity - 0.1;
    }
}

document.getElementById('change-grid-btn').addEventListener('click', function() {
    const gridSize = parseInt(prompt("Enter the number of squares per side (max 100):"));
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

createGrid(16);
