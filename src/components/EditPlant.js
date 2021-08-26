import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {link, useHistory, useParams} from 'react-router-dom'
import { getUser } from './../actions/userActions'
import { updatePlant, deletePlant } from './../actions/plantActions'
import Nav from './Nav'

const EditPlant = (props) => {
	const { plant, fetching, error } = props
	const history = useHistory();
	const { isLoading, user, getUser, updatePlant } = props
	const { id } = useParams();
	const classes = useStyles();

	const [formErrors, setFormErrors] = useState(initialFormErrors)
	const [submitDisabled, setSubmitDisabled] = useState(true)

	useEffect(() => {
		if (!user) {
			getUser(localStorage.getItem("userId"))
		} else {
			const plantToEdit = user.plants.find(
				(plant) => String(plant.id) === String(id),
			);
			setPlant(plantToEdit)
		}
	}, [user, getUser, setPlant, id])

    useEffect(() => {
		schema.isValid(plant).then((valid) => {
			setSubmitDisabled(!valid);
		});
	}, [plant])

    const handleSubmit = (event) => {
		event.preventDefault();
		updatePlant(plant);
		history.push();
	}

	const handleDelete = (e) => {
		e.preventDefault()
		deletePlant(plant.id)
		history.push()
	}

    return (
        <div className = 'editPlantForm' id = 'editPlantFrom'>
			<Nav />
            <h1>Edit Your Plant</h1>
            <form>
                <label >
                    Plant Name:
                    <input
                        name = 'plantName'
                        id = 'plantName'
                        type = 'text'
                        placeholder = 'Please name this plant'
                        onChange = {handleChange}
                    />
                </label>

            {/* PLANT SPECIES */}
                <label>
                    Species:
                    <input
                        name = 'species'
                        id = 'species'
                        type = 'text'
                        placeholder = 'Plant Species'
                        onChange = {handleChange}
                    />
                </label>

            {/* H20 FREQUENCY */}
            <label>
                Water Frequency:
                <input
                    name = 'h20Frequency'
                    id = 'h20Frequency'
                    type = 'text'
                    placeholder = 'How often to water'
                    onChange = {handleChange}
                />
            </label>

            {/* Optional Image */}
            <Label>
                <input 
                    name = 'plantImage'
                    id = 'plantImage'
                    type = 'text'
                    placeholder = 'Optional: URL to plant image'
                    onChange = {handleChange}
                />
            </Label>
            <button onSubmit={handleSubmit}>Submit Changes</button>
            </form>

			<button onClick={handleDelete}>Delete plant</button>
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

export default connect (mapStateToProps,{updatePlant, getUser, deletePlant})(EditPlant)