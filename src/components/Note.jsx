import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.data.title}</h1>
      <p>{props.data.content}</p>

      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
