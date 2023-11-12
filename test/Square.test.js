import assert from 'assert';

import { Square } from '../Square.js';
import { Grid } from '../Grid.js';

const grid = new Grid(4, 4);
const {squares} = grid;

const values = ['A', 'B', 'C', 'D',
                'E', 'F', 'G', 'H',
                'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P'];

for (const square of squares) {
  square.value = values.shift();
}

describe('Square', function () {
  it('should create an instance of Square', function () {
    const [square] = squares;

    assert.equal(square instanceof Square, true);
  });

  describe('getAdjacentSquares()', function () {
    it('should return a list of adjacent squares of this square', function () {
      {
        const square = squares[0];
        const {adjacentSquares} = square;

        assert.equal(adjacentSquares.length, 8);
        assert.equal(adjacentSquares[0], null);
        assert.equal(adjacentSquares[1], null);
        assert.equal(adjacentSquares[2], null);
        assert.equal(adjacentSquares[3], null);
        assert.equal(adjacentSquares[4].value, 'B');
        assert.equal(adjacentSquares[5], null);
        assert.equal(adjacentSquares[6].value, 'E');
        assert.equal(adjacentSquares[7].value, 'F');
      }
      {
        const square = squares[5];
        const {adjacentSquares} = square;

        assert.equal(adjacentSquares.length, 8);
        assert.equal(adjacentSquares[0].value, 'A');
        assert.equal(adjacentSquares[1].value, 'B');
        assert.equal(adjacentSquares[2].value, 'C');
        assert.equal(adjacentSquares[3].value, 'E');
        assert.equal(adjacentSquares[4].value, 'G');
        assert.equal(adjacentSquares[5].value, 'I');
        assert.equal(adjacentSquares[6].value, 'J');
        assert.equal(adjacentSquares[7].value, 'K');
      }
      {
        const square = squares[15];
        const {adjacentSquares} = square;

        assert.equal(adjacentSquares.length, 8);
        assert.equal(adjacentSquares[0].value, 'K');
        assert.equal(adjacentSquares[1].value, 'L');
        assert.equal(adjacentSquares[2], null);
        assert.equal(adjacentSquares[3].value, 'O');
        assert.equal(adjacentSquares[4], null);
        assert.equal(adjacentSquares[5], null);
        assert.equal(adjacentSquares[6], null);
        assert.equal(adjacentSquares[7], null);
      }
    });
  });
});