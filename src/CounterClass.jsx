import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from "@mui/material/Grid";


class CounterClass extends Component {
    constructor(){
        super()
        this.state={
            count:0,
        }
    }
    increment = () =>{
        this.setState(prevState =>({
            count: prevState.count + 1
        }))
    }
    decrement = () =>{
        this.setState(prevState =>({
            count: prevState.count > 0 ? prevState.count - 1 : 0
        }))
    }
    render() { 
        return (
            <>
               <Container maxWidth="sm">
            
                    <p  style={{margin:"50px 0px 30px", textAlign:"center"}}>Counter Application uisng class component</p>

                        <Grid
                        container
                        direction="row"
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        >

                            <ButtonGroup size="large" variant="contained" aria-label="Basic button group">
                                <Button onClick={this.increment}><AddIcon /> </Button>
                                <Button variant="outlined" disabled>{this.state.count}</Button>
                                <Button onClick={this.decrement}><RemoveIcon /></Button>
                            </ButtonGroup>
                        </Grid>
                    
                </Container>
            </>
        );
    }
}
export default CounterClass;