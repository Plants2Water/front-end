import { START_FETCHING } from "../helpers/axiosWithAuth"
import axiosWith Auth from '../helpers/axiosWithAuth'

export const START_FETCHING = 'START_FETCHING'
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"



export const getUser = (id) => (dispatch) => {
    dispatch({
        type: START_FETCHING,
    })
axiosWithAuth()
.get('https://place url here/${id}')
.then((res) => {
    dispatch({
        type: FETCHING_USER_SUCCESS,
        payload: res.data
    })
})
.catch((error) => {
    console.log(error)
    dispatch({
        type: FETCH_ERROR,
        payload: error.message
    })
})

export const updateUser = (user) => (dispatch) => {
    const id = localStorage.getItem('userId')
    dispatch({
        type: START_FETCHING, 
    })
    axiosWithAuth()
    .put('https://place url here/${id', user)
    .then ((response) => {
        console.log('update user response', response)
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: response.data
        })

    })
    .catch((error) => {
        console.log(error)
        dispatch({
            type: FETCH_ERROR,
            payload: error.message
        })
    })
}
}

export const updatePlant = (plant) => (dispatch) => {
    dispatch({
		type: START_FETCHING,
	})
    axiosWithAuth()
		.put(`https://place url here/${plant.id}`, plant)
		.then((response) => {
			dispatch({
				type: UPDATE_PLANT_SUCCESS,
				payload: response.data,
			})
        })
        .catch((error) => {
			console.log(error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.message,
			})
        })
    }