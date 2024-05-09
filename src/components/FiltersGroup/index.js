import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

const FiltersGroup = props => {
  const renderRatings = () => {
    const {ratingsList} = props
    return ratingsList.map(each => {
      const {activeRatingId, changeRatingId} = props
      const isActive = activeRatingId === each.ratingId
      const changeRating = () => {
        changeRatingId(each.ratingId)
      }

      return (
        <li key={each.ratingId} onClick={changeRating} className="ratings">
          <img
            alt={`rating ${each.ratingId}`}
            className="stars"
            src={each.imageUrl}
          />
          <p className="p">& up</p>
        </li>
      )
    })
  }

  const renderRatingList = () => (
    <div className="rating-container">
      <h1 className="heading2">Rating</h1>
      <ul className="list-container"> {renderRatings()}</ul>
    </div>
  )

  const renderCategories = () => {
    const {categoryOptions} = props
    return categoryOptions.map(each => {
      const {activeCategoryId, changeCategoryId} = props
      const isActive = activeCategoryId === each.categoryId
      const changeRating = () => {
        changeCategoryId(each.categoryId)
      }

      const classes = isActive ? 'active' : ''
      return (
        <li
          key={each.categoryId}
          onClick={changeRating}
          className={`list ${classes}`}
        >
          <p className="names">{each.name}</p>
        </li>
      )
    })
  }

  const renderCategoriesList = () => (
    <div className="category-container">
      <h1 className="heading">Category</h1>
      <ul className="categories">{renderCategories()}</ul>
    </div>
  )

  const renderenterSearch = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const changeSearchInputing = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          onChange={changeSearchInputing}
          placeholder="Search"
          className="inputEl"
          onKeyDown={renderenterSearch}
        />
        <HiOutlineSearch />
      </div>
    )
  }

  const {clearResults} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoriesList()}
      {renderRatingList()}

      <button type="button" onClick={clearResults} className="btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
