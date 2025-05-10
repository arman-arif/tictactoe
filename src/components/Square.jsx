import IconCircle from "../icons/IconCircle";
import IconX from "../icons/IconX";

export default function Square({ text = null, onSqrClick }) {
    let renderIcon = <IconCircle size={50} />;
    if (text == "X") {
        renderIcon = <IconX size={60} strokeWidth={1.75} />;
    }

    return (
        <div
            onClick={onSqrClick}
            className="border-2 border-gray-300 rounded-md p-2 size-[5rem] inline-flex items-center justify-center cursor-pointer hover:bg-gray-50"
        >
            <div className="text-center text-indigo-500 text-2xl m-0 leading-0">
                {text && renderIcon}
            </div>
        </div>
    );
}
