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
import { useState } from "react/cjs/react.development";
const chessInitialState =[
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
    
    const [chessState,setChessState]=useState(chessInitialState)
    return (
        <div className="grid-container">
            {chessState.map((currentColumn,i)=>
            currentColumn.map(({currentPiece},j)=>{return(
          
                <div style={{
                    backgroundColor:(i+j) %2  ? "#9e561b": "#e6ccab" ,
                    
                }}
                onClick = {()=>{
                    if(i===4){
                        setChessState(
                            prev=>{
                                console.log("HELLO");
                                let newState=[...prev];
                                let newColumn=[...newState[i]]
                                let InitialColumn=[...newState[6]]
                                newColumn[j]={
                                    currentPiece:blackPawn
                                } 
                                InitialColumn[j]={
                                    currentPiece:null
                                } 
                                newState[i]=newColumn
                                newState[6]=InitialColumn
                                return newState;
                            }
                        )
                    }
                }}
                >
                    {/* {indexArray[1]+","+indexArray[0]} */}
                  { currentPiece &&
                  <img src={currentPiece} className="chess_piece"/>}
                </div>)})
            )}
            
          
              
            
   </div>)}
export default Grid
