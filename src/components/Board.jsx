import { checkWinner } from "../utils/gameHelpers";
import Square from "./Square";

export default function Board({ squares, player, onPlay }) {
    const handleSqrClick = (index) => {
        const newSquares = squares.slice();
        if (newSquares[index] || checkWinner(newSquares)) {
            return;
        }
        newSquares[index] = player;

        onPlay(newSquares, index);
    };

    return (
        <div className="bg-white shadow-md p-5 rounded-lg">
            <div>
                <div className="gap-3 grid grid-cols-3">
                    {squares.map((value, index) => (
                        <Square
                            key={index}
                            text={value}
                            onSqrClick={() => handleSqrClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
