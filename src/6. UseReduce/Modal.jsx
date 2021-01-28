import React, { useEffect } from 'react';

const Modal = ({ modalContent, modalClose, modalClass }) => {
    useEffect(() => {
        setTimeout(() => {
            modalClose();
        }, 3000)
    })
    return (
        <div className={modalClass}>
            <p>{modalContent}</p>
        </div>
    )
}

export default Modal;
