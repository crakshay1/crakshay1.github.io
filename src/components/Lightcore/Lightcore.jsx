import { useEffect, useRef, useState } from "react";
import './Lightcore.css'


export default function LightCore() {
  const [lightState, setState] = useState("listen");


  switch (lightState) {
    case "idle":
      return <img src="src/assets/Light.png" className="core" alt="IDLE" />;

    case "think":
      return (
        <>
          <img src="src/assets/Light.png" className="core" alt="IDLE" />
          <img src="src/assets/compass.png" className="compass" alt="LOAD" />
          <img src="src/assets/Think.png" className="tiki" alt="THINK" />
        </>
      );

    case "listen":
      return (
        <>
          <img src="src/assets/Light.png" className="core" alt="IDLE" />
          <img src="src/assets/Listen.png" className="listen" alt="THINK" />
        </>
      );

    case "talk":
      return (
        <>
          <img src="src/assets/Light.png" className="core" alt="IDLE" />
          <div className="spectrum"></div>
          <audio className="myVoice" autoPlay src="backend/temp/pocket_great_sage.wav"/>
        </>
      );

    default:
      return <img src="src/assets/Light.png" className="core" alt="IDLE" />;
  }
}