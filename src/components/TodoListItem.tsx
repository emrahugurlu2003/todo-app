import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import PendingIcon from "@mui/icons-material/Pending";

const TodoListItem = ({
  customColor,
  singleItem,
  toggleTodo,
  deleteTodo,
}: InterfaceTodoListItemProps & { toggleTodo: TypeToggleFunction } & {
  deleteTodo: TypeDeleteFunction;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  //console.log(singleItem);
  return (
    <ListItem
      disableGutters
      sx={{ color: customColor, cursor: "pointer", overflow: "hidden" }}
      secondaryAction={
        <IconButton
          aria-label="comment"
          sx={{ color: customColor, "&:hover": { color: "red" } }}
          onClick={async () => {
            setIsLoading(true);
            await deleteTodo(singleItem);
          }}
          disabled={isLoading} // Disable the button while loading
        >
          {/* If the List is empty, the DeleteIcon is not rendered */}
          {singleItem != null && (isLoading ? <PendingIcon /> : <DeleteIcon />)}
        </IconButton>
      }
    >
      {isLoading ? ( //if isLoading true, onClick method is not allowed
        <ListItemText
          primary={singleItem.todoText}
          sx={{ wordWrap: "break-word" }}
        />
      ) : (
        <ListItemText
          primary={singleItem.todoText}
          sx={{ wordWrap: "break-word" }}
          onClick={async () => {
            setIsLoading(true);
            await toggleTodo(singleItem);
          }}
        />
      )}
    </ListItem>
  );
};

export default TodoListItem;
