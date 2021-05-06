import axios from 'axios';
import React, { Component } from 'react';
import { Button, Form, Image } from 'react-bootstrap';

class NewInpectionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            jobCardNumber: "",
            aircraftRegistrationNumber:"",
            startStationNumber:"",
            endStationNumber:"",
            buttockNumber :""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }


    handleSubmit(event) {
        console.log(this.state);
        axios.post('http://localhost:5000/create', {
            card_number: this.state.jobCardNumber,
            aircraft_number: this.state.aircraftRegistrationNumber,
            start: this.state.startStationNumber,
            end: this.state.endStationNumber,
            buttock: this.state.buttockNumber
        }).then((res) => {
            const data = res.data
            const result = data.result
            console.log("Backend Received new Inspection: ", result)
        })
        event.preventDefault();  
    }

    render(){
        return(
            <div>
                <Form>
                    <h1>Create New inspection Page</h1>
                    <Form.Group     controlId="formJobCardNumber">
                    <Form.Control 
                        type="text" 
                        name="jobCardNumber"
                        placeholder="Job Card Number"
                        onChange={this.handleChange}/>
                     </Form.Group>

                    <Form.Group controlId="formAircraftRegistrationNumber">
                    <Form.Control 
                        type="text" 
                        name="aircraftRegistrationNumber"
                        placeholder="Aircraft Registration Number"
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formStartStationNumber">
                    <Form.Control 
                        type="text" 
                        name="startStationNumber"
                        placeholder="Start Station Number"
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formEndStationNumber">
                    <Form.Control 
                        type="text" 
                        name="endStationNumber"
                        placeholder="End Station Number"
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formButtockNumber">
                    <Form.Control 
                        type="text" 
                        name ="buttockNumber"
                        placeholder="Buttock Number"
                        onChange={this.handleChange}/>
                    </Form.Group>
                    <Button onClick={this.handleSubmit} variant="primary" type="submit">
                    Submit
                    </Button>
            </Form>; 
            </div>
        )
    }

}

export default NewInpectionForm

