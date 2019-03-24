/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let membersInTriangle = [];
    preferences.forEach((elem, index, arr) => {
        if (!membersInTriangle.includes(index)) {
            let first = elem;
            let second = arr[first-1];
            let third = arr[second-1];
            if (index == third-1
                && first != second
                && second != third
            ) {
                ++count;
                membersInTriangle.push(index, first-1, second-1);
            }
        }
    });
    return count;
};

