import React from 'react';
import {Card, Grid, Image, Icon} from 'semantic-ui-react'

const PostComponent = () => {
    return(
        <Grid.Column stretched >
        <Card style={{minWidth: '56vh'}} fluid>
        <Image />
        <Card.Content>
          <Card.Header>titulo</Card.Header>
          <Card.Meta>fecha</Card.Meta>
          <Card.Content>
              <p>  contenido </p>
          </Card.Content>
        </Card.Content>
        <Card.Content extra>
            usuario
        </Card.Content>
      </Card>
      </Grid.Column>
    );
}

export default PostComponent;