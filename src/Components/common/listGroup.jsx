

const ListGroup = (props) => {

   const {items, textProperty, valueProperty, ItemSelect, selectedItem} =props;

   console.log("Props for genre",props);


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