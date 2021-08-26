import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPlants } from '../actions/plantActions'
import { Link, Switch, Route } from 'react-router-dom'
import Plant from './Plant'
import AddPlant from './AddPlant'
import Nav from './components/nav';

const Dashboard = (props) => {  
    const { plants, fetching, error } = props

    useEffect(() => {
        props.getPlants()
    },[])

    return(
        <div>
            <Nav />
            {props.plants.map(plant => 
                <Plant plant={plant} />)}
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
        fetching: state.fetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getPlants})(Dashboard)