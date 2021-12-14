import './Banner.css';
import {Link} from "react-router-dom";

function Banner ({banner}) {
    return (
        <div className='banner'>
            <img className='banner__img' src={banner.image} alt='Banner'/>
            <div className='banner__text'>
                <p className='string1'>{banner.string1}</p>
                <Link to={'men'} className={'linkTo string2'}>{banner.string2}</Link>
            </div>
        </div>
    )
}
export default Banner