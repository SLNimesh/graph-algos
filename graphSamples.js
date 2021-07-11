const GraphSamples = {

    SIMPLE_GRAPH : {
        // (node) - [list of negihbours]
        1: [2, 3, 4],
        2: [1, 4, 5],
        3: [1, 4],
        4: [2, 3, 5],
        5: [2, 4]
    },

    WEIGHTED_GRAPH : {
        // (node) - [list of {neighbour : weight}]
        1: [{ 2: 5 }, { 3: 3 }, { 4: 7 }],
        2: [{ 1: 5 }, { 4: 3 }, { 5: 2 }],
        3: [{ 1: 3 }, { 4: 1 }],
        4: [{ 2: 3 }, { 3: 1 }, { 5: 2 }],
        5: [{ 2: 2 }, { 4: 2 }]
    },

    WEIGHTED_GRAPH_EDGES : {
        nodes: [1, 2, 3, 4, 5],
        // [list of edges [start, end, weight]]
        // edges are directed as they are represented start -> end
        edges: [
            [1, 2, 5],
            [1, 3, 3],
            [3, 4, 1],
            [1, 4, 7],
            [2, 4, 3],
            [4, 5, 2],
            [2, 5, 2]
        ]
    },

    WEIGHTED_GRAPH_EDGES_RANDOM : {
        nodes: [1, 2, 3, 4, 5],
        // [list of edges [start, end, weight]]
        // edges are directed as they are represented start -> end
        edges: [
            [1, 4, 7],
            [2, 4, 3],
            [4, 5, 2],
            [3, 4, 1],
            [2, 5, 2],
            [1, 2, 5],
            [1, 3, 3]
        ]
    },

    DIRECTED_GRAPH : {

    },

    // Graph represented using a matrix
    MATRIX_GRAPH : {

    }
}

export { GraphSamples };