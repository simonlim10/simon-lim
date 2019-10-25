import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Category = ({ categoryName, categoryImage }) => (
  <div className="category">

    <div className="category-icon">
      <img src={categoryImage} />
    </div>

    <div className="category-name">
      <h4>{categoryName}</h4>
    </div>
    
  </div>
)

Category.propTypes = {
  categoryName: PropTypes.string,
  categoryImage: PropTypes.string,
}

Category.defaultProps = {
  categoryName: ``,
}

export default Category
