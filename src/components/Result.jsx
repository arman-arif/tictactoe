import Score from "./Score";

export default function Result({
    winner,
    score,
    onClickNextBoard,
    onClickRestart,
}) {
    const winnerClass = `mb-6 font-semibold ${
        winner == "X" ? "text-sky-500" : "text-orange-600"
    } text-6xl text-center`;

    return (
        <div className="z-20 absolute inset-0 flex justify-center items-center bg-black/75">
            <div className="bg-white shadow-md px-8 py-10 rounded-lg w-[320px] max-w-full">
                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="mb-4">
                            {winner ? (
                                <>
                                    <p className="mb-2 font-bold text-2xl text-center uppercase leading-none">
                                        Winner
                                    </p>
                                    <h4 className={winnerClass}>{winner}</h4>
                                </>
                            ) : (
                                <div>
                                    <h4 className="mb-8 font-semibold text-gray-500 text-4xl text-center">
                                        Draw
                                    </h4>
                                </div>
                            )}
                        </div>

                        <Score score={score} />

                        <p className="mt-6 text-gray-600 text-center">
                            Continue playing?
                        </p>
                    </div>
                    <div className="flex justify-center gap-3">
                        <button
                            onClick={onClickRestart}
                            type="button"
                            className="bg-violet-500 hover:bg-violet-600 px-4 py-2 border-2 border-violet-500 hover:border-violet-600 rounded-lg min-w-30 font-semibold text-md text-white cursor-pointer"
                        >
                            Restart
                        </button>
                        <button
                            onClick={onClickNextBoard}
                            type="button"
                            className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 border-2 border-indigo-500 hover:border-indigo-600 rounded-lg min-w-30 font-semibold text-md text-white cursor-pointer"
                        >
                            Next Board
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
