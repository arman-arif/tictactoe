import { useState } from "react";
import { checkGameOver, checkWinner } from "../utils/gameHelpers";
import Board from "./Board";
import History from "./History";
import Result from "./Result";
import Status from "./Status";

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [score, setScore] = useState({ x: 0, o: 0, draw: 0 });
    const [history, setHistory] = useState([]);
    const [nextPlayer, setNextPlayer] = useState("X");
    const [currentMove, setCurrentMove] = useState(0);
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const handleOnPlay = (newSquares, cellIndex) => {
        setSquares(newSquares);
        setNextPlayer(nextPlayer === "X" ? "O" : "X");

        const newHistory = history.slice();
        newHistory[currentMove] = {
            player: nextPlayer,
            squares: newSquares,
            cell: cellIndex,
        };
        setHistory(newHistory);

        const result = handleWinner(newSquares);

        if (result) return;

        setCurrentMove(currentMove + 1);
    };

    const handleWinner = (newSquares) => {
        const _winner_ = checkWinner(newSquares);
        if (_winner_) {
            setGameOver(true);
            setWinner(_winner_);

            setScore((prev) => {
                if (_winner_ === "X") {
                    return { ...prev, x: prev.x + 1 };
                }
                if (_winner_ === "O") {
                    return { ...prev, o: prev.o + 1 };
                }
                return { ...prev };
            });

            return _winner_;
        }

        if (checkGameOver(newSquares)) {
            setGameOver(true);
            setScore((prev) => ({ ...prev, draw: prev.draw + 1 }));
            return "DRAW";
        }

        return null;
    };

    const handleNextBoard = () => {
        setSquares(Array(9).fill(null));
        setHistory([]);
        setCurrentMove(0);
        setWinner(null);
        setGameOver(false);
    };

    const handleResetHistory = () => {
        setSquares(Array(9).fill(null));
        setHistory([]);
        setCurrentMove(0);
        setNextPlayer("X");
        setWinner(null);
        setGameOver(false);
    };

    const handleRestart = () => {
        setScore({ x: 0, o: 0, draw: 0 });
        setSquares(Array(9).fill(null));
        setHistory([]);
        setCurrentMove(0);
        setNextPlayer("X");
        setWinner(null);
        setGameOver(false);
    };

    const handleResetScoreBoard = () => {
        setScore({ x: 0, o: 0, draw: 0 });
    };

    const handleJumpToHistory = (index) => {
        const _history = history[index];
        setSquares(_history.squares);
        setCurrentMove(index);
        setNextPlayer(_history.player === "X" ? "O" : "X");
        const resetHistory = history.slice(0, index + 1);
        console.log(resetHistory);
    };

    return (
        <div className="flex md:flex-row flex-col gap-8">
            <div className="m-0">
                <div className="bg-white shadow-md mb-4 p-4 rounded-lg text-xl text-center">
                    <Status {...{ gameOver, nextPlayer }} />
                </div>
                <Board
                    squares={squares}
                    player={nextPlayer}
                    onPlay={handleOnPlay}
                    winner={winner}
                />
            </div>
            <History
                history={history}
                onResetHistory={handleResetHistory}
                onResetScores={handleResetScoreBoard}
                onJumpToHistory={handleJumpToHistory}
                score={score}
            />

            {gameOver && (
                <Result
                    onClickNextBoard={handleNextBoard}
                    onClickRestart={handleRestart}
                    score={score}
                    winner={winner}
                />
            )}
        </div>
    );
}
