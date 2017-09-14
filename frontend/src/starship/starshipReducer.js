const INITIAL_STATE = { name: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'STARSHIP_SEARCHED':
            return { ...state, list: action.payload }
        case 'STARSHIP_CLEAR':
            return { ...state, name: '' }
        default:
            return state
    }
}