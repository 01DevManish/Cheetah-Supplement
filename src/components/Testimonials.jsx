import React from 'react';
import { testimonials } from '../data/products';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <h2 className="section-title">WHAT ATHLETES <span style={{ color: 'var(--primary-red)' }}>SAY</span></h2>
                <div style={styles.grid}>
                    {testimonials.map(t => (
                        <div key={t.id} style={styles.card}>
                            <div style={styles.stars}>{"★".repeat(t.rating)}</div>
                            <p style={styles.text}>"{t.text}"</p>
                            <div style={styles.name}>- {t.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
    },
    card: {
        backgroundColor: 'var(--bg-dark-gray)',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #333'
    },
    stars: {
        color: '#ffc107',
        fontSize: '1.2rem',
        marginBottom: '20px'
    },
    text: {
        fontStyle: 'italic',
        fontSize: '1.1rem',
        color: 'var(--text-gray)',
        marginBottom: '20px'
    },
    name: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right'
    }
};

export default Testimonials;
