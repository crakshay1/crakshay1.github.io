import { useEffect, useRef, useState } from "react";
import Draggable from 'react-draggable';
import './Window.css'

export default function Window({taille, title, haut, gauche, hauteur, largeur, children}) {
    const nodeRef = useRef(null);
    return(
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} style={{
                position: "absolute",
                height: hauteur,
                width: largeur,
                top: haut,
                left: gauche,
                }} className="fen">
                <h1 style={{fontSize: taille}}>{title}</h1>

                <div className="content">
                    {children}
                </div>
            <div className="border"></div>
            </div>
        </Draggable>
    )
}