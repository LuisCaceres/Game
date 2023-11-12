import { Grid } from "./Grid.js";
import { TreeNode } from "./TreeNode.js";

class Board extends Grid {

    #letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    /**
     * Return a list of tree data structures, each branch in a tree represents a path on this board. 
     * Starting from an arbitrary square, a path is created by concatenating
     * adjacent squares until no other unique adjacent square is found.
     * 
     * For example, given a board with 4 squares and starting from square 'A', 
     * the tree data structure is the following: 
     * 
     *            BOARD:
     *           'A' 'B'
     *           'C' 'D'
     * 
     *     TREE DATA STRUCTURE:
     *      /------'A'------\
     *     /        |        \
     *   'B'       'C'       'D'
     *   / \       / \       / \
     * 'C' 'D'   'B' 'D'   'B' 'C'
     * 
     * @returns {[TreeNode]}
     */
    get paths() {
        // Let `paths` be an initially empty list of paths.
        const trees = [];
        // Let `squares` be a list of squares on this board.
        const squares = this.squares;

        // For each square `square` in `squares`.
        for (const square of squares) {
            // Let `tree` be an intially empty tree data structure with `square` as the root node.
            const tree = new TreeNode(square);

            (function recursion(path, square) {
                // Let `adjacentSquares` be `square`'s adjacent squares on this board.
                const adjacentSquares = square.adjacentSquares.filter(square => square !== null);

                // For each adjacent aquare `adjacentSquare` in `adjacentSquares`.
                for (const adjacentSquare of adjacentSquares) {
                    // Let `sequence` be a sequence of continuous adjacent squares with `square` being the last square in the sequence.
                    const sequence = path.ascendantNodes.map(node => node.value);

                    // if `adjacentSquare` exists in `sequence`.
                    if (sequence.includes(adjacentSquare)) {
                        // Skip `adjacentSquare` and proceed with the next adjacent square.
                        // NOTE: An infinite loop may occur without this conditional statement.
                        continue;
                    }

                    // Add `adjacentSquare` to `path`.
                    const childNode = new TreeNode(adjacentSquare);
                    path.appendChildNodes(childNode);

                    recursion(childNode, adjacentSquare);
                }
            })(tree, square);

            // Add `node` to `paths`.
            trees.push(tree);
        }

        return trees;
    }

    /**
     * 
     */
    fill() {
        // Let `paths` be a list of paths each representing...
        let paths = this.paths.map(tree => tree.branches).flat();

        // Let `blankSquares` be a list of blank squares in this board.
        const blankSquares = this.squares.filter(square => square.value === '');

        // While there are blank squares in this board.
        while (blankSquares.length) {
            // Let `lengths` be a list of the number of squares in each path in `paths`.
            const lengths = paths.map(path => path.length);
            // Let `maxLength` be the highest number in `lengths`.
            const maxLength = Math.max(...lengths);
            // Let `path` be the longest path in `paths`.
            // What if there are no words with the same length as maxLengh?
            const path = paths.find(path => path.length === maxLength);
            // Let `squares` be a list of all the squares in `path`.
            const squares = path.map(path => path.value);
            // Let `letters` be an initially empty list of letters.
            const letters = [];

            // If the number of squares in `squares` is less than or equal to 3.
            if (squares.length <= 3) {
                // Get random letters and add them to `letters`.
                letters.push(...this.#letters.random(maxLength));
            }
            else {
                // Let `word` be a string whose number of letters doesn't exceed the number of squares in `path`.
                // What if there are no words with the same length as maxLengh?
                const word = this.words.filter(word => word.length === maxLength);
                letters.push(word.split(''));
            }

            // For each square `square` in `squares`.
            for (const square of squares) {
                // Associate `square` with a letter from `letters`.
                square.value = letters.shift();
            }
            
            paths = paths.filter(path => squares.includes(path[0]) === false);
        }

        









        // if there are more empty squeres then repeat again
        // Maximum number of words
        // If there are less than 3 words then just fill up with random letters
    }


    //     // find out about how many words there are in the grid
    //     // 
}

export {
    Board,
}