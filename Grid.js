import { Square } from "./Square.js";

class Grid extends Array {

    /**
     * Create an instance of Grid.
     * @param {number} numberOfRows - 
     * @param {number} numberOfColumns 
     */
    constructor(numberOfRows, numberOfColumns) {
        super();

        // Let `numberOfRows` be the number of rows in this grid.
        this.numberOfRows = numberOfRows;
        // Let `numberOfColumns` be the number of columns in this grid.
        this.numberOfColumns = numberOfColumns;

        // For each empty slot reserved for a row.
        while (numberOfColumns--) {
            // Let `row` be a new row.
            const row = [];

            // Add `row` to this grid.
            this.push(row);

            // For each empty slot in `row` reserved for a square.
            for (let i = 0; i < numberOfRows; i++) {
                // Let `square` be a new square.
                const square = new Square(this);
                // Add `square` to `row`.
                row.push(square);
            }
        }
    }

    /**
     * Returns a list of the squares contained in this grid.
     * @returns {[Square]}
     */
    get squares() {
        return this.flat();
    }
}

export {
    Grid,
}
