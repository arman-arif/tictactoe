import Square from "./Square";

export default function Board({ squares, player, onPlay }) {
    const handleSqrClick = (index) => {
        const newSquares = squares.slice();
        if (newSquares[index]) {
            return;
        }
        newSquares[index] = player; // Alternate between X and O

        onPlay(newSquares);
    };

    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="grid grid-cols-3 gap-3">
                {squares.map((value, index) => (
                    <Square
                        key={index}
                        text={value}
                        onSqrClick={() => handleSqrClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}
