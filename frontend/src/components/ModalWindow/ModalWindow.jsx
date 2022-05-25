import React, { useRef, useEffect } from 'react';
import styles from './ModalWindow.module.scss';

function ModalWindow(props) {
    const { isOpen, onClose, children } = props;
    const window = useRef(null);

    const windowStyles = isOpen
        ? `${styles.window} ${styles.active}`
        : styles.window;

    useEffect(() => {
        if (isOpen) {
            const handleClickOutside = (event) => {
                if (window.current && !window.current.contains(event.target)) {
                    onClose();
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen, window]);

    return (
        <div className={windowStyles}>
            <div ref={window} className={styles.container}>
                {children}
                <div onClick={() => onClose()} className={styles.close}></div>
            </div>
        </div>
    );
}

export { ModalWindow };
