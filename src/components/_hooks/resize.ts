import { useState, useEffect } from 'react';

const useWindowSize = () => {

    const test = typeof window !== "undefined";

    const getSize = () => {
        return {
            width: test ? window.innerWidth : undefined,
            height: test ? window.innerHeight : undefined
        }
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;