// ** Initial State
const initialState = {
    user : {}
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return { ...state, user : action.payload }
        default:
            return { ...state }
    }
}
export default auth
  