import axiosWithAuth from '../helpers/axiosWithAuth'

export const START_FETCHING = 'START_FETCHING'
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT = "LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const signup = (signupCredentials, history) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
    axiosWithAuth().post('/api/auth/register',signupCredentials)
	.then(response => {
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('userId', response.data.user.id);
		dispatch({
			type: gitSIGNUP,
			payload: response.data.user
		});
		// history.push('/plants');
	})
	.catch(error => {
		dispatch({
			type: FETCH_ERROR,
			payload: error,
		});
	});
}

//not used right now
export const login = (loginCredentials) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth().post('/api/auth/login', loginCredentials)
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