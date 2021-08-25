import { FETCH_START_PLANTS, GET_PLANTS_SUCCESS, FETCH_PLANT_SUCCESS, FETCH_FAIL_PLANTS, CREATE_PLANT_SUCCESS, UPDATE_PLANT_SUCCESS, DELETE_PLANT_SUCCESS } from "../actions/plantActions"

const initialState = {
    plants:[],
    plant:{
        id: "",
        nickname: "",
        species: "",
    },
    fetching:false, 
    error:''
}

export const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START_PLANTS):
            return({
                ...state,fetching:true,error:''
            })
        case(FETCH_FAIL_PLANTS):
            return({
                ...state,fetching:false,error:action.payload
            })
        case(GET_PLANTS_SUCCESS):
            return({
                ...state,plants:action.payload,error:''
            })
        case(FETCH_PLANT_SUCCESS):
            return({
                ...state,plant:action.payload,error:''
            })
        case(CREATE_PLANT_SUCCESS):
            return({
                ...state,plant:action.payload,error:''
            })
        case(UPDATE_PLANT_SUCCESS):
            return({
                ...state,plant:action.payload,error:''
            })
        case(DELETE_PLANT_SUCCESS):
            return({
                ...state,plant:action.payload,error:''
            })
        default:
            return state
    }
}