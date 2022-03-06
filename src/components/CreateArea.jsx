import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [textArea, setTextArea] = useState(false)

  // input note
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  function eventHandlerInputNote(event) {
    const { name, value } = event.target;
    setInputNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(inputNote);
    setInputNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function isTextAreaClicked(){
    setTextArea(true);
  }
  return (
    <div>
    {textArea ? (<form className="create-note">
        <input
          name="title"
          onChange={eventHandlerInputNote}
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          name="content"
          onChange={eventHandlerInputNote}
          placeholder="Take a note..."
          value={inputNote.content}
          rows={textArea ? 3 : 1}
          onClick={isTextAreaClicked}
        />
        <Zoom in={true}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>) : <form className="create-note"> <textarea
          name="content"
          onChange={eventHandlerInputNote}
          placeholder="Take a note..."
          value={inputNote.content}
          rows={textArea ? 3 : 1}
          onClick={isTextAreaClicked}
        /></form>}
      
    </div>
  );
}

export default CreateArea;
