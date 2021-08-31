

const ListGroup = (props) => {

   const {items, textProperty, valueProperty, ItemSelect} =props;

   console.log("Props for genre",props);


  return (
   
        <ul className="list-group">
             <li className="list-group-item active">All items</li>
        {items.map((item)=>
        <li key={item[textProperty]} onClick={()=>ItemSelect(item)} className="list-group-item disabled">{item[textProperty]}</li>

        )}
        </ul>
   
    );

    }

    ListGroup.defaultProps={
        textProperty:"name",
        valueProperty:"_id"

    };
 
export default ListGroup; 