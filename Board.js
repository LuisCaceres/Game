import { Grid } from "./Grid.js";
import { List } from "./List.js";
import { TreeNode } from "./TreeNode.js";

class Board extends Grid {

    static #alphabet = new List('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    static #maximumNumberOfLettersInAWord = 9;

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
        const paths = [];
        // Let `squares` be a list of squares on this board.
        const squares = this.squares;

        // For each square `square` in `squares`.
        for (const square of squares) {
            // Let `tree` be an intially empty tree data structure with `square` as the root node.
            const treeNode = new TreeNode(square);

            (function recursion(treeNode, square) {
                // Let `adjacentSquares` be `square`'s adjacent squares on this board.
                const adjacentSquares = square.adjacentSquares.filter(square => square !== null);

                // For each adjacent aquare `adjacentSquare` in `adjacentSquares`.
                for (const adjacentSquare of adjacentSquares) {
                    // Let `sequence` be a sequence of continuous adjacent squares with `square` being the last square in the sequence.
                    const sequence = treeNode.ascendantNodes.map(node => node.value);

                    // if `adjacentSquare` already exists in `sequence`.
                    if (sequence.includes(adjacentSquare)) {
                        // Skip `adjacentSquare` and proceed with the next adjacent square.
                        // NOTE: An infinite loop may occur without this conditional statement.
                        continue;
                    }

                    // Add `adjacentSquare` to `path`.
                    const childNode = new TreeNode(adjacentSquare);
                    treeNode.appendChildNodes(childNode);

                    if (childNode.ascendantNodes.length < Board.#maximumNumberOfLettersInAWord) {
                        recursion(childNode, adjacentSquare);
                    }
                    else {
                        // Add `path` to `paths`.
                        paths.push(childNode.ascendantNodes);
                    }
                }
            })(treeNode, square);
        }

        return paths;
    }

    /**
     * 
     */
    fill() {
        // Let `paths` be a list of paths.
        let paths = this.paths;
        // Let `blankSquares` be a list of blank squares in this board.
        const blankSquares = this.squares.filter(square => square.value === '');

        // While there are blank squares in this board.
        while (blankSquares.length) {    
            // Let `currentPath` be the longest path in `paths`.
            const currentPath = new List(...paths).at(-1).sample();
            // Let `squares` be a list of all the squares in `currentPath`.
            const currentSquares = currentPath.map(path => path.value);
            // Let `letters` be an initially empty list of letters.
            const letters = [];

            // If the number of squares in `currentPath` is less than or equal to 3.
            if (currentPath.length <= 3) {
                // Get the same number of letters from `alphabet` as the number of squares in `path`.
                // Add those letters to `letters`.
                letters.push(...Board.#alphabet.sample(maxLength));
            }
            else {
                // Let `word` be a string whose number of letters doesn't exceed the number of squares in `path`.
                // What if there are no words with the same length as maxLengh?
                const words = this.words.filter(word => word.length === currentPath.length);
                const word = words.sample();
                letters.push(...word.split(''));
            }

            // For each square `square` in `squares`.
            for (const square of currentSquares) {
                // Associate `square` with a letter from `letters`.
                square.value = letters.shift();
            }

            for (const paths of currentPath) {
                currentPath.trim(square => currentSquares.includes(square));
            }
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