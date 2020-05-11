export const initialState = {
    list: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }],
    input: ""
}

export const TodoReducer = (state, action) =>{
    console.log("reducer")


    switch (action.type){

        case "UPDATE_INPUT":
            return {
                ...state,
                input: action.payload
            }

        case "ADD":
            const newId = new Date()
            const newItem = {
                item: state.input,
                completed: false,
                id: newId
            }
            return {
                ...state,
                list: [
                    ...state.list,
                    newItem
                ],
                input: ""
            }

        case "TOGGLE_COMPLETED":
            const newList = state.list.map( (item, index) =>{
                if( action.id === index){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
            return {
                ...state,
                list: newList           
            }

        case "CLEAR_COMPLETED":
            const filterList = state.list.filter( item =>{
                return item.completed === false
            })
            return {
                ...state,
                list: filterList
            }
        default:
            return state;
    }
}
