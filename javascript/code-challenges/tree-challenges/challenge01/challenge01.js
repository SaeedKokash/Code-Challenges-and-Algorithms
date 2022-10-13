'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function buildTree(inorder, preorder) {
    if (inorder.length === 0 || preorder.length === 0) {
        return null;
    }
    let root = new Node(preorder[0]);
    let rootIndex = inorder.indexOf(preorder[0]);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex + 1);
    let leftPreorder = preorder.slice(1, rootIndex + 1);
    let rightPreorder = preorder.slice(rootIndex + 1);
    root.left = buildTree(leftInorder, leftPreorder);
    root.right = buildTree(rightInorder, rightPreorder);
    return root;
}

module.exports = { Node, buildTree };