import React from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


class Home extends React.Component {


    render(){
        return  <Container fixed>
            <Typography variant="h3" gutterBottom>
        Find your partner in crime
    </Typography>
    <Button variant="contained" color="primary"  startIcon={<CreateOutlinedIcon />}> 
  Register
</Button>
<Button variant="contained" color="primary" startIcon={<LockOutlinedIcon />}>
  Login
</Button>
            <img src={"https://res.cloudinary.com/do68wjft3/image/upload/v1629396761/animalpic_zt7qvc.png"} alt={"animals"}></img>
            </Container>

    }
}

export default Home