import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/arabicStyle.css';
import hero from '../assets/index/vagies.webp';


// src/pages/Home.js
function Hero() {
  return (
    <section className="Hero">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-6'>
            <div className='d-flex flex-column gap-md-3 gap-2 align-items-md-start align-items-center text-md-start text-center'>
              <h2><span>Blessed</span> be the Fruit</h2>
              <h3>Grown with Care, Delivered with Quality</h3>
              <p>We believe in working with acredited farmers to provide you with the freshest, highest quality fruits.</p>
              <div className='w-100 mt-4'>
                <a href="#" className="hover1">Shop Now</a>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-6'>
            <figure>
              <img rel="preload" as="image" src={hero} alt="Hero Vagies" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
