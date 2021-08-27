import axiosWithAuth from "../helpers/axiosWithAuth";

export const ADD_PLANT = "ADD_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";
export const FETCH_START = 'FETCH_START_PLANTS'
export const FETCH_FAIL = 'FETCH_FAIL_PLANTS'
export const FETCH_SUCCESS = 'FETCH_PLANT_SUCCESS'
export const SET_ERROR = 'SET_ERROR'
// export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS'
// export const CREATE_PLANT_SUCCESS = "CREATE_PLANT_SUCCESS";
// export const UPDATE_PLANT_SUCCESS = "UPDATE_PLANT_SUCCESS";
// export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";

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

// export const getPlantsSuccess = (plants) => {
//     return ({type:GET_PLANTS_SUCCESS, payload:plants})
// }

//action(s) for individual plants below
// export const fetchPlant = (id) => {
//     return (dispatch) => {
//         dispatch(fetchStartP)
//         axiosWithAuth()
//         .get(`/plants/${id}`)
//         .then(res=> dispatch(fetchPlantSuccess(res.data)))
//         .catch(err=> dispatch(fetchFailP(err)))
//     }
// }

export const fetchSuccess = (plants) => {
    return ({type:FETCH_SUCCESS, payload:plants})
}

//action(s) for creating plants below
export const addPlant = (plant) => {
	return({type:ADD_PLANT,payload:plant})
};

//action(s) for updating plants below
export const editPlant = (plant, id) => {
    return ({type:EDIT_PLANT, payload:plant, plant_id:id})
}

//action(s) for deleting plants below
export const deletePlant = (id) => {
    return({type:DELETE_PLANT,payload:id})
}

export const setError = (err) => {
    return({type:SET_ERROR,payload:err})
}