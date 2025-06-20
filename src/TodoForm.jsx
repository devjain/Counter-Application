import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToDoItem from './TodoItem';

function ToDoForm() {
    const[value, setValue] = useState("");
    const[task, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task));
    }, [task]);

    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!value.trim()){
            alert("Please enter task..");
            return
        }
        const trimmedValue = value.trim().toLowerCase();
        if (task.some(t => t.text.trim().toLowerCase() === trimmedValue)) {
            alert("Task already available...");
            setValue("");
            return;
        }
        const newTask = { text: value, completed: false };
        setTask((prevTask)=>[...prevTask, newTask]);
        setValue("");
    }

    const handleDelete = (index) =>{
        setTask(task.filter((_, i) => i !== index));
    }

    const handleTaskStatus = (index) =>{
        const updatedTasks = [...task];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTask(updatedTasks);
    }

    return (
        <>
         <Container maxWidth="sm">
                <h1 style={{margin:"15px 0px 30px", textAlign:"center"}}>To-Do application </h1>
             <form onSubmit={handleSubmit} style={{marginBottom:30}}>
                <ButtonGroup size="large" variant="contained" aria-label="Basic button group" fullWidth>
                    <TextField label="Enter to do list" color="secondary" fullWidth  onChange={handleChange} value={value} />
                    <Button style={{width:'100px'}} onClick={handleSubmit} color="secondary">add</Button>
                </ButtonGroup>
             </form>
            <ToDoItem taskItems={task} DeleteFun={handleDelete} toggleTaskStatusFun={handleTaskStatus} />
            
        </Container>
        </>
    );
}

export default ToDoForm;