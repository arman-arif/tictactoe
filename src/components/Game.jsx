/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { checkGameOver, checkWinner } from "../utils/helpers";
import Board from "./Board";
import History from "./History";
import Result from "./Result";
import Status from "./Status";

export default function Game({ onWin, onDraw, onPlayTurn }) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [score, setScore] = useState({ x: 0, o: 0, draw: 0 });
    const [history, setHistory] = useState([]);
    const [nextPlayer, setNextPlayer] = useState("X");
    const [currentMove, setCurrentMove] = useState(0);
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [countDown, setCountDown] = useState(0);
    const [showCountDown, setShowCountDown] = useState(false);
    const [diggingHistory, setDiggingHistory] = useState(false);

    useEffect(() => {
        if (gameOver) {
            setCountDown(3);
            setTimeout(() => setShowResult(true), 3000);
            setShowCountDown(true);
            const interval = setInterval(() => {
                setCountDown((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setShowCountDown(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            winner ? onWin() : onDraw();
        }
    }, [gameOver, winner]);

    const handleOnPlay = (newSquares, cellIndex) => {
        setSquares(newSquares);
        setNextPlayer(nextPlayer === "X" ? "O" : "X");

        onPlayTurn();

        let newHistory = history.slice();
        if (diggingHistory) {
            setDiggingHistory(false);
            newHistory = history.slice(0, currentMove);
        }

        newHistory[currentMove] = {
            player: nextPlayer,
            squares: newSquares,
            cell: cellIndex,
        };
        setHistory(newHistory);

        setCurrentMove(currentMove + 1);

        const result = handleWinner(newSquares);

        if (result) return;
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
        setShowResult(false);
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
        setShowResult(false);
    };

    const handleResetScoreBoard = () => {
        setScore({ x: 0, o: 0, draw: 0 });
    };

    const handleJumpToHistory = (index) => {
        const _history = history[index];
        setSquares(_history.squares);
        setCurrentMove(index + 1);
        setNextPlayer(_history.player === "X" ? "O" : "X");
        setDiggingHistory(true);
    };

    return (
        <div className="flex md:flex-row flex-col gap-8">
            <div className="m-0">
                <div className="bg-white shadow-md mb-4 p-4 rounded-lg text-xl text-center">
                    <Status {...{ gameOver, nextPlayer }} />
                </div>
                <div className="relative rounded-lg">
                    <Board
                        squares={squares}
                        player={nextPlayer}
                        onPlay={handleOnPlay}
                    />
                    {showCountDown && (
                        <div className="top-0 right-0 bottom-0 left-0 absolute flex justify-center items-center bg-slate-300 opacity-50 rounded-lg w-full h-full">
                            <div className="p-3 font-semibold text-[15rem] text-white text-center">
                                {countDown}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <History
                history={history}
                onResetHistory={handleResetHistory}
                onResetScores={handleResetScoreBoard}
                onJumpToHistory={handleJumpToHistory}
                currentMove={currentMove}
                score={score}
            />

            {showResult && (
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
