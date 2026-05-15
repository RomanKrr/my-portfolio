import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, images }) => {
    const [activeImage, setActiveImage] = useState(null);

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                    {/* HEADER */}
                    <div className="modal-header">
                        <h2>Project Screenshots</h2>
                        <button className="close-btn" onClick={onClose}>✕</button>
                    </div>

                    {/* GRID */}
                    <div className="modal-grid">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="grid-item"
                                onClick={() => setActiveImage(img)}
                            >
                                <img src={img} alt={`screen-${index}`} />
                            </div>
                        ))}
                    </div>

                    {/* DESCRIPTION */}
                    <div className="modal-description">
                        <h3>About this project</h3>

                        <p>
                            React Native application designed for tracking nutrition intake.
                            It calculates calories, proteins, fats, and carbohydrates for your meals.
                        </p>

                        {/* TAGS (ОЦЕ ТЕ ЩО ТИ ВТРАТИВ) */}
                        <div className="modal-tags">
                            <span>React Native</span>
                            <span>Expo</span>
                            <span>Health App</span>
                            <span>Calories Tracker</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* FULLSCREEN IMAGE */}
            {activeImage && (
                <div className="image-viewer" onClick={() => setActiveImage(null)}>
                    <button
                        className="viewer-close"
                        onClick={() => setActiveImage(null)}
                    >
                        ✕
                    </button>

                    <img src={activeImage} alt="fullscreen" />
                </div>
            )}
        </>
    );
};

export default Modal;