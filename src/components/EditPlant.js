import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {link, useHistory, useParams} from 'react-router-dom'
import { getUser } from './../actions/userActions'
import { updatePlant } from './../actions/plantActions'
import Nav from './components/nav';

const initialPlant = {
	id: "",
	nickname: "",
	species: "",
	h2o_frequency: "",
	image: "",
}
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

    return (
        <div className = 'editPlantForm' id = 'editPlantFrom'>
			<Nav />
            <h1>Edit Your Plant</h1>
            <h3></h3>
                <form>

                {/* Plant nickname */}
            </form>
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

export default connect (mapStateToProps,{updatePlant, getUser})(EditPlant)