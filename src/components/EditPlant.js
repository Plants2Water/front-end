import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {link, useHistory, useParams} from 'react-router-dom'
import { getUser } from './../actions/userActions'
import { editPlant } from './../actions/plantActions'
import Nav from './Nav'

const initialPlantValues = [{
    "plant_id": 0,
    "species": "",
    "nickname": "",
    "h2oFrequency": 0,
    "last_watered": "",
    "photo_url": "",
    "notes": "",
    "user_id": 0,
    "created_at": "",
    "updated_at": ""
  }]

const EditPlant = (props) => {
	const { plant } = props
	// const [editingPlant, setEditingPlant] = useState(props.plant)

	const history = useHistory();
	const { isLoading, user, getUser, updatePlant, deletePlant } = props
	const { id } = props
	// const classes = useStyles();

	// const [formErrors, setFormErrors] = useState(initialFormErrors)
	// const [submitDisabled, setSubmitDisabled] = useState(true)


    // useEffect(() => {
	// 	schema.isValid(plant).then((valid) => {
	// 		setSubmitDisabled(!valid);
	// 	});
	// }, [plant])

	const handleChange = (e) => {
		// setPlant({...plant,[e.target.name]: e.target.value})
	}

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
        <div className = 'plantForm' id = 'editPlantFrom'>
			<Nav />
            <h1>Edit Your Plant</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    Plant Name:
                    <input
                        name = 'nickname'
                        value = {plant.nickname}
                        type = 'text'
                        placeholder = 'Plant nickname'
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
                    name = 'h2oFrequency'
                    id = 'h2oFrequency'
                    type = 'text'
                    placeholder = 'How often to water'
                    onChange = {handleChange}
                />
            </label>

            {/* Optional Image */}
            <label>
                <input 
                    name = 'plantImage'
                    id = 'plantImage'
                    type = 'text'
                    placeholder = 'Optional: URL to plant image'
                    onChange = {handleChange}
                />
            </label>
            <button>Submit Changes</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
	return {
		plants: state.plants,
		user_id: state.user_id
	}
}

export default connect (mapStateToProps,{editPlant})(EditPlant)