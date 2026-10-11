function Todoitem(props)
{
//this brings the props from parent component to child component and keeping them ina variable for reference
const activityarr = props.activityarr;
const setActivityarr = props.setActivityarr;

//this is for deleting the activity from the list when delete button is clicked,
//when delete button is clicked it will call this function and pass the id of that activity to this function and then filter the array to remove that activity from the list
//if the id of the activity in array == the id(pressedone) passed to this function then it will return false and that activity will be removed from the list otherwise it will return true and that activity will remain in the list

function handleDelete(deleteid){
    const temparr=activityarr.filter(function(item){
        if(item.id == deleteid){
            return false;
        }
        return true;
    });
    setActivityarr(temparr);
}

return(
    <div className="flex justify-between gap-5 bg-yellow-100 rounded-md p-2 m-1">
        <p>{props.index+1}. {props.item.activity}</p>

        <button className="bg-black borde rounded-md text-white p-1" 
            onClick={() => handleDelete(props.id)}>
            Delete
        </button>
    </div>
)
}
export default Todoitem;

{/*this is for mapping through the activity array to display them in list and also  adding index numbers associated with each item*/}