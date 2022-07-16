import React from 'react';
import {Modal, Icon, Form, TextArea, Popup, Button, Dropdown} from 'semantic-ui-react';
import bg from '../../assets/69.jpeg'

const ModalCreatePost = ({
    showModal,
    setShowModal
}) => {


    
    return(
        <Modal
        open={showModal}
    >
        <Modal.Header 
            style={{backgroundImage: `url(${bg})`, color: 'white'}} 
        > 
            <Icon name="clipboard check"/>  
            Nuevo Post 
        </Modal.Header>
        <Modal.Content>
            <Form>
                <h3> Crear Post </h3>
                <Form.Group widths="equal">
                    <Dropdown
                        fluid
                        multiple
                        placeholder='Tags'
                        options={[{key: 1, text: 'hola', value: 'hola'}]}
                    />
                    <Form.Input
                        label={
                            <Popup
                                content="Adjuntar la direccion de enlace de una foto"
                                trigger={
                                    <label>
                                        <Icon name="info circle"/>
                                        Link de la foto
                                    </label>
                                }
                            />
                        }
                        name="linkFoto"
                    />
                </Form.Group>
                <h5>Comentarios</h5>
                <Form.Group widths="equal">
                    <TextArea
                        name="contenido"
                        placeholder="Corta reflexion"
                        label="Contenido"
                    />
                </Form.Group>
            </Form>
        </Modal.Content>
        <Modal.Actions >
            <Button
                content="CANCELAR"
                onClick={() => setShowModal(false)}
                style={{
                    fontWeight: 'bold',
                    color:"black",
                    borderRadius:25,
                }}
            />
            <Button
                content="CREAR"
                style={{
                    fontWeight: 'bold',
                    color:"black",
                    borderRadius:25,
                }}
            />
        </Modal.Actions>
    </Modal>
    );
}

export default ModalCreatePost;
