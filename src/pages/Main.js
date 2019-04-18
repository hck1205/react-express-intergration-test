import React from 'react';
import BeerList from '../components/BeerList';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={"title"}>Beer Dictionary</div>
        <BeerList />
      </React.Fragment>
    )
  }
}

export default Main;