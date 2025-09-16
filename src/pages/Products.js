import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/arabicStyle.css';
// font awesome icons imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEye,
    faHeart,
    faCodeBranch,
    faShoppingBasket
} from '@fortawesome/free-solid-svg-icons';

// all useable images imported
import shimla from '../assets/index/shimla.webp';
import guava from '../assets/index/guava.webp';
import strawberry from '../assets/index/storbery.webp';
import apple from '../assets/index/apple.webp';
import mangoes from '../assets/index/mangoes.webp';
import green from '../assets/index/green.webp';

// swipper js imported 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// create all components like image title sub title desc icons etc
const products = [
    {
        id: 1,
        title: 'Synergistic Bronze Bench',
        category: 'Health & Veg',
        sub_title: 'A stylish and durable bronze-finished bench that adds elegance to any space.',
        price: 120.3,
        originalPrice: 140.5,
        image: shimla,
    },
    {
        id: 2,
        title: 'Organic Guava Basket',
        category: 'Fruit & Health',
        sub_title: 'A fresh and flavorful basket of organic guavas, perfect for a healthy lifestyle.',
        price: 98.0,
        originalPrice: 110.0,
        image: guava,
    },
    {
        id: 3,
        title: 'Fresh Strawberry Pack',
        category: 'Fruit & Freshness',
        sub_title: 'A delightful pack of fresh strawberries, bursting with flavor and freshness.',
        price: 75.5,
        originalPrice: 85.0,
        image: strawberry,
    },
    {
        id: 4,
        title: 'Crisp Red Apples Bag',
        category: 'Fruit & Freshness',
        sub_title: 'Juicy and crunchy red apples packed for perfect daily snacking.',
        price: 68.0,
        originalPrice: 78.0,
        image: apple,
    },
    {
        id: 5,
        title: 'Organic Carrot Bundle',
        category: 'Vegetables & Greens',
        sub_title: 'Naturally grown carrots rich in flavor, perfect for healthy meals.',
        price: 52.5,
        originalPrice: 60.0,
        image: green,
    },
    {
        id: 6,
        title: 'Premium Mango Delight',
        category: 'Tropical Fruits',
        sub_title: 'A handpicked selection of ripe mangoes, sweet and full of aroma.',
        price: 95.0,
        originalPrice: 110.0,
        image: mangoes,
    }
];

const handleView = (product) => {
    alert(`Viewing: ${product.title}`);
};

const handleWishlist = (product) => {
    alert(`Added to Wishlist: ${product.title}`);
};

const handleCompare = (product) => {
    alert(`Added to Compare: ${product.title}`);
};

const Products = () => {
    return (
        <section className="Products no-change">
            <div className="container">
                <div className='d-flex flex-column gap-md-3 gap-2 align-items-center text-center'>
                    <h2>Top <span>Products</span></h2>
                    <p className='desc'>From everyday essentials to premium picks, these bestsellers are trusted, reviewed, and highly recommended by our happy customers — discover what makes them special.</p>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        520: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="prod_box d-flex flex-column gap-2">
                                <div className="prod_img">
                                    <img rel="preload" as="image" src={item.image} alt={item.title} />
                                    <div className="prod_icons">
                                        <FontAwesomeIcon icon={faEye} onClick={() => handleView(item)} title="View Product" />
                                        <FontAwesomeIcon icon={faHeart} onClick={() => handleWishlist(item)} title="Add to Wishlist" />
                                        <FontAwesomeIcon icon={faCodeBranch} onClick={() => handleCompare(item)} title="Compare" />
                                    </div>
                                </div>
                                <div className="prod_details d-flex flex-column gap-2 h-100">
                                    <p className="prod_category">{item.category}</p>
                                    <h5 className="prod_title">{item.title}</h5>
                                    <p className="sub_title">{item.sub_title}</p>
                                    <div className="prod_price">
                                        <span className="price">${item.price.toFixed(2)}</span>
                                        <span className="old_price">${item.originalPrice.toFixed(2)}</span>
                                        <FontAwesomeIcon icon={faShoppingBasket} className="cart_icon" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Products;
