class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    add(value) {
      const node = new Node(value);
      if (!this.root) {
        this.root = node;
        return;
      }
  
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            return;
          }
          current = current.right;
        }
      }
    }
  }
  
  const twoSumBST = (tree, target) => {
    let hash = {};
  
    const traverse = (node) => {
      if (!node) return false;
      if (hash[target - node.value]) return true;
      hash[node.value] = true;
  
      return traverse(node.left) || traverse(node.right);
    };
  
    return traverse(tree.root);
  };
  
  module.exports = {
    Tree,
    twoSumBST,
  };