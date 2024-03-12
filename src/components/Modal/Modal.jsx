import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import {
    CloseIcon,
    ModalDescriptionWrapper,
    ModalImg,
    ModalTextWrapper,
    ModalTitle,
    ModalTitleAccent,
    RentalModalItems,
    RentalModalItemsAccent,
    RentalModalWrapper,
    RentalModalWrapperItems,
    StyledModal,
    TextModalAccessories,
    TextModalFunctionalities,
    TitleModalFunctionalities,
    TitleModalRental,
    WrapperModalImg,
    WrapperModalText,
} from "./Modal.styled";

const Modal = () => {
    const { modalData, closeModal } = useContext(ModalContext);
    // const [counter, setCounter] = useState(1);
    // const inputRef = useRef(null);
    // const firstRenderRef = useRef(true);
    const {
        img,
        photoLink,
        description,
        make,
        model,
        year,
        address,
        fuelConsumption,
        engineSize,
        accessories,
        functionalities,
        type,
        id,
        rentalConditions,
    } = modalData;

    const parts = address.split(",");
    const city = parts[1].trim();
    const country = parts[2].trim();

    const conditionsItems = rentalConditions.split("\n"); // Розділяємо рядок за символом нового рядка

    const minimumAgePhrase = conditionsItems[0];
    const minimumAgeWord = minimumAgePhrase.split(":")[0].trim();
    const minimumAgeNumber = minimumAgePhrase.split(":")[1].trim();

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

    return (
        <StyledModal onClick={handleOverayClick}>
            <div className="modal">
                <CloseIcon onClick={closeModal}>&times;</CloseIcon>
                <WrapperModalImg>
                    <ModalImg src={img || photoLink} alt={description} />
                </WrapperModalImg>
                <WrapperModalText>
                    <ModalTitle>
                        {make} <ModalTitleAccent>{model}</ModalTitleAccent>,{" "}
                        {year}
                    </ModalTitle>
                    <ModalTextWrapper>
                        {city} | {country} | Id: {id} | Year: {year} | Type:{" "}
                        {type} Fuel Consumption: {fuelConsumption} | Engine
                        Size: {engineSize}
                    </ModalTextWrapper>
                </WrapperModalText>
                <ModalDescriptionWrapper>{description}</ModalDescriptionWrapper>
                <TitleModalFunctionalities>
                    Accessories and functionalities:
                </TitleModalFunctionalities>
                <TextModalAccessories>
                    {accessories[0]} | {accessories[1]} | {accessories[2]}
                </TextModalAccessories>
                <TextModalFunctionalities>
                    {functionalities[0]} | {functionalities[1]} |
                    {functionalities[2]}
                </TextModalFunctionalities>
                <RentalModalWrapper>
                    <TitleModalRental>Rental Conditions:</TitleModalRental>
                </RentalModalWrapper>
                <RentalModalWrapperItems>
                    <RentalModalItems>
                        {minimumAgeWord} :&nbsp;
                        <RentalModalItemsAccent>
                            {minimumAgeNumber}
                        </RentalModalItemsAccent>
                    </RentalModalItems>
                    <RentalModalItems>{conditionsItems[1]}</RentalModalItems>
                    <RentalModalItems>{conditionsItems[2]}</RentalModalItems>
                </RentalModalWrapperItems>
            </div>
        </StyledModal>
    );
};

export default Modal;
