import React, {Component} from 'react';
import './HomePageProductsComponent.scss';
import { Card, Icon, Image, Button, Grid, Container, Segment, Header } from 'semantic-ui-react'
import Acc1 from '../Images/acc1.jpg';
import Acc3 from '../Images/acc3.jpg';
import Acc4 from '../Images/acc4.jpg';
import Acc5 from '../Images/acc5.jpg';
import Acc6 from '../Images/acc6.jpg';
import Acc7 from '../Images/acc7.jpg';
import Acc8 from '../Images/acc8.jpg';
import Acc9 from '../Images/acc9.jpg';
import Acc10 from '../Images/acc10.jpg';


class HomePageProductsComponent extends Component {

render(){
  return(
    <Grid centered container columns={3} rows={2} style={{marginTop:"30em", paddingLeft:"12em"}}>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={8} computer={5}>
      <Card className="card">
    <Image className="img" src={Acc4} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
      <Card className="card">
    <Image className="img" src={Acc7} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
      <Card className="card">
    <Image className="img" src={Acc10} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column mobile={16} tablet={8} computer={5}>
      <Card>
    <Image src={Acc9} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
      <Card>
    <Image src={Acc8} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
      <Card>
    <Image src={Acc6} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid> 
  
  )
}
}
export default HomePageProductsComponent;



