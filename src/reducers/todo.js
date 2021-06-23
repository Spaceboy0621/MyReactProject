// ** Initial State
const initialState = {
    todos : [],
    todo : {}
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODO':
            return { ...state, todo : action.payload }
        case 'GET_TODOS':
            return { ...state, todos : action.payload }
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload] }
        case 'DELETE_TODO':
            return { ...state }
        case 'UPDATE_TODO':
            return { ...state }
        default:
            return { ...state }
    }
}
export default todo
  