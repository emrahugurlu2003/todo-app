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

const TodoListItem = ({
  customColor,
  singleItem,
}: InterfaceTodoListItemProps) => {
  //console.log(singleItem);
  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", overflow: "hidden" }}
      secondaryAction={
        <IconButton
          aria-label="comment"
          sx={{ color: customColor, "&:hover": { color: "red" } }}
          //onClick={() => deleteTodo(todo.id)}
        >
          {/* If the List is empty, the DeleteIcon is not rendered */}
          {singleItem != null && <DeleteIcon />}
        </IconButton>
      }
    >
      <ListItemText
        primary={singleItem.todoText}
        // onClick={() => toggleTodo(todo)}
        sx={{ wordWrap: "break-word" }}
      />
    </ListItem>
  );
};

export default TodoListItem;
