export const checkWinner = (sqrs) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let line of lines) {
        const [x, y, z] = line;
        if (sqrs[x] && sqrs[x] === sqrs[y] && sqrs[x] === sqrs[z]) {
            return sqrs[x];
        }
    }

    return null;
};

export const getCell = (index) => {
    const cells = [
        "1,1",
        "1,2",
        "1,3",
        "2,1",
        "2,2",
        "2,3",
        "3,1",
        "3,2",
        "3,3",
    ];

    return cells[index];
};

export const checkGameOver = (squares) => {
    const winner = checkWinner(squares);
    if (winner) {
        return true;
    }
    // return squares.filter((sqr) => sqr === null).length === 0
    return squares.every((sqr) => sqr !== null);
};
