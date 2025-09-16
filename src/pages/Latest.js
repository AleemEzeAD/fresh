import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/arabicStyle.css';
// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEye,
    faHeart,
    faCodeBranch,
    faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
// Images
import lemon from '../assets/index/lemon.webp';
import cucumber from '../assets/index/cucumber.webp';
import beetroot from '../assets/index/beetroot.webp';

const latestProducts = [
    {
        id: 1,
        title: 'Fresh Beetroot',
        category: 'Root Vegetable',
        sub_title: 'Nutritious and earthy beetroot perfect for salads, juices, and cooking.',
        price: 45.0,
        originalPrice: 60.0,
        image: beetroot,
    },
    {
        id: 2,
        title: 'Green Cucumber',
        category: 'Vegetables',
        sub_title: 'Crisp and hydrating cucumber for a refreshing addition to your meals.',
        price: 30.0,
        originalPrice: 40.0,
        image: cucumber,
    },
    {
        id: 3,
        title: 'Juicy Lemons',
        category: 'Citrus Fruits',
        sub_title: 'Fresh and tangy lemons, rich in Vitamin C, perfect for drinks and cooking.',
        price: 25.0,
        originalPrice: 35.0,
        image: lemon,
    },
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

const Latest = () => {
    return (
        <section className="Latest">
            <div className="container">
                <div className="d-flex flex-column gap-md-3 gap-2 align-items-center text-center">
                    <h2>Latest <span>Products</span></h2>
                    <p className="desc">
                        Stay ahead of the trend with our freshly stocked latest arrivals — high quality, great taste, and seasonal freshness you can't miss.
                    </p>
                </div>
                <div className="row">
                    {latestProducts.map((item) => (
                        <div className="col-md-4" key={item.id}>
                            <div className="prod_box d-flex flex-column gap-2 h-100">
                                <div className="prod_img position-relative">
                                    <img rel="preload" as="image" src={item.image} alt={item.title} className="img-fluid" />
                                    <div className="prod_icons position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
                                        <FontAwesomeIcon icon={faEye} onClick={() => handleView(item)} title="View Product" />
                                        <FontAwesomeIcon icon={faHeart} onClick={() => handleWishlist(item)} title="Add to Wishlist" />
                                        <FontAwesomeIcon icon={faCodeBranch} onClick={() => handleCompare(item)} title="Compare" />
                                    </div>
                                </div>
                                <div className="prod_details d-flex flex-column gap-2">
                                    <p className="prod_category mb-0 text-muted">{item.category}</p>
                                    <h5 className="prod_title">{item.title}</h5>
                                    <p className="sub_title text-muted">{item.sub_title}</p>
                                    <div className="prod_price d-flex align-items-center gap-2">
                                        <span className="price fw-bold text-success">${item.price.toFixed(2)}</span>
                                        <span className="old_price text-decoration-line-through text-muted">${item.originalPrice.toFixed(2)}</span>
                                        <FontAwesomeIcon icon={faShoppingBasket} className="cart_icon ms-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Latest;
