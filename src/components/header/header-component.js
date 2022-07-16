import React, { Fragment } from 'react';
import { 
    Menu, 
    Container,  
    Icon,
    Responsive, 
    Button, 
} 
from 'semantic-ui-react';

const HeaderComponent = () => {


    return(
        <Fragment>
            <Menu
                fixed='top'
                style={{
                    maxHeight:'10px !important',
                    borderBottom:'3px solid black',
                    height:40,
                    fontSize:12,
                    color:'#171617',
                    textTransform:'uppercase',
                    fontWeight: 'bold'
                }}
            >
                <Container>
                    <Menu.Item
                        as='h3'
                    >
                        <Icon 
                            size="large"
                            style={{marginRight: 15}} 
                            name="heart"
                        />
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            textTransform:'uppercase',
                            fontWeight: 'bold'
                        }}
                    >
                        Publicaciones
                    </Menu.Item>
                </Container>
            </Menu>
        </Fragment>
    );
}

export default HeaderComponent;