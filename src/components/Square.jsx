import IconCircle from "../icons/IconCircle";
import IconX from "../icons/IconX";

export default function Square({ text = null, onSqrClick }) {
    let renderIcon = <IconCircle size={50} />;
    if (text == "X") {
        renderIcon = <IconX size={60} strokeWidth={1.75} />;
    }

    let sqrTextClass = "text-center text-2xl m-0 leading-none";
    if (text == "X") {
        sqrTextClass += " text-sky-500";
    }
    if (text == "O") {
        sqrTextClass = " text-orange-600";
    }

    return (
        <div
            onClick={onSqrClick}
            className="inline-flex justify-center items-center hover:bg-gray-50 p-2 border-2 border-gray-300 rounded-md size-[5rem] cursor-pointer"
        >
            <div className={sqrTextClass}>{text && renderIcon}</div>
        </div>
    );
}
