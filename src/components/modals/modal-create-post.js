import React, { useState } from 'react';
import {Modal, Icon, Form, TextArea, Popup, Button, Dropdown} from 'semantic-ui-react';
import bg from '../../assets/69.jpeg'
import { initialPostState } from '../../initial-states/post-istate';
import { createPost } from '../../services/post/post-srv';
import { getUserId } from '../../services/user/user.srv';

const ModalCreatePost = ({
    showModal,
    setShowModal,
    setMessageModalStatus,
    messageModalStatus
}) => {

    const [newPost, setNewPost] = useState(Object.assign({}, initialPostState))

    const handleChangeNewPost = (e, {name, value}) => {
        setNewPost({
            ...newPost,
            [name]:value
        })
    }

    const createNewPost = async() => {
        const payload = newPost;
        payload.owner = getUserId()
        const response = await createPost(payload);
        if(response.status === 200) {
            setMessageModalStatus({
                ...messageModalStatus,
                activo: true,
                mensaje: 'Post creado'
            });
        }
        setNewPost(Object.assign({}, initialPostState))
        setShowModal(false)
    }

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
                        name="image"
                        value={newPost.image}
                        onChange={handleChangeNewPost}
                    />
                </Form.Group>
                <h5>Contenido</h5>
                <Form.Group widths="equal">
                    <TextArea
                        name="text"
                        placeholder="Corta reflexion"
                        label="Contenido"
                        value={newPost.text}
                        onChange={handleChangeNewPost}
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
                onClick={() => createNewPost()}
            />
        </Modal.Actions>
    </Modal>
    );
}

export default ModalCreatePost;
