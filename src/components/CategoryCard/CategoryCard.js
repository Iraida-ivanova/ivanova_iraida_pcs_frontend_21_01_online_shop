import './CategoryCard.css';
import {Link} from "react-router-dom";

function CategoryCard ({id=0, title='', image='',category}) {

    return (
        <div className='category-card'>
            <div className='category-card__image'>
                <img src={image} alt={'category card'}/>
            </div>
            <Link to={category} className='linkTo'><h2 className='category-card__title'>
                {title}
            </h2></Link>
        </div>
    )
}
export default CategoryCard