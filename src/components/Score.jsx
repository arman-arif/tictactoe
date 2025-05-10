export default function Score({ score }) {
    return (
        <div className="flex justify-between gap-3 mt-2">
            <div className="border-2 border-gray-200 rounded text-center basis-1/3">
                <p className="py-1 font-semibold text-indigo-600 text-xl">
                    {score?.x ?? 0}
                </p>
                <p className="bg-indigo-50 font-semibold text-indigo-500">X</p>
            </div>
            <div className="border-2 border-gray-200 rounded text-center basis-1/3">
                <p className="py-1 font-semibold text-indigo-600 text-xl">
                    {score?.o ?? 0}
                </p>
                <p className="bg-indigo-50 font-semibold text-indigo-500">O</p>
            </div>
            <div className="border-2 border-gray-200 rounded text-center basis-1/3">
                <p className="py-1 font-semibold text-indigo-600 text-xl">
                    {score?.draw ?? 0}
                </p>
                <p className="bg-indigo-50 font-semibold text-indigo-500">
                    Draw
                </p>
            </div>
        </div>
    );
}
