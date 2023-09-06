import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import AddTodoComponent from "../components/AddTodoComponent";
import TodoList from "../components/TodoList";
import { notify } from "../helper/sweetAlert";

const Home = () => {
  //!useState<ITodoType[]> ensures that todos is of type ITodoType[]
  //from the start, providing better type safety in the component.
  const [todos, setTodos] = useState<InterfaceTodoType[]>([]);

  //calls getTodos method onPageLoad
  useEffect(() => {
    getTodos();
  }, []);

  //!For fetching data from API
  //!Reading environment variables from ".env.local"
  const ENDPOINT_URL: string = import.meta.env.VITE_APP_BASE_URL;
  const getTodos = async () => {
    try {
      //const responseData = await axios(ENDPOINT_URL);
      //{data: Array(3), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
      //const { data } = responseData;
      //Destructuring data from the responseData
      const { data } = await axios(ENDPOINT_URL);
      //!data is stored in local state "todos"

      const categorizedData: { [key: number]: InterfaceTodoType[] } =
        data.reduce(
          (a: { [key: number]: InterfaceTodoType[] }, c: InterfaceTodoType) => {
            let key = c.priority;
            a[key] = a[key] || [];
            a[key].push(c);
            return a;
          },
          {} as { [key: number]: InterfaceTodoType[] }
        );

      // Flatten categorizedData into an array and sort in descending order
      console.log(categorizedData);
      const categorizedArray: InterfaceTodoType[] = Object.values(
        categorizedData
      )
        .flat()
        .sort((a, b) => b.priority - a.priority);
      console.log(categorizedArray);
      //setTodos(data);
      setTodos(categorizedArray);
    } catch (error) {
      console.log(error);
    }
  };

  //!Type definition is moved into types.d.ts file
  //type TypeAddFunction = (text: string) => Promise<void>;
  //!Custom TypeScript type "TypeAddFunction", is a function type that
  //takes a single argument "text" of type string and
  //returns a "Promise" that doesn't return a value (void) immediately.
  //Here above, type is preferred; an Interface could be used, as well.
  const addTodo: TypeAddFunction = async (text) => {
    try {
      await axios.post(ENDPOINT_URL, {
        todoText: text,
        isDone: false,
        priority: 0,
      });
      notify("The new todo task has been created successfully!", "success");
    } catch (error) {
      console.log(error);
      notify("Ooops!The new todo task could not been created!", "error");
    } finally {
      getTodos();
    }
  };
  const toggleTodo: TypeToggleFunction = async (todo) => {
    try {
      // await axios.put(`${ENDPOINT_URL}/${todo.id}`, {
      //   todoText: todo.todoText,
      //   isDone: !todo.isDone,
      // });
      //!Using spread operator "...", we can accomplish the same, as above
      await axios.put(`${ENDPOINT_URL}/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone,
      });
      notify("The todo task has been updated successfully!", "success");
    } catch (error) {
      console.log(error);
      notify(
        "Unfortunately, the todo task could not been updated!Check for the network configration.",
        "error"
      );
    } finally {
      getTodos();
    }
  };
  const setTodoPriority: TypeSetPriorityFunction = async (todo, param) => {
    switch (param) {
      case "+":
        if (todo.priority < 3) {
          console.log("todo:", todo.priority, "param:", param);
          try {
            await axios.put(`${ENDPOINT_URL}/${todo.id}`, {
              ...todo,
              priority: todo.priority + 1,
            });
            notify(
              "The priority of the todo task has been updated successfully!",
              "success"
            );
          } catch (error) {
            console.log(error);
            notify(
              "Unfortunately, the priority of the todo task could not been updated!Check for the network configration.",
              "error"
            );
          } finally {
            getTodos();
          }
        } else {
          notify(
            "The priority of the todo task is already the highest!",
            "error"
          );
        }
        break;
      case "-":
        if (todo.priority > 0) {
          console.log("todo:", todo.priority, "param:", param);
          try {
            await axios.put(`${ENDPOINT_URL}/${todo.id}`, {
              ...todo,
              priority: todo.priority - 1,
            });
            notify(
              "The priority of the todo task has been updated successfully!",
              "success"
            );
          } catch (error) {
            console.log(error);
            notify(
              "Unfortunately, the priority of the todo task could not been updated!Check for the network configration.",
              "error"
            );
          } finally {
            getTodos();
          }
        } else {
          notify(
            "The priority of the todo task is already the lowest!",
            "error"
          );
        }
        break;

      default:
        break;
    }
  };
  const deleteTodo: TypeDeleteFunction = async (todo) => {
    try {
      //console.log(todo.id);
      await axios.delete(`${ENDPOINT_URL}/${todo.id}`);
      notify(
        "The selected todo task has been deleted successfully!",
        "success"
      );
    } catch (error) {
      console.log(error);
      notify(
        "Unfortunately, the selected todo task could not been deleted!",
        "error"
      );
    } finally {
      getTodos();
    }
  };
  return (
    <Container>
      <Typography
        color="error"
        align="center"
        variant="h2"
        component={"h1"}
        mt={3}
      >
        Todo App With Typescript
      </Typography>
      <AddTodoComponent addTodo={addTodo} />
      <TodoList
        todosObject={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setTodoPriority={setTodoPriority}
      />
    </Container>
  );
};
export default Home;
