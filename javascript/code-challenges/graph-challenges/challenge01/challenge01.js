"use strict";

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.adjacentList = new Map();
  }

  addVertex(vertex) {
    this.adjacentList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this.adjacentList.has(startVertex) || !this.adjacentList.has(endVertex)) {
      console.log("Invalid Vertices");
      return;
    } else {
      const edge = new Edge(endVertex, weight);
      this.adjacentList.get(startVertex).push(edge);
    }
  }

  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const currentVertex = queue.shift();
      const neighbors = this.adjacentList.get(currentVertex);

      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;

        if (visitedNodes.has(neighborVertex)) {
          continue;
        } else {
          visitedNodes.add(neighborVertex);
          queue.push(neighborVertex);
        }
      }
    }
    return [...visitedNodes].map((vertex) => vertex.value);
  }
}

module.exports = { Graph, Vertex, Edge };
