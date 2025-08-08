import { motion } from "framer-motion"
import { useState } from "react";
import { Tile } from "./Tile";

export const Game = () => {

    const winCombinations = [
        // Horizontal Wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // Vertical Wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // Diagonal Wins
        [0, 4, 8],
        [2, 4, 6],
    ];

    const initialArray = Array(9).fill("");

    const [array, setArray] = useState(initialArray);
    const [turn, setTurn] = useState(false);
    const [winner, setWinner] = useState(null);

    const checkWinner = (tempArray) => {
        for (let combo of winCombinations){
            const [a, b, c] = combo;

            if(tempArray[a] && tempArray[a] === tempArray[b] && tempArray[a] === tempArray[c]){
                if(tempArray[a] === 'X'){
                    setWinner("Player 1 Wins!");
                }
                else{
                    setWinner("Player 2 Wins!");
                }
            }
        }
        return;
    }

    const handleClick = (id) => {
        const tempArray = [...array];

        if(tempArray[id] === ""){
            tempArray[id] = turn ? "O" : "X"; 

            setArray(tempArray);
            setTurn((prev) => !prev);
            checkWinner(tempArray);

            if(!tempArray.includes("")){
                setWinner("Draw");
            }
        }
    };

    const handleReset = () => {
        // Reset All States
        setArray(initialArray);
        setTurn(false);
        setWinner(null);
    };

    return (
        <motion.section id="game" className="game">
            <motion.div className="game-status">
                <motion.h1 className={`game-status-text ${winner === null ? "" : "hide"} ${turn ? "player2-text" : "player1-text"}`}>{turn ? "Player 2's Turn" : "Player 1's Turn"}</motion.h1>
            </motion.div>
            <motion.div className="board">
                {array.map((item, index) => {
                    return (
                        <Tile key={index} text={item} id={index} handleClick={handleClick} winner={winner}/>
                    );
                })}

                <motion.div className={`result-box ${winner === null? "hide" : ""} ${turn ? "player2" : "player1" }`}>
                    <motion.h2 className="result-text">{winner === 'X' ? "Player 1 Wins!" : "Player 2 Wins!"}</motion.h2>
                    <motion.button onClick={handleReset} className="result-button">Restart Game</motion.button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}