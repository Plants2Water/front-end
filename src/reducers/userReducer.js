import { START_FETCHING, FETCH_ERROR, FETCHING_USER_SUCCESS, UPDATE_USER_SUCCESS, SIGNUP, LOGIN, LOGOUT } from "../actions/userActions"

const initialState = {
    user:{
        username:'',
        last_name:'',
        first_name:'',
        password:'',
        telephone:'',
        email:''
    },
    fetching:false,
    error:''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case(START_FETCHING):
            return({
                ...state,fetching:true,error:''
            })
        case(FETCH_ERROR):
            return({
                ...state,fetching:false,error:action.payload
            })
        case(FETCHING_USER_SUCCESS):
            return({
                ...state,user:action.payload,error:''
            })
        case(UPDATE_USER_SUCCESS):
            return({
                ...state,user:action.payload,error:''
            })
        case(SIGNUP):
            return({
                ...state,user:action.payload,error:''
            })
        case(LOGIN):
            return({
                ...state,user:action.payload,error:''
            })
        case(LOGOUT):
            return({
                ...state,user:initialState.user,error:''
            })
        default:
            return state
    }
}
