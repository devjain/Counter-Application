import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from "@mui/material/Grid";

const CounterFun = () => {
    const[count, setCount] = useState(0);
    return (
        <>
         <Container maxWidth="sm">
            <h1 style={{textAlign:"center"}}>Assignment - 1</h1>
            <p  style={{margin:"15px 0px 30px", textAlign:"center"}}>Counter Application uisng function component</p>

                <Grid
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >

                    <ButtonGroup size="large" variant="contained" aria-label="Basic button group">
                        <Button onClick={()=>setCount(count + 1)}><AddIcon /> </Button>
                        <Button variant="outlined" disabled>{count}</Button>
                        <Button onClick={()=> count > 0 &&  setCount(count - 1)} disabled={count === 0}><RemoveIcon /></Button>
                    </ButtonGroup>
                </Grid>
            
        </Container>
            
        </>
    );
}

export default CounterFun;