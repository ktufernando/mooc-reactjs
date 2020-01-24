import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import './App.css';
import {Grid, Col, Row} from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';



const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Barcelona,es',
  'Bogota,col',
  'Lima,pe'
];


class App extends Component{

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectionLocation = city => {
    this.setState({city})
    this.props.setCity(city);
  };

  render() {

    const {city} = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
              onSelectedLocation={this.handleSelectionLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city && 
                    <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
