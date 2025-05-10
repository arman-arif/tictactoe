import { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextPlayer, setNextPlayer] = useState("X");

    const handleOnPlay = (newSquares) => {
        setSquares(newSquares);
        setNextPlayer(nextPlayer === "X" ? "O" : "X");
    };

    return (
        <div className="">
            <div className="text-xl text-center mb-4 bg-white p-4 rounded-lg shadow-md">
                Next player: <strong>{nextPlayer}</strong>
            </div>
            <Board
                squares={squares}
                player={nextPlayer}
                onPlay={handleOnPlay}
            />
        </div>
    );
}
