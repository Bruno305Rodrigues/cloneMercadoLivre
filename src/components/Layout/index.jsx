import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import Product from '../Product';
import { Container, Wrapper } from './styles';

function Layout () {
    return (
        <Container>
           <Header />
                <Product />
            <Footer />
        </Container>
    );
};
export default Layout;