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

export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        width: "224px",
        border: "none",
        borderRadius: "14px",
        padding: "7px 8px",
        fontSize: "18px",
        lineHeight: "111%",
        background: "#f7f7fb",
        boxShadow: "none",
        color: "#121417",
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: "#121417",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: "#fff",
        color: " rgba(18, 20, 23, 0.2)",
        "&:hover": {
            color: "#121417",
        },
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: "#121417",
    }),
    menu: (provided) => ({
        ...provided,
        border: "1px solid rgba(18, 20, 23, 0.05)",
        borderRadius: "14px",
        boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
        background: "#fff",
        overflow: "hidden",
        padding: "14px 8px",
    }),
    menuList: (provided) => ({
        ...provided,
        "&::-webkit-scrollbar": {
            width: "8px",
            height: "130px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(18, 20, 23, 0.05)",
            borderRadius: "10px",
            margin: "14px",
        },
    }),
};
