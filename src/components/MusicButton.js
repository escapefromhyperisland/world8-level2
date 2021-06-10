import React, { useState }  from "react";
import useSound from "use-sound";

//Import sound
import BackgroundMusic from "./sound/background.mp3";

function MusicButton () {
   //Setting background sound
    const [play] = useSound(BackgroundMusic, {volume: 0.1, loop: true});

    return (
    <div className="musicButton">
        <switch onClick={play}>Play music</switch>
    </div>
    )
}

export default MusicButton