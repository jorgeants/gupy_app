import axios from 'axios'

const URL = 'http://localhost:3003/starships'

export const changeName = event => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const name = getState().starship.name
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=id${search}`)
            .then(resp => dispatch({type: 'STARSHIP_SEARCHED', payload: resp.data}))
    }
}

export const remove = (starship) => {
    return dispatch => {
        axios.delete(`${URL}/delete/${starship.id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'STARSHIP_CLEAR' }, search()]
}