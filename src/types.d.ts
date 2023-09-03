type TypeAddFunction = (text: string) => Promise<void>;
//!Custom TypeScript type "TypeAddFunction", is a function type that
//takes a single argument "text" of type string and
//returns a "Promise" that doesn't return a value (void) immediately
interface InterfaceAddFunction {
  addTodo: (text: string) => Promise<void>;
}
//Inside the Interface, there is an object type, called "addTodo",
//takes a single argument "text" of type string and
//returns a "Promise" that doesn't return a value (void) immediately

interface InterfaceTodoListItemProps {
  //!customColor prop is used to assing initial color to TodoListItem
  // components. For: In-Progress color="salmon", Completed="seagreen"
  customColor: string;
  //!If the List is empty, items.length = 0;
  //In that case, the DeleteIcon is not rendered
  items: string[];
}
