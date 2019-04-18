import React from 'react';
import 'babel-polyfill';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination'
import { browserCheck, urlParam } from '../helper/common'
import defaultImg from '../images/default.png';

class BeerList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      numberOfPages: 0,
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    let page = "";

    if(browserCheck.isIE) {
      page = urlParam("page") ? urlParam("page") : 1;
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      page = urlParams.get('page') ? urlParams.get('page') : 1;
    }

    axios.get(`/api/beers/${page}`).then((res) => {
      if(res.status === 200 && res.data.status === "success") {
        this.setState({
          currentPage: res.data.currentPage,
          numberOfPages: res.data.numberOfPages,
          items: res.data.data,
          isLoaded: true
        })
      }
    })
  }

  getDetailBeerInfo(item) {
    console.log(item);
  };

  render() {
    let beerList = [];
    if(this.state.items.length > 0) {
      beerList = this.state.items.map(item => {

        let imgPath = item.hasOwnProperty('labels') ? item.labels.icon : defaultImg;

        return (
          <li key={item.id} className={"beer-item"} onClick={() => this.getDetailBeerInfo(item)}>
            <div className={"beer-item-img-box"}>
              <img src={imgPath} onError={(e) => e.target.src = defaultImg} width={50} height={50} />
              <div>{item.name}</div>
            </div>
            <div className={"beer-item-short-info-box"}>
              <div>ABV: {item.abv === undefined ? "Not Provided" : item.abv}</div>
              <div>IBU: {item.ibu === undefined ? "Not Provdied" : item.ibu}</div>
            </div>
          </li>
        )
      });
    }


    return (
      <React.Fragment>
        {/*<NavLink to={"/pages"}>Test</NavLink>*/}
        {
          this.state.isLoaded ?
            <React.Fragment>
              <nav className={"beer_list__items"}>
                <ul>
                  { beerList }
                </ul>
              </nav>
              <Pagination
                currentPage = { this.state.currentPage }
                numberOfPages = { this.state.numberOfPages }
                isLoaded = { this.state.isLoaded }
              />
            </React.Fragment> : <div className={"signal"}>{}</div>
        }
      </React.Fragment>
    );
  }
}

export default BeerList;