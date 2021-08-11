import React from "react";

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from "../ProductAction";

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

function Product () {
    return (
        <Container>
            <Row>
                <a href="#"> Compartilhar </a>
                <a href="#"> Vender um igual </a>
            </Row>
                <Panel>
                    <Column>
                        <Gallery>
                            <img alt='T-Shirt' src={tshirtImage} />
                        </Gallery>

                        <Info />
                    </Column>

                    <Column>
                        <ProductAction />
                        <SellerInfo />

                        <WarrantySection />
                        <WarrantySection />
                        <WarrantySection />


                    </Column>

                </Panel>

            
        </Container>
    );
};

const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>
        <div>
            <span>
                <p className="title">Compra garantida com o Loren Ipsun</p>
                <p className="description">Receba o produto que você comprou ou devolvemos o seu dinheiro</p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">Sem garantia</p>
            </span>
        </div>
        <a href="#">Saiba mais sobre garantia</a>
    </Section>
)

const Info = () => (
    <Description>
        <h2>Descrição</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nullam molestie mauris eget malesuada scelerisque.
          Donec ultricies cursus augue, sit amet scelerisque ante commodo molestie.
           Nulla facilisi. Quisque lobortis feugiat magna ut laoreet.
          ectetur vitae. Aliquam erat volutpat. Vivamus blandit diam id nisl ornare,
           vitae pulvinar eros volutpat. Curabitur ac elit vitae est tincidunt egestas non sit amet magna.
        </p>
    </Description>
)
export default Product;