import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {

  static get propTypes() {
    return {
      arrowClick: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      pageClick: PropTypes.func.isRequired,
      pages: PropTypes.number.isRequired
    };
  };

  getPagesArr() {
    const { page, pages } = this.props;
    const tempArr = Array(pages)
      .fill(null).map((item, i) => i + 1).filter(number => number === 1 || number === pages || (((page - 3) < number) && (number < (page + 3))));
    if (pages < 5) return tempArr;
    if (page > 4) tempArr.splice(1, 0, '...');
    if (page < (pages - 3)) tempArr.splice((tempArr.length - 1), 0, '...');
    return tempArr;
  };

  getPages(arr) {
    return arr
      .map(page => {
        if (typeof page === 'number') {
          return <li key={page} className={page === this.props.page ? 'pagination-li pagination-li-active' : 'pagination-li'} >
            <button className="pagination-page" onClick={this.props.pageClick(page)}>{page}</button>
          </li>
        } else {
          return <li className='pagination-li' key={page}>{page}</li>
        }
      });
  };

  render() {
    const { pages } = this.props
    return (
      <div className="product-catalogue__pagination">
        {pages > 1 && <div className="page-nav-wrapper">
          <div className="angle-back">
            <button className="angle-back_button" onClick={this.props.arrowClick(-1)} />
          </div>
          <ul className="pagination-ul">
            {this.getPages(this.getPagesArr())}
          </ul>
          <div className="angle-forward">
            <button className="angle-forward_button" onClick={this.props.arrowClick(+1)} />
          </div>
        </div>}
      </div>
    );
  };
};

export default Pagination;