import { useEffect, useState } from "react";
import { checkWinner, getMatchPair } from "../utils/helpers";
import Square from "./Square";

export default function Board({ squares, player, onPlay }) {
    const [winner, setWinner] = useState(null);
    const [matchPair, setMatchPair] = useState([]);

    const handleSqrClick = (index) => {
        const newSquares = squares.slice();

        if (newSquares[index] || checkWinner(newSquares)) {
            return;
        }
        newSquares[index] = player;

        onPlay(newSquares, index);
    };

    useEffect(() => {
        setMatchPair(getMatchPair(squares));
        setWinner(checkWinner(squares));
    }, [squares]);

    return (
        <div className="bg-white shadow-md p-5 rounded-lg">
            <div>
                <div className="gap-3 grid grid-cols-3">
                    {squares.map((value, index) => (
                        <Square
                            key={index}
                            text={value}
                            onSqrClick={() => handleSqrClick(index)}
                            isWinningSqr={matchPair.includes(index)}
                            hasWinner={!!winner}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
