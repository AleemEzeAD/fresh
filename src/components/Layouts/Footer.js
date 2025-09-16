import '../../styles/style.css';
import '../../styles/responsive.css';
import '../../styles/arabicStyle.css';
import logo from '../../assets/leaf.webp';
import ScrollToTop from '../../js/ScrollToTop';


const Footer = () => {

  return (
    <footer className='no-change'>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 col-sm-6 col-6">
            <div className='d-flex flex-column gap-lg-3 gap-2'>
              <a href="/Home" className='FooterLogo'>
                <h1>Fresh<img rel="preload" as="image" src={logo} alt="small leaf" /></h1>
              </a>
              <p><i className="bi bi-geo-alt-fill"></i>9066 Green Lake Drive Chevy Chase, MD 20815</p>
              <p><i className="bi bi-envelope-fill"></i>Fresh@gmail.com</p>
              <p>
                <i className="bi bi-clock-fill"></i>Mon–Sat: 8:00 am – 4:00pm
              </p>
              <p>
                <i className="bi bi-clock-fill"></i>
                Sun: 9:00 am – 5:00pm
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-sm-2 col-6">
            <div className='d-flex flex-column gap-2'>
              <h6>Useful Links</h6>
              <ul className='d-flex flex-column gap-2'>
                <li><a href="#">Farm & Family</a></li>
                <li><a href="#">Our Butchery</a></li>
                <li><a href="#">Farm Shops</a></li>
                <li><a href="#">Dartmoor Inn</a></li>
                <li><a href="#">Market Garden</a></li>
              </ul>
            </div>
          </div>

          {/* Style Advisor */}
          <div className="col-md-3 col-sm-2 col-6">
            <div className='d-flex flex-column gap-2'>
              <h6>Style Advisor</h6>
              <ul className='d-flex flex-column gap-2'>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Addresses</a></li>
                <li><a href="#">Discount</a></li>
                <li><a href="#">Orders History</a></li>
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div className="col-md-3 col-sm-2 col-6">
            <div className='d-flex flex-column gap-2'>
              <h6>Categories</h6>
              <ul className='d-flex flex-column gap-2'>
                <li><a href="#">Fruits & Vegetables</a></li>
                <li><a href="#">Dairy Products</a></li>
                <li><a href="#">Package Foods</a></li>
                <li><a href="#">Beverage</a></li>
                <li><a href="#">Health & Wellness</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom">
          <div className="text-center">
            <p> &copy; 2025 Fresh All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
