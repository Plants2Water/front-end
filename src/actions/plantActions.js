import axiosWithAuth from "../helpers/axiosWithAuth";

export const ADD_PLANT = "ADD_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";
export const FETCH_START = 'FETCH_START_PLANTS'
export const FETCH_FAIL = 'FETCH_FAIL_PLANTS'
export const FETCH_SUCCESS = 'FETCH_PLANT_SUCCESS'
export const SET_USERID = 'SET_USERID'
export const SET_ERROR = 'SET_ERROR'

export const fetchPlants = (id) => {
    return (dispatch) => {
        dispatch(fetchStart())
        axiosWithAuth()
        .get(`/users/${id}/plants`)
        .then(res=> dispatch(fetchSuccess(res.data)))
        .catch(err=> dispatch(fetchFail(err)))
    }
}

export const fetchStart = () => {
    return ({type:FETCH_START})
}

export const fetchFail = (err) => {
    return ({type:FETCH_FAIL, payload:err})
}

export const fetchSuccess = (plants) => {
    return ({type:FETCH_SUCCESS, payload:plants})
}

export const addPlant = (plant) => {
	return({type:ADD_PLANT,payload:plant})
};

export const editPlant = (plant, id) => {
    return ({type:EDIT_PLANT, payload:plant, plant_id:id})
}

export const deletePlant = (id) => {
    return({type:DELETE_PLANT,payload:id})
}

export const setUserID = (user_id) => {
    return({type:SET_USERID,payload:user_id})
}

export const setError = (err) => {
    return({type:SET_ERROR,payload:err})
}