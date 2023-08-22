import { COMBOS } from "../constants"

const checkWinner = (boardtoCheck)=> {
    for (const combo of COMBOS){
      const [a,b,c] = combo
      if(boardtoCheck[a] && 
        boardtoCheck[a] === boardtoCheck[b] &&
        boardtoCheck[a] === boardtoCheck[c]
        ){
          return boardtoCheck[a]
        }
    }
    return null
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }


  export {checkWinner, checkEndGame}