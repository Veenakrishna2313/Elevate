import React from "react";

const ListGroup = ({items, textProperty, valueProperty, ItemSelect, selectedItem}) => {

   console.log("Props for genre");
  return (      
        <ul className="list-group">
        {items.map((item)=>
        <li key={item[valueProperty]} onClick={()=>ItemSelect(item)} className={item===selectedItem?"list-group-item clickable active": "list-group-item clickable disabled"}>{item[textProperty]}</li>

     )}
        </ul>
   
    );

    }

    ListGroup.defaultProps={
        textProperty:"name",
        valueProperty:"_id"

    };
 
export default ListGroup; 