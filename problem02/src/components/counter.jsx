import { useEffect, useState } from "react";

const Counter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Timer: {seconds} seconds</h1>
        </div>
    );
};
export default Counter;