import IconCircle from "../icons/IconCircle";
import IconX from "../icons/IconX";

export default function Square({ text = null, onSqrClick, isWinningSqr }) {
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

    let sqrClass =
        "inline-flex justify-center items-center p-2 border-2 rounded-md size-[5rem] ";
    if (isWinningSqr) {
        sqrClass += " bg-indigo-50 border-indigo-400";
    } else if (text) {
        sqrClass += " cursor-default border-gray-300";
    } else {
        sqrClass +=
            " hover:bg-gray-100 hover:border-gray-400 border-gray-300 cursor-pointer ";
    }

    return (
        <div onClick={onSqrClick} className={sqrClass}>
            <div className={sqrTextClass}>{text && renderIcon}</div>
        </div>
    );
}
