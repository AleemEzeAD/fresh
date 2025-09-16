import walnut from '../assets/index/walnut.webp';
import kiwi from '../assets/index/kiwi.webp';
import turnip from '../assets/index/turnip.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const sellerProducts = [
    {
        id: 1,
        image: walnut,
        category: 'Health & Wellness',
        title: 'Chukandar Fresh Beets',
        price: 100.00,
        originalPrice: 120.00
    },
    {
        id: 2,
        image: kiwi,
        category: 'Health & Wellness',
        title: 'Kheera Organic Cucumber',
        price: 90.50,
        originalPrice: 110.00
    },
    {
        id: 3,
        image: turnip,
        category: 'Health & Wellness',
        title: 'Lemon Natural Citrus',
        price: 80.30,
        originalPrice: 95.00
    }
];

const Seller = () => {
    return (
        <section className="Seller">
            <div className="container">
                <div className='d-flex flex-column gap-md-3 gap-2 align-items-center text-center'>
                    <h2>Our <span>Best</span> Seller</h2>
                    <p className='desc'>
                        Explore our Best Seller a top-rated, customer-favorite product trusted for its quality, performance, and unbeatable value.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        {sellerProducts.map((item) => (
                            <div className="seller_card d-flex gap-lg-4" key={item.id}>
                                <figure>
                                    <img rel="preload" as="image" src={item.image} alt={item.title} className="seller_image" />
                                </figure>
                                <div className="seller_info">
                                    <p className="seller_category">{item.category}</p>
                                    <h6 className="seller_title">{item.title}</h6>
                                    <div className="Price_con">
                                        <span className="price">${item.price.toFixed(2)}</span>
                                        <span className="old_price">${item.originalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faShoppingBasket} className="cart_icon" />
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6">
                        {sellerProducts.map((item) => (
                            <div className="seller_card d-flex gap-lg-4" key={item.id}>
                                <figure>
                                    <img rel="preload" as="image" src={item.image} alt={item.title} className="seller_image" />
                                </figure>
                                <div className="seller_info">
                                    <p className="seller_category">{item.category}</p>
                                    <h6 className="seller_title">{item.title}</h6>
                                    <div className="Price_con">
                                        <span className="price">${item.price.toFixed(2)}</span>
                                        <span className="old_price">${item.originalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faShoppingBasket} className="cart_icon" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Seller;
