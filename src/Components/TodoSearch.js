import React from 'react';
import '../Styles/TodoSearch.css'
import { TodoContext } from '../TodoContext';




function TodoSearch(){
   const {searchValue,setSearchValue} = React.useContext(TodoContext);
   
    const onSearchValueChange = (event)=>{
    console.log(event.target.value);
   setSearchValue(event.target.value);
   };
   return[
    <input
     className="TodoSearch"  
     placeholder="Tareas" 
     value={searchValue}
     onChange={onSearchValueChange}
     />,
     // <p>{searchValue}</p>
   ];
}
 
export {TodoSearch} ;