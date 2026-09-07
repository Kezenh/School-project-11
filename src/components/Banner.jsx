import homeBackground from "../assets/homeBackground.png"
import aProposBackground from "../assets/aProposBackground.png"
import "../styles/Banner.css"

function Banner() {

    const aProposAdress = `${process.env.PUBLIC_URL}/apropos`
    let currentAdress = window.location.href

    function isThisAPropos() {
        return (currentAdress === aProposAdress)
    }

    return isThisAPropos() ? (
        <section className="banner">
            <div className="aProposMask">
                <img src={aProposBackground} alt="aPropos background" className="imgBanner" />
            </div>
        </section>
    ) : (
        <section className="banner">
            <p className="homeText">Chez vous, partout et ailleurs</p>
            <div className="mask">
                <img src={homeBackground} alt="home background" className="imgBanner" />
            </div>
        </section>
    )
}

export default Banner