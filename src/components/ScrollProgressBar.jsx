import React, { useState, useEffect } from 'react';
import '../components/ScrollProgress.css'

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="scroll-progress-bar"
            style={{
                height: '1px',
                position: 'fixed',
                bottom: 20,
                left: '10%',
                right: '10%',
                width: '80%', // Ширина білої лінії
                backgroundColor: 'white',
                zIndex: 9999,
            }}
        >
            <div
                className="scroll-progress-rectangle"
                style={{
                    width: '100px', // Ширина прямокутника
                    height: '6px',
                    bottom: '-3px',
                    backgroundColor: 'black',
                    border: '0.5px solid white',
                    position: 'absolute',
                    left: `${scrollProgress}%`, // Розташування прямокутника вздовж лінії
                }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
