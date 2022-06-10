import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const[expand,setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });
   

   const InputEvent = (event) => {

      const value = event.target.value;
      const name = event.target.name;
       
       setNote((prevData)=>{
           return {
               ...prevData,
               [name] : value,
               

           };
       });
   };

   const addEvent = ()=> {
    props.passNote(note);
     setNote({
        title: "",
        content: "",
    });

   };

   const expandIt = () => {
       setExpand(true);
   }
   const backtonormal = () => {
    setExpand(false);
}
    return (
        <>
            <div className="main_note"  onDoubleClick={backtonormal}>
                <form>
               { expand?                            //expand when we click the title other wise null/not
                    <input 
                    type="text"
                    name="title"
                     value={note.title}
                     onChange={InputEvent}
                     placeholder="Title" 
                     autoComplete="off" 
                     /> : null }



                    <textarea 
                    rows=" " 
                    coloumn=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent} 
                    placeholder="Write a note...."
                    onClick={expandIt}
                   
                    ></textarea>
                
                {expand?
                    <Button onClick={addEvent}>
                        <AddIcon />
                    </Button> :null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;