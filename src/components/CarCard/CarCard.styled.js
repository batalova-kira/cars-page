import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export const WrapperCard = styled.div`
    position: relative;
    max-width: 274px;
`;

export const WrapperImg = styled.div`
    width: 100%;
`;

export const CardImg = styled.img`
    margin-bottom: 14px;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
`;

export const WrapperTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const CardTitle = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`;

export const CardColorActive = styled.span`
    color: #3470ff;
`;

export const CardPrice = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`;

export const WrapperText = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 4px;
    margin-bottom: 28px;
`;

export const CardItemText = styled.p`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`;

export const WrapperBtn = styled.div`
    width: 100%;
`;

export const CardMainBtn = styled.button`
    padding: 12px 98px;
    border-radius: 12px;
    border: none;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #fff;
    background: #3470ff;
    transition: background-color 0.3s ease;

    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`;

export const HeartBtn = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;

export const HeartIcon = styled(FaRegHeart)`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    /* position: absolute;
    top: 14px;
    right: 14px; */
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #3470ff;
    }
`;

export const HeartFullIcon = styled(FaHeart)`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    /* position: absolute;
    top: 14px;
    right: 14px; */
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #3470ff;
    }
`;
