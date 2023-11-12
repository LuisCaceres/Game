class TreeNode {

    /**
     * Create an instance of Node.
     * @param {*} value 
     * @param {TreeNode} parentNode 
     */
    constructor(value) {
        this.childNodes = [];
        this.parentNode = null;
        this.value = value;
    }

    /**
     * Append a list of nodes as child nodes of this node.
     * @param  {...Node} nodes The nodes to be appended
     */
    appendChildNodes(...nodes) {
        
        for (const node of nodes) {
            node.parentNode = this;
        }

        this.childNodes.push(...nodes);
    }

    /**
     * Return a list of ascendant nodes of this node. 
     * @returns {[TreeNode]}
     */
    get ascendantNodes() {
        const ascendantNodes = [];

        let ascendantNode = this.parentNode;
        
        while (ascendantNode !== null) {
            ascendantNodes.push(ascendantNode);
            ascendantNode = ascendantNode.parentNode;
        }

        return ascendantNodes;
    }

    /** Return a list of all the branches in the tree originating from this node.
     * @returns {[[TreeNode]]}
     */
    get branches() {
        const branches = [];
        const leafNodes = this.leafNodes;

        for (const leafNode of leafNodes) {
            const branch = [...leafNode.ascendantNodes.reverse(), leafNode]

            branches.push(branch);
        }

        return branches;
    }

    /** Return a list of all the nodes that have no child nodes.
     * @returns {[TreeNode]}
     */
    get leafNodes() {
        const nodes = this.nodes;
        const leafNodes = nodes.filter(node => node.childNodes.length === 0);

        return leafNodes;
    }

    /** Return a list of all the nodes in the tree originating from this node.
     * @returns {[TreeNode]}
     */
    get nodes() {
        const nodes = [];
        const list = [this];

        while (list.length) {
            const node = list.shift();

            nodes.push(node);
            list.unshift(...node.childNodes);
        }

        return nodes;
    }
   

    // hasChildNodes() {
    //     return !this.isLeafNode;
    // }

    // isLeafNode() {
    //     return this.children.length === 0;
    // }
}

// class Tree {
//     constructor(key, value = key) {
//         this.root = new Node(key, value);
//     }

//     *preOrderTraversal(node = this.root) {
//         yield node;
//         if (node.children.length) {
//             for (let child of node.children) {
//                 yield* this.preOrderTraversal(child);
//             }
//         }
//     }

//     *postOrderTraversal(node = this.root) {
//         if (node.children.length) {
//             for (let child of node.children) {
//                 yield* this.postOrderTraversal(child);
//             }
//         }
//         yield node;
//     }

//     insert(parentNodeKey, key, value = key) {
//         for (let node of this.preOrderTraversal()) {
//             if (node.key === parentNodeKey) {
//                 node.children.push(new Node(key, value, node));
//                 return true;
//             }
//         }
//         return false;
//     }

//     remove(key) {
//         for (let node of this.preOrderTraversal()) {
//             const filtered = node.children.filter(c => c.key !== key);
//             if (filtered.length !== node.children.length) {
//                 node.children = filtered;
//                 return true;
//             }
//         }
//         return false;
//     }

//     find(key) {
//         for (let node of this.preOrderTraversal()) {
//             if (node.key === key) return node;
//         }
//         return undefined;
//     }

export {
    TreeNode,
}

// Let `square` be
const square = [];