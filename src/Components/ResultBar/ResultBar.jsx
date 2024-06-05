import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./result.css"
import { Link } from "react-router-dom"

const ResultBar = () => {
    // data API mobil
    const [carData, setCarData] = useState([])

    const { namaMobil, kapasitas } = useParams()

    const [cars, setCars] = useState("")
    const [capacity, setCapacity] = useState("")

    // console.log(namaMobil, kapasitas);
    
    const getCars = async () => {
        const res = await axios.get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${cars}&category=${capacity}&page=1&pageSize=10`)
        setCarData(res.data.cars)
        // console.log(res.data.cars);
        // console.log(cars, capacity);
    }

    
    
    useEffect(() => {
        getCars()
    }, [])
    
    useEffect(() => {
        getCars()
    }, [cars, capacity])
    
    useEffect(() => {
        setCars(namaMobil)
        setCapacity(kapasitas)
    }, [])

    const handleEdit = (e) => {
        e.preventDefault()
        setCars("")
        setCapacity("")

        // window.location.href = `/Result-Page/${cars}/${capacity}`
    }

    const handleInput = (e) => {
        e.preventDefault()
        setCars(e.target.value)
    }

    const handleSelect = (e) => {
        e.preventDefault()
        setCapacity(e.target.value)
    }

    return (
        <>
        <form>
            {/* <p>NAMA MOBIL : {namaMobil}</p> <p>KAPASITAS : {kapasitas}</p> */}
            <div className="container">
            <div className="input">
                <label>Nama Mobil</label>
                <input 
                onChange={handleInput}
                value={cars}
                type="text" 
                placeholder="Masukan Nama Mobil"/>
            </div>
            <div className="input">
                <label>kapasitas</label>
                <select value={capacity} onChange={handleSelect}>
                    <option value="" >Kapasitas</option>
                    <option value="small">2-4</option>
                    <option value="medium">4-6</option>
                    <option value="large">6-8</option>
                </select>
            </div>
            <button onClick={handleEdit}
            type="submit">Edit</button>
            </div>
        </form>

        <div className="container">
            {
                carData.length === 0 && <p>Car Data Not Found</p>
            }
            {carData.map((car) => {
                return (
                    <div className="card" key={car.id}>
                        <img src={car.image} alt={car.name} />
                        <Link to={`/Detail-Page/${car.id}`}>
                            <h2>{car.name}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default ResultBar