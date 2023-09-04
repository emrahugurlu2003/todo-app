import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todosObject }: { todosObject: InterfaceTodoType[] }) => {
  const inProgressTodos = todosObject.filter((item) => !item.isDone);
  const completedTodos = todosObject.filter((item) => item.isDone);
  //console.log("inProgressTodos:", inProgressTodos);
  return (
    <Grid
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "normal",
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
          maxHeight: "400px", // Add maxHeight to limit the container height
          overflowY: "auto", // Add overflowY to enable vertical scrolling
        }}
      >
        <Typography color="salmon" variant="h5" align="center">
          In-Progress Todo Task Items
        </Typography>
        {inProgressTodos.map((item) => (
          <TodoListItem customColor="salmon" singleItem={item} key={item.id} />
        ))}
      </Grid>
      {/* //!inProgressTodos
      //----------------------
          //!completedTodos */}

      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
          maxHeight: "400px", // Add maxHeight to limit the container height
          overflowY: "auto", // Add overflowY to enable vertical scrolling
        }}
      >
        <Typography color="seagreen" variant="h5" align="center">
          Completed Todo Task Items
        </Typography>
        {completedTodos.map((item) => (
          <TodoListItem
            customColor="seagreen"
            singleItem={item}
            key={item.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default TodoList;
