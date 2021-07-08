export const turn = (boardArray: string[]) => {

    let count = 0;

    for (let i = 0; i <= boardArray.length; i++) {
        if (boardArray[i] === 'X') {
            count++;
        } else if (boardArray[i] === 'O') {
            count--;
        }
    }

    if (count === 1) {
        return 'O';
    } else if (count === 0) {
        return 'X';
    }

    //const result = boardArray.reduce((acc, curr) => {
    //   
    //}, '');
    //console.log(result);
}