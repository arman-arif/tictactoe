export default function Status({ gameOver, nextPlayer }) {
    if (gameOver) {
        return <div className="font-semibold text-red-500">Game Over!</div>;
    }
    return (
        <div className="text-gray-900">
            Next player: <strong>{nextPlayer}</strong>
        </div>
    );
}
