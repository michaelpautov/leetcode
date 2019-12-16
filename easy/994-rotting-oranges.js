/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let min = 0;
    while(true) {
        let [isUpdateGrid, countOne, newTemp] = updateTemp(grid);
        if (isUpdateGrid === false ) {
            return countOne > 0 ? -1 : min;
        } else {
            min++;
            grid = newTemp;
        }
    }
};

function updateTemp(grid) {
    let countOne = 0;
    let isUpdate = false;
    let temp = [];
    for(let i = 0; i < grid.length; i++) {
        temp.push([]);
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 1) {
                temp[i].push(grid[i][j])
            } else if (isUpdateValue(grid, i, j)) {
                temp[i].push(2);
                isUpdate = true;
            } else {
                temp[i].push(grid[i][j])
                countOne++;
            }
        }
    }
    return [isUpdate, countOne, temp];
}

function isUpdateValue(grid, i, j) {
    if (i > 0 && grid[i - 1][j] === 2) {
        return true;
    } else if (i < grid.length - 1 && grid[i+1][j] === 2) {
        return true;
    } else if (j > 0 && grid[i][j-1] === 2) {
        return true;
    } else if (j < grid[0].length - 1 && grid[i][j+1] === 2) {
        return true;
    } else {
        return false;
    }
}

console.log(orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]]
) === -1);


console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]) === 4);
