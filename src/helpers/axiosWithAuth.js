import axios from "axios";

mport axiosWithAuth from "../helpers/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";
export const SIGNUP = "SINGUP";
export const LOGIN = "LOGIN";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const CREATE_PLANT_SUCCESS = "CREATE_PLANT_SUCCESS";
export const UPDATE_PLANT_SUCCESS = "UPDATE_PLANT_SUCCESS";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT = "LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const signup = (signupCredentials, history) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
    // commented out for now, might use in near future?
	// axiosWithAuth().post(
	// 	"",
	// 	signupCredentials,
	// )
	.then((response) => {
		console.log('response', response)
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('userId', response.data.user.id);
		dispatch({
			type: SIGNUP,
			payload: response.data.user
		});
		// history.push('/plants');
	})
	.catch((error) => {
		dispatch({
			type: FETCH_ERROR,
			payload: error.response.data.message,
		});
	});
}

export const login = (loginCredentials) => (dispatch) => {
	console.log('login credentials', loginCredentials)
	dispatch({
		type: START_FETCHING,
	});
	// axiosWithAuth().post('', loginCredentials)
	.then((response) => {
		console.log(response);
		localStorage.setItem('token', response.data.token);

		

		
		localStorage.setItem('userId', userId);
		dispatch({
			type: LOGIN
		});
	})
	.catch((error) => {
		dispatch({
			type: FETCH_ERROR,
			payload: error.response.data.message,
		});
	});
}

export const getUser = (id) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		// .get(`https:// /${id}`)
		.then((response) => {
			dispatch({
				type: FETCHING_USER_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.message,
			});
		});
};

export const updateUser = (user) => (dispatch) => {
	const id = localStorage.getItem("userId");
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.put(`https://tt157-backend.herokuapp.com/api/users/${id}`, user)
		.then((response) => {
			console.log('update user response', response)
			dispatch({
				type: UPDATE_USER_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.message,
			});
		});
};

export const createPlant = (plant) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.post("https://tt157-backend.herokuapp.com/api/plants", plant)
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
			dispatch({
				type: FETCH_ERROR,
				payload: error.message,
			});
		});
};

export const updatePlant = (plant) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.put(`https://tt157-backend.herokuapp.com/api/plants/${plant.id}`, plant)
		.then((response) => {
			dispatch({
				type: UPDATE_PLANT_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.message,
			});
		});
};

export const deletePlant = (plant) => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    const id = localStorage.getItem('userId');
	const data = {
		plant_id: plant.id
	}
    axiosWithAuth().delete(`https://tt157-backend.herokuapp.com/api/users/${id}/plant`, {data: data})
    .then((response) => {
        dispatch({
            type: DELETE_PLANT_SUCCESS,
            payload: plant
        });
    })
    .catch((error) => {
        console.log(error);
        dispatch({
            type: FETCH_ERROR,
            payload: error.message
        });
    })
}

export const logout = () => (dispatch) => {
	localStorage.clear();
	dispatch({
		type: LOGOUT
	});
}

export const clearError = () => (dispatch) => {
	dispatch({
		type: CLEAR_ERROR
	});
}
