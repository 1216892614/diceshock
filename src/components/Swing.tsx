"use client";

import { MouseEventHandler, useState } from "react";
import { useSpringValue, animated, to } from "@react-spring/web";

const Swing: React.FC<{
    children: React.ReactNode;
    intensity?: number;
    className?: { outer?: string; inner?: string };
}> = ({ children, intensity = 10, className }) => {
    const [isHover, setIsHover] = useState(false);
    const x = useSpringValue(0);
    const y = useSpringValue(0);

    const move: MouseEventHandler<HTMLDivElement> = (evt) => {
        if (!isHover) return;

        const { clientX, clientY } = evt.nativeEvent;
        const rect = evt.currentTarget.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = clientX - centerX;
        const offsetY = clientY - centerY;

        const relativeX = offsetX / (rect.width / 2);
        const relativeY = offsetY / (rect.height / 2);

        const clampedX = Math.max(-1, Math.min(1, relativeX));
        const clampedY = Math.max(-1, Math.min(1, relativeY));

        x.start(clampedX);
        y.start(-clampedY);
    };

    return (
        <div
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => {
                setIsHover(false);
                x.start(0);
                y.start(0);
            }}
            onMouseMove={move}
            style={{ perspective: 800 }}
            className={className?.outer}
        >
            <animated.div
                style={{
                    transform: to(
                        [x, y],
                        (x, y) =>
                            `rotateY(${x * intensity}deg) rotateX(${
                                y * intensity
                            }deg)`
                    ),
                }}
            >
                {children}
            </animated.div>
        </div>
    );
};

export default Swing;
