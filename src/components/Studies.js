import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef } from "react"

import StudiesCard from "../components/StudiesCard"

class Studies extends React.Component {
  constructor(props) {
    super(props);

    this.scroller = React.createRef();

    this.onClickLeftscroll = this.onClickLeftscroll.bind(this);
    this.onClickRightscroll = this.onClickRightscroll.bind(this);
    this.renderStudies = this.renderStudies.bind(this);
  }

  onClickLeftscroll() {
    let currentleft = this.scroller.current.scrollLeft;
    this.scroller.current.scrollTo({
        left: currentleft - 690,
        behavior: 'smooth'
      });
  }

  onClickRightscroll() {
    let currentleft = this.scroller.current.scrollLeft;
    this.scroller.current.scrollTo({
        left: currentleft + 690,
        behavior: 'smooth'
      });
  }

  renderStudies(key) {
    const study = this.props.studiesList[key];
    return (
      <StudiesCard cardName={study.name}
                  cardImage={study.image}
      />
    )
  }

  render() {
    return (
      <div className="inner-studies">

        <div className="inner-studies-header">
          <h3 className="with-indicator">
            Studies
            <i className="inner-indicator-right fas fa-arrow-right"></i>
          </h3>
        </div>

        <div className="inner-studies-container">

          <div className="inner-studies-scrollers">

            <div className="inner-studies-left"><div onClick={this.onClickLeftscroll} className="inner-studies-left-button"><i className="fas fa-angle-left"></i></div></div>
            <div className="inner-studies-right"><div onClick={this.onClickRightscroll} className="inner-studies-right-button"><i className="fas fa-angle-right"></i></div></div>

          </div>

          <div className="inner-studies-fullwidth" ref={this.scroller}>
            <div className="inner-studies-content data-simplebar">
              
              {Object.keys(this.props.studiesList).map(this.renderStudies)}

            </div>
          </div>

        </div>

      </div>
    )
  }
}


Studies.propTypes = {
  cardName: PropTypes.string,
}

Studies.defaultProps = {
  cardName: ``,
}

export default Studies
