import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/arabicStyle.css';
import leftImage from '../assets/index/food-bg.webp';
import rightImage from '../assets/index/rightimage.webp';

const Newsletter = () => {
    return (
        <section className="Newsletter">
            <img rel="preload" as="image" src={leftImage} alt="Left" className="left_img" />
            <div className='container'>
                <div className="content d-flex flex-column">
                    <h2>Subscribe <span>To Our</span> Newsletter</h2>
                    <p>Get the latest updates and offers delivered straight to your inbox.</p>
                    <input type="email" placeholder="Enter your email" />
                    <button className="hover1">Subscribe Now</button>
                </div>
            </div>
            <img rel="preload" as="image" src={rightImage} alt="Right" className="right_img" />
        </section>
    );
};

export default Newsletter;
