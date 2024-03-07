import styled from "styled-components";

export const WrapperCard = styled.div`
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
    gap: 12px;
`;

export const CardItemText = styled.div`
    font-family: Manrope;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
`;

export const CardSeparator = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
`;
