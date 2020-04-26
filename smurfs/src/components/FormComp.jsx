// External imports
import React, { useState } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'


const SmurfForm = ( props ) => {

    const initState = { name: '', age: '', height: ''}
    const [allSMURFS, setAllSMURFS] = useState(initState)

    const handleChange = ( e ) => {
        setAllSMURFS({...allSMURFS, [e.target.name]: e.target.value})
    }

    const handleSubmit = ( e )  => {
        e.preventDefault()
        props.addSMURFS( allSMURFS )
        setAllSMURFS( initState )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="text-center"><h2>Add a SMURF</h2></FormGroup>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type='text' id='name' name='name' value={allSMURFS.name} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label for="age">Age:</Label>
                <Input type='number' id='age' name='age' value={allSMURFS.age} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label for="height">Height:</Label>
                <Input type='text' id="height" name='height' value={allSMURFS.height} onChange={handleChange} required />
            </FormGroup>
            <FormGroup className="text-center">
                <Button color="primary">Add SMURF</Button>
            </FormGroup>
        </Form>
    )
}

export default SmurfForm; 