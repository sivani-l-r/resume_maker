import React from 'react';

function Modal({ show, handleClose, handleSave, inputValue, setInputValue }) {
    if (!show) {
        return null;
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <h2>Save Resume</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter resume name"
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleClose}>Cancel</button>
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

export default Modal;
