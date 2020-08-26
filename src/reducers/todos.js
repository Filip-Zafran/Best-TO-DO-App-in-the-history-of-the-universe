const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
return [
    ...state,

// we are adding that the tasks are an array of tasks and add the next task object

    {
        id: action.id,
        text: action.text,
        completed: false
    }

];

default:
return state;


}


}

export default todos;