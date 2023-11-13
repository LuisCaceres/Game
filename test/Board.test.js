import assert from 'assert';

import { Board } from '../Board.js';

const board = new Board(2, 2);
board.squares[0].value = 'A';
board.squares[1].value = 'B';
board.squares[2].value = 'C';
board.squares[3].value = 'D';

describe('Board', function () {
  it('should create an instance of Board', function () {
    assert.equal(board instanceof Board, true);
  });

  describe('.paths', function () {
    it('should return a list of tree data structures, each branch in a tree represents a path on this board.', function () {
      const paths = board.paths;
      assert.equal(paths.length, 4);

      const [square1, square2, square3, square4] = paths.map(rootNode => rootNode.value);
      assert.equal(square1.value, 'A');
      assert.equal(square2.value, 'B');
      assert.equal(square3.value, 'C');
      assert.equal(square4.value, 'D');

      assert.equal(paths[0].childNodes.length, 3);
      assert.equal(paths[1].childNodes.length, 3);
      assert.equal(paths[2].childNodes.length, 3);
      assert.equal(paths[3].childNodes.length, 3);
    });
  });
});
