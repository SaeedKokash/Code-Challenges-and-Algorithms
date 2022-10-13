'use strict';

const { Node, sortedArrayToBST } = require('./challenge03.js');

describe('Testing challenge 03', () => {

    // testing sorted array to BST with an array of length 5
    test('It should return an output: [0, -3, 9, -10, null, 5]', () => {
        let nums = [0, -3, -10, 5, 9];
        expect(sortedArrayToBST(nums)).toEqual( {"left": {"left": {"left": null, "right": null, "value": 0}, "right": null, "value": -3}, "right": {"left": {"left": null, "right": null, "value": 5}, "right": null, "value": 9}, "value": -10});
    }
    );

    // testing sorted array to BST with an array of length 2
    test('It should return an output: [3, 1]', () => {
        let nums = [3, 1];
        expect(sortedArrayToBST(nums)).toEqual( {"left": {"left": null, "right": null, "value": 3}, "right": null, "value": 1} );
    }
    );
        
});

