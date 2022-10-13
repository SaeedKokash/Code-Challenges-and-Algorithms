'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Convert Sorted Array to BST
// Given an integer array nums, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }
    let mid = Math.floor(nums.length / 2);
    let root = new Node(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}

module.exports = { Node, sortedArrayToBST };

// Example 1:
// Input: nums = [0, -3, -10, 5, 9]
// Output: [0, -3, 9, -10, null, 5]

// Example 2:
// Input: nums = [3, 1]
// Output: [3, 1]

