// LoadingScreen.jsx
import { useState, useEffect } from 'react';
const LoadingScreen = () => {
    const [Isloading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!Isloading) {
            const timer = setTimeout(() => {
                setIsLoading(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [Isloading]);


    if (Isloading) {
        return null;
    }

    return (
        <div className={`loading-overlay ${Isloading ? 'exiting' : ''}`}>
            <div className="loading-content">
                <div className="spinner"></div>
                <h2>Cargando...</h2>
            </div>
        </div>
    );
};

export default LoadingScreen;