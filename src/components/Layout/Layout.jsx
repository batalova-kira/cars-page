import React from "react";
import { Container, Header, StyledNavLink } from "./Layout.styled";

const Layout = ({ children }) => {
    return (
        <Container>
            <Header>
                <StyledNavLink className="header-link" to="/">
                    Home
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/catalog">
                    Catalog
                </StyledNavLink>
                <StyledNavLink className="header-link" to="/favorites">
                    Favorites
                </StyledNavLink>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
