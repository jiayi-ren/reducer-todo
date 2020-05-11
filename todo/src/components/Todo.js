import React,{ useReducer }  from "react";
import { TodoReducer, initialState } from "../reducers/TodoReducer";

const Todo = props =>{

    const [{list, input}, dispatch] = useReducer(TodoReducer, initialState)

    return (
        <>
        <button className="clear"
        onClick={ event =>{
                event.preventDefault()
                dispatch({ type: "CLEAR_COMPLETED"})
            }}>CLEAR COMPLETED</button>

        <div className="list">
        {list.map( (item, index) =>{
            return(
                <h3 className={`item ${item.completed? "completed": " "}`}
                key={index} 
                onClick={ () =>{
                    dispatch( {type:"TOGGLE_COMPLETED", id: index})
                }}>{`${index+1}. ${item.item}`}</h3>
            )
        })}
        </div>
        
        <form onSubmit={() =>{dispatch({ type: "ADD"})}}>

            <input className="input"
            name="task" 
            value={input} 
            type="input" 
            placeholder="New Task...." 
            onChange={event =>{
                dispatch({ type:"UPDATE_INPUT", payload: event.target.value})
            }}></input>

            <button className="add"
            onClick={ event=>{
                event.preventDefault()
                dispatch({ type: "ADD"})
                }}>ADD</button>
        </form>
        </>
    )
}

export default Todo;