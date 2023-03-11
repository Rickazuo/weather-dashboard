import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Ball = ({ sunset, sunrise, currentTime }) => {
    const [angle, setAngle] = useState(180);
    const [width, setWidth] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            let maxAngle;
            const range =
                parseInt(sunset.split(":")[0]) -
                parseInt(sunrise.split(":")[0]);

            const currentHour =
                parseInt(currentTime.split(":")[0]) -
                parseInt(sunrise.split(":")[0]);

            const degreesPerHour = 180 / range;
            maxAngle = currentHour * degreesPerHour + 180;

            if (angle <= maxAngle) {
                let widthAlfa = 0.62;
                if (maxAngle >= 180 && maxAngle < 240) widthAlfa = 0.22;
                if (maxAngle >= 240 && maxAngle <= 299) widthAlfa = 0.5;

                setAngle((angle) => angle + 1);
                setWidth((width) => width - widthAlfa);
            } else {
                clearInterval(interval);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [angle, currentTime]);

    return (
        sunset && (
            <div className={styles.container}>
                <div className={styles.path}>
                    <div
                        className={styles.insidePath}
                        style={{ width: `${width}%` }}
                    />
                </div>
                <div className={styles.time}>{currentTime}</div>
                <div
                    className={styles.ball}
                    style={{
                        transform: `translateX(${
                            Math.cos((angle * Math.PI) / 180) * 100 + 100
                        }px) translateY(${
                            Math.sin((angle * Math.PI) / 180) * 100
                        }px)`,
                    }}
                />
            </div>
        )
    );
};

export default Ball;
