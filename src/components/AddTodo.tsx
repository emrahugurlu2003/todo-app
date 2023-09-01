import { Box, Button, Container, TextField } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

const AddTodo = () => {
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
          focused
          id="outlined-basic"
          label="Enter New Task Todo..."
          variant="outlined"
          color="secondary"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        />
        <Button
          variant="contained"
          endIcon={<AddTaskIcon />}
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        >
          Add To the List
        </Button>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default AddTodo;
