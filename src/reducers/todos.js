const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
return [
    ...state,

// we are adding that the tasks are an array of tasks and add the next task object

    {
        id: action.id,
        text: action.todo.text,
        date: action.todo.date,
        completed: false
    }


    ];
        
             case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id == action.id ? {...todo, completed: !todo.completed} : todo
                )

default:
return state;


}


}

export default todos;