import { useParams } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import "./detail.css"
import { useNavigate } from "react-router-dom"

const DetailPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [detailCars, setDetailCars] = useState({})

    const getCarsById = () =>  {
        axios.get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
        .then((res) => {
            setDetailCars(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCarsById()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Detail Page</h1>
            <button className="back-btn" onClick={() => navigate(-1)}>Kembali</button>
            <div className="detail-card">
                <img src={detailCars.image} />
                <h1>{detailCars.name}</h1>
                <p>Kapasitas : {detailCars.category}</p>
                <p>Harga : {formatRupiah(detailCars.price)} / hari</p>
            </div>

        </div>
    )
}

export default DetailPage




export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number)
}