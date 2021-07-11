// Algorithms dedicated to finding the shortest path.

const initDistance = (nodes, startingNode) => {

    let distance = {};
    nodes.forEach(node => {

        if (node == startingNode) {
            distance[node] = 0;
        } else {
            distance[node] = Number.POSITIVE_INFINITY;
        }
    })
    return distance;
}

// check if we've reached all the nodes (distance != INFINITY)
// This approach does seem to work as this only loops until all the edges are reached but that won't be the shortest path.
const isDiscoveredAll = (distance) => {

    for (let node of Object.keys(distance)) {
        if (distance[node] === Number.POSITIVE_INFINITY) {
            return false;
        }
    }
    return true;
}

// This couldn't accomodate graphs with negative cycles (resultant weight of the cycle is negative).
// In such cases this will be looping infinite times as it keeps travelling in the cycle infinite times to reduce the distance. 
const rookie_bellman_ford = (graph, startingNode) => {

    let distance = initDistance(graph.nodes, startingNode);
    let looped = 0;
    let isThereAChange = true;

    while (isThereAChange) {
        looped++;
        isThereAChange = false;
        for (let edge of graph.edges) {
            // edge : [start, end, weight] 
            if (distance[edge[1]] > distance[edge[0]] + edge[2]) {
                // change value to shortest
                distance[edge[1]] = distance[edge[0]] + edge[2];
                isThereAChange = true;
            }
        }
    }

    console.info(`shortest path to all nodes starting from node : ${startingNode}`);
    console.table(distance);
    console.info(`went ${looped} times thorugh all the edges`)
}

const bellman_ford = (graph, startingNode) => {

    let distance = initDistance(graph.nodes, startingNode);
    let ntimes = graph.nodes.length - 1;

    while (ntimes > 0) {
        ntimes--;
        for (let edge of graph.edges) {
            // edge : [start, end, weight] 
            if (distance[edge[1]] > distance[edge[0]] + edge[2]) {
                // change value to shortest
                distance[edge[1]] = distance[edge[0]] + edge[2];
            }
        }
    }

    console.info(`shortest path to all nodes starting from node : ${startingNode}`);
    console.table(distance);
    console.info(`went ${ntimes} times thorugh all the edges`)
}

export { bellman_ford };