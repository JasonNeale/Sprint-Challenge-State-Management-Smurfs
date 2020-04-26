// External imports
import React from "react"
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

// Local imports
import AllSmurfsComp from './components/AllSmurfsComp'
import FormComp from './components/FormComp'
import { getSMURFS, addSMURFS } from './redux/actions/index'


const App = ( props ) => {

    return(
        <Container className="App">
            <Row>
                <Col className="full-width horz-center text-center">
                    <img alt="logo" src="/assets/img/logo.png" />
                </Col>
            </Row>

            <Row><Col><hr /></Col></Row>
            
            <Row>
                <Col md="8">
                    <AllSmurfsComp getSMURFS={props.getSMURFS} smurfs={props.smurfs} isFetching={props.isFetching} />
                </Col>
                <Col md="4">
                    <FormComp addSMURFS={props.addSMURFS} />
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = ( state ) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { getSMURFS, addSMURFS }

export default connect( mapStateToProps, mapDispatchToProps )( App )