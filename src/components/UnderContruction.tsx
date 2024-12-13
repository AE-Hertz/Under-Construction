"use client";

import { useState, useEffect } from "react";
import { MaskContainer } from "./svg-mask-effect";

const UnderConstruction = () => {
    const [isCursorInside, setIsCursorInside] = useState(true);

    const handleMouseEnter = () => setIsCursorInside(true);
    const handleMouseLeave = () => setIsCursorInside(false);

    useEffect(() => {
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <MaskContainer
                revealText={
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4 text-blue-300">
                            Exciting updates coming your way!
                        </h1>
                        <p className="text-lg font-medium">
                            The project is constructing... Stay tuned for something amazing!
                        </p>
                    </div>
                }
                size={40}
                revealSize={500}
                className={`bg-gradient-to-t from-black via-gray-900 to-gray-800 overflow-hidden ${
                    isCursorInside ? "mask-effect-active" : "mask-effect-inactive"
                }`}
            >
                <div className="text-center">
                    <h1 className="text-6xl font-bold transition duration-300 ease-in-out text-red-600">
                        Under Construction!
                    </h1>
                    <p className="mt-4 text-xl">
                        We appreciate your patience while we build something awesome.
                    </p>
                </div>
            </MaskContainer>
        </div>
    );
};

export default UnderConstruction;
