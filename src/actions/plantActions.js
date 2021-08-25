import axiosWithAuth from "../helpers/axiosWithAuth";

export const FETCH_START_PLANTS = 'FETCH_START_PLANTS'
export const FETCH_FAIL_PLANTS = 'FETCH_FAIL_PLANTS'
export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS'
export const FETCH_PLANT_SUCCESS = 'FETCH_PLANT_SUCCESS'
export const CREATE_PLANT_SUCCESS = "CREATE_PLANT_SUCCESS";
export const UPDATE_PLANT_SUCCESS = "UPDATE_PLANT_SUCCESS";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";

//universal actions
export const fetchStartP = () => {
    return ({type:FETCH_START_PLANTS})
}

export const fetchFailP = (err) => {
    return ({type:FETCH_FAIL_PLANTS, payload:err})
}

//action(s) for all plants below
export const getPlants = (id) => {
    return (dispatch) => {
        dispatch(fetchStartP)
        axiosWithAuth()
        .get(`/users/${id}/plants`)
        .then(res=> dispatch(getPlantsSuccess(res.data)))
        .catch(err=> dispatch(fetchFailP(err)))
    }
}

export const getPlantsSuccess = (plants) => {
    return ({type:GET_PLANTS_SUCCESS, payload:plants})
}

//action(s) for individual plants below
export const fetchPlant = (id) => {
    return (dispatch) => {
        dispatch(fetchStartP)
        axiosWithAuth()
        .get(`/plants/${id}`)
        .then(res=> dispatch(fetchPlantSuccess(res.data)))
        .catch(err=> dispatch(fetchFailP(err)))
    }
}

export const fetchPlantSuccess = (plants) => {
    return ({type:FETCH_PLANT_SUCCESS, payload:plants})
}

//action(s) for creating plants below
export const createPlant = (plant) => {
	return (dispatch) => {
    dispatch(fetchStartP)
	axiosWithAuth()
		.post("/plants", plant)
		.then((createdPlant) => {
			const id = localStorage.getItem("userId");
			axiosWithAuth()
				.post(`https://tt157-backend.herokuapp.com/api/users/${id}`, {
					plant_id: createdPlant.data.id,
				})
				.then((updatedUser) => {
					dispatch({
						type: CREATE_PLANT_SUCCESS,
						payload: updatedUser.data,
					});
				});
		})
		.catch((error) => {
			console.log(error);
			fetchFailP(error)
		});
    }
};

//action(s) for creating plants below
export const updatePlant = (plant) => (dispatch) => {
    dispatch(fetchStartP)
    axiosWithAuth()
		.put(`/plants/${plant.id}`, plant)
		.then((response) => {
			dispatch({
				type: UPDATE_PLANT_SUCCESS,
				payload: response.data,
			})
        })
        .catch((error) => {
			console.log(error);
			dispatch(fetchFailP(error))
        })
    }

//action(s) for deleting plants below
export const deletePlant = (plant) => (dispatch) => {
    dispatch(fetchStartP);
    const id = localStorage.getItem('userId');
    const data = {
        plant_id: plant.id
    }
    axiosWithAuth().delete(`plants/${id}`, {data: data})
    .then((response) => {
        dispatch({
            type: DELETE_PLANT_SUCCESS,
            payload: plant
        });
    })
    .catch((error) => {
        console.log(error);
        dispatch(fetchFailP(error));
    })
}
