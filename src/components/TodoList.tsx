import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <Grid
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography color="salmon" variant="h5" align="center">
          In-Progress Todo Task Items
        </Typography>
        <TodoListItem customColor="salmon" items={[]} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography color="seagreen" variant="h5" align="center">
          Completed Todo Task Items
        </Typography>
        <TodoListItem customColor="seagreen" items={[]} />
      </Grid>
    </Grid>
  );
};

export default TodoList;
