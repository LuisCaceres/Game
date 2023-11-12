class Square {
    // static #positions = {
    //     'top-left': 0,
    //     'top': 1,
    //     'top-right': 2,
    //     'left': 3,
    //     'right': 5,
    //     'bottom-left': 6,
    //     'bottom': 7,
    //     'bottom-right': 8,
    // };

    /**
     * Creates an instance of Square.
     * @param {Grid} grid The grid that contains this square.
     */
    constructor(grid) {
        // Let `parentRow` be the row that contains this square.
        this.parentRow = grid.at(-1);
        // Let `parentGrid` be the grid that contains `parentRow`.
        this.parentGrid = grid;

        // // Object.defineProperty(this, 'id', {
        // //     value: grid.flat().length + 1,
        // //     writable: false,
        // // });

        this.value = '';
    }

    /**
     * Return a list of adjacent squares of this square. There are 8 adjacent squares at most.
     * @returns {[Square | null]}
     */
    get adjacentSquares() {
        // Let `parentRow` be the row that contains this square.
        // Let `index1` be the position of `parentRow` amongst its sibling rows. 
        const index1 = this.parentGrid.indexOf(this.parentRow);
        
        // Let `index2` be the position of this square in `parentRow` amongst its sibling squares. 
        const index2 = this.parentRow.indexOf(this);

        // Let `upperRow` be the row immediately above `parentRow`.
        const upperRow = this.parentGrid[index1 - 1];
        // Let `row` be `parentRow`.
        const row = this.parentRow;
        // Let `lowerRow` be the row immediately below `parentRow`.
        const lowerRow = this.parentGrid[index1 + 1];

        // Let `rows` be a list of rows.
        // Add `upperRow`, `row` and `lowerRow` to `rows`.
        const rows = [upperRow, row, lowerRow];

        // Let `adjacentSquares` be an initially empty list of squares.
        const adjacentSquares = [];

        // For each row `row` in `rows`
        for (const row of rows) {
            // Let `adjacentSquare1` be the square in `row` whose index is the same as `index2`.
            // Retrieve the square immediately before `adjacentSquare1`.
            // Retrieve the square immediately after `adjacentSquare1`.
            // Add those 3 squares to `adjacentSquares`.
            adjacentSquares.push(row?.[index2 - 1] || null);
            adjacentSquares.push(row?.[index2] || null);
            adjacentSquares.push(row?.[index2 + 1] || null);
        }

        // Remove this square from `adjacentSquares`. It doesn't make sense to add this square to this list.
        adjacentSquares.splice(4, 1);

        return adjacentSquares;
    }

    // getAdjacentSquare(position) {
    //     // Let `adjacentSquares` be
    //     const adjacentSquares = this.getAdjacentSquares();
    //     const adjacentSquare = adjacentSquares.at(Square.#positions[position]);
    //     return adjacentSquare;
    // }
}

export {
    Square,
}

squares.sort(square => square);