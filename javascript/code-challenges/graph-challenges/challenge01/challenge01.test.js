'use strict';

const { Graph, Vertex, Edge } = require('./challenge01.js');

describe('Graph-1', () => {
    it('should return an array of values', () => {
        const graph = new Graph();

        const A = new Vertex('A');
        const B = new Vertex('B');
        const C = new Vertex('C');
        const D = new Vertex('D');
        const E = new Vertex('E');
        const F = new Vertex('F');
        const G = new Vertex('G');
        const H = new Vertex('H');
        const I = new Vertex('I');
        const K = new Vertex('K');

        graph.addVertex(A);
        graph.addVertex(B);
        graph.addVertex(C);
        graph.addVertex(D);
        graph.addVertex(E);
        graph.addVertex(F);
        graph.addVertex(G);
        graph.addVertex(H);
        graph.addVertex(I);
        graph.addVertex(K);

        graph.addEdge(A, B);
        graph.addEdge(A, C);
        graph.addEdge(A, E);
        graph.addEdge(B, D);
        graph.addEdge(C, F);
        graph.addEdge(E, D);
        graph.addEdge(E, G);
        graph.addEdge(E, F);
        graph.addEdge(G, H);
        graph.addEdge(F, H);
        graph.addEdge(F, I);
        graph.addEdge(H, K);
        graph.addEdge(I, K);

        expect(graph.breadthFirst(A)).toEqual(['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'K']);
    });
});

