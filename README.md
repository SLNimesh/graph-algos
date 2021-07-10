# Project Overview

- This project is dedicated for learning graph algorithms.

<br>


> Running the algorithms

- An example can be found in **run.js**.

- Smaple graphs are in **graphSamples.js**, import a graph from it.

    ```js
    import { WEIGHTED_GRAPH } from './graphSamples.js'
    ```

- Import the relavent graph algorithm.

    ```js
    import { bfs } from './graphTraversal.js'
    ```

- Then use `node run.js` command to run the necessary javascript file.

- In order to obtain all the console logs in a separate file use

    ```shell
    node run.js > run.log
    ```

> Why there is a package.json ?

- We are using node to run all our javascript files.

- As we have used **ES6 modules : import/export**, we need to add the following configuration to our **package.json** file.

    ```json
    { "type": "module" }
    ```