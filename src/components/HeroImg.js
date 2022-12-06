import "./HeroImgStyles.css"
import applesys from '../assets/applesys.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" alt="IntroImg" src={applesys} height={"100%"} width={"100%"} />
            </div>
            <div className="content">
                <p>HI, I'M BARATH.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link className="btn" to='/project'>Project</Link>
                    <Link className="btn btn-light" to='/contact'>contact</Link>
                </div>
            </div>
        </div>
    )
}
export default HeroImg