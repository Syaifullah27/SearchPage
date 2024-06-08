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
    const [page, setPage] = useState(1)

    // console.log(namaMobil, kapasitas);
    
    const getCars = async () => {
        const res = await axios.get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${cars}&category=${capacity}&page=${page}&pageSize=10`)
        setCarData(res.data.cars)
        // console.log(res.data.cars);
        // console.log(cars, capacity);
    }

    useEffect(() => {
        getCars()
    }, [cars, capacity, page])
    
    useEffect(() => {
        getCars()
    }, [])

    
    // useEffect(() => {
    //     if(cars !== "" && capacity !== ""){
    //         getCars()
    //     }
    //     else{
    //         getCars()
    //     }
    // }, [cars, capacity])
    
    useEffect(() => {
        setCars(namaMobil)
        setCapacity(kapasitas)
    }, [])

    const handleEdit = (e) => {
        e.preventDefault()
        setCars("")
        setCapacity("")
        // if(cars.length === 0 || capacity.length === 0){
        //     alert("Masukan Nama Mobil dan Kapasitas")
        // } else{
        //     window.location.href = `/Result-Page/${cars}/${capacity}`
        // }
    }

    const handleInput = (e) => {
        e.preventDefault()
        setCars(e.target.value)
    }

    const handleSelect = (e) => {
        e.preventDefault()
        setCapacity(e.target.value)
    }


    const scroolToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleNextPage = () => {
        setPage(page + 1);
        scroolToTop();
    }
    const handlePrevPage = () => {
        setPage(page - 1);
        scroolToTop();
    }





    return (
        <div className="max-w-7xl pb-20">
        <form className="flex justify-center items-center flex-col ">
        <h1 className="text-3xl font-bold pt-4">Result Page</h1>
            {/* <p>NAMA MOBIL : {namaMobil}</p> <p>KAPASITAS : {kapasitas}</p> */}
            <div className="container pb-4 pl-4 ">
            <div className="input">
                <label className="font-bold">Nama Mobil</label>
                <input className="bg-gray-300 text-black rounded-lg p-2 outline-slate-400"
                onChange={handleInput}
                value={cars}
                type="text" 
                placeholder="Masukan Nama Mobil"/>
            </div>
            <div className="input">
                <label className="font-bold">kapasitas</label>
                <select value={capacity} onChange={handleSelect} className="h-10 bg-gray-300 text-black rounded-lg p-2 outline-slate-400">
                    <option value="" >Kapasitas</option>
                    <option value="small">2-4</option>
                    <option value="medium">4-6</option>
                    <option value="large">6-8</option>
                </select>
            </div>
            <button className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-10"
            onClick={handleEdit}
            type="submit">Edit</button>
            </div>
        </form>

        <div className="pl-4 flex items-center flex-wrap gap-5 ">
            {
                carData.length === 0 && <p>Car Data Not Found</p>
            }
            {carData.map((car) => {
                return (
                    <div className="shadow-xl rounded-md overflow-hidden" key={car.id}>
                        <img src={car.image} alt={car.name} className="w-full h-52 w-56"/>
                        <Link to={`/Detail-Page/${car.id}`} className="flex justify-center p-4">
                            <h2 className="text-center font-bold">{car.name}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
            {
                carData.length > 0 && (
                    <div className="flex justify-center mt-10 gap-5">
                    <button className="font-bold text-xl underline"
                    onClick={handlePrevPage} disabled={page === 1}>
                        Prev
                    </button>
                    <span className="font-bold text-3xl">{page}</span>
                    <button className="font-bold text-xl underline"
                    onClick={handleNextPage} disabled={carData.length < 9}>
                        Next
                    </button>
                </div>
                )
            }
        </div>
    )
}

export default ResultBar