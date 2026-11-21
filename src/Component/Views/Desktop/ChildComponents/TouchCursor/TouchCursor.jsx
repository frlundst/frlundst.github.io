import React from "react";
import "./style.css";

// Drawn at twice the pixel-art size so it is easy to see on a phone.
const CURSORS = {
    arrow: { src: "/resources/cursors/arrow@2x.png", width: 24, height: 40, hotspotX: 0, hotspotY: 0 },
    hand: { src: "/resources/cursors/hand@2x.png", width: 32, height: 40, hotspotX: 10, hotspotY: 0 },
};

// Touch screens have no mouse pointer, so this draws the retro cursor where
// the user last tapped. It hides again as soon as a real mouse is used.
export const TouchCursor = () => {
    const [cursor, setCursor] = React.useState(null);

    React.useEffect(() => {
        const handlePointerDown = (event) => {
            if (event.pointerType === "mouse") {
                setCursor(null);
                return;
            }
            const overLink = event.target instanceof Element && event.target.closest("a, button");
            setCursor(previous => ({
                x: event.clientX,
                y: event.clientY,
                kind: overLink ? "hand" : "arrow",
                tap: (previous ? previous.tap : 0) + 1,
            }));
        };
        const handlePointerMove = (event) => {
            if (event.pointerType === "mouse") {
                setCursor(null);
            }
        };

        window.addEventListener("pointerdown", handlePointerDown, { passive: true });
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        return () => {
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    if (!cursor) {
        return null;
    }

    const { src, width, height, hotspotX, hotspotY } = CURSORS[cursor.kind];

    return (
        <img
            // A new key per tap restarts the click animation.
            key={cursor.tap}
            className="touch-cursor"
            src={src}
            width={width}
            height={height}
            alt=""
            aria-hidden="true"
            style={{ left: cursor.x - hotspotX, top: cursor.y - hotspotY }}
        />
    );
};
