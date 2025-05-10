export default function Button({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="bg-indigo-500 text-white px-2 py-0 rounded text-sm cursor-pointer hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition duration-200 ease-in-out"
        >
            {label}
        </button>
    );
}
