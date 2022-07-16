import React, {useState} from 'react';
import {Grid, Form, Segment, Button, Header} from 'semantic-ui-react'
import imgBackGround from '../../assets/background.jpeg';
import MessageModal from '../../components/modals/message-modal';
import { initialUserState } from '../../initial-states/user-istate';
import { createUser, setUserId } from '../../services/user/user.srv';
import { Navigate } from "react-router-dom";

const UserPage = () => {

    const [ messageModalStatus, setMessageModalStatus ] = useState({
        activo: false,
        mensaje: ''
    })
    const [ navigate, setNavigate ] = useState(false);
    const [newUser, setNewUser] = useState(Object.assign({}, initialUserState));

    const handleChangeUser = (e, {name, value}) => {
        setNewUser({
            ...newUser,
            [name]:value
        })
    }

    const createNewUser = async () => {
        const response = await createUser(newUser);
        if(response.data.status === false) {
            setMessageModalStatus({
                ...messageModalStatus,
                activo: true,
                mensaje: response.data.result
            })
            return;
        }
        setUserId(response.data.id)
        return setNavigate(!navigate);
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
            verticalAlign="middle"
        >
        {navigate ? <Navigate to='/home' replace={true}/> :null}
        
        <Grid.Column style={{maxWidth:450}}>
            <Form>
                <Segment stacked>
                    <Header as="h1">
                        Crear usuario
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
                            onClick={createNewUser}
                        >
                        CREAR USUARIO
                    </Button>
                </Segment>
            </Form>
        </Grid.Column>
        <MessageModal
            status={messageModalStatus}
            setMessageModalStatus={setMessageModalStatus}
        />
    </Grid>
    );
}

export default UserPage;