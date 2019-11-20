/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    const R = grid.length;
    const C = grid[0].length;
    for(let r = 0; r < R; r++) {
        for(let c = 0; c < C; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0])
            }
        }
    }

    function getNeighbors(r, c) {
        let res = [];
        let positions = [[r, c-1], [r, c+1], [r-1, c], [r+1, c]];
        for(let i = 0; i < positions.length; i++) {
            const [nr, nc] = positions[i];
            if (0 <= nr && nr < R && 0 <= nc && nc < C) {
                res.push([nr, nc])
            }

        }
        return res;
    }

    let res = 0;
    while (queue.length) {
        const [r,c,m] = queue.shift();
        const neighbors = getNeighbors(r,c);
        for(let i = 0; i < neighbors.length; i++) {
            const [nr, nc] = neighbors[i];
            if (grid[nr][nc] === 1) {
                grid[nr][nc] = 2;
                res = m + 1;
                queue.push([nr, nc, res])
            }
        }
    }

    for(let i = 0; i < grid.length; i++) {
        for(let  j= 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return res;
};

console.log(orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]]
));
console.log(orangesRotting([
    [2,1,1],[1,1,0],[0,1,1]
    ]
));
