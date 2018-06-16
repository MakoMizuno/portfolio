import React, { Component } from 'react'
import cx from 'classnames';
import PropTypes from 'prop-types';
import './PortfolioItem.scss';
import PortfolioItemButton from '../PortfolioItemButton/PortfolioItemButton.jsx';

export default class PortfolioItem extends Component {

  state = {
    isHovered: false,
  }
  
  handleHoverIn = () => {
    this.setState({
      isHovered: true
    });
  }

  handleHoverOut = () => {
    this.setState({
      isHovered: false
    });
  }
  render() {
    const { isHovered  } = this.state;
    const { imageUrl, title, categories, id } = this.props;

    return (
      <div className="PorfolioItem" onMouseOver={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>
        <div className="PortfolioItem-image">
          <img src={imageUrl} alt="Global Clock" />
          {
            isHovered && (
              <PortfolioItemButton>
                See Project
              </PortfolioItemButton>
            )
          }
        </div>
        <div className="PortfolioItem-details">
        <h3 className={cx( "PortfolioItem-title",{ "PortfolioItem-title--active" : isHovered })}>{title}</h3>
          <span>
            {categories.map((category) => (
              <span key={category} className="PortfolioItem-category"
              >
                {category}
              </span>
            ))}
          </span>
        </div>
      </div>
    )
  }
}

PortfolioItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array,
};

PortfolioItem.defaultProps = {
  categories: [],
};
