import React from 'react';

function LoadModal({ show, handleClose, children }) {
    if (!show) {
        return null;
    }

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center'
    }
};

export default LoadModal;
