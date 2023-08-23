import cardStyles from '../dashboard/dashboardProducts.module.css';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Produsul a fost adăugat la favorite!', { icon: '❤️' });
const addToCartNotify = () => toast.success('Produsul a fost adăugat in cos!')

const ProductCard = ({ product }) => {

    return (
        <div className={cardStyles.main_card}>
            <div className={cardStyles.top_container}>
                <span style={{ display: product.isGenius ? "relative" : "none" }} className={cardStyles.genius_span}>genius</span>
                <img src={product.img}></img>
                <span style={{ display: product.isTopFavourite ? "relative" : "none" }} className={cardStyles.fav_span}>Top Favorite</span>
                <div className={cardStyles.fav_heart}>
                    <button className={cardStyles.heart_btn} onClick={notify}><i className="bi bi-heart"></i></button>
                    <Toaster />
                </div>
            </div>

            <div className={cardStyles.middle_container}>
                <p>{product.title}</p>
                {Array.from({ length: 5 }, (_, i) => (
                    <i key={i}
                        className={`bi ${i < product.stars ? 'bi-star-fill' : 'bi-star'}`} ></i>
                ))}
                &nbsp;
                <span className={cardStyles.small_text}>{product.rating}</span>
                &nbsp;
                <span className={cardStyles.small_text}>({product.reviews})</span>

            </div>
            <div className={cardStyles.bottom_container}>
                <div className={cardStyles.bottom_div}>
                    <div>
                        <span>{Math.floor(product.price)}</span>
                        <sup>{(product.price - Math.floor(product.price)).toFixed(2) * 100}</sup>
                        <span>Lei</span>
                    </div>
                    <button className={cardStyles.cart_btn} onClick={addToCartNotify}>
                        <i className="bi bi-cart3"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
