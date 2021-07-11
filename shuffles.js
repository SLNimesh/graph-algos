// shuffling elements in an array

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const noobie_shuffle = (arr) => {

    let shuffled = [];
    let changes = 0;

    while (changes < arr.length) {

        let randomPick = getRandomInt(arr.length);
        // console.info(`random pick ${randomPick}`);

        // 'in' keyword returns whether the given property(index) exist in the given object(arr)
        if (randomPick in arr) {
        
            shuffled.push(arr[randomPick]);
            // delete the given property(index in this case without changing the arr length) from an object(arr) -> (arr[randomPick] = undifined)
            delete arr[randomPick];
            changes++;
        }
    }

    return shuffled;
}

const intermidiate_shuffle = (arr) => {

    let shuffled = [];

    while (arr.length > 0) {
        let randomPick = getRandomInt(arr.length);

        if (randomPick in arr) {
            // remove n(1) elements starting from index(randomPick)
            let chosen = arr.splice(randomPick, 1); // returns an array of removed elements
            shuffled.push(chosen[0]);
        }
    }

    return shuffled;
}

const fisher_yates_shuffle = (arr) => {

    let remaining = arr.length;

    while (remaining > 0) {

        let randomPick = getRandomInt(remaining);
        remaining--;
        // swap values from the back of the array
        let tempValue = arr[randomPick];
        arr[randomPick] = arr[remaining];
        arr[remaining] = tempValue;
    }

    return arr;
}

export { noobie_shuffle, intermidiate_shuffle, fisher_yates_shuffle };