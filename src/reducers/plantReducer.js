import { ADD_PLANT, EDIT_PLANT, DELETE_PLANT, FETCH_START, FETCH_FAIL, FETCH_SUCCESS, SET_ERROR } from "../actions/plantActions"
import axiosWithAuth from "../helpers/axiosWithAuth"

const initialState = {
    plants:[{}],
    plant:{},
    fetching:false, 
    error:'',
    user_id:0
}

const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,fetching:true
            })
        case(FETCH_FAIL):
            return({
                ...state,fetching:false,error:action.payload
            })
        case(FETCH_SUCCESS):
            return({
                ...state,plants:action.payload,fetching:false
            })
        case(ADD_PLANT):
        	axiosWithAuth()
            .post("/plants", action.payload)
            .then(res => {
                console.log(res)
                axiosWithAuth()
                    .get(`/users/${state.user_id}/plants`)
                    .then(res => {
                        console.log('updated plant database')
                        return({...state,
                        fetching:false,
                        plants: res.data
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => console.log(error));

            return({
                ...state,plants:[...state.plants, action.payload]
            })
        case(EDIT_PLANT):
            axiosWithAuth()
            .put(`/plants/${action.plant_id}`, action.payload)
            .then(res => console.log(res))
            .catch(error => console.log(error));

            return({
                ...state,plants:state.plants.filter(plant => plant.plant_id !== action.payload.plant_id)
            })
        case(DELETE_PLANT):
            axiosWithAuth().delete(`plants/${action.payload}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    
            return({
                ...state,plants:state.plants.filter(plant => plant.plant_id !== action.payload)
            })
        case(SET_ERROR):
            return({
                ...state, error: action.payload
            })    
        default:
            return state
    }
}

export default plantReducer