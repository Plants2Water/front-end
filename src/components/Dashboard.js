import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantActions'
import { Link, Switch, Route } from 'react-router-dom'
import Plant from './Plant'
import AddPlant from './AddPlant'
import Nav from './Nav'

const Dashboard = (props) => {  
    console.log('Dashboard props :>> ', props);
    const { plants } = props

    useEffect(() => {
        props.fetchPlants(props.user_id)
    },[])

    return(
        <div>
            <Nav />
            {plants.map(plant => 
                <Plant key ={plant.plant_id} plant={plant} user_id={props.user_id} />)}
            <Link to='/addplant'>Add new plant</Link>

            <Switch>
                <Route path='/addplant' component={AddPlant} />
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

export default connect(mapStateToProps, {fetchPlants})(Dashboard)