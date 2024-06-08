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

    

    const handleSubmit = (e) => {
        e.preventDefault()

        window.location.href = `/Result-Page/${inputValue}/${selectValue}`

    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold pt-2">Search Page</h1>
            <div className="container flex justify-center items-center pt-5">
            <div className="input">
                <label className="font-bold">Nama Mobil</label>
                <input className="bg-gray-300 text-black rounded-lg p-2 outline-slate-400"
                value={inputValue}
                onChange={handleInput} 
                type="text" 
                placeholder="Masukan Nama Mobil"/>
            </div>
            <div className="input">
                <label className="font-bold">kapasitas</label>
                <select value={selectValue} onChange={handleSelect} className="h-10 bg-gray-300 text-black rounded-lg p-2 outline-slate-400">
                    <option value="">Kapasitas</option>
                    <option value="small">2-4</option>
                    <option value="medium">4-6</option>
                    <option value="large">6-8</option>
                </select>
            </div>
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-10"
            type="submit">Cari Mobil</button>
            </div>
        </form>
    )
}

export default SearchBar