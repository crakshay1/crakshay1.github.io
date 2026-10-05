import { useEffect, useRef, useState } from "react";
import LightCore from "./components/Lightcore/Lightcore";
import Window from "./components/Window/Window";
import Slide from "./components/Slides/Slides";
import Arbre from "./components/Arbre/Arbre";
import Projects from "./components/Projects/Projects";

function App() {
  const [muted, setMuted] = useState(true);
  return (
    <>
      <LightCore />
      <div className="zone">      
        <p id="titlePlate">WELCOME TO AKSHAY'S PORTFOLIO</p>
      </div>
      
      <Window taille = "2vh" title="PROFILE" hauteur="20vh" largeur="27vw" haut="13vh" gauche="3vw">
        <p className="profile">
            <b>Bioinformatics graduate student</b> pursuing a <b>Master’s in GENIOMHE-AI</b> at 
            <b> Université Paris-Saclay</b>, with a background in <b>Biology & Computer Science</b>.
            With research experience at <b>LaMMe (INRAE/IPS2)</b>, I focus on 
            <u> genome analysis</u>, <b>biological data processing</b>, and 
            <b> bioinformatics software development</b>.
        </p>
      </Window>

      <Window taille = "2vh" title="HOBBIES" hauteur="25vh" largeur="15vw" haut="38.5vh" gauche="3vw">
          <Slide></Slide>
      </Window>

      <Window taille = "2vh" title="PROJECTS" hauteur="80vh" largeur="28vw" haut="13vh" gauche="68vw">
        <Projects></Projects>
      </Window>

      <Window taille = "2vh" title="EDUCATION" hauteur="26vh" largeur="27vw" haut="67vh" gauche="3vw">
        <Arbre></Arbre>
      </Window>


      <Window taille = "2vh" title="LANGUAGES" hauteur="25vh" largeur="10vw" haut="38.5vh" gauche="19vw">
        <ul className="languages">
            <li>🇫🇷 Français <span>[Natif]</span></li>
            <li>🇲🇺 Créole <span>[Natif]</span></li>
            <li>🇬🇧 English <span>[C1]</span></li>
            <li>🇪🇸 Español <span>[B2]</span></li>
            <li>🇱🇧 لبناني <span>[A2]</span></li>
            <li>🇩🇪 Deutsch <span>[A2]</span></li>
        </ul>
      </Window>

      <div className="musicaaa">
            <button onClick={() => setMuted(!muted)}>
                {muted ?
                <img src="/music_off.png" alt="On" ></img> 
                :
                <img src="/music_on.png" alt="Off"></img>
                }
            </button>
            <p style={{position:"fixed", top: "87%", left: "40.5%"}}>Press cool button for cool lobby music</p>
            <p style={{position:"fixed", top: "90%", left: "43%", fontSize: "1vmin"}}>
              <i>
                <a
                  href="https://www.youtube.com/watch?v=7GLRGJFSnnU"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color: "pink"}}
                >
                  PS Vita Store Theme
                </a>
                {" - SpongeFreakDX"}
              </i>
            </p>
      </div>

      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/7GLRGJFSnnU?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=7GLRGJFSnnU`}        
        allow="autoplay; encrypted-media"
        style={{ display: "none" }}
        title="Background audio"
      />
    </>
  );
}

export default App;


