import { Box, Button, Container, TextField } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useState } from "react";

//!in Home.tsx a type is defined as follows:
//type TypeAddFunction = (text: string) => Promise<void>;
//!Custom "TypeAddFunction", is a function type
//that takes a string parameter "text" and returns a promise
//Here below using an Interface is preferred, it could be a type as well.
interface InterfaceAddFunction {
  addTodo: (text: string) => Promise<void>;
}
const AddTodoComponent = ({ addTodo }: InterfaceAddFunction) => {
  const [task, setTask] = useState("");

  const handleClick = () => {
    //console.log(task);
    //!By prop drilling this method comes from Home.tsx
    addTodo(task);
    setTask("");
  };
  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          //focused
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="outlined-basic"
          label="Enter New Task Todo..."
          variant="outlined"
          color="secondary"
          inputProps={{ maxLength: 40 }}
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          endIcon={<AddTaskIcon />}
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          //!if the TextField is empty(task=false), the button is disabled
          //any space character is also considered as empty, using trim
          //after applying trim, if it is not empty, then diabled=false
          disabled={!task.trim()} // trim= trimEnd + trimStart (trims both sides)
        >
          Add To the List
        </Button>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default AddTodoComponent;
