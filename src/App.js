import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
    const [lebaranMessage, setLebaranMessage] = useState(["Kalo mau ngasih THR chat aja yaa","مِنَ الْعَائِدِيْن وَالْفَائِزِيْن"]);

    const particleInitialization = async (main) => {
        await loadFireworksPreset(main);
    }

    const timeLeft = () => {
        const lebaranDate = new Date("March 31, 2025 08:00:00").getTime();
        const newDate = new Date().getTime();
        const remainingTime = lebaranDate - newDate
        return remainingTime
    }

    return (
        <>
            <Particles
                init={particleInitialization}
                options={{ preset: "fireworks" }}
            />
            <div className="flex flex-col justify-center items-center min-h-screen gap-4">
                <span className="text-white text-lg font-bold z-50">
                    <Typewriter
                        words={lebaranMessage}
                        loop={false}
                        cursorStyle={"_"}
                        cursor
                    />
                </span>

                <div className="z-50 text-white text-lg font-bold">
                    <Countdown
                        date={Date.now() + timeLeft()} onComplete={() => setLebaranMessage(["Kalo mau ngasih THR chat aja yaa"])}
                    />
                </div>

                <span className="text-white text-sm z-50 font-medium text-center">Segenap Keluarga besar <span className="font-bold">Maulana Yusup</span> mengucapkan Minal 'Aidin wal-Faizin</span>
                <span className="lg:text-white text-2xl z-50 font-medium">🙏</span>
            </div>
        </>
    );
}

export default App;
