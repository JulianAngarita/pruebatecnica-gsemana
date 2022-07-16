import React from 'react'
import {Modal, Icon, Button} from 'semantic-ui-react'

const MessageModal = ({
    setMessageModalStatus,
    status
}) => {


    const deactivateModal = () => {
        setMessageModalStatus({
            activo: false,
            mensaje: ''
        })
    }
    return (  
        <Modal
            size="tiny"
            open={status.activo}
        >
            <Modal.Header as="h5"> <Icon name="info circle"/> Información </Modal.Header>
            <Modal.Content>
                <p> {status.mensaje} </p>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    icon="times"
                    size='small'
                    content="ACEPTAR"
                    style={{backgroundColor:'blue', color:'white', fontWeight: "bold"}}
                    onClick={deactivateModal}
                />
            </Modal.Actions>
        </Modal>
    );

}
 
export default MessageModal;