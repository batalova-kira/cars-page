import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props) =>
        props.specialLook ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.5)"};
    /* width: 100vw;
     height: 100vh; */
    &:hover {
        cursor: pointer;
    }
    .modal {
        padding: 40px;
        max-width: 541px;
        width: 100%;
        /* min-height: 450px; */
        background-color: white;
        border-radius: 24px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:hover {
            cursor: auto;
        }
    }
`;

export const CloseIcon = styled(IoClose)`
    font-size: 24px;
    color: #121417;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        transform: rotate(90deg);
        color: #3470ff;
    }
`;

export const WrapperModalImg = styled.div`
    width: 100%;
    margin-bottom: 14px;
`;

export const ModalImg = styled.img`
    max-width: 461px;
    width: 100%;
    height: 248px;

    border-radius: 14px;
    background: #f3f3f2;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`;

export const WrapperModalText = styled.div`
    width: 100%;
    max-width: 277px;
    margin-bottom: 14px;
`;

export const ModalTitle = styled.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
`;

export const ModalTitleAccent = styled.span`
    color: #3470ff;
`;

export const ModalTextWrapper = styled.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`;

export const ModalDescriptionWrapper = styled.p`
    margin-bottom: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`;

export const TitleModalFunctionalities = styled.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`;

export const TextModalAccessories = styled.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`;

export const TextModalFunctionalities = styled.p`
    width: 100%;
    margin-bottom: 4px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`;

export const RentalModalWrapper = styled.div`
    width: 100%;

    margin-bottom: 8px;
`;

export const TitleModalRental = styled.h3`
    width: 100%;
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
`;
export const RentalModalWrapperItems = styled.div`
    width: 100%;
    max-width: 461px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`;

export const RentalModalItems = styled.div`
    border-radius: 35px;
    padding: 7px 22px;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background: #f9f9f9;
`;

export const RentalModalItemsAccent = styled.span`
    font-weight: 600;
    color: #3470ff;
`;

export const BtnModal = styled.button`
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    border: none;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    background: #3470ff;

    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`;
