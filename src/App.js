
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAstronautsThunk } from './store/getAstronauts'

class App extends Component {

  componentDidMount() {
    //make sure data is available on load
    this.props.getAstronautsThunk();
  }

  render() {
    //get value from redux store, which holds the state for our application
    //array of astronauts
    let astros = this.props.astronauts;
    return(
      <div style={{margin: '10px'}}>
        <h3>Astronauts currently in space:</h3>
        {astros.map( (astro, index) => {
          return (
            <li key={index}>
             {astro.name}
             </li>
          )}) 
        }
      </div>
    );
  }
};

function mapDispatch(dispatch) {
  return { 
    getAstronautsThunk: () => dispatch(getAstronautsThunk()) 
  }
}

function mapState(state) {
  return {
    astronauts: state.astronauts
  }
}

export default connect(mapState, mapDispatch)(App)