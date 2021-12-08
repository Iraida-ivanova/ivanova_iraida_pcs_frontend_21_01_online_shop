import './CategoryCard.css';


function CategoryCard ({id=0, title='', image=''}) {

    return (
        <div className='category-card'>
            <div className='category-card_image'>
                <img src={image} alt={'category card'}/>
            </div>
            <h2 className='category-card_title'>
                {title}
            </h2>

        </div>
    )
}
export default CategoryCard