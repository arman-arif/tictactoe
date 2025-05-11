import { useRef } from "react";
import Audio from "./components/Audio";
import Game from "./components/Game";

export default function App() {
    const clickAudio = useRef(null);
    const drawAudio = useRef(null);
    const winAudio = useRef(null);

    const playAudio = (audioRef) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-slate-200 min-h-screen">
                <div className="my-4">
                    <h1 className="mb-6 font-bold text-4xl text-center">
                        Tic Tac Toe
                    </h1>

                    <Game
                        onWin={() => playAudio(winAudio)}
                        onDraw={() => playAudio(drawAudio)}
                        onPlayTurn={() => playAudio(clickAudio)}
                    />
                </div>
            </div>
            <Audio elementRef={clickAudio} src="assets/sounds/click.mp3" />
            <Audio elementRef={drawAudio} src="assets/sounds/draw.mp3" />
            <Audio elementRef={winAudio} src="assets/sounds/win.mp3" />
        </>
    );
}
