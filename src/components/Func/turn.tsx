export const turn = (boardArray: string[]) => {

    //  Same logic as as the .reduce below but more strait forward with for Loop...

    //  let count = 0;
    //  for (let i = 0; i <= boardArray.length; i++) {
    //      if (boardArray[i] === 'X') {
    //          count++;
    //      } else if (boardArray[i] === 'O') {
    //          count--;
    //      }
    //  }
    //  
    //  if (count === 1) {
    //      return 'O';
    //  } else if (count === 0) {
    //      return 'X';
    //  }

    const result = boardArray.reduce((acc, curr) => {
        if (curr === '') {
            return acc;
        } else {
            return (curr === 'X' ? acc + 1 : acc - 1);
        }
    }, 0);

    return (result === 0 ? 'X' : 'O');
}