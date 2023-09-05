import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PendingIcon from "@mui/icons-material/Pending";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Tooltip from "@mui/material/Tooltip";
const TodoListItem = ({
  customColor,
  singleItem,
  toggleTodo,
  deleteTodo,
  setTodoPriority,
}: InterfaceTodoListItemProps & { toggleTodo: TypeToggleFunction } & {
  deleteTodo: TypeDeleteFunction;
  setTodoPriority: TypeSetPriorityFunction;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  function hexToRgb(hex: string, param: number): string | null {
    // Remove the hash (#) if it's included in the HEX string
    hex = hex.replace(/^#/, "");

    // Handle both shorthand and full-length HEX values
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // Parse the HEX string into RGB values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const modifiedR = r * param;
    const modifiedG = g * param;
    const modifiedB = b * param;

    // Ensure the modified values stay within the 0-255 range
    const finalR = Math.min(255, Math.max(0, modifiedR));
    const finalG = Math.min(255, Math.max(0, modifiedG));
    const finalB = Math.min(255, Math.max(0, modifiedB));

    // Format the RGB values as a string and return it
    const rgbString = `rgb(${Math.round(finalR)}, ${Math.round(
      finalG
    )}, ${Math.round(finalB)})`;
    return rgbString;
  }

  return (
    <ListItem
      disableGutters
      sx={{
        color: customColor,
        overflow: "hidden",
        cursor: isLoading ? "wait" : "pointer",
      }}
      secondaryAction={
        <>
          <Tooltip title="Increase the priority" arrow>
            <IconButton
              aria-label="comment"
              sx={{
                color: hexToRgb(customColor, 1.9),
                "&:hover": { color: "red" },
                marginRight: -2,
                marginLeft: 2,
              }}
              onClick={async () => {
                setIsLoading(true);
                await setTodoPriority(singleItem, "+");
                setIsLoading(false);
              }}
              disabled={isLoading} // Disable the button while loading
            >
              {/* If the List is empty, the ArrowUpwardIcon is not rendered */}
              {singleItem != null &&
                (isLoading ? <PendingIcon /> : <ArrowUpwardIcon />)}
            </IconButton>
          </Tooltip>
          <Tooltip title="Decrease the priority" arrow>
            <IconButton
              aria-label="comment"
              sx={{
                color: hexToRgb(customColor, 0.7),
                "&:hover": { color: "red" },
                marginRight: -2,
              }}
              onClick={async () => {
                setIsLoading(true);
                await setTodoPriority(singleItem, "-");
                setIsLoading(false);
              }}
              disabled={isLoading} // Disable the button while loading
            >
              {/* If the List is empty, the ArrowDownwardIcon is not rendered */}
              {singleItem != null &&
                (isLoading ? <PendingIcon /> : <ArrowDownwardIcon />)}
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete the item" arrow>
            <IconButton
              aria-label="comment"
              sx={{
                color: customColor,
                "&:hover": { color: "red" },
                marginRight: -1,
              }}
              onClick={async () => {
                setIsLoading(true);
                await deleteTodo(singleItem);
              }}
              disabled={isLoading} // Disable the button while loading
            >
              {/* If the List is empty, the DeleteIcon is not rendered */}
              {singleItem != null &&
                (isLoading ? <PendingIcon /> : <DeleteIcon />)}
            </IconButton>
          </Tooltip>
        </>
      }
    >
      {isLoading ? ( //if isLoading true, onClick method is not allowed
        <ListItemText
          primary={singleItem.todoText}
          sx={{ wordWrap: "break-word", marginRight: 3 }}
        />
      ) : (
        <ListItemText
          primary={singleItem.todoText}
          sx={{ wordWrap: "break-word", marginRight: 3 }}
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
