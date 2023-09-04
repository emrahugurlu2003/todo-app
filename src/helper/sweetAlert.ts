import swal from "sweetalert";
import "./swal.css";

export const notify = (msg: string, color: string) =>
  swal({
    title: "Emrah Todo App Typescript",
    text: msg,
    icon: color,
    timer: 3000,
  });
