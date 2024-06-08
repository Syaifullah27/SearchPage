import Navbar from "../../Components/Navbar/Navbar"
import SearchBar from "../../Components/SearchBar/SearchBar"
import "./style.css"
const SearchPage = (props) => {
    // eslint-disable-next-line react/prop-types
    const {inputValue, setInputValue, selectValue, setSelectValue} = props

    return (
        <div>
            <Navbar />
            <SearchBar 
            inputValue={inputValue} 
            selectValue={selectValue} 
            setSelectValue={setSelectValue} 
            setInputValue={setInputValue}/>
        </div>
    )
}

export default SearchPage