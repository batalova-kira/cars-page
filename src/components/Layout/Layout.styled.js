import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    width: 1440px;
    padding: 50px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 12px 24px;
    border-radius: 12px;
    border: none;

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    text-decoration: none;
    color: #fff;
    background: #3470ff;
    transition-duration: 0.4s;

    &:hover {
        cursor: pointer;
        background: #fff;
        color: #0b44cd;
        box-shadow: 0px 2px 5px 3px #97b1bf;
    }
`;
