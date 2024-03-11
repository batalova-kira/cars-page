import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { StyledModal } from "./Modal.styled";

const Modal = () => {
    const { modalData, closeModal } = useContext(ModalContext);
    const [counter, setCounter] = useState(1);
    const inputRef = useRef(null);
    const firstRenderRef = useRef(true);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [closeModal]);

    const handleOverayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    useEffect(() => {
        if (!inputRef.current) return;

        inputRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };

    useEffect(() => {
        if (firstRenderRef.current === false) {
            console.log("counter changed", counter);
        }

        return () => {
            firstRenderRef.current = false;
        };
    }, [counter]);

    return (
        <StyledModal onClick={handleOverayClick}>
            <div className="modal">
                <button onClick={closeModal} className="closeBtn">
                    ❌
                </button>
                <h2>Car Details</h2>
                <div>
                    <h3>Title: {modalData.make}</h3>
                    <p>Price: {modalData.type}$</p>
                    <p>Discount: {modalData.rentalPrice}$</p>
                </div>
                {/* <input ref={inputRef} type="text" />
                <button onClick={handleButtonClick}>Select input</button>
                <button onClick={() => setCounter((prev) => prev + 1)}>
                    Product count: {counter}
                </button> */}
            </div>
        </StyledModal>
    );
};

export default Modal;
