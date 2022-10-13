'use strict';

const { Node, buildTree } = require('./challenge01.js');

describe('Testing challenge 01', () => {
    
    // testing empty tree
    test('It should return null if the tree is empty', () => {
        let inorder = [];
        let preorder = [];
        let tree = buildTree(inorder, preorder);
        expect(tree).toEqual(null);
    });

    // testing Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] and output: [3,9,20,null,null,15,7]
    test('It should return the root node of the tree when preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]', () => {
        let inorder = [9, 3, 15, 20, 7];
        let preorder = [3, 9, 20, 15, 7];
        let tree = buildTree(inorder, preorder);
        expect(tree.value).toEqual(3);
        expect(tree.left.value).toEqual(9);
        expect(tree.right.value).toEqual(20);
        expect(tree.right.left.value).toEqual(15);
        expect(tree.right.right.value).toEqual(7);
    });

    // testing Input: preorder = [-1], inorder = [-1] and output: [-1]
    test('It should return the root node of the tree when preorder = [-1], inorder = [-1]', () => {
        let inorder = [-1];
        let preorder = [-1];
        let tree = buildTree(inorder, preorder);
        expect(tree.value).toEqual(-1);
    });

    });
