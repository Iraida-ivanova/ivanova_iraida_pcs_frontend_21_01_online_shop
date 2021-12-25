import './Banner.css';
import {Link} from "react-router-dom";

function Banner () {
    return (
        <div className='banner'>
            <img className='banner__img' src='/img/man_in_orange3.png' alt='Banner'/>
            <div className='banner__text'>
                <p className='string1'>НОВАЯ КОЛЛЕКЦИЯ</p>
                <Link to={'men'} className={'linkTo string2'}>Мужчины 2021</Link>
            </div>
        </div>
    )
}
export default Banner