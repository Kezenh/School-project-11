import "../styles/Logement.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Chevrons from "../components/Chevron"
import Album from "../components/Album"
import Error from '../pages/Error'

function Logement() {

    const { id } = useParams()
    const [housing, setHousing] = useState({})
    const [datas, setDatas] = useState([])
    const [rating, setRating] = useState([])

    function fetchHousings() {
        fetch(`${process.env.PUBLIC_URL}/datas.json`)
            .then((response) => response.json())
            .then((datas) => {
                setDatas(datas)
            }).catch((error) => {
                console.log("Error", error)
            })
    }

    function createRating() {
        let arr = [false, false, false, false, false]
        for (let i = 0; i < housing?.rating; i++) {
            arr[i] = true
        }
        setRating(arr)
    }

    useEffect(() => {
        fetchHousings()
    }, [])

    useEffect(() => {
        const data = datas.find(data => data.id === id)
        if (data) {
            setHousing(data)
        }
        createRating()
        document.title = `Kasa - ${housing?.title}`
        // eslint-disable-next-line
    }, [datas, housing])

    return (
        <>
            {Object.keys(housing).length > 0 &&
                <div className="logement">
                    <Album pictures={housing?.pictures} />
                    <div className="housingDetails">
                        <div>
                            <p className="housingTitle">{housing?.title}</p>
                            <p className="housingLocation">{housing?.location}</p>
                            <div className="housingTags">
                                {housing?.tags?.map((tag, index) => {
                                    return (
                                        <p className="housingTag" key={index}>{tag}</p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="hostDetails">
                            <div className="host">
                                <div className="hostName">
                                    {housing?.host?.name.split(" ").map((name, index) => {
                                        return (
                                            <p className="hostNameText" key={index}>{name}</p>
                                        )
                                    })}
                                </div>
                                <img className="hostPicture" src={housing?.host?.picture} alt="host" />
                            </div>
                            <div>
                                {rating.map((star, index) => {
                                    return (
                                        star ? <svg className="star" key={index} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" /></svg>
                                            :
                                            <svg className="star" key={index} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3" /></svg>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="housingBox">
                        <section className="housingDecription">
                            <div className="housingDecriptionHeader" >
                                <p className="housingDecriptionTitle">Description</p>
                                <Chevrons number="1" />
                            </div>
                            <p id="valueDescription1" className="housingDecriptionText">{housing?.description}</p>
                        </section>
                        <section className="housingDecription">
                            <div className="housingDecriptionHeader" >
                                <p className="housingDecriptionTitle">Équipements</p>
                                <Chevrons number="2" />
                            </div>
                            <div id="valueDescription2" className="housingDecriptionText">
                                {housing?.equipments?.map((equipment, index) => {
                                    return (
                                        <p className="equipmentText" key={index}>{equipment}</p>
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                </div>
            }
            {Object.keys(housing).length === 0 &&
                <Error />
            }
        </>
    )
}

export default Logement