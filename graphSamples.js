const SIMPLE_GRAPH = {
    // (node) - [list of negihbours]
    1: [2, 3, 4],
    2: [1, 4, 5],
    3: [1, 4],
    4: [2, 3, 5],
    5: [2, 4]
}

const WEIGHTED_GRAPH = {
    // (node) - [list of {neighbour : weight}]
    1: [{2:5}, {3:3}, {4:7}],
    2: [{1:5}, {4:3}, {5:2}],
    3: [{1:3}, {4:1}],
    4: [{2:3}, {3:1}, {5:2}],
    5: [{2:2}, {4:2}]
}

const DIRECTED_GRAPH = {

}

// Graph represented using a matrix
const MATRIX_GRAPH = {

}

export { SIMPLE_GRAPH, WEIGHTED_GRAPH };