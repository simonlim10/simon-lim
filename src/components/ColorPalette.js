import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SingleColor from "../components/SingleColor"

class ColorPalette extends React.Component {
  constructor(props) {
    super(props);

    this.renderColorList = this.renderColorList.bind(this);
  }

  renderColorList(key) {
    const study = this.props.colorList[key];
    return (
      <SingleColor colorHex={study.hex}
                  colorName={study.name}
      />
    )
  }

  render() {
    return (
      <div className="inner-palette">
        <div className="inner-palette-header">
          <h3>Color Palette</h3>
        </div>
        <div className="inner-palette-container">

          {Object.keys(this.props.colorList).map(this.renderColorList)}

        </div>
      </div>
    )
  }
}


ColorPalette.propTypes = {
  cardName: PropTypes.string,
}

ColorPalette.defaultProps = {
  cardName: ``,
}

export default ColorPalette
