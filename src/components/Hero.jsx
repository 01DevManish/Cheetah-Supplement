import React from 'react';
import heroBg from '../assets/images/hero-bg.png';

const Hero = () => {
    return (
        <header style={styles.hero}>
            <div style={styles.overlay}></div>
            <div className="container" style={styles.content}>
                <h1 style={styles.headline}>
                    POWER YOUR MUSCLES <br />
                    WITH <span style={{ color: 'var(--primary-red)' }}>CHEETA SUPPLEMENTS</span>
                </h1>
                <p style={styles.subhead}>
                    Original Whey Proteins for Muscle Growth, Strength & Recovery
                </p>
                <div style={styles.buttons}>
                    <button className="btn-primary" style={{ marginRight: '20px' }}>Shop Now</button>
                    <button className="btn-outline">View Products</button>
                </div>
            </div>
        </header>
    );
};

const styles = {
    hero: {
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.7)'
    },
    content: {
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '900px'
    },
    headline: {
        fontSize: '4rem',
        lineHeight: '1.2',
        color: 'white',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    subhead: {
        fontSize: '1.5rem',
        color: 'var(--text-gray)',
        marginBottom: '40px',
        fontWeight: '300'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    }
};

export default Hero;
