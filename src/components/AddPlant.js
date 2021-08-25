import React, {useState} from 'react'
import { Label } from 'reactstrap'

const AddPlant = (props) => {
    const [plant, setPlant] = useState(initialPlant)

    const handleChange = event => {
        setPlant({
            ...plant,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.AddPlant(plant)
        props.history.push('/dashboard')
    }

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
            <button onSubmit={handleSubmit}>Add Plant</button>
                </h2>
            </form>
        </div>
        
    )
}

export default AddPlant