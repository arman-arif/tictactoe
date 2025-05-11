export default function Status({ gameOver, nextPlayer }) {
    if (gameOver) {
        return <div className="font-semibold text-red-500">Game Over!</div>;
    }

    const nextPlayerColor =
        nextPlayer === "X" ? "text-blue-500" : "text-orange-600";

    return (
        <div className="text-gray-900">
            <strong className={nextPlayerColor}>{nextPlayer}</strong> turn
        </div>
    );
}
