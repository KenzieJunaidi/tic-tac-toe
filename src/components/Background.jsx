import { useState, useEffect } from 'react';

export const Background = (props) => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        props.handleLoad();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const generateStars = () => {
        const starsNum = Math.floor(window.innerHeight * window.innerWidth / 10000);
        const tempStars = [];

        for(let i=0; i<starsNum; i++){
            tempStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                duration: Math.random() * 4 + 2,
            });
        }

        setStars(tempStars);
    }

    const generateMeteors = () => {
        const numMeteors = 3;
        const tempMeteors = [];

        for(let i=0; i<numMeteors; i++){
            tempMeteors.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: Math.random() * 1 + 1,
                delay: Math.random() * 15,
                duration: Math.random() * 3 + 5,           
            })
        }

        setMeteors(tempMeteors);
    }

    return (
        <div className="background-wrapper">
            {stars.map((star) => (
                <div className="star" key={star.id} style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    animationDuration: star.duration + "s",
                    }}/>
            ))}

            {meteors.map((meteor) => (
                <div className="meteor" key={meteor.id} style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    opacity: meteor.opacity,
                    duration: meteor.delay,
                    animationDuration: meteor.duration + "s",
                    }}/>
            ))}
        </div>
    );
}