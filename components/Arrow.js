import down from '../img/down-arrow.png'
import './Arrow.css'

const arrow = () => {

    return<>
        <a href="#portfolio"><img src={down} alt="View Projects" className="arrow-down " id="arrow-down" title="See more"/></a>

    
    </>
}

export default arrow