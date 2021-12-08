import './Banner.css';

function Banner ({banner}) {
    return (
        <div className='banner'>
            <img className='banner_img' src={banner.image} alt='Banner'/>
                <div className='banner_text'>
                    <p className='string1'>{banner.text1}</p>
                    <p className='string2'> {banner.text2}</p>
                </div>
        </div>
    )
}
export default Banner