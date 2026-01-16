import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.top}>
                    <div style={styles.brand}>
                        <img src={logo} alt="Cheetah Supplements" style={{ height: '60px', marginBottom: '15px' }} />
                        <p style={{ color: 'var(--text-gray)' }}>Fuel Your Fitness</p>
                    </div>

                    <div style={styles.social}>
                        <a href="#" style={styles.socialLink}>Instagram</a>
                        <a href="#" style={styles.socialLink}>Facebook</a>
                        <a href="#" style={styles.socialLink}>WhatsApp</a>
                    </div>
                </div>

                <div style={styles.contact}>
                    <p>Contact us: cheetahsuppelents@gmail.com | +91 9813311764</p>
                </div>

                <div style={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Cheetah Supplements. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',
        padding: '60px 0 20px',
        borderTop: '1px solid #333'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '40px',
        gap: '40px'
    },
    social: {
        display: 'flex',
        gap: '20px'
    },
    socialLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'color 0.3s'
    },
    contact: {
        marginBottom: '40px',
        color: 'var(--text-gray)'
    },
    bottom: {
        textAlign: 'center',
        color: '#555',
        fontSize: '0.9rem',
        paddingTop: '20px',
        borderTop: '1px solid #1a1a1a'
    }
};

export default Footer;
