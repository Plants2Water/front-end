import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantActions'
import { Link } from 'react-router-dom'
import Plant from './Plant'
import Nav from './Nav'

const Dashboard = (props) => {  
<<<<<<< HEAD
    console.log('Dashboard props :>> ', props);
    const { plants } = props
=======
    const { plants, user_id } = props
>>>>>>> main

    useEffect(() => {
        props.fetchPlants(user_id)
    },[])

    return(
        <div>
            <Nav />
            {plants.map(plant => 
                <Plant key ={plant.plant_id} plant={plant} user_id={user_id} />)}
            <Link to='/addplant'>Add new plant</Link>
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