import { getCell } from "../utils/helpers";
import Button from "./Button";
import Score from "./Score";

export default function History({
    history = [],
    score,
    onResetHistory,
    onResetScores,
    onJumpToHistory,
    currentMove,
}) {
    return (
        <div className="min-w-[300px]">
            <div className="bg-white shadow-md mb-4 p-4 rounded-lg text-center">
                <h3 className="font-bold text-xl text-center">Game History</h3>
            </div>
            {/* Tabs: Move history and Score */}
            <div className="bg-white shadow-md p-4 rounded-lg">
                <div className="mb-3">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-indigo-500 text-lg">
                            Score
                        </h4>

                        <Button label="Reset Scores" onClick={onResetScores} />
                    </div>
                    <Score score={score} />
                </div>

                {/* Move history */}
                <div className="overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-indigo-500 text-lg">
                            Move History
                        </h4>

                        <Button
                            label="Reset History"
                            onClick={onResetHistory}
                        />
                    </div>
                    <ul className="h-[132px] overflow-y-auto">
                        {[...history].reverse().map((item, index) => (
                            <li
                                key={index}
                                className={`flex justify-between items-center  p-2 not-last:border-b ${
                                    currentMove === history.length - index
                                        ? "bg-gray-100 border-b-gray-300 "
                                        : "hover:bg-gray-50 border-b-gray-200 "
                                }`}
                            >
                                <span>
                                    Move #{history.length - index}:{" "}
                                    <strong>{item.player}</strong> to (
                                    {getCell(item.cell)})
                                </span>
                                <button
                                    onClick={() =>
                                        onJumpToHistory(
                                            history.length - index - 1
                                        )
                                    }
                                    className="border-0 font-semibold text-indigo-400 hover:text-indigo-500 cursor-pointer"
                                    type="button"
                                >
                                    <span className="text-sm">Go</span>
                                    &rarr;
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
