import React, {useState} from 'react';
import {Grid, Form, Segment, Button, Header} from 'semantic-ui-react'
import imgBackGround from '../../assets/background.jpeg';
import { initialUserState } from '../../initial-states/user-istate';

const UserPage = () => {

    const [newUser, setNewUser] = useState(Object.assign({}, initialUserState));

    const handleChangeUser = (e, {name, value}) => {
        setNewUser({
            ...newUser,
            [name]:value
        })
    }

    return(
        <Grid
        centered 
        style={{
            minHeight:"105vh", 
            backgroundImage:`url(${imgBackGround})`, 
            backgroundSize:"cover", 
            backgroundRepeat:"no-repeat", 
            backgroundPosition:"center"
        }} 
        verticalAlign="middle">
        <Grid.Column style={{maxWidth:450}}>
            <Form>
                <Segment stacked>
                    <Header as="h1">
                        REGISTRARSE
                    </Header>
                    <Form.Input 
                        label="Nombre"
                        name='firstName'
                        value={newUser.firstName}
                        onChange={handleChangeUser}
                    />
                    <Form.Input 
                        label="Apellidos"
                        name='lastName'
                        value={newUser.lastName}
                        onChange={handleChangeUser}
                    />
                    <Form.Input 
                        label="Email"
                        name="email"
                        value={newUser.email}
                        onChange={handleChangeUser}
                    />
                        
                        <Button
                            size='small'
                            style={{backgroundColor:'blue', color:'white', fontWeight: "bold"}}
                        >
                        CREAR CUENTA
                    </Button>
                </Segment>
            </Form>
        </Grid.Column>
        {/* <ModalMensaje
            estatus={modalMensajeEstatus}
            setModalMensajeEstatus={setModalMensajeEstatus}
        /> */}
    </Grid>
    );
}

export default UserPage;