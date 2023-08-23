
import productStyles from './aboutProduct.module.css';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Produsul a fost adăugat la favorite!',{ icon: '❤️'});
const addToCartNotify = ()=>toast.success('Produsul a fost adăugat in cos!')

const AboutProduct = () => {
    const location = useLocation();
    const { product } = location.state;
  
    if (!product) {
      return <div>Product not found.</div>;
    }
    return (
      <>
      <div className={productStyles.product_container}>
        <div className={productStyles.title_container}></div>
        <div>{product.name}</div>
        <div></div>
        <div></div>
      </div>
      </>
    );
};

export default AboutProduct;
