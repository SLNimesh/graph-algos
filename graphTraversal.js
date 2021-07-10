const visited = (graph) => {
    let visitedNodes = {};
    Object.keys(graph).forEach(node => {
        visitedNodes[node] = false;
    });
    return visitedNodes;
}

// Depth First Search

const dfs = (graph, startingNode) => {

    console.info(`dfs staring from ${startingNode} on graph :`);
    console.table(graph);

    let visitedNodes = visited(graph);
    let visitingOrder = [];

    run_dfs(graph, startingNode, visitedNodes, visitingOrder);

    // console.info('visited nodes :', visitedNodes);
    console.info('visited order :', visitingOrder);
}

const run_dfs = (graph, startingNode, visitedNodes, visitingOrder) => {

    if (visitedNodes[startingNode]) return;
    visitedNodes[startingNode] = true;
    visitingOrder.push(startingNode);

    for (let neighbour of graph[startingNode]) {
        run_dfs(graph, neighbour, visitedNodes, visitingOrder);
    }
}

// Breadth First Search

const bfs = (graph, startingNode) => {

    console.info(`bfs staring from ${startingNode} on graph :`);
    console.table(graph);

    let visitedNodes = visited(graph);
    let visitingOrder = [];

    let nodeLevel = {};
    let queue = [];

    nodeLevel[startingNode] = 0;
    queue.push(startingNode);

    while (queue.length) {
        let currentNode = queue.shift();
        if (visitedNodes[currentNode]) continue;
        visitedNodes[currentNode] = true;
        visitingOrder.push(currentNode);

        for (let neighbour of graph[currentNode]) {
            queue.push(neighbour);
        }
    }

    // console.info('visited nodes :', visitedNodes);
    console.info('visited order :', visitingOrder);
}

export { dfs, bfs };