import { Box, Button, Container, TextField } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

const AddTodo = () => {
  return (
    <Container>
      <Box>
        <TextField
          id="outlined-basic"
          label="Enter New Task Todo..."
          variant="outlined"
          size="small"
          multiline
        />
        <Button variant="contained" size="large" endIcon={<AddTaskIcon />}>
          Add To the List
        </Button>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default AddTodo;
