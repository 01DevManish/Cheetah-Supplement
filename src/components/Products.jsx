import React from 'react';
import { products } from '../data/products';

const Products = () => {
    return (
        <section id="products" style={{ backgroundColor: 'var(--bg-dark-gray)' }}>
            <div className="container">
                <h2 className="section-title">OUR PREMIUM <span style={{ color: 'var(--primary-red)' }}>COLLECTION</span></h2>

                <div style={styles.grid}>
                    {products.map(product => (
                        <div key={product.id} className="product-card" style={styles.card}>
                            <div style={styles.imageContainer}>
                                <img src={product.image} alt={product.name} style={styles.image} />
                                <span style={styles.price}>{product.price}</span>
                            </div>
                            <div style={styles.details}>
                                <div style={styles.tags}>
                                    {product.tags.map(tag => (
                                        <span key={tag} style={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3 style={styles.name}>{product.name}</h3>
                                <p style={styles.desc}>{product.description}</p>
                                <div style={styles.rating}>
                                    {"★".repeat(Math.floor(product.rating))}
                                    {"☆".repeat(5 - Math.floor(product.rating))}
                                </div>
                                <button className="btn-primary" style={{ width: '100%', marginTop: '15px' }}>Buy Now</button>
                            </div>
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        padding: '20px 0'
    },
    card: {
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #333',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    imageContainer: {
        height: '300px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '20px'
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        objectFit: 'contain'
    },
    price: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'var(--primary-red)',
        color: 'white',
        padding: '5px 10px',
        fontWeight: 'bold',
        borderRadius: '4px'
    },
    details: {
        padding: '20px'
    },
    tags: {
        display: 'flex',
        gap: '8px',
        marginBottom: '10px',
        flexWrap: 'wrap'
    },
    tag: {
        fontSize: '0.75rem',
        color: 'var(--text-gray)',
        border: '1px solid #333',
        padding: '2px 8px',
        borderRadius: '100px',
        textTransform: 'uppercase'
    },
    name: {
        fontSize: '1.4rem',
        marginBottom: '8px',
        color: 'white'
    },
    desc: {
        color: 'var(--text-gray)',
        fontSize: '0.9rem',
        lineHeight: '1.5',
        marginBottom: '15px',
        height: '40px', // limit height
        overflow: 'hidden'
    },
    rating: {
        color: '#ffc107',
        marginBottom: '15px'
    }
};

export default Products;
