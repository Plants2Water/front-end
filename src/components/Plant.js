import { React, useEffect } from "react";
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import { fetchPlant } from "../actions/plantActions";
import EditPlant from './EditPlant'

const Plant = (props) => {
    const { plant, fetching, error } = props
    const id = plant.id

    useEffect(() => {
        fetchPlant(id)
    },[])


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

            <Link to='/editplant'>Edit Plant</Link>

            <Switch>
                <Route path='/editplant' component={EditPlant} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        plant: state.plant,
        fetching: state.fetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchPlant})(Plant)