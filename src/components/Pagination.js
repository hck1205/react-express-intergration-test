import React from 'react';
import { NavLink } from 'react-router-dom';

class Pagination extends React.Component {

  constructor(props) {
    super(props);
  }

  getPageNumbers() {
    const numberOfPages = this.props.numberOfPages;
    const pageNum = Math.ceil(this.props.currentPage / 10);

    let startPageNum = ((pageNum - 1) * 10) + 1;
    let endPageNum = pageNum * 10;
    let pageArr = [];

    for(let i = startPageNum; i <= endPageNum; i++) {
      pageArr.push(i);
      if(i === numberOfPages) break;
    }

    return pageArr.map(num => {
       return <li key={num} className={"page__number__list-item"}>{num}</li>
     });

  }

  componentDidMount() {

  }

  render() {

    let pageNumList = this.getPageNumbers();
    console.log(this.props.isLoaded)
    if(this.props.isLoaded) {
      return (
        <div className={"pagination-box"}>
          <nav className={"page_number__items"}>
            <ul>
              <li key={"prev"} className={"page__number__list-item prev"}> {"<"} </li>
              { pageNumList }
              <li key={"next"} className={"page__number__list-item next"}> {">"} </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return(
        <React.Fragment>{}</React.Fragment>
      )
    }

  }
}

export default Pagination;