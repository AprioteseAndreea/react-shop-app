
import productStyles from './aboutProduct.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

const notify = () => toast('Produsul a fost adăugat la favorite!',{ icon: '❤️'});
const addToCartNotify = ()=>toast.success('Produsul a fost adăugat in cos!')

const AboutProduct = () => {
    const router = useRouter();
    const { id } = router.query;
  
    // const location = useLocation();
    // const { product } = location.state;
  
    // if (!product) {
    //   return <div>Product not found.</div>;
    // }
    return (
      <>
      <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      {/* Add your product detail content here */}
    </div>
      {/* <div className={productStyles.product_container}>
        <div className={productStyles.title_container}></div>
        <div>{product.name}</div>
        <div></div>
        <div></div>
      </div> */}
      </>
    );
};

export default AboutProduct;
