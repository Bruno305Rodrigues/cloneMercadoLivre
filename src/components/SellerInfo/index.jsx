import React from 'react';

import { 
    Container,
    Title,
    LocationCard,
    ReputationCard,
    ReputationThermometer,
    ReputationRow,
    SupportIcon,
    ClockIcon,
    More,
    LocationIcon,

} from './styles';

function SellerInfo() {
    return (
        <Container>
           <Title>Informações do vendedor</Title>

           <LocationCard>
           <div>
               
               <p>Localização</p>
               <strong><LocationIcon /></strong>
               <span>São Leopoldo, São Leopoldo</span>
           </div>
           </LocationCard>

           
           <ReputationCard>
               <ReputationThermometer>
                   <li />
                   <li />
                   <li />
                   <li />
                   <li className="active" />
               </ReputationThermometer>

               <ReputationRow>
                   <div>
                       <strong>561</strong>
                       <span>Vendas nos últimos 4 meses</span>
                   </div>

                   <div>
                       <strong><SupportIcon /></strong>
                       <span>Presta um bom atendimento</span>
                   </div>

                   <div>
                       <strong><ClockIcon /></strong>
                       <span>Vendas nos últimos 4 meses</span>
                   </div>
               </ReputationRow>
           </ReputationCard>

           <More href="#">Ver mais dados do vendedor</More>
        </Container>
    );
};

export default SellerInfo;