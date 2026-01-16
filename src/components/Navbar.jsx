import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <div style={styles.logo}>
                    <img src={logo} alt="Cheetah Supplements" style={{ height: '50px', objectFit: 'contain' }} />
                </div>

                <div style={styles.desktopMenu}>
                    <a href="#products" style={styles.link}>Products</a>
                    <a href="#benefits" style={styles.link}>Benefits</a>
                    <a href="#testimonials" style={styles.link}>Reviews</a>
                    <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Shop Now</button>
                </div>

                {/* Mobile menu icon placeholder */}
                <div style={styles.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        padding: '20px 0',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: '2px'
    },
    desktopMenu: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
        textTransform: 'uppercase',
        fontWeight: '500',
        letterSpacing: '1px',
        transition: 'color 0.3s'
    },
    mobileMenuIcon: {
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        display: 'none', // Hidden on desktop by default, would need media query class in real CSS or styled-components
    }
};

export default Navbar;
