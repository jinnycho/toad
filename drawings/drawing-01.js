import * as toad from "../lib/toad.js";

/**
 * Making a chess board
 */
function main() {
    const squareWidth = 40
    const gridSize = 8

    // toad.drawRectangle({width: squareWidth * gridSize, height: squareWidth * gridSize, x: 30, y: 30});
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if ((i+j)%2 !== 0) {
                toad.fill("black", () => {
                    toad.drawRectangle({ width: squareWidth, height: squareWidth, x: 30 + (i * squareWidth), y: 30 + (j * squareWidth)});
                })
            }
        }
    }
}

window.main = main