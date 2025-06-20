import { Box, Button, Grid, Paper } from "@mui/material";
import { MdDelete } from "react-icons/md";
import Checkbox from '@mui/material/Checkbox';

function ToDoItem({DeleteFun, taskItems, toggleTaskStatusFun}) {
    return (
        <>
            
            <ul>
               
            {taskItems.map((d,i)=>(
                    <Paper elevation={3} key={i} sx={{padding:"10px 15px", marginBottom:"15px", background:"#ffef62"}}>
                        <Grid
                        container
                        direction="row"
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        >
                            <Box sx={{textTransform:'capitalize'}}
                                style={{
                                    textDecoration: d.completed ? 'line-through' : 'none'                                    
                                }}
                            >{d.text}</Box>
                            <Box>
                                <Button sx={{color:"#c00", fontSize:"20px", minWidth:'inherit'}} onClick={()=>DeleteFun(i)}><MdDelete /></Button>
                                <Checkbox color="secondary" checked={d.completed} onChange={()=>toggleTaskStatusFun(i)} />
                            </Box>
                        </Grid>
                    </Paper>
                  
                ))
            }
            </ul>
        </>
    );
}

export default ToDoItem;