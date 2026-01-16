import React from 'react';

const Features = () => {
    return (
        <>
            {/* Benefits Section */}
            <section id="benefits">
                <div className="container">
                    <h2 className="section-title">UNLOCK YOUR <span style={{ color: 'var(--primary-red)' }}>POTENTIAL</span></h2>
                    <div style={styles.grid}>
                        <FeatureCard title="Muscle Growth" icon="💪" desc="Scientifically formulated to maximize hypertrophy." />
                        <FeatureCard title="Lean Mass" icon="⚖️" desc="Gain pure muscle with zero unnecessary fillers." />
                        <FeatureCard title="Fast Recovery" icon="⚡" desc="Reduce soreness and get back to gym faster." />
                        <FeatureCard title="Increased Strength" icon="🏋️" desc="Power through plateaus and lift heavier." />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section style={{ backgroundColor: 'var(--bg-dark-gray)' }}>
                <div className="container">
                    <h2 className="section-title">WHY CHOOSE <span style={{ color: 'var(--primary-red)' }}>US?</span></h2>
                    <div style={styles.listGrid}>
                        <div style={styles.listItem}>
                            <h3 style={styles.listTitle}>100% Genuine</h3>
                            <p style={styles.listDesc}>Authentic products directly from manufacturers.</p>
                        </div>
                        <div style={styles.listItem}>
                            <h3 style={styles.listTitle}>Fast Delivery</h3>
                            <p style={styles.listDesc}>Get your fuel delivered within 24-48 hours.</p>
                        </div>
                        <div style={styles.listItem}>
                            <h3 style={styles.listTitle}>Trusted Brands</h3>
                            <p style={styles.listDesc}>We only stock the world's most reputed supplements.</p>
                        </div>
                        <div style={styles.listItem}>
                            <h3 style={styles.listTitle}>Best Price</h3>
                            <p style={styles.listDesc}>Guaranteed lowest prices in the market.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const FeatureCard = ({ title, icon, desc }) => (
    <div style={styles.card}>
        <div style={styles.icon}>{icon}</div>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDesc}>{desc}</p>
    </div>
);

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        textAlign: 'center'
    },
    card: {
        padding: '30px',
        border: '1px solid #333',
        borderRadius: '8px',
        transition: 'transform 0.3s',
        cursor: 'default'
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '20px'
    },
    cardTitle: {
        marginBottom: '15px',
        color: 'var(--primary-red)'
    },
    cardDesc: {
        color: 'var(--text-gray)'
    },
    listGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px'
    },
    listItem: {
        borderLeft: '4px solid var(--primary-red)',
        paddingLeft: '20px'
    },
    listTitle: {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: 'white'
    },
    listDesc: {
        color: 'var(--text-gray)',
        fontSize: '1rem'
    }
};

export default Features;
