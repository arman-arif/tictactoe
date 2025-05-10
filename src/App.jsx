import Game from "./components/Game";

export default function App() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="my-4">
                <h1 className="text-4xl text-center font-bold mb-6">
                    Tic Tac Toe
                </h1>

                <Game />
            </div>
        </div>
    );
}
