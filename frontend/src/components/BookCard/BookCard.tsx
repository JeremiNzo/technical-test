import type { CSSProperties } from 'react';

interface BookCardProps {
    titulo: string;
    descripcion: string;
    autorNombre: string;
    autorId: number;
}

export const BookCard: React.FC<BookCardProps> = ({ titulo, descripcion, autorNombre, autorId }) => {
    return (
        <div style={styles.card}>
            <div style={styles.cardHeader}>
                <span style={styles.titulo}>{titulo}</span>
                <span style={styles.badge}>AUTHORID: {autorId}</span>
            </div>
            <p style={styles.autorNombre}>{autorNombre}</p>
            <p style={styles.descripcion}>{descripcion}</p>

            <div style={styles.footer}>
                <button type="button" style={styles.showBtn}>SHOW BOOK</button>
            </div>
        </div>
    );
};

const styles: Record<string, CSSProperties> = {
    card: {
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: '20px 24px',
        marginBottom: 16,
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 12,
        marginBottom: 8,
    },
    titulo: {
        fontSize: 13,
        fontWeight: 700,
        textTransform: 'uppercase',
        color: '#222',
        letterSpacing: '0.5px',
        flex: '1 1 auto',
        textAlign: 'left' as const,
    },
    badge: {
        flexShrink: 0,
        backgroundColor: '#e8f5e9',
        color: '#1b5e20',
        fontSize: 11,
        fontWeight: 700,
        padding: '4px 10px',
        borderRadius: 999,
        textTransform: 'uppercase',
    },
    autorNombre: {
        margin: '0 0 10px',
        fontSize: 15,
        fontWeight: 700,
        color: '#222',
        textAlign: 'left' as const,
    },
    descripcion: {
        margin: '0 0 16px',
        fontSize: 14,
        color: '#555',
        lineHeight: 1.5,
        textAlign: 'justify' as const,
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    showBtn: {
        border: 'none',
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.5px',
        color: '#6b5b95',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
};

export default BookCard;