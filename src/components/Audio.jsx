export default function Audio({ elementRef, src }) {
    return (
        <audio
            className="hidden"
            ref={elementRef}
            src={src}
            preload="auto"
        ></audio>
    );
}
