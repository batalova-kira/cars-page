import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Layout.styled";

const Layout = ({ children }) => {
    return (
        <Container>
            <header>
                <NavLink className="header-link" to="/">
                    Home
                </NavLink>
                <NavLink className="header-link" to="/catalog">
                    Catalog
                </NavLink>
                <NavLink className="header-link" to="/favorites">
                    Favorites
                </NavLink>
            </header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
