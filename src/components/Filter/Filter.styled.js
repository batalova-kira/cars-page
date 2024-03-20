import styled from "styled-components";

export const FilterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 50px;
`;
export const SelectWrapper = styled.div`
    position: relative;
`;

export const FilterLabel = styled.span`
    position: absolute;
    top: -22px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: #8a8a89;
`;

export const SearchBtn = styled.button`
    padding: 14px 44px;
    border-radius: 12px;
    border: none;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    background: #3470ff;
    transition: background-color 0.3s ease;

    &:hover {
        cursor: pointer;
        background: #0b44cd;
    }
`;
