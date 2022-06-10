import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";


const App =() => {
    const [addItem,SetAddItem] = useState([]);
    const addNote = (note) => {

        SetAddItem((preData)=>{
            return [...preData,note];
        });
    };
    
     const onDelete = (id)=>{
         SetAddItem((olddata)=>
       olddata.filter((currdata,indx)=>{
           return indx !== id;
       })
         );
     };

    return (<>
         <Header/>
         <CreateNote passNote={addNote}  />
         
        {addItem.map((val,index)=>{
             return (
                 <Note
                 key={index}
                 id={index}
                 title={val.title}
                 content={val.content}
                 deleteItem = {onDelete}
             />
             );
         })}
         <Footer/>
    </>
    );
};

export default App;