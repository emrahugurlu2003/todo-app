import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import AddTodo from "../components/AddTodo";
interface ITodoType {
  todoText: string;
  isDone: boolean;
  id: string | number;
}

const Home = () => {
  //!useState<ITodoType[]> ensures that todos is of type ITodoType[]
  //from the start, providing better type safety in the component.
  const [todos, setTodos] = useState<ITodoType[]>([]);

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
      setTodos(data);
    } catch (error) {
      console.log(error);
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
      <AddTodo />
    </Container>
  );
};
export default Home;
