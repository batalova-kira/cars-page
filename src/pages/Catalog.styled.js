import styled from "styled-components";

export const CatalogItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
    margin-bottom: 100px;
`;

export const BtnPagination = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    border: none;
    transition: background-color 0.3s ease;
    color: #3470ff;
    background: none;

    &:hover {
        cursor: pointer;
        color: #0b44cd;
    }
`;
