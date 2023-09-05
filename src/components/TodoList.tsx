import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";

const colorinProgressTodos = "#6200ea";
const colorCompletedTodos = "#1b5e20";

const TodoList = ({
  todosObject,
  toggleTodo,
  deleteTodo,
  setTodoPriority,
}: {
  todosObject: InterfaceTodoType[];
  toggleTodo: TypeToggleFunction;
  deleteTodo: TypeDeleteFunction;
  setTodoPriority: TypeSetPriorityFunction;
}) => {
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
        <Typography color={colorinProgressTodos} variant="h5" align="center">
          In-Progress Todo Task Items
        </Typography>
        {inProgressTodos.length > 0 ? (
          inProgressTodos.map((item) => (
            <TodoListItem
              customColor={colorinProgressTodos}
              singleItem={item}
              key={item.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              setTodoPriority={setTodoPriority}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No In-Progress items yet!{" "}
          </Typography>
        )}
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
        <Typography color={colorCompletedTodos} variant="h5" align="center">
          Completed Todo Task Items
        </Typography>
        {completedTodos.length > 0 ? (
          completedTodos.map((item) => (
            <TodoListItem
              customColor={colorCompletedTodos}
              singleItem={item}
              key={item.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              setTodoPriority={setTodoPriority}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed items yet!{" "}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
