import SearchIcon from '@material-ui/icons/Search'
function SearchForm(){
  return(
    <div className="header-search">
    <input className="header-search-input" type="text" />
    <SearchIcon className="header-search-icon"/>
    </div>

  )
}
export default SearchForm
