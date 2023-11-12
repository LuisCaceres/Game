import assert from 'assert';

import { Grid } from '../Grid.js';

const numberOfRows = 4;
const numberOfColumns = 4;

const grid = new Grid(numberOfRows, numberOfColumns);

describe('Grid', function () {
  it('should create an instance of Grid', function () {

    assert.equal(grid instanceof Grid, true);
  });


  describe('squares', function () {
    
    it('should return a list of the squares contained in this grid', function () {
      const {squares} = grid;

      assert.equal(squares.length, 16);
    });
  });

});

