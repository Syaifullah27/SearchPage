// import { useHistory } from 'react-router-dom'

const SearchBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const {inputValue, setInputValue, selectValue, setSelectValue} = props

    const handleInput = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const handleSelect = (e) => {
        e.preventDefault()
        setSelectValue(e.target.value)

    }

    // const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `/Result-Page/${inputValue}/${selectValue}`

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
            <div className="input">
                <label>Nama Mobil</label>
                <input 
                value={inputValue}
                onChange={handleInput} 
                type="text" 
                placeholder="Masukan Nama Mobil"/>
            </div>
            <div className="input">
                <label>kapasitas</label>
                <select value={selectValue} onChange={handleSelect}>
                    <option value="">Kapasitas</option>
                    <option value="small">2-4</option>
                    <option value="medium">4-6</option>
                    <option value="large">6-8</option>
                </select>
            </div>
            <button 
            type="submit">Cari Mobil</button>
            </div>
        </form>
    )
}

export default SearchBar