import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Gallery.css"

function Gallery() {

    const [datas, setDatas] = useState([])

    function fetchHousings() {
        fetch(`${process.env.PUBLIC_URL}/datas.json`)
            .then((response) => response.json())
            .then((datas) => {
                setDatas(datas)
            }).catch((error) => {
                console.log("Error", error)
            })
    }

    useEffect(() => {
        fetchHousings()
    }, [])

    return (
        <section className="gallery">
            {datas?.map((data, index) => {
                return (
                    <Link className="noTextDeco" key={index} to={`/logement/${data.id}`}>
                        <div className="gradientMask">
                            <div className="housing">
                                <p className="locationName">{data.title}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}

export default Gallery