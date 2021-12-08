import CategoryCard from "../CategoryCard/CategoryCard";
import './CategoryCardList.css'

function CategoryCardList({categoryCardList}) {
    return (
        <div className='category-card-list' >
            {
                categoryCardList.map(item => {
                        return (
                            <div className='category-card-list_item' key={item.id}>
                                <CategoryCard id={item.id}
                                             title={item.title}
                                             image={item.image}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default CategoryCardList
