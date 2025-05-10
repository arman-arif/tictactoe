import Button from "./Button";

export default function History({
    history = [],
    score,
    onResetMove,
    onResetHistory,
}) {
    return (
        <div className="min-w-[300px]">
            <div className="text-center mb-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-center font-bold">Game History</h3>
            </div>
            {/* Tabs: Move history and Score */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="mb-3">
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg text-indigo-500 font-semibold">
                            Score
                        </h4>

                        <Button
                            label="Reset History"
                            onClick={onResetHistory}
                        />
                    </div>
                    <div className="flex justify-between gap-3 mt-2">
                        <div className="basis-1/3 border-2 border-gray-200 rounded text-center">
                            <p className="text-indigo-600 font-semibold text-xl py-1">
                                {score?.x ?? 0}
                            </p>
                            <p className="bg-indigo-50 text-indigo-500 font-semibold">
                                X
                            </p>
                        </div>
                        <div className="basis-1/3 border-2 border-gray-200 rounded text-center">
                            <p className="text-indigo-600 font-semibold text-xl py-1">
                                {score?.o ?? 0}
                            </p>
                            <p className="bg-indigo-50 text-indigo-500 font-semibold">
                                O
                            </p>
                        </div>
                        <div className="basis-1/3 border-2 border-gray-200 rounded text-center">
                            <p className="text-indigo-600 font-semibold text-xl py-1">
                                {score?.draw ?? 0}
                            </p>
                            <p className="bg-indigo-50 text-indigo-500 font-semibold">
                                Draw
                            </p>
                        </div>
                    </div>
                </div>

                {/* Move history */}
                <div className="overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg text-indigo-500 font-semibold">
                            Move History
                        </h4>

                        <Button label="Reset Move" onClick={onResetMove} />
                    </div>
                    <ul className="overflow-y-auto max-h-[132px]">
                        {Array.from({ length: 10 }, (_, index) => (
                            <li
                                key={index}
                                className="not-last:border-b border-b-gray-200 py-2 flex justify-between items-center"
                            >
                                <span>
                                    Move #{index + 1}: <strong>X</strong> to
                                    (1,1)
                                </span>
                                <a
                                    className="text-indigo-400 font-semibold pr-2"
                                    role="button"
                                >
                                    <span className="text-sm">Go</span>
                                    &rarr;
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
