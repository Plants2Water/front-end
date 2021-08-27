import { React } from "react";
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { deletePlant } from "../actions/plantActions";
import EditPlant from './EditPlant'

const Plant = (props) => {
    const { plant } = props
    const { push } = useHistory()
    const id = plant.id

    // const handleEdit = (id) => {
    //     push(`/editplant/${id}`)
    // }
    
    const handleDelete = (id) => {
        props.deletePlant(id)
    }

    return (
        <div>
            <h2>{plant.nickname}</h2>
            <img src={plant.photo_url} alt='this species of plant' />
            <h3>Plant Details:</h3>
            <ul>
                <li>Species Name: {plant.species}</li>
                <li>Watering Frequency: {plant.h2ofrequency}</li>
                <li>Notes: {plant.notes}</li>
            </ul>

            <button onClick={() => {handleDelete(id)}}>Delete</button>
            <Link to='/editplant'>Edit Plant</Link>

            <Switch>
                <Route path='/editplant'>
                    <EditPlant user_id={props.user_id} plant={plant}/>
                </Route>
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants,
        user_id: state.user_id
    }
}

export default connect(mapStateToProps,{deletePlant})(Plant)