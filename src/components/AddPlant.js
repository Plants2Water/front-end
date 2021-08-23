import React, {useState, useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import { Label } from 'reactstrap'

const initialPlant = {
    id: '',
    nickname:'',
    h20_frequency:'',
    image: ''
}

const AddPlant = (props) => {
    const [plant, setPlant] = useState(initialPlant)
    const history = useHistory()
    const {isLoading} = props
   
    const classes = useStyles()
    const [submitDisabled, setDubmitDiabled] = useState(true)

    const handleChange = event => {
        setPlant({
            ...plant,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.cretatePlant(plant)
        history.push('/plants')
    }

    useEffect(() => {
        SVGPathSegCurvetoCubicSmoothAbs.isValid(plant).then((valid) => {
            setSubmitDisabled(!valid)
        })
    }, [plant])

    return (
        <div className = 'addPlantForm' id = 'addPlantForm'>
            <form>
                <h1>About Your Plant</h1>
                <h2>

            {/* PLANT NAME(NICKNAME) */}
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
                        onChange = {handleSubmit}
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
                    onChange = {handleSubmit}
                />
            </label>

            {/* Optional Image */}
            <Label>
                <input 
                    name = 'plantImage'
                    id = 'plantImage'
                    type = 'text'
                    placeholder = 'Optional: URL to plant image'
                    onChange = {handleSubmit}
                />
            </Label>
                </h2>
            </form>
        </div>
        
    )
}

export default AddPlant