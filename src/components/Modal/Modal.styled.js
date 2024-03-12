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
`;

export const ModalTitle = styled.p`
    margin-bottom: 8px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: #121417;
`;

export const ModalTitleAccent = styled.span`
    /* font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 133%; */
    color: #3470ff;
`;
