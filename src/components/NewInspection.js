import React, { Component } from 'react';
import { Button, Form, Image } from 'react-bootstrap';

class NewInpectionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            jobCardNumber: "",
            aircraftRegistrationNumber:"",
            startStationNumber:"",
            EndStationNumber:"",
            buttockNumber :""
        }
    }

    handleSubmit() {
        console.log(this.state);
        console.log('Submitted the form')
    }

    render(){
        return(
            <div>
                <Form>
                    <h1>Create New inspection Page</h1>
                    <Form.Group     controlId="formJobCardNumber">
                    <Form.Control 
                        type="text" 
                        placeholder="Job Card Number" />
                     </Form.Group>

                    <Form.Group controlId="formAircraftRegistrationNumber">
                    <Form.Control 
                        type="text" 
                        placeholder="Aircraft Registration Number" />
                    </Form.Group>

                    <Form.Group controlId="formStartStationNumber">
                    <Form.Control 
                        type="text" 
                        placeholder="Start Station Number" />
                    </Form.Group>

                    <Form.Group controlId="formEndStationNumber">
                    <Form.Control 
                        type="text" 
                        placeholder="End Station Number" />
                    </Form.Group>

                    <Form.Group controlId="formButtockNumber">
                    <Form.Control 
                        type="text" 
                        placeholder="Buttock Number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
            </Form>; 
            </div>
        )
    }

}

export default NewInpectionForm

