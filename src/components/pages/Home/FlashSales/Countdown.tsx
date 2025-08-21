"use client";
import { useCallback, useEffect, useState } from "react";

interface CountdownProps {
    targetDate: string; 
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = useCallback(() => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };

        if (difference > 0) {
            timeLeft = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
                minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
            };
        }

        return timeLeft;
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, calculateTimeLeft]);

    return (
        <div className="flex gap-4 text-center">
            <div>
                <span>Days</span>
                <p className="text-2xl font-bold">{timeLeft.days}</p>
            </div>
            <div>
                <span>Hours</span>
                <p className="text-2xl font-bold">{timeLeft.hours}</p>
            </div>
            <div>
                <span>Minutes</span>
                <p className="text-2xl font-bold">{timeLeft.minutes}</p>
            </div>
            <div>
                <span>Seconds</span>
                <p className="text-2xl font-bold">{timeLeft.seconds}</p>
            </div>
        </div>
    );
};

export default Countdown;
