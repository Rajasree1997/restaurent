import "./style.css";
import pawnImage from "../assets/soldier.svg"
import blackPawn from "../assets/soldierblack.svg"
import whiteRook from "../rookwhite.svg"
import blackRook from "../assets/icons/rookblack.svg"
import horseWhite from "../assets/icons/horsewhite.svg"
import horseBlack from "../assets/icons/horseblack.svg"
import bishopWhite from "../assets/icons/bishopwhite.svg"
import bishopBlack from "../assets/icons/bishopblack.svg"
import kingWhite from "../assets/icons/kingwhite.svg"
import kingBlack from "../assets/icons/kingblack.svg"
import queenWhite from "../assets/icons/queenwhite.svg"
import queenBlack from "../assets/icons/queenblack.svg"
const chessState =[
    [
        {
            currentPiece:whiteRook
        },
        {
            currentPiece:horseWhite
        },
        {
            currentPiece:bishopWhite
        },
        {
            currentPiece:kingWhite
        },
        {
            currentPiece:queenWhite
        },
        {
            currentPiece:bishopWhite
        },
        {
            currentPiece:horseWhite
        },
        {
            currentPiece:whiteRook
        },
    ],

[...[...Array(8)].map(()=>{
    return{
        currentPiece:pawnImage
    }
})
],
...[...Array(4)].map(()=>{
    return[...Array(8)].map(()=>{
        return{
            currentPiece:null
        }
    })})
    ,
      [
        ...[...Array(8)].map(()=>{
            return{
                currentPiece:blackPawn
            }
        })
        ],
[
   {
            currentPiece:blackRook
        },
        {
            currentPiece:horseBlack
        },
        {
            currentPiece:bishopBlack
        },
        {
            currentPiece:kingBlack
        },
        {
            currentPiece:queenBlack
        },
        {
            currentPiece:bishopBlack
        },
        {
            currentPiece:horseBlack
        },
        {
            currentPiece:blackRook
        },  
],
]
    
const Grid = () => {
    console.log(chessState);
    return (
        <div className="grid-container">
            {chessState.map((currentColumn,i)=>
            currentColumn.map(({currentPiece},j)=>{return(
          
                <div style={{
                    backgroundColor:(i+j) %2  ? "#9e561b": "#e6ccab" ,
                    
                }}>
                    {/* {indexArray[1]+","+indexArray[0]} */}
                  { currentPiece &&
                  <img src={currentPiece} className="chess_piece"/>}
                </div>)})
            )}
            
          
              
            
   </div>)}
export default Grid
