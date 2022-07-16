import React, { useEffect, useState } from 'react';
import {
    Grid,
    Header,
    Icon,
    Button,
    Container,
    Popup,
  } from 'semantic-ui-react'
import bg from '../../assets/69.jpeg'
import { getTags } from '../../services/tag/tag-srv';
import MessageModal from '../modals/message-modal';
import ModalCreatePost from '../modals/modal-create-post';
import PostComponent from '../post/post-component';

const BodyComponent = () => {
    const [posts, setPosts] = useState([])
    const [ messageModalStatus, setMessageModalStatus ] = useState({
        activo: false,
        mensaje: ''
    })
    const [tags, setTags] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const tagsConsult = async () => {
        const tags = await getTags();
        setTags(tags.data);
    }
    
    useEffect(() => {
        tagsConsult()
    }, [])

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
                    <Button 
                        size="tiny" 
                        floated='right' 
                        style={{backgroundImage: `url(${bg})`, color: 'white'}}
                        onClick={() => setShowModal(true)}
                    >
                        <Icon name="add"/>
                        NUEVA NOTA
                    </Button>
                    </span>
                </Header>
                <Grid columns={2}>
                  {posts !== undefined && posts.length>0 ?
                    posts.map(i => (
                        <PostComponent
                            item={i}
                        />
                    ))
                  : 'Aún no hay publicaciones para mostrar'}
                </Grid>
                <ModalCreatePost
                    setMessageModalStatus={setMessageModalStatus}
                    status={messageModalStatus}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    options={tags}
                />
                <MessageModal
                    status={messageModalStatus}
                    setMessageModalStatus={setMessageModalStatus}
                />
                </Container>
            </Grid.Row>
          </Grid>
    );
}

export default BodyComponent;