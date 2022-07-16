import React from 'react';
import {
    Grid,
    Header,
    Icon,
    Button,
    Container,
    Popup,
  } from 'semantic-ui-react'
import bg from '../../assets/69.jpeg'

const BodyComponent = () => {

    return(
        <Grid
            columns={3}
            container
            style={{
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center',
                marginTop:65,
                marginBottom:50,
                marginLeft:50,
                marginRight:50,
                minHeight:'72vh'
            }}
        >
            <Grid.Row>
                <Container fluid>
                <Header as="h1" style={{marginBottom:20 }}> 
                    PUBLICACIONES
                    <Popup
                        content="Aquí podras ver las publicaciones de este blog"
                        trigger={
                        <label>
                            <Icon 
                            name="info circle"
                            color="purple"
                            />
                        </label>
                        }
                    />
                    <span>
                    <Button size="tiny" floated='right' style={{backgroundImage: `url(${bg})`, color: 'white'}}>
                        <Icon name="add"/>
                        NUEVA NOTA
                    </Button>
                    </span>
                </Header>
                {/* <FormularioTrabajo
                    modalProyecto={modalProyecto}
                    proyecto={proyecto}
                    guardar={proyectoNuevo}
                    setProyecto={setProyecto}
                    setModalProyecto={setModalProyecto}
                />
                <ModalMensaje
                    estatus={modalMensajeEstatus}
                    setModalMensajeEstatus={setModalMensajeEstatus}
                /> */}
                </Container>
            </Grid.Row>
          </Grid>
    );
}

export default BodyComponent;