import assert from 'assert';

import { TreeNode } from '../TreeNode.js';

const rootNode = new TreeNode('1');

const node1 = new TreeNode('1.1');
const node2 = new TreeNode('1.2');
const node3 = new TreeNode('1.3');

describe('TreeNode', function () {
  it('should create an instance of Node', function () {

    assert.equal(rootNode instanceof TreeNode, true);
  });

  describe('append()', function () {
    
    it('should append a list of nodes as child nodes of this node', function () {
      rootNode.appendChildNodes(node1, node2, node3);

      assert.equal(rootNode.childNodes.length, 3);
      assert.equal(rootNode.childNodes[0], node1);
      assert.equal(rootNode.childNodes[1], node2);
      assert.equal(rootNode.childNodes[2], node3);
      assert.equal(node1.parentNode, rootNode);
      assert.equal(node2.parentNode, rootNode);
      assert.equal(node3.parentNode, rootNode);
    });
  });

  describe('.ascendantNodes', function () {
    
    it('should return a list of ascendant nodes of this node', function () {
    
      assert.equal(rootNode.ascendantNodes.length, 0);
      assert.equal(node1.ascendantNodes.length, 1);
      assert.equal(node2.ascendantNodes.length, 1);
      assert.equal(node3.ascendantNodes.length, 1);
    });
  });

  describe('.branches', function () {
    it('should return a list of all the branches in the tree originating from this node.', function () {
      const {branches} = rootNode;
      const [branch1, branch2, branch3] = branches;

      assert.equal(branches.length, 3);
      assert.equal(branch1.length, 2);
      assert.equal(branch2.length, 2);
      assert.equal(branch3.length, 2);
      assert.equal(branch1[0], rootNode);
      assert.equal(branch1[1], node1);
      assert.equal(branch2[0], rootNode);
      assert.equal(branch2[1], node2);
      assert.equal(branch3[0], rootNode);
      assert.equal(branch3[1], node3);
    });
  });

  describe('.leafNodes', function () {
    it('should return a list of all the nodes that have no child nodes.', function () {
      const {leafNodes} = rootNode;

      assert.equal(leafNodes.length, 3);
      assert.equal(leafNodes[0], node1);
      assert.equal(leafNodes[1], node2);
      assert.equal(leafNodes[2], node3);
    });
  });

  describe('.nodes', function () {
    it('should return a list of all the nodes in the tree originating from this node.', function () {
        const {nodes} = rootNode;

        assert.equal(nodes.length, 4);
        assert.equal(nodes[0], rootNode);
        assert.equal(nodes[1], node1);
        assert.equal(nodes[2], node2);
        assert.equal(nodes[3], node3);
    });
  });
});